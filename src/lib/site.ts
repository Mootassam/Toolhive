// One place to change the brand name and domain.
export const SITE = {
  name: "QRHoney",
  // Set NEXT_PUBLIC_SITE_URL in Vercel once you have a domain (no trailing slash).
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://qrhoney.com").replace(/\/$/, ""),
  contactEmail: "hello@example.com",
};

export const LOCALES = ["en", "es", "pt", "fr", "de", "ar", "hi", "id", "tr", "ru"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";
export const RTL: Locale[] = ["ar"];

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English", es: "Español", pt: "Português", fr: "Français", de: "Deutsch",
  ar: "العربية", hi: "हिन्दी", id: "Bahasa Indonesia", tr: "Türkçe", ru: "Русский",
};

// hreflang codes
export const HREFLANG: Record<Locale, string> = {
  en: "en", es: "es", pt: "pt", fr: "fr", de: "de", ar: "ar", hi: "hi", id: "id", tr: "tr", ru: "ru",
};

export function isLocale(x: string): x is Locale {
  return (LOCALES as readonly string[]).includes(x);
}
