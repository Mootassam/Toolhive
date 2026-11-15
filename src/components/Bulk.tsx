"use client";
import { useEffect, useMemo, useState } from "react";
import Icon from "./Icon";
import DesignPanel from "./DesignPanel";
import type { Dict } from "@/lib/i18n";
import { fmtc } from "@/lib/fmt";
import { renderSvg, svgToDataUrl, DEFAULT_DESIGN, type Design } from "@/lib/qrRender";
import { exportBlob, downloadBlob, safeLS, setLS, type Format } from "@/lib/exporter";

const MAX = 1000;
const LS_DESIGN = "th.design.v1";

function parseLines(raw: string) {
  return raw
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean)
    .slice(0, MAX)
    .map((l, i) => {
      // optional 2nd column = file name: "https://site.com/a, table-1"  or tab-separated
      let content = l, name = "";
      const tab = l.split(String.fromCharCode(9));
      if (tab.length > 1) {
        content = tab[0];
        name = tab[1];
      } else {
        const m = /^(\S*(?::\/\/|www\.)\S*?)\s*[,;]\s*([^\s,;]{1,60})$/i.exec(l);
        if (m) {
          content = m[1];
          name = m[2];
        }
      }
      content = content.replace(/^"|"$/g, "");
      name = (name || `qr-${String(i + 1).padStart(4, "0")}`).replace(/[^\w\-.]+/g, "-");
      return { content, name };
    });
}

export default function Bulk({ dict }: { dict: Dict }) {
  const t = dict.bulk;
  const [raw, setRaw] = useState("https://example.com/menu\nhttps://example.com/table-2, table-2\nHello world");
  const [design, setDesign] = useState<Design>(DEFAULT_DESIGN);
  const [format, setFormat] = useState<Format>("png");
  const [size, setSize] = useState(1024);
  const [progress, setProgress] = useState<{ i: number; n: number } | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => setDesign((d) => ({ ...d, ...safeLS<Partial<Design>>(LS_DESIGN, {}) })), []);
  const set = (p: Partial<Design>) => setDesign((d) => { const n = { ...d, ...p }; setLS(LS_DESIGN, n); return n; });

  const rows = useMemo(() => parseLines(raw), [raw]);
  const preview = useMemo(() => {
    try { return svgToDataUrl(renderSvg(rows[0]?.content || "preview", design).svg); } catch { return ""; }
  }, [rows, design]);

  const run = async () => {
    if (!rows.length) return;
    setDone(false);
    const { default: JSZip } = await import("jszip");
    const zip = new JSZip();
    const used = new Set<string>();
    for (let i = 0; i < rows.length; i++) {
      setProgress({ i: i + 1, n: rows.length });
      let name = rows[i].name;
      while (used.has(name)) name += "-1";
      used.add(name);
      try {
        const blob = await exportBlob(renderSvg(rows[i].content, design), format, size);
        zip.file(`${name}.${format}`, blob);
      } catch {
        /* skip rows that are too long */
      }
      if (i % 10 === 0) await new Promise((r) => setTimeout(r, 0));
    }
    const out = await zip.generateAsync({ type: "blob" });
    downloadBlob(out, `qr-codes-${rows.length}.zip`);
    setProgress(null);
    setDone(true);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
      <div className="space-y-6">
        <section className="card">
          <h2 className="step">{t.input}</h2>
          <textarea dir="ltr" className="input min-h-[220px] font-mono text-sm" value={raw} onChange={(e) => setRaw(e.target.value)} spellCheck={false} />
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm">
            <label className="btn-ghost cursor-pointer">
              <Icon name="upload" className="h-4 w-4" /> {t.csv}
              <input
                type="file"
                accept=".csv,.txt,text/csv,text/plain"
                className="hidden"
                onChange={async (e) => {
                  const f = e.target.files?.[0];
                  if (f) setRaw(await f.text());
                  e.target.value = "";
                }}
              />
            </label>
            <span className="font-semibold text-brand-700 dark:text-brand-300">{fmtc(t.count, { n: rows.length })}</span>
          </div>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{t.csvHint} · {t.max}</p>
        </section>
        <section className="card">
          <h2 className="step">{dict.ui.step2}</h2>
          <DesignPanel design={design} set={set} ui={dict.ui} compact />
        </section>
      </div>
      <aside className="lg:sticky lg:top-20 lg:self-start">
        <div className="card">
          <div className="mx-auto flex aspect-square max-w-[300px] items-center justify-center rounded-2xl bg-slate-50 p-3 dark:bg-slate-800/60">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {preview && <img src={preview} alt="QR preview" className="max-h-full max-w-full" />}
          </div>
          <div className="label mt-4">{t.format}</div>
          <div className="grid grid-cols-3 gap-1 rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
            {(["png", "svg", "jpg"] as Format[]).map((f) => (
              <button key={f} onClick={() => setFormat(f)} className={`rounded-lg py-1.5 text-xs font-bold uppercase ${format === f ? "bg-white text-brand-700 shadow-sm dark:bg-slate-950 dark:text-brand-300" : "text-slate-600 dark:text-slate-300"}`}>{f}</button>
            ))}
          </div>
          {format !== "svg" && (
            <div className="mt-2 grid grid-cols-3 gap-1">
              {[512, 1024, 2048].map((s) => (
                <button key={s} onClick={() => setSize(s)} className={`rounded-lg border py-1 text-xs font-semibold ${size === s ? "border-brand-600 text-brand-700 dark:text-brand-300" : "border-slate-200 text-slate-500 dark:border-slate-700"}`}>{s}px</button>
              ))}
            </div>
          )}
          <button onClick={run} disabled={!rows.length || !!progress} className="btn-primary mt-4 w-full py-3 text-base">
            <Icon name="zip" className="h-5 w-5" /> {progress ? fmtc(t.working, progress) : t.generate}
          </button>
          {progress && (
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div className="h-full bg-brand-600 transition-all" style={{ width: `${(progress.i / progress.n) * 100}%` }} />
            </div>
          )}
          {done && <p className="mt-3 text-center text-sm font-semibold text-emerald-700 dark:text-emerald-400">{t.done}</p>}
        </div>
      </aside>
    </div>
  );
}
