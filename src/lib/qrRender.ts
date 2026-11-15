import QRCode from "qrcode";

export type Ecc = "L" | "M" | "Q" | "H";
export type DotStyle = "square" | "rounded" | "extra-rounded" | "dots" | "classy" | "diamond" | "small-square" | "vertical" | "horizontal";
export type EyeFrameStyle = "square" | "rounded" | "extra-rounded" | "circle" | "leaf";
export type EyeBallStyle = "square" | "rounded" | "circle" | "leaf" | "diamond";
export type FrameStyle = "none" | "bottom" | "top" | "pill" | "balloon" | "border";
export type Gradient = "none" | "linear" | "radial";

export interface Design {
  ecc: Ecc;
  margin: number;
  dot: DotStyle;
  eyeFrame: EyeFrameStyle;
  eyeBall: EyeBallStyle;
  fg: string;
  fg2: string;
  gradient: Gradient;
  gradAngle: number;
  eyeColor: string; // "" = same as dots
  eyeBallColor: string; // "" = same as eye frame
  bg: string;
  transparent: boolean;
  logo: string | null;
  logoSize: number; // 0.12 - 0.32 of the QR width
  logoBg: boolean;
  frame: FrameStyle;
  frameText: string;
  frameColor: string;
  frameTextColor: string;
}

export const DEFAULT_DESIGN: Design = {
  ecc: "M",
  margin: 3,
  dot: "rounded",
  eyeFrame: "rounded",
  eyeBall: "rounded",
  fg: "#111827",
  fg2: "#3b63fb",
  gradient: "none",
  gradAngle: 45,
  eyeColor: "",
  eyeBallColor: "",
  bg: "#ffffff",
  transparent: false,
  logo: null,
  logoSize: 0.22,
  logoBg: true,
  frame: "none",
  frameText: "SCAN ME",
  frameColor: "#111827",
  frameTextColor: "#ffffff",
};

const S = 10; // px per module inside the SVG

type Radii = [number, number, number, number]; // tl tr br bl

function rrect(x: number, y: number, w: number, h: number, r: Radii): string {
  const [tl, tr, br, bl] = r.map((v) => Math.max(0, Math.min(v, w / 2, h / 2)));
  return (
    `M${x + tl},${y}H${x + w - tr}` +
    (tr ? `A${tr},${tr} 0 0 1 ${x + w},${y + tr}` : "") +
    `V${y + h - br}` +
    (br ? `A${br},${br} 0 0 1 ${x + w - br},${y + h}` : "") +
    `H${x + bl}` +
    (bl ? `A${bl},${bl} 0 0 1 ${x},${y + h - bl}` : "") +
    `V${y + tl}` +
    (tl ? `A${tl},${tl} 0 0 1 ${x + tl},${y}` : "") +
    "Z"
  );
}

function circle(cx: number, cy: number, r: number) {
  return `M${cx - r},${cy}a${r},${r} 0 1 0 ${2 * r},0a${r},${r} 0 1 0 ${-2 * r},0Z`;
}

function diamond(cx: number, cy: number, r: number) {
  return `M${cx},${cy - r}L${cx + r},${cy}L${cx},${cy + r}L${cx - r},${cy}Z`;
}

const xmlEsc = (s: string) => s.replace(/[<>&"']/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" })[c]!);

export interface Matrix {
  size: number;
  get: (r: number, c: number) => boolean;
}

export function makeMatrix(data: string, ecc: Ecc): Matrix {
  const qr = QRCode.create(data || " ", { errorCorrectionLevel: ecc });
  const size = qr.modules.size;
  const bits = qr.modules.data;
  return { size, get: (r, c) => r >= 0 && c >= 0 && r < size && c < size && !!bits[r * size + c] };
}

function shapeFor(style: EyeFrameStyle | EyeBallStyle, x: number, y: number, s: number, corner: 0 | 1 | 2): string {
  // corner: 0 = top-left, 1 = top-right, 2 = bottom-left (used to mirror the leaf shape)
  switch (style) {
    case "square":
      return rrect(x, y, s, s, [0, 0, 0, 0]);
    case "rounded":
      return rrect(x, y, s, s, [s * 0.25, s * 0.25, s * 0.25, s * 0.25]);
    case "extra-rounded":
      return rrect(x, y, s, s, [s * 0.4, s * 0.4, s * 0.4, s * 0.4]);
    case "circle":
      return circle(x + s / 2, y + s / 2, s / 2);
    case "diamond":
      return diamond(x + s / 2, y + s / 2, s / 2 * 1.15);
    case "leaf": {
      const R = s * 0.5;
      const r: Radii = corner === 0 ? [R, 0, R, 0] : [0, R, 0, R];
      return rrect(x, y, s, s, r);
    }
  }
}

