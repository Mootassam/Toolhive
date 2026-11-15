import type { Design } from "./qrRender";

export const TEMPLATES: { id: string; d: Partial<Design> }[] = [
  { id: "classic", d: { dot: "square", eyeFrame: "square", eyeBall: "square", fg: "#000000", gradient: "none", eyeColor: "", eyeBallColor: "", bg: "#ffffff", frame: "none" } },
  { id: "soft", d: { dot: "rounded", eyeFrame: "rounded", eyeBall: "rounded", fg: "#111827", gradient: "none", eyeColor: "", eyeBallColor: "", bg: "#ffffff", frame: "none" } },
  { id: "ocean", d: { dot: "extra-rounded", eyeFrame: "extra-rounded", eyeBall: "circle", fg: "#1d4ed8", fg2: "#0e7490", gradient: "linear", gradAngle: 45, eyeColor: "#1e3a8a", eyeBallColor: "", bg: "#ffffff", frame: "bottom", frameColor: "#1d4ed8", frameTextColor: "#ffffff" } },
  { id: "sunset", d: { dot: "dots", eyeFrame: "circle", eyeBall: "circle", fg: "#f43f5e", fg2: "#c2410c", gradient: "linear", gradAngle: 135, eyeColor: "#be123c", eyeBallColor: "#c2410c", bg: "#ffffff", frame: "pill", frameColor: "#f43f5e", frameTextColor: "#ffffff" } },
  { id: "forest", d: { dot: "classy", eyeFrame: "leaf", eyeBall: "leaf", fg: "#065f46", fg2: "#047857", gradient: "radial", eyeColor: "#064e3b", eyeBallColor: "#047857", bg: "#ffffff", frame: "balloon", frameColor: "#065f46", frameTextColor: "#ffffff" } },
  { id: "violet", d: { dot: "vertical", eyeFrame: "rounded", eyeBall: "diamond", fg: "#7c3aed", fg2: "#db2777", gradient: "linear", gradAngle: 90, eyeColor: "#5b21b6", eyeBallColor: "#db2777", bg: "#ffffff", frame: "border", frameColor: "#7c3aed", frameTextColor: "#ffffff" } },
  { id: "night", d: { dot: "rounded", eyeFrame: "extra-rounded", eyeBall: "circle", fg: "#ffffff", gradient: "none", eyeColor: "#facc15", eyeBallColor: "", bg: "#0f172a", frame: "bottom", frameColor: "#0f172a", frameTextColor: "#facc15" } },
  { id: "gold", d: { dot: "classy", eyeFrame: "square", eyeBall: "diamond", fg: "#78350f", fg2: "#b45309", gradient: "linear", gradAngle: 45, eyeColor: "#78350f", eyeBallColor: "#b45309", bg: "#fffbeb", frame: "top", frameColor: "#78350f", frameTextColor: "#fde68a" } },
  { id: "mint", d: { dot: "horizontal", eyeFrame: "rounded", eyeBall: "rounded", fg: "#0f766e", gradient: "none", eyeColor: "#c2410c", eyeBallColor: "", bg: "#f0fdfa", frame: "none" } },
  { id: "ink", d: { dot: "small-square", eyeFrame: "circle", eyeBall: "square", fg: "#0f172a", gradient: "none", eyeColor: "#e11d48", eyeBallColor: "#0f172a", bg: "#ffffff", frame: "pill", frameColor: "#0f172a", frameTextColor: "#ffffff" } },
];

// Simple generic glyph logos (white glyph on a coloured circle) — rendered to data URLs.
const glyph = (bg: string, path: string, fill = false) =>
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="${bg}"/><g transform="translate(12 12)" fill="${fill ? "#fff" : "none"}" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="${path}"/></g></svg>`,
  );

export const LOGO_ICONS: { id: string; src: string }[] = [
  { id: "chat", src: glyph("#22c55e", "M3 21l1.6-4.7A9 9 0 1 1 8 19.6L3 21Z") },
  { id: "wifi", src: glyph("#2563eb", "M2 8.8a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 19.5h.01") },
  { id: "camera", src: glyph("#db2777", "M3 8a2 2 0 0 1 2-2h2l2-3h6l2 3h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Zm9 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z") },
  { id: "pin", src: glyph("#ef4444", "M12 22s7-6.1 7-12a7 7 0 0 0-14 0c0 5.9 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z") },
  { id: "phone", src: glyph("#0ea5e9", "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z") },
  { id: "mail", src: glyph("#f59e0b", "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm-1 1 9 7 9-7") },
  { id: "link", src: glyph("#111827", "M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5") },
  { id: "play", src: glyph("#dc2626", "M8 5v14l11-7L8 5Z", true) },
  { id: "cart", src: glyph("#7c3aed", "M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h9.2a2 2 0 0 0 2-1.6L22 7H6M10 21h.01M18 21h.01") },
  { id: "heart", src: glyph("#e11d48", "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z", true) },
  { id: "star", src: glyph("#eab308", "M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2Z", true) },
  { id: "coffee", src: glyph("#92400e", "M17 8h1a4 4 0 0 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8ZM6 1v3M10 1v3M14 1v3") },
];
