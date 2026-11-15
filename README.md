# ToolHive — Free QR Code Generator

Next.js 15 (App Router, static pages) + Tailwind. 10 languages, 207 pre-rendered pages, everything runs in the browser.

## Run locally
    npm install
    npm run dev        # http://localhost:3000

## Deploy (Vercel + GitHub)
1. Create an empty GitHub repo and push this folder.
2. vercel.com -> Add New Project -> import the repo (framework: Next.js, no settings needed).
3. When you have a domain, add it in Vercel -> Domains, then set env var
   `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` and redeploy (sitemap, canonical and hreflang use it).
4. Vercel -> Analytics -> Enable (free) to see visitors.
5. Google Search Console -> add the domain -> submit `https://yourdomain.com/sitemap.xml`.

## Change the brand
`src/lib/site.ts` — name, URL, contact email, languages.

## Structure
- `src/lib/qrRender.ts`   own QR renderer (dots, corners, gradients, logo, frames) -> SVG
- `src/lib/qrTypes.ts`    14 content types (URL, WiFi, vCard, WhatsApp, UPI, crypto…)
- `src/lib/exporter.ts`   PNG/SVG/PDF/JPG/WebP export + scan test (jsQR)
- `src/components/`       QrStudio, DesignPanel, Scanner, Bulk, page sections
- `src/i18n/*.ts`         translations (en is the source of truth, others are typed against it)
- `src/app/[locale]/`     pages; `sitemap.ts`, `robots.ts`, `middleware.ts` (language redirect)
