import type { MetadataRoute } from "next";
import { LOCALES, HREFLANG, SITE } from "@/lib/site";
import { SITEMAP_PATHS } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return SITEMAP_PATHS.flatMap((path) =>
    LOCALES.map((l) => ({
      url: `${SITE.url}/${l}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries([...LOCALES.map((x) => [HREFLANG[x], `${SITE.url}/${x}${path}`]), ["x-default", `${SITE.url}/en${path}`]]),
      },
    })),
  );
}