/** small SVG of one corner "eye" for style pickers */
export function eyeSvg(frame: EyeFrameStyle, ball: EyeBallStyle, part: "frame" | "ball") {
  const outer = shapeFor(frame, 0, 0, 70, 0) + shapeFor(frame, 10, 10, 50, 0);
  const inner = shapeFor(ball, 20, 20, 30, 0);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 82 82"><path d="${outer}" fill="currentColor" fill-rule="evenodd" opacity="${part === "frame" ? 1 : 0.25}"/><path d="${inner}" fill="currentColor" opacity="${part === "ball" ? 1 : 0.25}"/></svg>`;
}

/** small SVG tile showing a dot style */
export function dotSvg(style: DotStyle) {
  const pat = ["1101", "0111", "1110", "1011"];
  let p = "";
  const on = (r: number, c: number) => r >= 0 && c >= 0 && r < 4 && c < 4 && pat[r][c] === "1";
  for (let r = 0; r < 4; r++)
    for (let c = 0; c < 4; c++) {
      if (!on(r, c)) continue;
      const x = c * S, y = r * S;
      const T = on(r - 1, c), B = on(r + 1, c), Lf = on(r, c - 1), Rt = on(r, c + 1);
      p += dotPath(style, x, y, T, B, Lf, Rt);
    }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 48 48"><path d="${p}" fill="currentColor"/></svg>`;
}

function dotPath(style: DotStyle, x: number, y: number, T: boolean, B: boolean, Lf: boolean, Rt: boolean): string {
  switch (style) {
    case "square":
      return `M${x},${y}h${S}v${S}h${-S}Z`;
    case "dots":
      return circle(x + S / 2, y + S / 2, S * 0.45);
    case "small-square":
      return `M${x + S * 0.12},${y + S * 0.12}h${S * 0.76}v${S * 0.76}h${-S * 0.76}Z`;
    case "diamond":
      return diamond(x + S / 2, y + S / 2, S * 0.55);
    case "rounded":
    case "extra-rounded": {
      const R = style === "rounded" ? S * 0.3 : S * 0.5;
      return rrect(x, y, S, S, [!T && !Lf ? R : 0, !T && !Rt ? R : 0, !B && !Rt ? R : 0, !B && !Lf ? R : 0]);
    }
    case "classy": {
      const R = S * 0.5;
      return rrect(x, y, S, S, [!T && !Lf ? R : 0, 0, !B && !Rt ? R : 0, 0]);
    }
    case "vertical": {
      const w = S * 0.72, R = w / 2;
      return rrect(x + (S - w) / 2, y, w, S, [!T ? R : 0, !T ? R : 0, !B ? R : 0, !B ? R : 0]);
    }
    case "horizontal": {
      const h = S * 0.72, R = h / 2;
      return rrect(x, y + (S - h) / 2, S, h, [!Lf ? R : 0, !Rt ? R : 0, !Rt ? R : 0, !Lf ? R : 0]);
    }
  }
}

export interface Rendered {
  svg: string;
  width: number;
  height: number;
}

