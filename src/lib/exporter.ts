"use client";
import jsQR from "jsqr";
import { rasterize, type Rendered } from "./qrRender";

export type Format = "png" | "svg" | "pdf" | "jpg" | "webp";
export const FORMATS: Format[] = ["png", "svg", "pdf", "jpg", "webp"];
export const SIZES = [512, 1024, 2048, 4096];

function canvasBlob(c: HTMLCanvasElement, type: string, q?: number): Promise<Blob> {
  return new Promise((res, rej) => c.toBlob((b) => (b ? res(b) : rej(new Error("toBlob failed"))), type, q));
}

export async function exportBlob(r: Rendered, format: Format, size: number): Promise<Blob> {
  if (format === "svg") return new Blob([`<?xml version="1.0" encoding="UTF-8"?>\n` + r.svg], { type: "image/svg+xml" });
  if (format === "png") return canvasBlob(await rasterize(r, size), "image/png");
  if (format === "webp") return canvasBlob(await rasterize(r, size), "image/webp", 0.95);
  if (format === "jpg") return canvasBlob(await rasterize(r, size, "#ffffff"), "image/jpeg", 0.95);
  // pdf: page sized to the code at 300 dpi + 8 mm margin
  const { jsPDF } = await import("jspdf");
  const px = Math.max(1024, size);
  const c = await rasterize(r, px);
  const wmm = Math.max(30, (size / 300) * 25.4);
  const hmm = (wmm * r.height) / r.width;
  const m = 8;
  const doc = new jsPDF({ unit: "mm", format: [wmm + 2 * m, hmm + 2 * m], orientation: wmm >= hmm ? "landscape" : "portrait" });
  doc.addImage(c.toDataURL("image/png"), "PNG", m, m, wmm, hmm, undefined, "FAST");
  return doc.output("blob");
}

export function downloadBlob(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

/** Renders the code and decodes it again to prove it scans. */
export async function verifyScan(r: Rendered, expected: string): Promise<boolean> {
  try {
    // Phone cameras see a slightly soft image, which merges dot / diamond / line styles into
    // solid modules. jsQR sees pixel-perfect images, so we also try a few camera-like blurs.
    const base = await rasterize(r, 520, "#ffffff");
    for (const blur of [0, 3, 5, 7]) {
      const c = document.createElement("canvas");
      c.width = base.width;
      c.height = base.height;
      const ctx = c.getContext("2d", { willReadFrequently: true })!;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, c.width, c.height);
      if (blur) ctx.filter = `blur(${blur}px)`;
      ctx.drawImage(base, 0, 0);
      const img = ctx.getImageData(0, 0, c.width, c.height);
      const res = jsQR(img.data, img.width, img.height, { inversionAttempts: "attemptBoth" });
      if (res && res.data === expected) return true;
    }
    return false;
  } catch {
    return false;
  }
}

/** Shrinks an uploaded logo to max 512px so designs stay light. */
export function readLogo(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onerror = reject;
    fr.onload = () => {
      const src = String(fr.result);
      if (file.type === "image/svg+xml" && file.size < 200_000) return resolve(src);
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const k = Math.min(1, 512 / Math.max(img.width, img.height));
        const c = document.createElement("canvas");
        c.width = Math.max(1, Math.round(img.width * k));
        c.height = Math.max(1, Math.round(img.height * k));
        c.getContext("2d")!.drawImage(img, 0, 0, c.width, c.height);
        resolve(c.toDataURL("image/png"));
      };
      img.src = src;
    };
    fr.readAsDataURL(file);
  });
}

export function safeLS<T>(key: string, fallback: T): T {
  try {
    const v = localStorage.getItem(key);
    return v ? (JSON.parse(v) as T) : fallback;
  } catch {
    return fallback;
  }
}
export function setLS(key: string, v: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(v));
  } catch {
    /* storage full or blocked */
  }
}
