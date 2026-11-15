"use client";
import { usePathname, useRouter } from "next/navigation";
import Icon from "./Icon";
import { LOCALES, LOCALE_NAMES, type Locale } from "@/lib/site";

export default function LangSwitch({ locale, label }: { locale: Locale; label: string }) {
  const path = usePathname() || "/";
  const router = useRouter();
  return (
    <label className="relative flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-semibold dark:border-slate-700 dark:bg-slate-900">
      <Icon name="globe" className="h-4 w-4 text-slate-500" />
      <span className="sr-only">{label}</span>
      <select
        value={locale}
        onChange={(e) => {
          const next = e.target.value;
          try { document.cookie = `NEXT_LOCALE=${next};path=/;max-age=31536000;samesite=lax`; } catch { /* ignore */ }
          const rest = path.replace(/^\/[a-z]{2}(?=\/|$)/, "");
          router.push(`/${next}${rest}`);
        }}
        className="cursor-pointer appearance-none bg-transparent pe-1 outline-none"
        aria-label={label}
      >
        {LOCALES.map((l) => (
          <option key={l} value={l}>
            {LOCALE_NAMES[l]}
          </option>
        ))}
      </select>
    </label>
  );
}
