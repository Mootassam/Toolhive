// Every image / PDF tool: its page slug, icon and how it behaves. Text lives in i18n under tools.items.<id>.

export type ToolId =
  | "compressImage" | "resizeImage" | "heicToJpg" | "pngToJpg" | "webpToJpg" | "jpgToPng" | "jpgToWebp"
  | "jpgToPdf" | "mergePdf" | "pdfToJpg" | "splitPdf";

export type OutType = "jpeg" | "png" | "webp";

export interface Tool {
  id: ToolId;
  slug: string;
  icon: string;
  group: "image" | "pdf";
  mode: "compress" | "resize" | "convert" | "images2pdf" | "merge" | "pdf2img" | "split";
  accept: string;
  multiple: boolean;
  to?: OutType;
}

const IMG = "image/*,.heic,.heif";
const PDF = "application/pdf,.pdf";

export const TOOLS: Tool[] = [
  { id: "compressImage", slug: "compress-image", icon: "compress", group: "image", mode: "compress", accept: IMG, multiple: true },
  { id: "resizeImage", slug: "resize-image", icon: "resize", group: "image", mode: "resize", accept: IMG, multiple: true },
  { id: "heicToJpg", slug: "heic-to-jpg", icon: "convert", group: "image", mode: "convert", accept: ".heic,.heif,image/heic,image/heif", multiple: true, to: "jpeg" },
  { id: "pngToJpg", slug: "png-to-jpg", icon: "convert", group: "image", mode: "convert", accept: "image/png,.png", multiple: true, to: "jpeg" },
  { id: "webpToJpg", slug: "webp-to-jpg", icon: "convert", group: "image", mode: "convert", accept: "image/webp,.webp", multiple: true, to: "jpeg" },
  { id: "jpgToPng", slug: "jpg-to-png", icon: "convert", group: "image", mode: "convert", accept: "image/jpeg,.jpg,.jpeg", multiple: true, to: "png" },
  { id: "jpgToWebp", slug: "jpg-to-webp", icon: "convert", group: "image", mode: "convert", accept: IMG, multiple: true, to: "webp" },
  { id: "jpgToPdf", slug: "jpg-to-pdf", icon: "pdf", group: "pdf", mode: "images2pdf", accept: IMG, multiple: true },
  { id: "mergePdf", slug: "merge-pdf", icon: "merge", group: "pdf", mode: "merge", accept: PDF, multiple: true },
  { id: "pdfToJpg", slug: "pdf-to-jpg", icon: "image", group: "pdf", mode: "pdf2img", accept: PDF, multiple: false },
  { id: "splitPdf", slug: "split-pdf", icon: "split", group: "pdf", mode: "split", accept: PDF, multiple: false },
];

export const TOOL_BY_SLUG: Record<string, Tool> = Object.fromEntries(TOOLS.map((t) => [t.slug, t]));
