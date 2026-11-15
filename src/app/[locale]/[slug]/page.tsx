import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import QrStudio from "@/components/QrStudio";
import Scanner from "@/components/Scanner";
import Bulk from "@/components/Bulk";
import { TypeGrid, Features, Compare, HowTo, Faq, JsonLd, faqLd, appLd } from "@/components/Sections";
import { getDict, alternates, fmt, type Dict } from "@/lib/i18n";
import { TYPE_BY_SLUG } from "@/lib/qrTypes";
import { ALL_SLUGS } from "@/lib/routes";
import { LOCALES, SITE, type Locale } from "@/lib/site";


export const dynamicParams = false;
export function generateStaticParams() {
  return LOCALES.flatMap((locale) => ALL_SLUGS.map((slug) => ({ locale, slug })));
}

type P = { params: Promise<{ locale: Locale; slug: string }> };

function pageText(d: Dict, slug: string): { title: string; meta: string } | null {
  const t = TYPE_BY_SLUG[slug];
  if (t) {
    const name = d.types[t.id].name, desc = d.types[t.id].desc;
    return { title: fmt(d.type.title, { name }), meta: fmt(d.type.meta, { name, desc }) };
  }
  if (slug === "qr-code-scanner") return { title: d.scanner.title, meta: d.scanner.meta };
  if (slug === "bulk-qr-code-generator") return { title: d.bulk.title, meta: d.bulk.meta };
  if (slug === "privacy") return { title: d.legal.privacyTitle, meta: d.legal.privacy[0] };
  if (slug === "terms") return { title: d.legal.termsTitle, meta: d.legal.terms[0] };
  return null;
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { locale, slug } = await params;
  const d = getDict(locale);
  const p = pageText(d, slug);
  if (!p) return {};
  const legal = slug === "privacy" || slug === "terms";
  return {
    title: { absolute: `${p.title} | ${SITE.name}` },
    description: p.meta,
    alternates: alternates(locale, `/${slug}`),
    robots: legal ? { index: false, follow: true } : undefined,
    openGraph: { type: "website", siteName: SITE.name, title: p.title, description: p.meta, url: `${SITE.url}/${locale}/${slug}`, locale },
    twitter: { card: "summary_large_image", title: p.title, description: p.meta },
  };
}

function crumbs(locale: string, name: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: SITE.name, item: `${SITE.url}/${locale}` },
      { "@type": "ListItem", position: 2, name, item: `${SITE.url}/${locale}/${slug}` },
    ],
  };
}

export default async function SlugPage({ params }: P) {
  const { locale, slug } = await params;
  const d = getDict(locale);
  const p = pageText(d, slug);
  if (!p) notFound();
  const url = `${SITE.url}/${locale}/${slug}`;

  const type = TYPE_BY_SLUG[slug];
  if (type) {
    const name = d.types[type.id].name;
    const h1 = fmt(d.type.h1, { name });
    return (
      <>
        <JsonLd data={appLd(h1, p.meta, url, locale)} />
        <JsonLd data={faqLd(d)} />
        <JsonLd data={crumbs(locale, h1, slug)} />
        <Hero badge={d.home.badge} h1a={h1} sub={`${d.types[type.id].desc} ${d.home.sub}`} />
        <div className="mx-auto max-w-7xl px-4">
          <QrStudio dict={d} locale={locale} typeId={type.id} />
        </div>
        <Features dict={d} />
        <Compare dict={d} />
        <HowTo dict={d} />
        <TypeGrid dict={d} locale={locale} />
        <Faq dict={d} />
      </>
    );
  }

  if (slug === "qr-code-scanner") {
    return (
      <>
        <JsonLd data={appLd(d.scanner.h1, p.meta, url, locale)} />
        <JsonLd data={crumbs(locale, d.scanner.h1, slug)} />
        <Hero badge={d.home.badge} h1a={d.scanner.h1} sub={d.scanner.sub} />
        <div className="mx-auto max-w-6xl px-4">
          <Scanner dict={d} locale={locale} />
        </div>
        <TypeGrid dict={d} locale={locale} />
      </>
    );
  }

  if (slug === "bulk-qr-code-generator") {
    return (
      <>
        <JsonLd data={appLd(d.bulk.h1, p.meta, url, locale)} />
        <JsonLd data={crumbs(locale, d.bulk.h1, slug)} />
        <Hero badge={d.home.badge} h1a={d.bulk.h1} sub={d.bulk.sub} />
        <div className="mx-auto max-w-7xl px-4">
          <Bulk dict={d} />
        </div>
        <Features dict={d} />
        <TypeGrid dict={d} locale={locale} />
      </>
    );
  }

  const paras = (slug === "privacy" ? d.legal.privacy : d.legal.terms).map((x) => fmt(x, { email: SITE.contactEmail }));
  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-4xl font-extrabold tracking-tight">{p.title}</h1>
      <div className="mt-8 space-y-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
        {paras.map((t, i) => (
          <p key={i}>{t}</p>
        ))}
      </div>
    </article>
  );
}
