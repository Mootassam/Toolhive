"use client";
// Browser-only helpers shared by the image and PDF tools. Nothing here uploads anything.
import type { OutType } from "./tools";

export const MIME: Record<OutType, string> = { jpeg: "image/jpeg", png: "image/png", webp: "image/webp" };
export const EXT: Record<OutType, string> = { jpeg: "jpg", png: "png", webp: "webp" };

export function isHeic(f: File) {
  return /\.(heic|heif)$/i.test(f.name) || /image\/hei[cf]/i.test(f.type);
}
export function isPdf(f: File) {
  return f.type === "application/pdf" || /\.pdf$/i.test(f.name);
}

export function formatBytes(n: number) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(n < 10240 ? 1 : 0)} KB`;
  return `${(n / 1024 / 1024).toFixed(2)} MB`;
}

export function baseName(name: string) {
  return (name.replace(/\.[^.]+$/, "") || "file").replace(/[^\w\-. ]+/g, "-").slice(0, 80);
}

/** Type of the original file, used to keep the same format when compressing / resizing. */
export function typeOf(f: File): OutType {
  if (/png/i.test(f.type) || /\.png$/i.test(f.name)) return "png";
  if (/webp/i.test(f.type) || /\.webp$/i.test(f.name)) return "webp";
  return "jpeg";
}

/** Loads any image the browser can read, plus iPhone HEIC/HEIF (decoded on the device). */
export async function loadImage(f: File | Blob): Promise<HTMLImageElement> {
  let blob: Blob = f;
  if (f instanceof File && isHeic(f)) {
    // real HEIF files start with an "ftyp" box and a HEIF brand; reject anything else at once
    const head = new Uint8Array(await f.slice(0, 12).arrayBuffer());
    const box = String.fromCharCode(...head.slice(4, 8));
    const brand = String.fromCharCode(...head.slice(8, 12));
    if (box !== "ftyp" || !/^(heic|heix|heim|heis|hevc|hevx|hevm|hevs|mif1|msf1|avif)$/.test(brand)) throw new Error("not a HEIF file");
    const { default: heic2any } = await import("heic2any");
    const out = await heic2any({ blob: f, toType: "image/png" });
    blob = Array.isArray(out) ? out[0] : out;
  }
  const url = URL.createObjectURL(blob);
  try {
    const img = new Image();
    img.decoding = "async";
    img.src = url;
    await img.decode();
    return img;
  } finally {
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}

export function hasAlpha(img: HTMLImageElement): boolean {
  const s = 64;
  const c = document.createElement("canvas");
  c.width = s;
  c.height = s;
  const ctx = c.getContext("2d", { willReadFrequently: true })!;
  ctx.drawImage(img, 0, 0, s, s);
  const d = ctx.getImageData(0, 0, s, s).data;
  for (let i = 3; i < d.length; i += 4) if (d[i] < 250) return true;
  return false;
}

/** Draws the image at the given size and encodes it. JPG gets a white background (no transparency). */
export function encode(img: HTMLImageElement | HTMLCanvasElement, w: number, h: number, type: OutType, quality = 0.9, bg = "#ffffff"): Promise<Blob> {
  const c = document.createElement("canvas");
  c.width = Math.max(1, Math.round(w));
  c.height = Math.max(1, Math.round(h));
  const ctx = c.getContext("2d")!;
  if (type === "jpeg") {
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, c.width, c.height);
  }
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(img, 0, 0, c.width, c.height);
  // some browsers (older Safari) can't write WebP and silently return PNG — treat that as a failure
  return new Promise((res, rej) => c.toBlob((b) => (b && b.type === MIME[type] ? res(b) : rej(new Error("encode failed"))), MIME[type], type === "png" ? undefined : quality));
}

export function imgSize(img: HTMLImageElement) {
  return { w: img.naturalWidth || img.width, h: img.naturalHeight || img.height };
}

export async function zipAndDownload(items: { name: string; blob: Blob }[], zipName: string, download: (b: Blob, n: string) => void) {
  const { default: JSZip } = await import("jszip");
  const zip = new JSZip();
  const used = new Set<string>();
  for (const it of items) {
    let n = it.name;
    let k = 1;
    while (used.has(n)) n = it.name.replace(/(\.[^.]+)?$/, `-${k++}$1`);
    used.add(n);
    zip.file(n, it.blob);
  }
  download(await zip.generateAsync({ type: "blob" }), zipName);
}

/** Lazy pdf.js with its worker served from /public (copied there by the prebuild script). */
export async function getPdfjs() {
  const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
  pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
  return pdfjs;
}

/** "1-3, 5, 8-" → zero-based page indexes, in order, without duplicates. */
export function parseRanges(s: string, total: number): number[] {
  const out: number[] = [];
  const seen = new Set<number>();
  for (const part of s.split(/[,;\s]+/).filter(Boolean)) {
    const m = /^(\d*)\s*-\s*(\d*)$/.exec(part);
    let a: number, b: number;
    if (m) {
      a = m[1] ? parseInt(m[1], 10) : 1;
      b = m[2] ? parseInt(m[2], 10) : total;
    } else if (/^\d+$/.test(part)) {
      a = b = parseInt(part, 10);
    } else continue;
    if (a > b) [a, b] = [b, a];
    for (let p = Math.max(1, a); p <= Math.min(total, b); p++) {
      if (!seen.has(p)) {
        seen.add(p);
        out.push(p - 1);
      }
    }
  }
  return out;
}
