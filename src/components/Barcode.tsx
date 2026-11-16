"use client";
import { useEffect, useMemo, useState } from "react";
import JsBarcode from "jsbarcode";
import Icon from "./Icon";
import { Range, Seg, ColorField } from "./DesignPanel";
import type { Dict } from "@/lib/i18n";
import { fmtc } from "@/lib/fmt";
import { svgToDataUrl, type Rendered } from "@/lib/qrRender";
import { exportBlob, downloadBlob, safeLS, setLS, type Format } from "@/lib/exporter";

export const BARCODE_FORMATS = [
  { id: "CODE128", name: "Code 128", example: "QRHoney-2026" },
  { id: "EAN13", name: "EAN-13", example: "5901234123457" },
  { id: "UPC", name: "UPC-A", example: "036000291452" },
  { id: "EAN8", name: "EAN-8", example: "96385074" },
  { id: "UPCE", name: "UPC-E", example: "01245714" },
  { id: "CODE39", name: "Code 39", example: "QRHONEY 2026" },
  { id: "ITF14", name: "ITF-14", example: "15400141288763" },
  { id: "codabar", name: "Codabar", example: "A40156B" },
  { id: "MSI", name: "MSI", example: "1234567" },
  { id: "pharmacode", name: "Pharmacode", example: "1234" },
] as const;
type FormatId = (typeof BARCODE_FORMATS)[number]["id"];

interface Opts {
  format: FormatId;
  value: string;
  text: string;
  showText: boolean;
  width: number;
  height: number;
  fontSize: number;
  margin: number;
  lineColor: string;
  background: string;
  transparent: boolean;
}

const DEFAULTS: Opts = {
  format: "CODE128",
  value: "QRHoney-2026",
  text: "",
  showText: true,
  width: 2,
  height: 100,
  fontSize: 20,
  margin: 10,
  lineColor: "#000000",
  background: "#ffffff",
  transparent: false,
};
const LS_KEY = "th.barcode.v1";
const OUT_FORMATS: Format[] = ["png", "svg", "pdf", "jpg"];
const SIZES = [800, 1600, 3200];

/** Draws the barcode as a standalone SVG. Returns null when the data doesn't fit the format. */
function build(o: Opts): Rendered | null {
  if (!o.value.trim()) return null;
  const el = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  let ok = true;
  try {
    JsBarcode(el, o.value.trim(), {
      format: o.format,
      width: o.width,
      height: o.height,
      displayValue: o.showText,
      text: o.text.trim() || undefined,
      fontSize: o.fontSize,
      margin: o.margin,
      lineColor: o.lineColor,
      background: o.transparent ? "transparent" : o.background,
      font: "monospace",
      valid: (v) => {
        ok = v;
      },
    });
  } catch {
    return null;
  }
  if (!ok) return null;
  el.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  const width = parseFloat(el.getAttribute("width") || "0");
  const height = parseFloat(el.getAttribute("height") || "0");
  if (!width || !height) return null;
  return { svg: new XMLSerializer().serializeToString(el), width, height };
}

