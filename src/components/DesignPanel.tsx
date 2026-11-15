"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Icon from "./Icon";
import type { Dict } from "@/lib/i18n";
import {
  renderSvg, eyeSvg, dotSvg, svgToDataUrl, DEFAULT_DESIGN,
  type Design, type DotStyle, type EyeFrameStyle, type EyeBallStyle, type FrameStyle, type Ecc,
} from "@/lib/qrRender";
import { TEMPLATES, LOGO_ICONS } from "@/lib/presets";
import { readLogo } from "@/lib/exporter";

const DOTS: DotStyle[] = ["square", "rounded", "extra-rounded", "dots", "classy", "diamond", "small-square", "vertical", "horizontal"];
const EYE_F: EyeFrameStyle[] = ["square", "rounded", "extra-rounded", "circle", "leaf"];
const EYE_B: EyeBallStyle[] = ["square", "rounded", "circle", "leaf", "diamond"];
const FRAMES: FrameStyle[] = ["none", "bottom", "top", "pill", "balloon", "border"];
const SWATCHES = ["#000000", "#111827", "#1d4ed8", "#2563eb", "#0891b2", "#059669", "#16a34a", "#ca8a04", "#ea580c", "#dc2626", "#db2777", "#7c3aed"];

type Tab = "templates" | "shapes" | "colors" | "logo" | "frame" | "advanced";

