"use client";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import FileDrop from "./FileDrop";
import { Seg } from "./DesignPanel";
import type { Dict } from "@/lib/i18n";
import { fmtc } from "@/lib/fmt";
import type { Tool } from "@/lib/tools";
import { downloadBlob } from "@/lib/exporter";
import { baseName, encode, formatBytes, getPdfjs, hasAlpha, imgSize, isHeic, loadImage, parseRanges, zipAndDownload } from "@/lib/files";

type Item = { id: number; file: File; thumb?: string };
type Out = { name: string; blob: Blob; thumb?: string };
let seq = 0;

const PAGE: Record<string, [number, number] | null> = { fit: null, a4: [595.28, 841.89], letter: [612, 792] };
const MARGIN: Record<string, number> = { "0": 0, s: 28, l: 56 };
const SCALE: Record<string, number> = { n: 1.5, h: 2.5, x: 4 };

async function bytes(f: Blob) {
  return new Uint8Array(await f.arrayBuffer());
}
const pdfBlob = (b: Uint8Array) => new Blob([b as BlobPart], { type: "application/pdf" });

export default function PdfTool({ tool, dict }: { tool: Tool; dict: Dict }) {
  const ui = dict.tools.ui;
  const item = dict.tools.items[tool.id];
  const [items, setItems] = useState<Item[]>([]);
  const [outs, setOuts] = useState<Out[]>([]);
  const [busy, setBusy] = useState<{ i: number; n: number } | null>(null);
  const [err, setErr] = useState("");
  const [pages, setPages] = useState(0);
  const [bad, setBad] = useState<number[]>([]);

  const [pageSize, setPageSize] = useState("a4");
  const [margin, setMargin] = useState("s");
  const [imgFmt, setImgFmt] = useState<"jpeg" | "png">("jpeg");
  const [scale, setScale] = useState("h");
  const [ranges, setRanges] = useState("");
  const [splitMode, setSplitMode] = useState<"extract" | "each">("each");

  useEffect(() => {
    setOuts([]);
    setErr("");
  }, [items, pageSize, margin, imgFmt, scale, ranges, splitMode]);

  // single-PDF tools: read the page count as soon as a file is chosen
  useEffect(() => {
    setPages(0);
    const f = items[0]?.file;
    if (!f || (tool.mode !== "split" && tool.mode !== "pdf2img")) return;
    let alive = true;
    (async () => {
      try {
        const { PDFDocument } = await import("pdf-lib");
        const doc = await PDFDocument.load(await bytes(f), { ignoreEncryption: true });
        if (alive) setPages(doc.getPageCount());
      } catch {
        if (alive) setErr(ui.error);
      }
    })();
    return () => {
      alive = false;
    };
  }, [items, tool.mode, ui.error]);

  const add = (files: File[]) =>
    setItems((l) => [...(tool.multiple ? l : []), ...files.map((file) => ({ id: ++seq, file, thumb: tool.mode === "images2pdf" && !isHeic(file) ? URL.createObjectURL(file) : undefined }))]);
  const move = (i: number, d: -1 | 1) =>
    setItems((l) => {
      const n = [...l];
      const j = i + d;
      if (j < 0 || j >= n.length) return l;
      [n[i], n[j]] = [n[j], n[i]];
      return n;
    });

  async function images2pdf() {
    const { PDFDocument } = await import("pdf-lib");
    const doc = await PDFDocument.create();
    for (let i = 0; i < items.length; i++) {
      setBusy({ i: i + 1, n: items.length });
      const img = await loadImage(items[i].file);
      let { w, h } = imgSize(img);
      const k = Math.min(1, 4000 / Math.max(w, h));
      w = Math.round(w * k);
      h = Math.round(h * k);
      const png = hasAlpha(img);
      const blob = await encode(img, w, h, png ? "png" : "jpeg", 0.92);
      const emb = png ? await doc.embedPng(await bytes(blob)) : await doc.embedJpg(await bytes(blob));
      const fixed = PAGE[pageSize];
      const m = MARGIN[margin];
      let pw: number, ph: number;
      if (fixed) {
        [pw, ph] = w > h ? [fixed[1], fixed[0]] : fixed;
      } else {
        pw = (w * 72) / 96 + 2 * m;
        ph = (h * 72) / 96 + 2 * m;
      }
      const page = doc.addPage([pw, ph]);
      const s = Math.min((pw - 2 * m) / w, (ph - 2 * m) / h);
      page.drawImage(emb, { x: (pw - w * s) / 2, y: (ph - h * s) / 2, width: w * s, height: h * s });
    }
    const name = items.length === 1 ? `${baseName(items[0].file.name)}.pdf` : `images-${items.length}.pdf`;
    return [{ name, blob: pdfBlob(await doc.save()) }];
  }

  async function merge() {
    const { PDFDocument } = await import("pdf-lib");
    const out = await PDFDocument.create();
    let failed = false;
    for (let i = 0; i < items.length; i++) {
      setBusy({ i: i + 1, n: items.length });
      try {
        const src = await PDFDocument.load(await bytes(items[i].file), { ignoreEncryption: true });
        if (src.isEncrypted) throw new Error("encrypted");
        const copied = await out.copyPages(src, src.getPageIndices());
        copied.forEach((p) => out.addPage(p));
      } catch {
        failed = true;
        const id = items[i].id;
        setBad((b) => [...b, id]);
      }
    }
    if (failed) setErr(ui.encrypted);
    if (!out.getPageCount()) return [];
    return [{ name: `merged-${items.length}.pdf`, blob: pdfBlob(await out.save()) }];
  }

  async function pdf2img() {
    const f = items[0].file;
    const pdfjs = await getPdfjs();
    const pdf = await pdfjs.getDocument({ data: await bytes(f) }).promise;
    const list = ranges.trim() ? parseRanges(ranges, pdf.numPages) : Array.from({ length: pdf.numPages }, (_, i) => i);
    const res: Out[] = [];
    for (let i = 0; i < list.length; i++) {
      setBusy({ i: i + 1, n: list.length });
      const page = await pdf.getPage(list[i] + 1);
      const vp = page.getViewport({ scale: SCALE[scale] });
      const c = document.createElement("canvas");
      c.width = Math.ceil(vp.width);
      c.height = Math.ceil(vp.height);
      const ctx = c.getContext("2d")!;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, c.width, c.height);
      await page.render({ canvasContext: ctx, viewport: vp }).promise;
      const blob = await encode(c, c.width, c.height, imgFmt, 0.92);
      res.push({ name: `${baseName(f.name)}-page-${list[i] + 1}.${imgFmt === "jpeg" ? "jpg" : "png"}`, blob, thumb: URL.createObjectURL(blob) });
      page.cleanup();
    }
    await pdf.destroy();
    return res;
  }

  async function split() {
    const f = items[0].file;
    const { PDFDocument } = await import("pdf-lib");
    const src = await PDFDocument.load(await bytes(f), { ignoreEncryption: true });
    if (src.isEncrypted) throw new Error("encrypted");
    const total = src.getPageCount();
    const b = baseName(f.name);
    if (splitMode === "extract") {
      const idx = parseRanges(ranges, total);
      if (!idx.length) return [];
      const out = await PDFDocument.create();
      (await out.copyPages(src, idx)).forEach((p) => out.addPage(p));
      return [{ name: `${b}-pages-${ranges.replace(/[^\d,-]+/g, "").replace(/,/g, "_")}.pdf`, blob: pdfBlob(await out.save()) }];
    }
    const res: Out[] = [];
    for (let i = 0; i < total; i++) {
      setBusy({ i: i + 1, n: total });
      const out = await PDFDocument.create();
      const [p] = await out.copyPages(src, [i]);
      out.addPage(p);
      res.push({ name: `${b}-page-${i + 1}.pdf`, blob: pdfBlob(await out.save()) });
      if (i % 5 === 0) await new Promise((r) => setTimeout(r, 0));
    }
    return res;
  }

  const run = async () => {
    setBad([]);
    setErr("");
    setOuts([]);
    setBusy({ i: 0, n: 1 });
    try {
      const fn = { images2pdf, merge, pdf2img, split }[tool.mode as "images2pdf" | "merge" | "pdf2img" | "split"];
      const res = await fn();
      setOuts(res);
      if (!res.length && !err) setErr(tool.mode === "split" ? ui.noPages : ui.error);
    } catch (e) {
      setErr(String(e).includes("encrypt") || String(e).includes("assword") ? ui.encrypted : ui.error);
    }
    setBusy(null);
  };

  const needRanges = (tool.mode === "split" && splitMode === "extract") || tool.mode === "pdf2img";
  const canRun = items.length > 0 && !busy && !(tool.mode === "merge" && items.length < 2) && !(tool.mode === "split" && splitMode === "extract" && !ranges.trim());
  const totalOut = outs.reduce((a, o) => a + o.blob.size, 0);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
      <div className="space-y-4">
        <FileDrop accept={tool.accept} multiple={tool.multiple} onFiles={add} ui={ui} compact={items.length > 0} hint={item.accepts} />
        {items.length > 0 && (
          <section className="card !p-3 sm:!p-4">
            <div className="mb-2 flex items-center justify-between px-1 text-sm">
              <span className="font-bold">
                {tool.multiple ? fmtc(ui.files, { n: items.length }) : pages ? fmtc(ui.pages, { n: pages }) : "…"}
              </span>
              <button onClick={() => setItems([])} className="font-semibold text-slate-500 hover:text-red-600">{ui.clear}</button>
            </div>
            <ul className="divide-y divide-slate-100 dark:divide-slate-800">
              {items.map((x, i) => (
                <li key={x.id} className="flex items-center gap-3 px-1 py-2.5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-400">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {x.thumb ? <img src={x.thumb} alt="" className="h-full w-full object-cover" /> : <Icon name={tool.mode === "images2pdf" ? "image" : "pdf"} className="h-6 w-6" />}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold" dir="ltr">{i + 1}. {x.file.name}</span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400" dir="ltr">{formatBytes(x.file.size)}</span>
                    {bad.includes(x.id) && <span className="block text-xs font-semibold text-red-600">{ui.encrypted}</span>}
                  </span>
                  {tool.multiple && (
                    <span className="flex shrink-0 items-center">
                      <button onClick={() => move(i, -1)} disabled={i === 0} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 disabled:opacity-30 dark:hover:bg-slate-800" aria-label={ui.moveUp}><Icon name="arrowUp" className="h-4 w-4" /></button>
                      <button onClick={() => move(i, 1)} disabled={i === items.length - 1} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 disabled:opacity-30 dark:hover:bg-slate-800" aria-label={ui.moveDown}><Icon name="arrowDown" className="h-4 w-4" /></button>
                    </span>
                  )}
                  <button onClick={() => setItems((l) => l.filter((y) => y.id !== x.id))} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-red-600 dark:hover:bg-slate-800" aria-label={ui.remove}>
                    <Icon name="x" className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}

        {outs.length > 0 && (
          <section className="card !p-3 sm:!p-4">
            <div className="mb-2 flex items-center justify-between px-1 text-sm">
              <span className="font-bold text-emerald-700 dark:text-emerald-400">{ui.done} · {fmtc(ui.files, { n: outs.length })} · <span dir="ltr">{formatBytes(totalOut)}</span></span>
            </div>
            <ul className={outs.some((o) => o.thumb) ? "grid grid-cols-2 gap-3 sm:grid-cols-3" : "divide-y divide-slate-100 dark:divide-slate-800"}>
              {outs.map((o) =>
                o.thumb ? (
                  <li key={o.name} className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={o.thumb} alt="" className="aspect-[3/4] w-full bg-white object-contain" />
                    <button onClick={() => downloadBlob(o.blob, o.name)} className="flex w-full items-center justify-center gap-1.5 border-t border-slate-200 py-2 text-xs font-bold text-brand-700 hover:bg-brand-50 dark:border-slate-800 dark:text-brand-300 dark:hover:bg-slate-800">
                      <Icon name="download" className="h-3.5 w-3.5" /> <span dir="ltr">{o.name.replace(/^.*-page-/, "#").replace(/\.\w+$/, "")}</span>
                    </button>
                  </li>
                ) : (
                  <li key={o.name} className="flex items-center gap-3 px-1 py-2.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"><Icon name="pdf" className="h-5 w-5" /></span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold" dir="ltr">{o.name}</span>
                      <span className="block text-xs text-slate-500" dir="ltr">{formatBytes(o.blob.size)}</span>
                    </span>
                    <button onClick={() => downloadBlob(o.blob, o.name)} className="btn-ghost !px-3 !py-2"><Icon name="download" className="h-4 w-4" /> <span className="hidden sm:inline">{ui.download}</span></button>
                  </li>
                ),
              )}
            </ul>
          </section>
        )}
      </div>

      <aside className="lg:sticky lg:top-20 lg:self-start">
        <div className="card space-y-5">
          <h2 className="step !mb-0">{ui.settings}</h2>

          {tool.mode === "images2pdf" && (
            <>
              <div>
                <span className="label">{ui.pageSize}</span>
                <Seg value={pageSize} options={[["a4", "A4"], ["letter", "Letter"], ["fit", ui.fitImage]]} onChange={setPageSize} />
              </div>
              <div>
                <span className="label">{ui.margin}</span>
                <Seg value={margin} options={[["0", ui.none], ["s", ui.small], ["l", ui.large]]} onChange={setMargin} />
              </div>
            </>
          )}

          {tool.mode === "pdf2img" && (
            <>
              <div>
                <span className="label">{ui.format}</span>
                <Seg value={imgFmt} options={[["jpeg", "JPG"], ["png", "PNG"]]} onChange={(v) => setImgFmt(v as "jpeg" | "png")} />
              </div>
              <div>
                <span className="label">{ui.resolution}</span>
                <Seg value={scale} options={[["n", ui.normal], ["h", ui.high], ["x", ui.veryHigh]]} onChange={setScale} />
              </div>
            </>
          )}

          {tool.mode === "split" && <Seg value={splitMode} options={[["each", ui.splitEach], ["extract", ui.extract]]} onChange={(v) => setSplitMode(v as "extract" | "each")} />}

          {needRanges && (
            <label className="block">
              <span className="label">{tool.mode === "pdf2img" ? ui.pagesOptional : ui.pagesToExtract}</span>
              <input dir="ltr" className="input" value={ranges} onChange={(e) => setRanges(e.target.value)} placeholder={pages ? `1-${pages}` : "1-3, 5"} />
              <span className="mt-1 block text-xs text-slate-500">{ui.rangesHint}</span>
            </label>
          )}

          {tool.mode === "merge" && items.length === 1 && <p className="text-sm text-slate-500">{ui.addOneMore}</p>}

          <button onClick={run} disabled={!canRun} className="btn-primary w-full py-3 text-base">
            <Icon name={tool.icon} className="h-5 w-5" /> {busy ? fmtc(ui.working, busy) : item.action}
          </button>
          {err && <p className="text-sm font-semibold text-red-600">{err}</p>}

          {outs.length > 1 && (
            <button onClick={() => zipAndDownload(outs, `${tool.slug}-${outs.length}.zip`, downloadBlob)} className="btn-primary w-full">
              <Icon name="zip" className="h-4 w-4" /> {ui.downloadAll}
            </button>
          )}
          {outs.length === 1 && (
            <button onClick={() => downloadBlob(outs[0].blob, outs[0].name)} className="btn-primary w-full !bg-emerald-600 hover:!bg-emerald-700">
              <Icon name="download" className="h-4 w-4" /> {ui.download} <span dir="ltr">({formatBytes(outs[0].blob.size)})</span>
            </button>
          )}
          <p className="flex items-center justify-center gap-1 text-center text-xs text-slate-500 dark:text-slate-400">
            <Icon name="shield" className="h-3.5 w-3.5" /> {ui.privacy}
          </p>
        </div>
      </aside>
    </div>
  );
}