export function renderSvg(data: string, d: Design): Rendered {
  const m = makeMatrix(data, d.logo ? (d.ecc === "L" || d.ecc === "M" ? "Q" : d.ecc) : d.ecc);
  const N = m.size;
  const M = Math.max(0, Math.min(10, d.margin));
  const Q = (N + 2 * M) * S; // QR square size in px
  const o = M * S;

  const isFinder = (r: number, c: number) => (r < 7 && c < 7) || (r < 7 && c >= N - 7) || (r >= N - 7 && c < 7);

  // logo area (in modules), keeps it centred on whole modules
  let lb: { x: number; y: number; s: number } | null = null;
  if (d.logo) {
    let ls = Math.round(N * Math.max(0.1, Math.min(0.32, d.logoSize)));
    if ((N - ls) % 2) ls += 1;
    const st = (N - ls) / 2;
    lb = { x: st, y: st, s: ls };
  }
  const inLogo = (r: number, c: number) => !!lb && d.logoBg && r >= lb.y && r < lb.y + lb.s && c >= lb.x && c < lb.x + lb.s;
  const on = (r: number, c: number) => m.get(r, c) && !isFinder(r, c) && !inLogo(r, c);

  // body path
  let p = "";
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (!on(r, c)) continue;
      const x = o + c * S, y = o + r * S;
      const T = on(r - 1, c), B = on(r + 1, c), Lf = on(r, c - 1), Rt = on(r, c + 1);
      p += dotPath(d.dot, x, y, T, B, Lf, Rt);
    }
  }

  // eyes
  const eyes: [number, number, 0 | 1 | 2][] = [[0, 0, 0], [0, N - 7, 1], [N - 7, 0, 2]];
  let eyeOuter = "", eyeInner = "";
  for (const [r0, c0, k] of eyes) {
    const x = o + c0 * S, y = o + r0 * S;
    eyeOuter += shapeFor(d.eyeFrame, x, y, 7 * S, k) + shapeFor(d.eyeFrame, x + S, y + S, 5 * S, k);
    eyeInner += shapeFor(d.eyeBall, x + 2 * S, y + 2 * S, 3 * S, k);
  }

  // colours
  let defs = "";
  let bodyFill = d.fg;
  if (d.gradient !== "none") {
    if (d.gradient === "linear") {
      const a = (d.gradAngle * Math.PI) / 180, cx = Q / 2, cy = Q / 2, R = Q / 2;
      const x1 = cx - Math.cos(a) * R, y1 = cy - Math.sin(a) * R, x2 = cx + Math.cos(a) * R, y2 = cy + Math.sin(a) * R;
      defs += `<linearGradient id="g" gradientUnits="userSpaceOnUse" x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}"><stop offset="0" stop-color="${d.fg}"/><stop offset="1" stop-color="${d.fg2}"/></linearGradient>`;
    } else {
      defs += `<radialGradient id="g" gradientUnits="userSpaceOnUse" cx="${Q / 2}" cy="${Q / 2}" r="${(Q / 2) * 1.2}"><stop offset="0" stop-color="${d.fg}"/><stop offset="1" stop-color="${d.fg2}"/></radialGradient>`;
    }
    bodyFill = "url(#g)";
  }
  const eyeFill = d.eyeColor || bodyFill;
  const ballFill = d.eyeBallColor || eyeFill;

  let logoSvg = "";
  if (d.logo && lb) {
    const lx = o + lb.x * S, ly = o + lb.y * S, ls = lb.s * S;
    const pad = d.logoBg ? S * 0.6 : 0;
    if (d.logoBg && !d.transparent) {
      logoSvg += `<path d="${rrect(lx + S * 0.2, ly + S * 0.2, ls - S * 0.4, ls - S * 0.4, [S, S, S, S])}" fill="${d.bg}"/>`;
    }
    logoSvg += `<image x="${lx + pad}" y="${ly + pad}" width="${ls - 2 * pad}" height="${ls - 2 * pad}" preserveAspectRatio="xMidYMid meet" href="${d.logo}" xlink:href="${d.logo}"/>`;
  }

  const qrInner =
    (d.transparent ? "" : `<rect width="${Q}" height="${Q}" fill="${d.bg}"/>`) +
    `<path d="${p}" fill="${bodyFill}"/>` +
    `<path d="${eyeOuter}" fill="${eyeFill}" fill-rule="evenodd"/>` +
    `<path d="${eyeInner}" fill="${ballFill}"/>` +
    logoSvg;

  // frame
  const text = xmlEsc((d.frameText || "").slice(0, 40));
  const fontFor = (w: number, h: number) => Math.min(h * 0.52, (w * 0.86) / Math.max(4, (d.frameText || "").length * 0.62));
  const font = `font-family="system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif" font-weight="800" text-anchor="middle" dominant-baseline="central"`;

  let W = Q, H = Q, body = "";
  const pad = Q * 0.045, bar = Q * 0.2, rad = Q * 0.06;
  const bgCard = d.transparent ? "none" : d.bg;
  switch (d.frame) {
    case "none":
      body = qrInner;
      break;
    case "bottom":
    case "top": {
      W = Q + pad * 2;
      H = Q + pad * 2 + bar;
      const qy = d.frame === "top" ? pad + bar : pad;
      const ty = d.frame === "top" ? pad / 2 + bar / 2 : Q + pad * 1.5 + bar / 2;
      body =
        `<path d="${rrect(0, 0, W, H, [rad, rad, rad, rad])}" fill="${d.frameColor}"/>` +
        `<path d="${rrect(pad, qy, Q, Q, [rad * 0.6, rad * 0.6, rad * 0.6, rad * 0.6])}" fill="${d.transparent ? "#ffffff" : d.bg}"/>` +
        `<g transform="translate(${pad},${qy})">${qrInner}</g>` +
        (text ? `<text x="${W / 2}" y="${ty}" font-size="${fontFor(W, bar)}" fill="${d.frameTextColor}" ${font}>${text}</text>` : "");
      break;
    }
    case "pill": {
      const gap = Q * 0.04, ph = Q * 0.16;
      W = Q;
      H = Q + gap + ph;
      body =
        `<g>${qrInner}</g>` +
        `<path d="${rrect(Q * 0.08, Q + gap, Q * 0.84, ph, [ph / 2, ph / 2, ph / 2, ph / 2])}" fill="${d.frameColor}"/>` +
        (text ? `<text x="${W / 2}" y="${Q + gap + ph / 2}" font-size="${fontFor(Q * 0.84, ph)}" fill="${d.frameTextColor}" ${font}>${text}</text>` : "");
      break;
    }
    case "balloon": {
      const sw = Q * 0.02, gap = Q * 0.07, bh = Q * 0.17, tri = Q * 0.05;
      W = Q + sw * 2;
      H = Q + sw * 2 + gap + bh;
      body =
        `<path d="${rrect(sw / 2, sw / 2, Q + sw, Q + sw, [rad, rad, rad, rad])}" fill="${bgCard}" stroke="${d.frameColor}" stroke-width="${sw}"/>` +
        `<g transform="translate(${sw},${sw})">${qrInner}</g>` +
        `<path d="M${W / 2 - tri},${Q + sw * 2 + gap}L${W / 2},${Q + sw * 2 + gap - tri}L${W / 2 + tri},${Q + sw * 2 + gap}Z" fill="${d.frameColor}"/>` +
        `<path d="${rrect(0, Q + sw * 2 + gap, W, bh, [bh / 3, bh / 3, bh / 3, bh / 3])}" fill="${d.frameColor}"/>` +
        (text ? `<text x="${W / 2}" y="${Q + sw * 2 + gap + bh / 2}" font-size="${fontFor(W, bh)}" fill="${d.frameTextColor}" ${font}>${text}</text>` : "");
      break;
    }
    case "border": {
      const sw = Q * 0.03;
      W = Q + sw * 2 + pad * 2;
      H = W + bar * 0.9;
      body =
        `<path d="${rrect(sw / 2, sw / 2, W - sw, W - sw, [rad, rad, rad, rad])}" fill="${bgCard}" stroke="${d.frameColor}" stroke-width="${sw}"/>` +
        `<g transform="translate(${sw + pad},${sw + pad})">${qrInner}</g>` +
        (text ? `<text x="${W / 2}" y="${W + bar * 0.45}" font-size="${fontFor(W, bar)}" fill="${d.frameColor}" ${font}>${text}</text>` : "");
      break;
    }
  }

  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${fx(W)} ${fx(H)}" width="${fx(W)}" height="${fx(H)}" shape-rendering="geometricPrecision">` +
    (defs ? `<defs>${defs}</defs>` : "") +
    body +
    `</svg>`;
  return { svg, width: W, height: H };
}