export default function DesignPanel({ design, set, ui, compact = false }: { design: Design; set: (p: Partial<Design>) => void; ui: Dict["ui"]; compact?: boolean }) {
  const [tab, setTab] = useState<Tab>("templates");
  const fileRef = useRef<HTMLInputElement>(null);

  const thumbs = useMemo(
    () => TEMPLATES.map((t) => ({ id: t.id, d: t.d, src: svgToDataUrl(renderSvg("https://toolhive.app", { ...DEFAULT_DESIGN, ...t.d, frameText: "SCAN ME", margin: 2 }).svg) })),
    [],
  );
  const frameThumbs = useMemo(
    () => FRAMES.map((f) => ({ f, src: svgToDataUrl(renderSvg("hi", { ...DEFAULT_DESIGN, frame: f, frameText: "SCAN ME", fg: "#334155", frameColor: "#334155", margin: 2 }).svg) })),
    [],
  );

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: "templates", label: ui.templates, icon: "sparkles" },
    { id: "shapes", label: ui.shapes, icon: "grid" },
    { id: "colors", label: ui.colors, icon: "palette" },
    { id: "logo", label: ui.logo, icon: "image" },
    { id: "frame", label: ui.frame, icon: "frame" },
    { id: "advanced", label: ui.advanced, icon: "sliders" },
  ];

  return (
    <div>
      <div role="tablist" className="no-scrollbar -mx-1 flex gap-1 overflow-x-auto px-1 pb-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-semibold transition ${
              tab === t.id ? "bg-brand-600 text-white shadow-soft" : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            }`}
          >
            <Icon name={t.icon} className="h-4 w-4" />
            {t.label}
          </button>
        ))}
      </div>

      <div className="pt-2">
        {tab === "templates" && (
          <div className={`grid gap-3 ${compact ? "grid-cols-4 sm:grid-cols-5" : "grid-cols-3 sm:grid-cols-5"}`}>
            {thumbs.map((t) => (
              <button
                key={t.id}
                onClick={() => set({ ...t.d })}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 transition hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-soft dark:border-slate-700 dark:bg-slate-900"
                aria-label={t.id}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.src} alt="" className="mx-auto aspect-square w-full object-contain" loading="lazy" />
              </button>
            ))}
          </div>
        )}

        {tab === "shapes" && (
          <div className="space-y-5">
            <Group label={ui.dots}>
              <div className="grid grid-cols-5 gap-2 sm:grid-cols-9">
                {DOTS.map((s) => (
                  <Pick key={s} active={design.dot === s} onClick={() => set({ dot: s })} label={s} html={dotSvg(s)} />
                ))}
              </div>
            </Group>
            <Group label={ui.eyeFrame}>
              <div className="grid grid-cols-5 gap-2">
                {EYE_F.map((s) => (
                  <Pick key={s} active={design.eyeFrame === s} onClick={() => set({ eyeFrame: s })} label={s} html={eyeSvg(s, design.eyeBall, "frame")} />
                ))}
              </div>
            </Group>
            <Group label={ui.eyeBall}>
              <div className="grid grid-cols-5 gap-2">
                {EYE_B.map((s) => (
                  <Pick key={s} active={design.eyeBall === s} onClick={() => set({ eyeBall: s })} label={s} html={eyeSvg(design.eyeFrame, s, "ball")} />
                ))}
              </div>
            </Group>
          </div>
        )}

        {tab === "colors" && (
          <div className="space-y-5">
            <Group label={ui.gradient}>
              <Seg
                value={design.gradient}
                options={[["none", ui.none], ["linear", ui.linear], ["radial", ui.radial]]}
                onChange={(v) => set({ gradient: v as Design["gradient"] })}
              />
            </Group>
            <div className="grid gap-4 sm:grid-cols-2">
              <ColorField label={ui.foreground} value={design.fg} onChange={(v) => set({ fg: v })} />
              {design.gradient !== "none" && <ColorField label={ui.second} value={design.fg2} onChange={(v) => set({ fg2: v })} />}
            </div>
            {design.gradient === "linear" && (
              <Range label={`${ui.angle}: ${design.gradAngle}°`} min={0} max={360} step={15} value={design.gradAngle} onChange={(v) => set({ gradAngle: v })} />
            )}
            <div className="flex flex-wrap gap-2">
              {SWATCHES.map((c) => (
                <button key={c} onClick={() => set({ fg: c })} className="h-8 w-8 rounded-full ring-2 ring-white ring-offset-1 ring-offset-slate-200 transition hover:scale-110 dark:ring-slate-900 dark:ring-offset-slate-700" style={{ background: c }} aria-label={c} />
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <ColorField label={ui.eyeColor} value={design.eyeColor || design.fg} onChange={(v) => set({ eyeColor: v })} reset={design.eyeColor ? () => set({ eyeColor: "", eyeBallColor: "" }) : undefined} resetLabel={ui.sameAsDots} />
              <ColorField label={ui.eyeBall} value={design.eyeBallColor || design.eyeColor || design.fg} onChange={(v) => set({ eyeBallColor: v })} reset={design.eyeBallColor ? () => set({ eyeBallColor: "" }) : undefined} resetLabel={ui.sameAsDots} />
            </div>
            <div className="grid items-end gap-4 sm:grid-cols-2">
              <ColorField label={ui.background} value={design.bg} onChange={(v) => set({ bg: v, transparent: false })} />
              <label className="flex cursor-pointer items-center gap-2 pb-2 text-sm font-medium">
                <input type="checkbox" className="h-4 w-4 accent-brand-600" checked={design.transparent} onChange={(e) => set({ transparent: e.target.checked })} />
                {ui.transparent}
              </label>
            </div>
          </div>
        )}

        {tab === "logo" && (
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <button onClick={() => fileRef.current?.click()} className="btn-primary">
                <Icon name="upload" className="h-4 w-4" /> {ui.uploadLogo}
              </button>
              {design.logo && (
                <button onClick={() => set({ logo: null })} className="btn-ghost">
                  <Icon name="trash" className="h-4 w-4" /> {ui.removeLogo}
                </button>
              )}
              <input
                ref={fileRef}
                type="file"
                accept="image/png,image/jpeg,image/svg+xml,image/webp,image/gif"
                className="hidden"
                onChange={async (e) => {
                  const f = e.target.files?.[0];
                  if (f) set({ logo: await readLogo(f), ecc: design.ecc === "L" || design.ecc === "M" ? "H" : design.ecc });
                  e.target.value = "";
                }}
              />
            </div>
            <Group label={ui.orPickIcon}>
              <div className="grid grid-cols-6 gap-2 sm:grid-cols-12">
                {LOGO_ICONS.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => set({ logo: l.src, ecc: "H" })}
                    className={`rounded-xl border p-1.5 transition hover:border-brand-400 ${design.logo === l.src ? "border-brand-600 ring-2 ring-brand-200 dark:ring-brand-900" : "border-slate-200 dark:border-slate-700"}`}
                    aria-label={l.id}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={l.src} alt="" className="aspect-square w-full" />
                  </button>
                ))}
              </div>
            </Group>
            {design.logo && (
              <>
                <Range label={`${ui.logoSize}: ${Math.round(design.logoSize * 100)}%`} min={0.12} max={0.32} step={0.01} value={design.logoSize} onChange={(v) => set({ logoSize: v })} />
                <label className="flex cursor-pointer items-center gap-2 text-sm font-medium">
                  <input type="checkbox" className="h-4 w-4 accent-brand-600" checked={design.logoBg} onChange={(e) => set({ logoBg: e.target.checked })} />
                  {ui.clearBehindLogo}
                </label>
              </>
            )}
          </div>
        )}

        {tab === "frame" && (
          <div className="space-y-5">
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
              {frameThumbs.map(({ f, src }) => (
                <button
                  key={f}
                  onClick={() => set({ frame: f })}
                  className={`flex aspect-square items-center justify-center rounded-xl border bg-white p-2 transition hover:border-brand-400 dark:bg-slate-100 ${design.frame === f ? "border-brand-600 ring-2 ring-brand-200 dark:ring-brand-800" : "border-slate-200 dark:border-slate-700"}`}
                  aria-label={f}
                >
                  {f === "none" ? (
                    <span className="text-xs font-semibold text-slate-500">{ui.none}</span>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={src} alt="" className="max-h-full max-w-full" />
                  )}
                </button>
              ))}
            </div>
            {design.frame !== "none" && (
              <>
                <label className="block">
                  <span className="label">{ui.frameText}</span>
                  <input className="input" maxLength={40} value={design.frameText} onChange={(e) => set({ frameText: e.target.value })} />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <ColorField label={ui.frameColor} value={design.frameColor} onChange={(v) => set({ frameColor: v })} />
                  {design.frame !== "border" && <ColorField label={ui.textColor} value={design.frameTextColor} onChange={(v) => set({ frameTextColor: v })} />}
                </div>
              </>
            )}
          </div>
        )}

        {tab === "advanced" && (
          <div className="space-y-5">
            <Group label={ui.ecc}>
              <Seg
                value={design.ecc}
                options={[["L", ui.eccL], ["M", ui.eccM], ["Q", ui.eccQ], ["H", ui.eccH]]}
                onChange={(v) => set({ ecc: v as Ecc })}
              />
            </Group>
            <Range label={`${ui.margin}: ${design.margin}`} min={0} max={8} step={1} value={design.margin} onChange={(v) => set({ margin: v })} />
            <button onClick={() => set({ ...DEFAULT_DESIGN })} className="btn-ghost">
              {ui.reset}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="label">{label}</div>
      {children}
    </div>
  );
}

function Pick({ active, onClick, label, html }: { active: boolean; onClick: () => void; label: string; html: string }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      title={label}
      className={`aspect-square rounded-xl border p-2 transition hover:border-brand-400 ${
        active ? "border-brand-600 bg-brand-50 text-brand-700 ring-2 ring-brand-200 dark:bg-brand-950/40 dark:text-brand-300 dark:ring-brand-800" : "border-slate-200 text-slate-700 dark:border-slate-700 dark:text-slate-200"
      }`}
    >
      <span className="block h-full w-full [&>svg]:h-full [&>svg]:w-full" dangerouslySetInnerHTML={{ __html: html }} />
    </button>
  );
}

function Seg({ value, options, onChange }: { value: string; options: [string, string][]; onChange: (v: string) => void }) {
  return (
    <div className="inline-flex flex-wrap gap-1 rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
      {options.map(([v, l]) => (
        <button
          key={v}
          onClick={() => onChange(v)}
          className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition ${value === v ? "bg-white text-brand-700 shadow-sm dark:bg-slate-950 dark:text-brand-300" : "text-slate-600 dark:text-slate-300"}`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function Range({ label, min, max, step, value, onChange }: { label: string; min: number; max: number; step: number; value: number; onChange: (v: number) => void }) {
  return (
    <label className="block">
      <span className="label">{label}</span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-brand-600" />
    </label>
  );
}

function ColorField({ label, value, onChange, reset, resetLabel }: { label: string; value: string; onChange: (v: string) => void; reset?: () => void; resetLabel?: string }) {
  const [txt, setTxt] = useState(value);
  useEffect(() => setTxt(value), [value]);
  return (
    <label className="block">
      <span className="label flex items-center justify-between">
        {label}
        {reset && (
          <button type="button" onClick={reset} className="text-xs font-medium text-brand-600 hover:underline dark:text-brand-400">
            {resetLabel}
          </button>
        )}
      </span>
      <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-1.5 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-100 dark:border-slate-700 dark:bg-slate-900 dark:focus-within:ring-brand-900">
        <input type="color" value={value} onChange={(e) => { onChange(e.target.value); setTxt(e.target.value); }} className="h-8 w-10 cursor-pointer rounded-lg border-0 bg-transparent p-0" />
        <input
          value={txt}
          onChange={(e) => {
            const v = e.target.value.trim();
            setTxt(v);
            if (/^#[0-9a-f]{6}$/i.test(v)) onChange(v);
          }}
          className="w-full bg-transparent font-mono text-sm uppercase outline-none"
          spellCheck={false}
        />
      </div>
    </label>
  );
}
