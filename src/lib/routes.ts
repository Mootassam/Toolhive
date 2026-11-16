import { QR_TYPES } from "./qrTypes";
import { TOOLS } from "./tools";

export const EXTRA_SLUGS = ["qr-code-scanner", "bulk-qr-code-generator", "barcode-generator", "tools", "privacy", "terms"] as const;
export const ALL_SLUGS: string[] = [...QR_TYPES.map((t) => t.slug), ...TOOLS.map((t) => t.slug), ...EXTRA_SLUGS];
/** paths (after /{locale}) that go in the sitemap */
export const SITEMAP_PATHS: string[] = [
  "",
  "/tools",
  ...TOOLS.map((t) => `/${t.slug}`),
  ...QR_TYPES.map((t) => `/${t.slug}`),
  "/qr-code-scanner",
  "/bulk-qr-code-generator",
  "/barcode-generator",
];