function fx(n: number) {
  return Math.round(n * 100) / 100;
}

// ---------- browser helpers ----------

export function svgToDataUrl(svg: string) {
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

export function rasterize(r: Rendered, targetWidth: number, solidBg?: string): Promise<HTMLCanvasElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const scale = targetWidth / r.width;
      const c = document.createElement("canvas");
      c.width = Math.round(r.width * scale);
      c.height = Math.round(r.height * scale);
      const ctx = c.getContext("2d")!;
      if (solidBg) {
        ctx.fillStyle = solidBg;
        ctx.fillRect(0, 0, c.width, c.height);
      }
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(img, 0, 0, c.width, c.height);
      resolve(c);
    };
    img.onerror = reject;
    img.src = svgToDataUrl(r.svg);
  });
}

function hexToRgb(h: string): [number, number, number] | null {
  const m = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(h.trim());
  if (!m) return null;
  let s = m[1];
  if (s.length === 3) s = s.split("").map((x) => x + x).join("");
  const n = parseInt(s, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function lum(h: string) {
  const rgb = hexToRgb(h);
  if (!rgb) return 0;
  const [r, g, b] = rgb.map((v) => {
    const x = v / 255;
    return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** returns contrast ratio, and whether the code is inverted (light dots on dark background) */
export function contrastInfo(d: Design) {
  const bg = d.transparent ? "#ffffff" : d.bg;
  const colors = [d.fg, d.gradient !== "none" ? d.fg2 : d.fg, d.eyeColor || d.fg];
  let worst = 21, inverted = false;
  for (const c of colors) {
    const a = lum(c), b = lum(bg);
    const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
    worst = Math.min(worst, ratio);
    if (a > b) inverted = true;
  }
  return { ratio: worst, inverted };
}
