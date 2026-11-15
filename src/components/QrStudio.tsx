"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Icon from "./Icon";
import DesignPanel from "./DesignPanel";
import type { Dict } from "@/lib/i18n";
import { QR_TYPES, TYPE_BY_ID, type Field, type QrTypeId } from "@/lib/qrTypes";
import { renderSvg, svgToDataUrl, contrastInfo, rasterize, DEFAULT_DESIGN, type Design, type Rendered } from "@/lib/qrRender";
import { exportBlob, downloadBlob, verifyScan, FORMATS, SIZES, safeLS, setLS, type Format } from "@/lib/exporter";

const LS_DESIGN = "th.design.v1";
const LS_SAVED = "th.saved.v1";

interface Saved { id: string; at: number; design: Design }

export default function QrStudio({ dict, locale, typeId }: { dict: Dict; locale: string; typeId: QrTypeId }) {
  const type = TYPE_BY_ID[typeId];
  const ui = dict.ui;

  const [values, setValues] = useState<Record<string, string>>(() => Object.fromEntries(type.fields.filter((f) => f.def).map((f) => [f.key, f.def!])));
  const [design, setDesign] = useState<Design>(DEFAULT_DESIGN);
  const [loaded, setLoaded] = useState(false);
  const [format, setFormat] = useState<Format>("png");
  const [size, setSize] = useState(1024);
  const [scan, setScan] = useState<"idle" | "checking" | "ok" | "fail">("idle");
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState<Saved[]>([]);

  // restore last design + saved designs (stays on this device only)
  useEffect(() => {
    setDesign((d) => ({ ...d, ...safeLS<Partial<Design>>(LS_DESIGN, {}) }));
    setSaved(safeLS<Saved[]>(LS_SAVED, []));
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (loaded) setLS(LS_DESIGN, design);
  }, [design, loaded]);

  const set = (p: Partial<Design>) => setDesign((d) => ({ ...d, ...p }));
  const data = type.build(values);

  const { rendered, error } = useMemo((): { rendered: Rendered | null; error: boolean } => {
    try {
      return { rendered: renderSvg(data || "https://example.com", design), error: false };
    } catch {
      return { rendered: null, error: true };
    }
  }, [data, design]);

  const contrast = useMemo(() => contrastInfo(design), [design]);

  useEffect(() => {
    if (!data || !rendered) {
      setScan("idle");
      return;
    }
    setScan("checking");
    let alive = true;
    const t = setTimeout(async () => {
      const ok = await verifyScan(rendered, data);
      if (alive) setScan(ok ? "ok" : "fail");
    }, 400);
    return () => {
      alive = false;
      clearTimeout(t);
    };
  }, [rendered, data]);

  const download = async () => {
    if (!rendered || !data) return;
    setBusy(true);
    try {
      const blob = await exportBlob(rendered, format, size);
      downloadBlob(blob, `qr-${type.id}-${Date.now().toString(36)}.${format}`);
    } finally {
      setBusy(false);
    }
  };

  const copyImage = async () => {
    if (!rendered || !data) return;
    try {
      const c = await rasterize(rendered, 1024);
      const blob: Blob = await new Promise((r) => c.toBlob((b) => r(b!), "image/png"));
      await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard not allowed */
    }
  };

  const print = async () => {
    if (!rendered || !data) return;
    const c = await rasterize(rendered, 1600);
    const f = document.createElement("iframe");
    f.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0";
    document.body.appendChild(f);
    const doc = f.contentDocument!;
    doc.open();
    doc.write(`<html><body style="margin:0;display:flex;align-items:center;justify-content:center;height:100vh"><img src="${c.toDataURL()}" style="width:70mm;height:auto"></body></html>`);
    doc.close();
    const img = doc.querySelector("img")!;
    const go = () => {
      f.contentWindow!.focus();
      f.contentWindow!.print();
      setTimeout(() => f.remove(), 1000);
    };
    if (img.complete) go();
    else img.onload = go;
  };

  const saveDesign = () => {
    const next = [{ id: Math.random().toString(36).slice(2), at: Date.now(), design }, ...saved].slice(0, 12);
    setSaved(next);
    setLS(LS_SAVED, next);
  };
  const delSaved = (id: string) => {
    const next = saved.filter((s) => s.id !== id);
    setSaved(next);
    setLS(LS_SAVED, next);
  };

  const ready = !!data && !!rendered && !error;

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px] xl:grid-cols-[minmax(0,1fr)_420px]">
      {/* LEFT: content + design */}
      <div className="space-y-6">
        <section className="card">
          <h2 className="step">{ui.step1}</h2>
          <nav aria-label={ui.allTypes} className="no-scrollbar -mx-1 mb-5 flex gap-2 overflow-x-auto px-1 pb-1">
            {QR_TYPES.map((t) => (
              <Link
                key={t.id}
                href={`/${locale}/${t.slug}`}
                scroll={false}
                className={`flex shrink-0 items-center gap-1.5 rounded-xl border px-3 py-2 text-sm font-semibold transition ${
                  t.id === type.id
                    ? "border-brand-600 bg-brand-600 text-white shadow-soft"
                    : "border-slate-200 bg-white text-slate-700 hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                }`}
                aria-current={t.id === type.id ? "page" : undefined}
              >
                <Icon name={t.icon} className="h-4 w-4" />
                {dict.types[t.id].name}
              </Link>
            ))}
          </nav>
          <div className="grid gap-4 sm:grid-cols-2">
            {type.fields.map((f) => (
              <FieldInput key={f.key} f={f} dict={dict} value={values[f.key] || ""} onChange={(v) => setValues((s) => ({ ...s, [f.key]: v }))} />
            ))}
          </div>
          <p className="mt-4 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Icon name="shield" className="h-4 w-4 text-emerald-600" /> {ui.privacy}
          </p>
        </section>

        <section className="card">
          <h2 className="step">{ui.step2}</h2>
          <DesignPanel design={design} set={set} ui={ui} />
        </section>

        {saved.length > 0 && (
          <section className="card">
            <h2 className="step">{ui.savedDesigns}</h2>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
              {saved.map((s) => (
                <div key={s.id} className="group relative rounded-xl border border-slate-200 bg-white p-1.5 dark:border-slate-700 dark:bg-slate-900">
                  <button onClick={() => setDesign({ ...DEFAULT_DESIGN, ...s.design })} className="block w-full" aria-label={ui.load}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={svgToDataUrl(renderSvg("saved", s.design).svg)} alt="" className="aspect-square w-full object-contain" />
                  </button>
                  <button onClick={() => delSaved(s.id)} aria-label={ui.del} className="absolute -right-2 -top-2 hidden rounded-full bg-rose-600 p-1 text-white shadow group-hover:block">
                    <Icon name="trash" className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* RIGHT: preview + download */}
      <aside className="lg:sticky lg:top-20 lg:self-start">
        <div className="card">
          <h2 className="step">{ui.step3}</h2>
          <div className={`relative mx-auto flex aspect-square w-full max-w-[340px] items-center justify-center rounded-2xl p-3 ${design.transparent ? "checker" : "bg-slate-50 dark:bg-slate-800/60"}`}>
            {rendered && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={svgToDataUrl(rendered.svg)}
                alt="QR code preview"
                className={`max-h-full max-w-full object-contain drop-shadow-sm transition ${ready ? "" : "opacity-20 blur-[1px]"}`}
              />
            )}
            {!data && !error && (
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-sm font-semibold text-slate-600 dark:text-slate-300">{ui.enterContent}</div>
            )}
            {error && <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-sm font-semibold text-rose-600">{ui.tooLong}</div>}
          </div>

          <div className="mt-4 min-h-[44px] space-y-2 text-sm">
            {scan === "checking" && <Status tone="slate" icon="sparkles" text={ui.checking} />}
            {scan === "ok" && <Status tone="green" icon="check" text={ui.scannable} />}
            {scan === "fail" && <Status tone="red" icon="alert" text={ui.notScannable} />}
            {ready && contrast.ratio < 3 && <Status tone="amber" icon="alert" text={ui.lowContrast} />}
            {ready && contrast.inverted && contrast.ratio >= 3 && <Status tone="amber" icon="alert" text={ui.inverted} />}
          </div>

          <div className="mt-3 grid grid-cols-5 gap-1 rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
            {FORMATS.map((f) => (
              <button key={f} onClick={() => setFormat(f)} className={`rounded-lg py-1.5 text-xs font-bold uppercase transition ${format === f ? "bg-white text-brand-700 shadow-sm dark:bg-slate-950 dark:text-brand-300" : "text-slate-600 dark:text-slate-300"}`}>
                {f}
              </button>
            ))}
          </div>
          {format !== "svg" && (
            <div className="mt-2 grid grid-cols-4 gap-1">
              {SIZES.map((s) => (
                <button key={s} onClick={() => setSize(s)} className={`rounded-lg border py-1 text-xs font-semibold transition ${size === s ? "border-brand-600 text-brand-700 dark:text-brand-300" : "border-slate-200 text-slate-500 dark:border-slate-700"}`}>
                  {s}px
                </button>
              ))}
            </div>
          )}
          {(format === "svg" || format === "pdf") && <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{ui.vectorHint}</p>}

          <button onClick={download} disabled={!ready || busy} className="btn-primary mt-4 w-full py-3 text-base">
            <Icon name="download" className="h-5 w-5" /> {ui.download} {format.toUpperCase()}
          </button>
          <div className="mt-2 grid grid-cols-3 gap-2">
            <button onClick={copyImage} disabled={!ready} className="btn-ghost justify-center text-xs">
              <Icon name="copy" className="h-4 w-4" /> {copied ? ui.copied : ui.copy}
            </button>
            <button onClick={print} disabled={!ready} className="btn-ghost justify-center text-xs">
              <Icon name="print" className="h-4 w-4" /> {ui.print}
            </button>
            <button onClick={saveDesign} className="btn-ghost justify-center text-xs">
              <Icon name="save" className="h-4 w-4" /> {ui.saveDesign}
            </button>
          </div>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs font-medium text-emerald-700 dark:text-emerald-400">
            <Icon name="infinity" className="h-4 w-4" /> {ui.neverExpires}
          </p>
        </div>
      </aside>
    </div>
  );
}

function Status({ tone, icon, text }: { tone: "green" | "red" | "amber" | "slate"; icon: string; text: string }) {
  const c = {
    green: "bg-emerald-50 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300",
    red: "bg-rose-50 text-rose-800 dark:bg-rose-950/50 dark:text-rose-300",
    amber: "bg-amber-50 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300",
    slate: "bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
  }[tone];
  return (
    <div className={`flex items-start gap-2 rounded-xl px-3 py-2 font-medium ${c}`} role="status">
      <Icon name={icon} className="mt-0.5 h-4 w-4 shrink-0" />
      <span>{text}</span>
    </div>
  );
}

function FieldInput({ f, dict, value, onChange }: { f: Field; dict: Dict; value: string; onChange: (v: string) => void }) {
  const label = (dict.f as Record<string, string>)[f.label] || f.label;
  const optLabel = (l: string) => (l.startsWith("=") ? l.slice(1) : (dict.f as Record<string, string>)[l] || l);
  const span = f.half ? "" : "sm:col-span-2";
  if (f.kind === "checkbox")
    return (
      <label className={`flex cursor-pointer items-center gap-2 self-end pb-3 text-sm font-medium ${span}`}>
        <input type="checkbox" className="h-4 w-4 accent-brand-600" checked={value === "1"} onChange={(e) => onChange(e.target.checked ? "1" : "")} />
        {label}
      </label>
    );
  return (
    <label className={`block ${span}`}>
      <span className="label">
        {label}
        {f.required && <span className="text-rose-500"> *</span>}
      </span>
      {f.kind === "textarea" ? (
        <textarea className="input min-h-[96px]" value={value} placeholder={f.placeholder} onChange={(e) => onChange(e.target.value)} />
      ) : f.kind === "select" ? (
        <select className="input" value={value || f.def} onChange={(e) => onChange(e.target.value)}>
          {f.options!.map((o) => (
            <option key={o.value} value={o.value}>
              {optLabel(o.label)}
            </option>
          ))}
        </select>
      ) : (
        <input
          className="input"
          type={f.kind === "password" ? "text" : f.kind}
          inputMode={f.kind === "number" ? "decimal" : undefined}
          value={value}
          placeholder={f.placeholder}
          autoComplete="off"
          spellCheck={false}
          dir={f.kind === "url" || f.kind === "email" || f.kind === "tel" ? "ltr" : undefined}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </label>
  );
}
