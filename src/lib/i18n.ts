import en, { type Dict } from "@/i18n/en";
import es from "@/i18n/es";
import pt from "@/i18n/pt";
import fr from "@/i18n/fr";
import de from "@/i18n/de";
import ar from "@/i18n/ar";
import hi from "@/i18n/hi";
import id from "@/i18n/id";
import tr from "@/i18n/tr";
import ru from "@/i18n/ru";
import { SITE, type Locale, LOCALES, HREFLANG } from "./site";

const DICTS: Record<Locale, Dict> = { en, es, pt, fr, de, ar, hi, id, tr, ru };

export function getDict(l: Locale): Dict {
  return DICTS[l] || en;
}

export function fmt(s: string, vars: Record<string, string | number> = {}) {
  return s.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? String(vars[k]) : k === "brand" ? SITE.name : `{${k}}`));
}

/** canonical + hreflang alternates for a path that comes after /{locale} (e.g. "" or "/qr-code-scanner") */
export function alternates(locale: Locale, path: string) {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[HREFLANG[l]] = `${SITE.url}/${l}${path}`;
  languages["x-default"] = `${SITE.url}/en${path}`;
  return { canonical: `${SITE.url}/${locale}${path}`, languages };
}

export type { Dict };