export default function Barcode({ dict }: { dict: Dict }) {
  const t = dict.barcode;
  const ui = dict.ui;
  const [o, setO] = useState<Opts>(DEFAULTS);
  const [out, setOut] = useState<Format>("png");
  const [size, setSize] = useState(1600);
  const [busy, setBusy] = useState(false);
  const [r, setR] = useState<Rendered | null>(null);

  useEffect(() => setO((d) => ({ ...d, ...safeLS<Partial<Opts>>(LS_KEY, {}) })), []);
  const set = (p: Partial<Opts>) =>
    setO((d) => {
      const n = { ...d, ...p };
      setLS(LS_KEY, n);
      return n;
    });

  // JsBarcode needs the DOM, so render after mount
  useEffect(() => setR(build(o)), [o]);
  const preview = useMemo(() => (r ? svgToDataUrl(r.svg) : ""), [r]);
  const fmtInfo = BARCODE_FORMATS.find((f) => f.id === o.format)!;
  const hint = t.hints[o.format];

  const download = async () => {
    if (!r) return;
    setBusy(true);
    try {
      const blob = await exportBlob(r, out, size);
      const base = o.value.trim().replace(/[^\w\-.]+/g, "-").slice(0, 40) || "barcode";
      downloadBlob(blob, `barcode-${fmtInfo.id.toLowerCase()}-${base}.${out}`);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
      <div className="space-y-6">
        <section className="card">
          <h2 className="step">{ui.step1}</h2>
          <span className="label">{t.type}</span>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            {BARCODE_FORMATS.map((f) => (
              <button
                key={f.id}
                onClick={() => set({ format: f.id, value: f.example, text: "" })}
                className={`rounded-xl border px-2 py-2 text-sm font-bold transition ${o.format === f.id ? "border-brand-600 bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300" : "border-slate-200 text-slate-600 hover:border-brand-400 dark:border-slate-700 dark:text-slate-300"}`}
              >
                {f.name}
              </button>
            ))}
          </div>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{hint}</p>

          <label className="mt-5 block">
            <span className="label">{t.data}</span>
            <input dir="ltr" className="input font-mono" value={o.value} onChange={(e) => set({ value: e.target.value })} spellCheck={false} />
          </label>
          {!r && (
            <p className="mt-2 flex items-start gap-1.5 text-sm font-semibold text-amber-700 dark:text-amber-400">
              <Icon name="alert" className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                {fmtc(t.invalid, { name: fmtInfo.name })}{" "}
                <button onClick={() => set({ value: fmtInfo.example })} className="underline">{t.example}</button>
              </span>
            </p>
          )}
          <label className="mt-4 block">
            <span className="label">{t.label}</span>
            <input className="input" value={o.text} placeholder={o.value} onChange={(e) => set({ text: e.target.value })} />
          </label>
        </section>

        <section className="card">
          <h2 className="step">{ui.step2}</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <Range label={`${t.barWidth}: ${o.width}`} min={1} max={4} step={1} value={o.width} onChange={(v) => set({ width: v })} />
            <Range label={`${t.height}: ${o.height}`} min={30} max={200} step={5} value={o.height} onChange={(v) => set({ height: v })} />
            <Range label={`${t.margin}: ${o.margin}`} min={0} max={40} step={2} value={o.margin} onChange={(v) => set({ margin: v })} />
            <Range label={`${t.fontSize}: ${o.fontSize}`} min={10} max={40} step={1} value={o.fontSize} onChange={(v) => set({ fontSize: v })} />
            <ColorField label={t.barColor} value={o.lineColor} onChange={(v) => set({ lineColor: v })} />
            {!o.transparent && <ColorField label={ui.background} value={o.background} onChange={(v) => set({ background: v })} />}
          </div>
          <div className="mt-5 flex flex-wrap gap-4">
            <Seg value={o.showText ? "1" : "0"} options={[["1", t.showText], ["0", t.hideText]]} onChange={(v) => set({ showText: v === "1" })} />
            <Seg value={o.transparent ? "1" : "0"} options={[["0", ui.background], ["1", ui.transparent]]} onChange={(v) => set({ transparent: v === "1" })} />
          </div>
          <button onClick={() => set({ ...DEFAULTS, format: o.format, value: o.value, text: o.text })} className="mt-5 text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400">
            {ui.reset}
          </button>
        </section>
      </div>

      <aside className="lg:sticky lg:top-20 lg:self-start">
        <div className="card">
          <h2 className="step">{ui.step3}</h2>
          <div className={`flex min-h-[180px] items-center justify-center rounded-2xl p-4 ${o.transparent ? "checker" : "bg-slate-50 dark:bg-slate-800/60"}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {preview ? <img src={preview} alt={`${fmtInfo.name} barcode`} className="max-h-[260px] max-w-full" /> : <span className="text-center text-sm text-slate-400">{fmtc(t.invalid, { name: fmtInfo.name })}</span>}
          </div>
          <div className="label mt-4">{t.fileType}</div>
          <div className="grid grid-cols-4 gap-1 rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
            {OUT_FORMATS.map((f) => (
              <button key={f} onClick={() => setOut(f)} className={`rounded-lg py-1.5 text-xs font-bold uppercase ${out === f ? "bg-white text-brand-700 shadow-sm dark:bg-slate-950 dark:text-brand-300" : "text-slate-600 dark:text-slate-300"}`}>{f}</button>
            ))}
          </div>
          {out !== "svg" && (
            <div className="mt-2 grid grid-cols-3 gap-1">
              {SIZES.map((s) => (
                <button key={s} onClick={() => setSize(s)} className={`rounded-lg border py-1 text-xs font-semibold ${size === s ? "border-brand-600 text-brand-700 dark:text-brand-300" : "border-slate-200 text-slate-500 dark:border-slate-700"}`}>{s}px</button>
              ))}
            </div>
          )}
          <button onClick={download} disabled={!r || busy} className="btn-primary mt-4 w-full py-3 text-base">
            <Icon name="download" className="h-5 w-5" /> {ui.download} {out.toUpperCase()}
          </button>
          <p className="mt-3 text-center text-xs text-slate-500 dark:text-slate-400">{ui.vectorHint}</p>
          <p className="mt-1 flex items-center justify-center gap-1 text-xs text-slate-500 dark:text-slate-400">
            <Icon name="shield" className="h-3.5 w-3.5" /> {ui.privacy}
          </p>
        </div>
      </aside>
    </div>
  );
}
