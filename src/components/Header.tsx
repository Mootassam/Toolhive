import Link from "next/link";
import Icon from "./Icon";
import LangSwitch from "./LangSwitch";
import ThemeToggle from "./ThemeToggle";
import { SITE, type Locale } from "@/lib/site";
import type { Dict } from "@/lib/i18n";

export function Logo() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fcd34d" />
          <stop offset="1" stopColor="#d97706" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#lg)" />
      <path d="M8 8h6v6H8zM18 8h6v6h-6zM8 18h6v6H8z" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M18 18h2.5v2.5H18zM21.5 21.5H24V24h-2.5z" fill="#fff" />
    </svg>
  );
}

export default function Header({ locale, dict }: { locale: Locale; dict: Dict }) {
  const n = dict.nav;
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4">
        <Link href={`/${locale}`} className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
          <Logo />
          <span>{SITE.name}</span>
        </Link>
        <nav className="ms-4 hidden items-center gap-1 md:flex">
          <Link href={`/${locale}`} className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white">{n.generator}</Link>
          <Link href={`/${locale}/qr-code-scanner`} className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white">{n.scanner}</Link>
          <Link href={`/${locale}/bulk-qr-code-generator`} className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white">{n.bulk}</Link>
          <Link href={`/${locale}/barcode-generator`} className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white">{n.barcode}</Link>
        </nav>
        <div className="ms-auto flex items-center gap-2">
          <LangSwitch locale={locale} label={n.language} />
          <ThemeToggle label={n.theme} />
        </div>
      </div>
      <nav className="no-scrollbar flex gap-1 overflow-x-auto border-t border-slate-100 px-3 py-1.5 md:hidden dark:border-slate-800">
        <Link href={`/${locale}`} className="shrink-0 rounded-lg px-3 py-1.5 text-sm font-semibold">{n.generator}</Link>
        <Link href={`/${locale}/qr-code-scanner`} className="flex shrink-0 items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-semibold"><Icon name="camera" className="h-4 w-4" />{n.scanner}</Link>
        <Link href={`/${locale}/bulk-qr-code-generator`} className="shrink-0 rounded-lg px-3 py-1.5 text-sm font-semibold">{n.bulk}</Link>
        <Link href={`/${locale}/barcode-generator`} className="shrink-0 rounded-lg px-3 py-1.5 text-sm font-semibold">{n.barcode}</Link>
      </nav>
    </header>
  );
}
