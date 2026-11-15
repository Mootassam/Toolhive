"use client";
import Icon from "./Icon";

export default function ThemeToggle({ label }: { label: string }) {
  return (
    <button
      onClick={() => {
        const dark = !document.documentElement.classList.contains("dark");
        document.documentElement.classList.toggle("dark", dark);
        try { localStorage.setItem("th.theme", dark ? "dark" : "light"); } catch { /* ignore */ }
      }}
      className="rounded-xl border border-slate-200 bg-white p-2 text-slate-600 transition hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
      aria-label={label}
      title={label}
    >
      <Icon name="moon" className="h-4 w-4 dark:hidden" />
      <Icon name="sun" className="hidden h-4 w-4 dark:block" />
    </button>
  );
}

