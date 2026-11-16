"use client";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import type { Dict } from "@/lib/i18n";

function matches(f: File, accept: string) {
  return accept.split(",").some((a) => {
    a = a.trim().toLowerCase();
    if (!a) return false;
    if (a.startsWith(".")) return f.name.toLowerCase().endsWith(a);
    if (a.endsWith("/*")) return f.type.toLowerCase().startsWith(a.slice(0, -1));
    return f.type.toLowerCase() === a;
  });
}

/** Big drop zone: click, drag & drop or paste (Ctrl+V). Only files matching `accept` are passed on. */
export default function FileDrop({ accept, multiple, onFiles, ui, compact = false, hint }: { accept: string; multiple: boolean; onFiles: (f: File[]) => void; ui: Dict["tools"]["ui"]; compact?: boolean; hint?: string }) {
  const input = useRef<HTMLInputElement>(null);
  const [over, setOver] = useState(false);
  const [wrong, setWrong] = useState(false);

  const take = (list: FileList | File[] | null | undefined) => {
    const all = Array.from(list || []);
    const ok = all.filter((f) => matches(f, accept));
    setWrong(all.length > 0 && ok.length < all.length);
    if (ok.length) onFiles(multiple ? ok : ok.slice(0, 1));
  };

  useEffect(() => {
    const onPaste = (e: ClipboardEvent) => {
      const files = Array.from(e.clipboardData?.files || []);
      if (files.length) take(files);
    };
    window.addEventListener("paste", onPaste);
    return () => window.removeEventListener("paste", onPaste);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accept, multiple]);

  return (
    <div>
      <button
        type="button"
        onClick={() => input.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setOver(true);
        }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setOver(false);
          take(e.dataTransfer.files);
        }}
        className={`flex w-full flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed text-center transition ${compact ? "px-4 py-5" : "px-6 py-12"} ${over ? "border-brand-500 bg-brand-50 dark:bg-brand-950/40" : "border-slate-300 bg-white hover:border-brand-400 hover:bg-brand-50/40 dark:border-slate-700 dark:bg-slate-900/70 dark:hover:bg-slate-900"}`}
      >
        <span className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white shadow-soft ${compact ? "h-10 w-10" : "h-14 w-14"}`}>
          <Icon name="upload" className={compact ? "h-5 w-5" : "h-7 w-7"} />
        </span>
        <span className={`font-extrabold ${compact ? "text-base" : "text-xl"}`}>{multiple ? ui.chooseFiles : ui.chooseFile}</span>
        {!compact && <span className="text-sm text-slate-500 dark:text-slate-400">{ui.dropHint}</span>}
        {hint && !compact && <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{hint}</span>}
      </button>
      {wrong && <p className="mt-2 text-sm font-semibold text-amber-700 dark:text-amber-400">{ui.wrongType}</p>}
      <input
        ref={input}
        type="file"
        accept={accept}
        multiple={multiple}
        className="hidden"
        onChange={(e) => {
          take(e.target.files);
          e.target.value = "";
        }}
      />
    </div>
  );
}
