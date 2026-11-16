"use client";
import { useEffect, useMemo, useState } from "react";
import Icon from "./Icon";
import FileDrop from "./FileDrop";
import { Range, Seg, ColorField } from "./DesignPanel";
import type { Dict } from "@/lib/i18n";
import { fmtc } from "@/lib/fmt";
import type { Tool, OutType } from "@/lib/tools";
import { downloadBlob } from "@/lib/exporter";
import { EXT, baseName, encode, formatBytes, hasAlpha, imgSize, loadImage, typeOf, zipAndDownload, isHeic } from "@/lib/files";

type Item = { id: number; file: File; thumb?: string; out?: { blob: Blob; name: string; w: number; h: number; kept?: boolean }; error?: string };
type Fmt = "same" | "auto" | OutType;
let seq = 0;

export default function ImageTool({ tool, dict }: { tool: Tool; dict: Dict }) {
  const ui = dict.tools.ui;
  const item = dict.tools.items[tool.id];
  const [items, setItems] = useState<Item[]>([]);
  const [busy, setBusy] = useState<{ i: number; n: number } | null>(null);

  // settings
  const [quality, setQuality] = useState(tool.mode === "compress" ? 70 : 92);
  const [fmt, setFmt] = useState<Fmt>(tool.mode === "compress" ? "auto" : "same");
  const [maxW, setMaxW] = useState(0);
  const [by, setBy] = useState<"size" | "percent">("size");
  const [w, setW] = useState("1280");
  const [h, setH] = useState("");
  const [keep, setKeep] = useState(true);
  const [pct, setPct] = useState(50);
  const [bg, setBg] = useState("#ffffff");

  // results are stale as soon as a setting changes
  useEffect(() => setItems((l) => l.map((x) => ({ ...x, out: undefined, error: undefined }))), [quality, fmt, maxW, by, w, h, keep, pct, bg]);

  const add = (files: File[]) =>
    setItems((l) => [...(tool.multiple ? l : []), ...files.map((file) => ({ id: ++seq, file, thumb: isHeic(file) ? undefined : URL.createObjectURL(file) }))]);
  const remove = (id: number) => setItems((l) => l.filter((x) => x.id !== id));

  const outType = (f: File): OutType => (tool.to ? tool.to : fmt === "same" || fmt === "auto" ? typeOf(f) : fmt);

  async function processOne(f: File): Promise<NonNullable<Item["out"]>> {
    const img = await loadImage(f);
    const { w: iw, h: ih } = imgSize(img);
    let tw = iw, th = ih;
    if (tool.mode === "compress" && maxW && iw > maxW) {
      tw = maxW;
      th = (ih * maxW) / iw;
    }
    if (tool.mode === "resize") {
      if (by === "percent") {
        tw = (iw * pct) / 100;
        th = (ih * pct) / 100;
      } else {
        const W = parseInt(w, 10) || 0, H = parseInt(h, 10) || 0;
        if (keep) {
          const k = W && H ? Math.min(W / iw, H / ih) : W ? W / iw : H ? H / ih : 1;
          tw = iw * k;
          th = ih * k;
        } else {
          tw = W || iw;
          th = H || ih;
        }
      }
    }
    const q = quality / 100;
    const suffix = tool.mode === "compress" ? "-compressed" : tool.mode === "resize" ? "-resized" : "";
    let type = outType(f);
    let blob: Blob;
    try {
      blob = await encode(img, tw, th, type, q, bg);
    } catch (e) {
      // browser can't write this format (e.g. WebP on older Safari): in Auto/Same mode fall back quietly
      if (type !== "webp" || tool.to || (fmt !== "auto" && fmt !== "same")) throw e;
      type = hasAlpha(img) ? "png" : "jpeg";
      blob = await encode(img, tw, th, type, q, bg);
    }
    if (tool.mode === "compress" && fmt === "auto" && type === "png") {
      // PNG barely compresses: try a lossy format too and keep the smallest
      const alt: OutType = hasAlpha(img) ? "webp" : "jpeg";
      const b2 = await encode(img, tw, th, alt, q, bg).catch(() => null);
      if (b2 && b2.size < blob.size) {
        blob = b2;
        type = alt;
      }
    }
    // compressing must never make a file bigger
    if (tool.mode === "compress" && blob.size >= f.size && tw === iw && !isHeic(f)) {
      return { blob: f, name: f.name, w: iw, h: ih, kept: true };
    }
    return { blob, name: `${baseName(f.name)}${suffix}.${EXT[type]}`, w: Math.round(tw), h: Math.round(th) };
  }

  const run = async () => {
    const list = items.filter((x) => !x.out);
    for (let i = 0; i < list.length; i++) {
      setBusy({ i: i + 1, n: list.length });
      const it = list[i];
      try {
        const out = await processOne(it.file);
        setItems((l) => l.map((x) => (x.id === it.id ? { ...x, out, error: undefined, thumb: x.thumb || URL.createObjectURL(out.blob) } : x)));
      } catch (e) {
        const webp = String(e).includes("encode failed") && (tool.to === "webp" || fmt === "webp");
        const msg = webp ? ui.noWebp : ui.error;
        setItems((l) => l.map((x) => (x.id === it.id ? { ...x, error: msg } : x)));
      }
      await new Promise((r) => setTimeout(r, 0));
    }
    setBusy(null);
  };

  const done = items.filter((x) => x.out);
  const totals = useMemo(() => done.reduce((a, x) => ({ a: a.a + x.file.size, b: a.b + (x.out?.blob.size || 0) }), { a: 0, b: 0 }), [done]);
  const fmtOptions: [string, string][] =
    tool.mode === "compress"
      ? [["auto", ui.auto], ["jpeg", "JPG"], ["webp", "WebP"], ["png", "PNG"]]
      : [["same", ui.sameFormat], ["jpeg", "JPG"], ["png", "PNG"], ["webp", "WebP"]];
  const showQuality = tool.mode === "compress" || (tool.to ? tool.to !== "png" : fmt !== "png");

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
      <div className="space-y-4">
        <FileDrop accept={tool.accept} multiple={tool.multiple} onFiles={add} ui={ui} compact={items.length > 0} hint={item.accepts} />
        {items.length > 0 && (
          <section className="card !p-3 sm:!p-4">
            <div className="mb-2 flex items-center justify-between px-1 text-sm">
              <span className="font-bold">{fmtc(ui.files, { n: items.length })}</span>
              <button onClick={() => setItems([])} className="font-semibold text-slate-500 hover:text-red-600">{ui.clear}</button>
            </div>
            <ul className="divide-y divide-slate-100 dark:divide-slate-800">
              {items.map((x) => {
                const saved = x.out && !x.out.kept ? Math.round((1 - x.out.blob.size / x.file.size) * 100) : 0;
                return (
                  <li key={x.id} className="flex items-center gap-3 px-1 py-2.5">
                    <span className="checker flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      {x.thumb ? <img src={x.thumb} alt="" className="h-full w-full object-cover" /> : <Icon name="image" className="h-5 w-5 text-slate-400" />}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold" dir="ltr">{x.out ? x.out.name : x.file.name}</span>
                      <span className="block text-xs text-slate-500 dark:text-slate-400" dir="ltr">
                        {formatBytes(x.file.size)}
                        {x.out && !x.out.kept && <> → <b className="text-slate-700 dark:text-slate-200">{formatBytes(x.out.blob.size)}</b> · {x.out.w}×{x.out.h}</>}
                        {x.out && !x.out.kept && tool.mode === "compress" && saved > 0 && <b className="ms-1 text-emerald-700 dark:text-emerald-400">−{saved}%</b>}
                      </span>
                      {x.out?.kept && <span className="block text-xs font-semibold text-amber-700 dark:text-amber-400">{ui.kept}</span>}
                      {x.error && <span className="block text-xs font-semibold text-red-600">{x.error}</span>}
                    </span>
                    {x.out ? (
                      <button onClick={() => downloadBlob(x.out!.blob, x.out!.name)} className="btn-ghost !px-3 !py-2" aria-label={ui.download}>
                        <Icon name="download" className="h-4 w-4" /> <span className="hidden sm:inline">{ui.download}</span>
                      </button>
                    ) : (
                      <button onClick={() => remove(x.id)} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-red-600 dark:hover:bg-slate-800" aria-label={ui.remove}>
                        <Icon name="x" className="h-4 w-4" />
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </div>

      <aside className="lg:sticky lg:top-20 lg:self-start">
        <div className="card space-y-5">
          <h2 className="step !mb-0">{ui.settings}</h2>

          {tool.mode === "resize" && (
            <>
              <Seg value={by} options={[["size", ui.bySize], ["percent", ui.byPercent]]} onChange={(v) => setBy(v as "size" | "percent")} />
              {by === "size" ? (
                <div>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="block">
                      <span className="label">{ui.width} (px)</span>
                      <input className="input" inputMode="numeric" value={w} onChange={(e) => setW(e.target.value.replace(/\D/g, "").slice(0, 5))} placeholder="auto" />
                    </label>
                    <label className="block">
                      <span className="label">{ui.height} (px)</span>
                      <input className="input" inputMode="numeric" value={h} onChange={(e) => setH(e.target.value.replace(/\D/g, "").slice(0, 5))} placeholder="auto" />
                    </label>
                  </div>
                  <label className="mt-3 flex items-center gap-2 text-sm font-semibold">
                    <input type="checkbox" checked={keep} onChange={(e) => setKeep(e.target.checked)} className="h-4 w-4 accent-brand-600" /> {ui.keepRatio}
                  </label>
                </div>
              ) : (
                <Range label={`${ui.percent}: ${pct}%`} min={5} max={200} step={5} value={pct} onChange={setPct} />
              )}
            </>
          )}

          {tool.mode === "compress" && (
            <div>
              <span className="label">{ui.maxWidth}</span>
              <Seg value={String(maxW)} options={[["0", ui.original], ["3840", "4K"], ["1920", "1920"], ["1280", "1280"]]} onChange={(v) => setMaxW(Number(v))} />
            </div>
          )}

          {!tool.to && (
            <div>
              <span className="label">{ui.format}</span>
              <Seg value={fmt} options={fmtOptions} onChange={(v) => setFmt(v as Fmt)} />
            </div>
          )}

          {showQuality && <Range label={`${ui.quality}: ${quality}%`} min={10} max={100} step={1} value={quality} onChange={setQuality} />}
          {(tool.to === "jpeg" || fmt === "jpeg") && <ColorField label={ui.background} value={bg} onChange={setBg} />}

          <button onClick={run} disabled={!items.some((x) => !x.out) || !!busy} className="btn-primary w-full py-3 text-base">
            <Icon name={tool.icon} className="h-5 w-5" /> {busy ? fmtc(ui.working, busy) : item.action}
          </button>
          {busy && (
            <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div className="h-full bg-brand-600 transition-all" style={{ width: `${(busy.i / busy.n) * 100}%` }} />
            </div>
          )}

          {done.length > 0 && (
            <div className="rounded-2xl bg-emerald-50 p-4 text-center dark:bg-emerald-950/40">
              <p className="text-sm font-bold text-emerald-800 dark:text-emerald-300" dir="ltr">
                {formatBytes(totals.a)} → {formatBytes(totals.b)}
                {tool.mode === "compress" && totals.b < totals.a && <> (−{Math.round((1 - totals.b / totals.a) * 100)}%)</>}
              </p>
              {done.length > 1 && (
                <button onClick={() => zipAndDownload(done.map((x) => ({ name: x.out!.name, blob: x.out!.blob })), `${tool.slug}-${done.length}.zip`, downloadBlob)} className="btn-primary mt-3 w-full">
                  <Icon name="zip" className="h-4 w-4" /> {ui.downloadAll}
                </button>
              )}
            </div>
          )}
          <p className="flex items-center justify-center gap-1 text-center text-xs text-slate-500 dark:text-slate-400">
            <Icon name="shield" className="h-3.5 w-3.5" /> {ui.privacy}
          </p>
        </div>
      </aside>
    </div>
  );
}
