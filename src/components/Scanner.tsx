"use client";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import type { Dict } from "@/lib/i18n";
import { safeLS, setLS, decodeImage } from "@/lib/exporter";

const LS_HIST = "th.scans.v1";
interface Hit { t: string; at: number }

function parseWifi(s: string) {
  if (!/^WIFI:/i.test(s)) return null;
  const get = (k: string) => {
    const m = new RegExp(`(?:^|;|:)${k}:((?:\\\\.|[^;])*)`, "i").exec(s.slice(5));
    return m ? m[1].replace(/\\(.)/g, "$1") : "";
  };
  return { ssid: get("S"), pass: get("P"), type: get("T") };
}

export default function Scanner({ dict, locale }: { dict: Dict; locale: string }) {
  const t = dict.scanner;
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef(0);
  const [on, setOn] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [hist, setHist] = useState<Hit[]>([]);
  const [copied, setCopied] = useState(false);
  const [drag, setDrag] = useState(false);

  useEffect(() => setHist(safeLS<Hit[]>(LS_HIST, [])), []);

  const found = useCallback((text: string) => {
    setResult(text);
    setErr(null);
    try { navigator.vibrate?.(60); } catch { /* ignore */ }
    setHist((h) => {
      const next = [{ t: text, at: Date.now() }, ...h.filter((x) => x.t !== text)].slice(0, 20);
      setLS(LS_HIST, next);
      return next;
    });
  }, []);

  const stop = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    streamRef.current?.getTracks().forEach((tr) => tr.stop());
    streamRef.current = null;
    setOn(false);
  }, []);

  useEffect(() => stop, [stop]);

  const start = async () => {
    setErr(null);
    setResult(null);
    try {
      const s = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio: false });
      streamRef.current = s;
      const v = videoRef.current!;
      v.srcObject = s;
      await v.play();
      setOn(true);
      let last = 0;
      const tick = (ts: number) => {
        if (!streamRef.current) return;
        if (ts - last > 180 && v.videoWidth) {
          last = ts;
          const r = decodeImage(v, v.videoWidth, v.videoHeight, true);
          if (r) {
            found(r);
            stop();
            return;
          }
        }
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    } catch {
      setErr(t.noCamera);
      stop();
    }
  };

  const fromFile = (file: File) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const r = decodeImage(img, img.naturalWidth, img.naturalHeight);
      URL.revokeObjectURL(url);
      if (r) found(r);
      else {
        setResult(null);
        setErr(t.notFound);
      }
    };
    img.onerror = () => setErr(t.notFound);
    img.src = url;
  };

  useEffect(() => {
    const onPaste = (e: ClipboardEvent) => {
      const f = Array.from(e.clipboardData?.files || []).find((x) => x.type.startsWith("image/"));
      if (f) fromFile(f);
    };
    window.addEventListener("paste", onPaste);
    return () => window.removeEventListener("paste", onPaste);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isUrl = result && /^https?:\/\//i.test(result);
  const wifi = result ? parseWifi(result) : null;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="card">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900">
          <video ref={videoRef} playsInline muted className={`h-full w-full object-cover ${on ? "" : "hidden"}`} />
          {on && <div className="pointer-events-none absolute inset-[18%] rounded-3xl border-4 border-white/80 shadow-[0_0_0_9999px_rgba(0,0,0,.35)]" />}
          {!on && (
            <label
              onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
              onDragLeave={() => setDrag(false)}
              onDrop={(e) => { e.preventDefault(); setDrag(false); const f = e.dataTransfer.files?.[0]; if (f) fromFile(f); }}
              className={`absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-3 border-2 border-dashed p-6 text-center text-slate-300 transition ${drag ? "border-brand-400 bg-brand-500/10" : "border-transparent"}`}
            >
              <Icon name="camera" className="h-12 w-12 opacity-70" />
              <span className="text-sm">{t.drop}</span>
              <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) fromFile(f); e.target.value = ""; }} />
            </label>
          )}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {on ? (
            <button onClick={stop} className="btn-ghost justify-center">{t.stop}</button>
          ) : (
            <button onClick={start} className="btn-primary justify-center"><Icon name="camera" className="h-4 w-4" /> {t.camera}</button>
          )}
          <label className="btn-ghost cursor-pointer justify-center">
            <Icon name="upload" className="h-4 w-4" /> {t.upload}
            <input type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) fromFile(f); e.target.value = ""; }} />
          </label>
        </div>
        {err && <p className="mt-3 rounded-xl bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700 dark:bg-rose-950/50 dark:text-rose-300">{err}</p>}
      </div>

      <div className="space-y-6">
        <div className="card">
          <h2 className="step">{t.result}</h2>
          {result ? (
            <div className="space-y-3">
              {wifi ? (
                <div className="rounded-xl bg-slate-50 p-4 text-sm dark:bg-slate-800">
                  <div className="font-bold">{t.wifiJoin}: {wifi.ssid}</div>
                  {wifi.pass && <div className="mt-1 font-mono">{wifi.pass}</div>}
                </div>
              ) : (
                <pre dir="auto" className="max-h-64 overflow-auto whitespace-pre-wrap break-all rounded-xl bg-slate-50 p-4 text-sm dark:bg-slate-800">{result}</pre>
              )}
              <div className="flex flex-wrap gap-2">
                {isUrl && (
                  <a href={result} target="_blank" rel="noopener noreferrer nofollow" className="btn-primary">
                    <Icon name="link" className="h-4 w-4" /> {t.open}
                  </a>
                )}
                <button
                  className="btn-ghost"
                  onClick={async () => {
                    try { await navigator.clipboard.writeText(wifi?.pass || result); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch { /* ignore */ }
                  }}
                >
                  <Icon name="copy" className="h-4 w-4" /> {copied ? t.copied : t.copy}
                </button>
              </div>
            </div>
          ) : (
            <p className="text-sm text-slate-500 dark:text-slate-400">{t.sub}</p>
          )}
        </div>

        {hist.length > 0 && (
          <div className="card">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="step !mb-0">{t.history}</h2>
              <button className="text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400" onClick={() => { setHist([]); setLS(LS_HIST, []); }}>{t.clear}</button>
            </div>
            <ul className="divide-y divide-slate-100 text-sm dark:divide-slate-800">
              {hist.map((h) => (
                <li key={h.at} className="py-2">
                  <button onClick={() => setResult(h.t)} dir="auto" className="block w-full truncate text-left hover:text-brand-600">{h.t}</button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link href={`/${locale}`} className="btn-ghost w-full justify-center">
          <Icon name="sparkles" className="h-4 w-4" /> {t.makeOwn}
        </Link>
      </div>
    </div>
  );
}
