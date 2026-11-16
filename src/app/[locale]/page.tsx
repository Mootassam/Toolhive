import type { Metadata } from "next";
import Hero from "@/components/Hero";
import QrStudio from "@/components/QrStudio";
import { TypeGrid, ToolGrid, Features, Compare, HowTo, Faq, JsonLd, faqLd, appLd } from "@/components/Sections";
import { getDict, alternates } from "@/lib/i18n";
import { SITE, type Locale } from "@/lib/site";

type P = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { locale } = await params;
  const d = getDict(locale);
  return {
    title: { absolute: `${d.home.title} | ${SITE.name}` },
    description: d.home.meta,
    alternates: alternates(locale, ""),
    openGraph: { type: "website", siteName: SITE.name, title: d.home.title, description: d.home.meta, url: `${SITE.url}/${locale}`, locale },
    twitter: { card: "summary_large_image", title: d.home.title, description: d.home.meta },
  };
}

export default async function Home({ params }: P) {
  const { locale } = await params;
  const d = getDict(locale);
  return (
    <>
      <JsonLd data={appLd(`${SITE.name} QR Code Generator`, d.home.meta, `${SITE.url}/${locale}`, locale)} />
      <JsonLd data={faqLd(d)} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", name: SITE.name, url: SITE.url, inLanguage: locale }} />
      <Hero badge={d.home.badge} h1a={d.home.h1a} h1b={d.home.h1b} sub={d.home.sub} />
      <div className="mx-auto max-w-7xl px-4">
        <QrStudio dict={d} locale={locale} typeId="url" />
      </div>
      <Features dict={d} />
      <Compare dict={d} />
      <HowTo dict={d} />
      <TypeGrid dict={d} locale={locale} />
      <ToolGrid dict={d} locale={locale} exclude="" title={d.tools.more} />
      <Faq dict={d} />
    </>
  );
}
