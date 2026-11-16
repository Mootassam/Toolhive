import Link from "next/link";
import Icon from "./Icon";
import { Logo } from "./Header";
import { fmt, type Dict } from "@/lib/i18n";
import { QR_TYPES } from "@/lib/qrTypes";
import { TOOLS } from "@/lib/tools";
import { SITE, type Locale } from "@/lib/site";

export function TypeGrid({ dict, locale }: { dict: Dict; locale: Locale }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">{dict.ui.allTypes}</h2>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {QR_TYPES.map((t) => (
          <Link key={t.id} href={`/${locale}/${t.slug}`} className="group flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-300">
              <Icon name={t.icon} />
            </span>
            <span>
              <span className="block font-bold group-hover:text-brand-700 dark:group-hover:text-brand-300">{fmt(dict.type.h1, { name: dict.types[t.id].name })}</span>
              <span className="mt-0.5 block text-sm text-slate-500 dark:text-slate-400">{dict.types[t.id].desc}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

/** All tools, grouped — used on the /tools hub and as "More free tools" under every page. */
export function ToolGrid({ dict, locale, exclude, title, h1 = false }: { dict: Dict; locale: Locale; exclude?: string; title?: string; h1?: boolean }) {
  const t = dict.tools;
  const qr = [
    { href: "", name: dict.nav.generator, desc: dict.features.items[1].d, icon: "grid" },
    { href: "/qr-code-scanner", name: dict.scanner.h1, desc: dict.scanner.sub, icon: "camera" },
    { href: "/bulk-qr-code-generator", name: dict.bulk.h1, desc: dict.bulk.sub, icon: "layers" },
    { href: "/barcode-generator", name: dict.barcode.h1, desc: dict.barcode.sub, icon: "sliders" },
  ];
  const groups = [
    { title: t.groups.image, items: TOOLS.filter((x) => x.group === "image").map((x) => ({ href: `/${x.slug}`, name: t.items[x.id].name, desc: t.items[x.id].desc, icon: x.icon })) },
    { title: t.groups.pdf, items: TOOLS.filter((x) => x.group === "pdf").map((x) => ({ href: `/${x.slug}`, name: t.items[x.id].name, desc: t.items[x.id].desc, icon: x.icon })) },
    { title: t.groups.qr, items: qr },
  ];
  const H = h1 ? "h2" : "h3";
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      {title && <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>}
      <div className="space-y-10 pt-10">
        {groups.map((g) => (
          <div key={g.title}>
            <H className="mb-4 text-sm font-extrabold uppercase tracking-[.14em] text-slate-500 dark:text-slate-400">{g.title}</H>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {g.items
                .filter((it) => it.href !== exclude)
                .map((it) => (
                  <Link key={it.href} href={`/${locale}${it.href}`} className="group flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-300">
                      <Icon name={it.icon} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-bold group-hover:text-brand-700 dark:group-hover:text-brand-300">{it.name}</span>
                      <span className="mt-0.5 line-clamp-2 block text-sm text-slate-500 dark:text-slate-400">{it.desc}</span>
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const FEAT_ICONS =["infinity", "palette", "frame", "download", "layers", "shield"];

export function Features({ dict }: { dict: Dict }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="mx-auto max-w-3xl text-center text-3xl font-extrabold tracking-tight sm:text-4xl">{dict.features.title}</h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {dict.features.items.map((f, i) => (
          <div key={i} className="card">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-cyan-500 text-white shadow-soft">
              <Icon name={FEAT_ICONS[i]} />
            </span>
            <h3 className="mt-4 text-lg font-bold">{f.t}</h3>
            <p className="mt-1.5 text-slate-600 dark:text-slate-400">{f.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Compare({ dict }: { dict: Dict }) {
  const c = dict.compare;
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">{fmt(c.title)}</h2>
      <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <table className="w-full text-sm sm:text-base">
          <thead>
            <tr className="bg-slate-50 text-start dark:bg-slate-800/60">
              <th className="px-4 py-3 text-start font-bold">{c.feature}</th>
              <th className="px-4 py-3 text-center font-extrabold text-brand-700 dark:text-brand-300">{fmt(c.us)}</th>
              <th className="px-4 py-3 text-center font-bold text-slate-500">{c.them}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {c.rows.map((r, i) => (
              <tr key={i}>
                <td className="px-4 py-3 font-medium">{r}</td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                    <Icon name="check" className="h-4 w-4" strokeWidth={3} />
                  </span>
                </td>
                <td className="px-4 py-3 text-center text-slate-500 dark:text-slate-400">{c.themVals[i]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function HowTo({ dict }: { dict: Dict }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">{dict.howto.title}</h2>
      <ol className="mt-10 grid gap-5 md:grid-cols-3">
        {dict.howto.steps.map((s, i) => (
          <li key={i} className="card relative">
            <span className="absolute -top-4 start-6 flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-lg font-extrabold text-white shadow-soft">{i + 1}</span>
            <h3 className="mt-3 text-lg font-bold">{s.t}</h3>
            <p className="mt-1.5 text-slate-600 dark:text-slate-400">{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

type QA = { q: string; a: string };

export function Faq({ dict, items = dict.faq.items }: { dict: Dict; items?: QA[] }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">{dict.faq.title}</h2>
      <div className="mt-10 space-y-3">
        {items.map((f, i) => (
          <details key={i} className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-soft dark:border-slate-800 dark:bg-slate-900" open={i === 0}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
              <h3>{f.q}</h3>
              <Icon name="chevron" className="h-5 w-5 shrink-0 transition group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-slate-600 dark:text-slate-400">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Footer({ dict, locale }: { dict: Dict; locale: Locale }) {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-[1.2fr_2fr]">
        <div>
          <div className="flex items-center gap-2 text-lg font-extrabold">
            <Logo /> {SITE.name}
          </div>
          <p className="mt-3 max-w-xs text-sm text-slate-500 dark:text-slate-400">{dict.footer.tagline}</p>
          <p className="mt-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400">{dict.footer.madeFree}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
          {QR_TYPES.map((t) => (
            <Link key={t.id} href={`/${locale}/${t.slug}`} className="text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-300">
              {fmt(dict.type.h1, { name: dict.types[t.id].name })}
            </Link>
          ))}
          <Link href={`/${locale}/qr-code-scanner`} className="text-slate-600 hover:text-brand-600 dark:text-slate-400">{dict.nav.scanner}</Link>
          <Link href={`/${locale}/bulk-qr-code-generator`} className="text-slate-600 hover:text-brand-600 dark:text-slate-400">{dict.nav.bulk}</Link>
          <Link href={`/${locale}/barcode-generator`} className="text-slate-600 hover:text-brand-600 dark:text-slate-400">{dict.barcode.h1}</Link>
          {TOOLS.map((t) => (
            <Link key={t.id} href={`/${locale}/${t.slug}`} className="text-slate-600 hover:text-brand-600 dark:text-slate-400">{dict.tools.items[t.id].name}</Link>
          ))}
          <Link href={`/${locale}/tools`} className="font-semibold text-brand-700 hover:text-brand-600 dark:text-brand-300">{dict.nav.tools} →</Link>
        </div>
      </div>
      <div className="border-t border-slate-100 dark:border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-5 text-sm text-slate-500">
          <span>© {new Date().getFullYear()} {SITE.name}. {dict.footer.rights}</span>
          <span className="flex gap-4">
            <Link href={`/${locale}/privacy`} className="hover:text-brand-600">{dict.footer.privacy}</Link>
            <Link href={`/${locale}/terms`} className="hover:text-brand-600">{dict.footer.terms}</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function faqLd(dict: Dict, items: QA[] = dict.faq.items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function appLd(name: string, description: string, url: string, locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url,
    inLanguage: locale,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };
}
