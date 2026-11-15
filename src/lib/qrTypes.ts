// Every QR content type: its form fields and how the data string is built.

export type FieldKind = "text" | "textarea" | "url" | "email" | "tel" | "number" | "select" | "checkbox" | "datetime-local" | "password";

export interface Field {
  key: string;
  kind: FieldKind;
  label: string; // dictionary key under f.*
  placeholder?: string;
  options?: { value: string; label: string }[]; // label = dict key or literal (prefixed with "=")
  required?: boolean;
  half?: boolean;
  def?: string;
}

export type QrTypeId =
  | "url" | "text" | "wifi" | "vcard" | "email" | "sms" | "phone" | "whatsapp"
  | "location" | "event" | "social" | "upi" | "crypto" | "paypal";

export interface QrType {
  id: QrTypeId;
  slug: string;
  icon: string; // emoji-free simple svg path key in Icons
  fields: Field[];
  build: (v: Record<string, string>) => string;
}

const esc = (s: string) => s.replace(/([\\;,:"])/g, "\\$1");
const vesc = (s: string) => s.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/([;,])/g, "\\$1");
const enc = encodeURIComponent;
const digits = (s: string) => (s || "").replace(/[^\d+]/g, "");

function icsDate(local: string) {
  // "2026-11-14T18:30" -> "20261114T183000"
  if (!local) return "";
  return local.replace(/[-:]/g, "").slice(0, 13) + "00";
}

export const SOCIALS: Record<string, string> = {
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  tiktok: "https://www.tiktok.com/@",
  youtube: "https://youtube.com/@",
  x: "https://x.com/",
  linkedin: "https://www.linkedin.com/in/",
  telegram: "https://t.me/",
  snapchat: "https://www.snapchat.com/add/",
  pinterest: "https://pinterest.com/",
  github: "https://github.com/",
  threads: "https://www.threads.net/@",
  discord: "https://discord.gg/",
};

export const QR_TYPES: QrType[] = [
  {
    id: "url", slug: "url-qr-code-generator", icon: "link",
    fields: [{ key: "url", kind: "url", label: "url", placeholder: "https://example.com", required: true }],
    build: (v) => {
      const u = (v.url || "").trim();
      if (!u) return "";
      return /^[a-z][a-z0-9+.-]*:/i.test(u) ? u : "https://" + u;
    },
  },
  {
    id: "text", slug: "text-qr-code-generator", icon: "text",
    fields: [{ key: "text", kind: "textarea", label: "text", required: true }],
    build: (v) => v.text || "",
  },
  {
    id: "wifi", slug: "wifi-qr-code-generator", icon: "wifi",
    fields: [
      { key: "ssid", kind: "text", label: "ssid", required: true },
      { key: "password", kind: "password", label: "password" },
      { key: "enc", kind: "select", label: "encryption", def: "WPA", half: true,
        options: [{ value: "WPA", label: "=WPA/WPA2/WPA3" }, { value: "WEP", label: "=WEP" }, { value: "nopass", label: "noPassword" }] },
      { key: "hidden", kind: "checkbox", label: "hiddenNetwork", half: true },
    ],
    build: (v) => {
      if (!v.ssid) return "";
      const t = v.enc || "WPA";
      return `WIFI:T:${t};S:${esc(v.ssid)};${t !== "nopass" ? `P:${esc(v.password || "")};` : ""}${v.hidden === "1" ? "H:true;" : ""};`;
    },
  },
  {
    id: "vcard", slug: "vcard-qr-code-generator", icon: "user",
    fields: [
      { key: "first", kind: "text", label: "firstName", half: true, required: true },
      { key: "last", kind: "text", label: "lastName", half: true },
      { key: "phone", kind: "tel", label: "mobile", half: true },
      { key: "work", kind: "tel", label: "workPhone", half: true },
      { key: "email", kind: "email", label: "email", half: true },
      { key: "website", kind: "url", label: "website", half: true },
      { key: "org", kind: "text", label: "company", half: true },
      { key: "title", kind: "text", label: "jobTitle", half: true },
      { key: "street", kind: "text", label: "street" },
      { key: "city", kind: "text", label: "city", half: true },
      { key: "zip", kind: "text", label: "zip", half: true },
      { key: "country", kind: "text", label: "country", half: true },
      { key: "note", kind: "text", label: "note", half: true },
    ],
    build: (v) => {
      if (!v.first && !v.last) return "";
      const L = ["BEGIN:VCARD", "VERSION:3.0", `N:${vesc(v.last || "")};${vesc(v.first || "")};;;`, `FN:${vesc([v.first, v.last].filter(Boolean).join(" "))}`];
      if (v.org) L.push(`ORG:${vesc(v.org)}`);
      if (v.title) L.push(`TITLE:${vesc(v.title)}`);
      if (v.phone) L.push(`TEL;TYPE=CELL:${v.phone}`);
      if (v.work) L.push(`TEL;TYPE=WORK:${v.work}`);
      if (v.email) L.push(`EMAIL:${v.email}`);
      if (v.website) L.push(`URL:${v.website}`);
      if (v.street || v.city || v.zip || v.country) L.push(`ADR:;;${vesc(v.street || "")};${vesc(v.city || "")};;${vesc(v.zip || "")};${vesc(v.country || "")}`);
      if (v.note) L.push(`NOTE:${vesc(v.note)}`);
      L.push("END:VCARD");
      return L.join("\n");
    },
  },
  {
    id: "email", slug: "email-qr-code-generator", icon: "mail",
    fields: [
      { key: "to", kind: "email", label: "emailTo", required: true },
      { key: "subject", kind: "text", label: "subject" },
      { key: "body", kind: "textarea", label: "message" },
    ],
    build: (v) => {
      if (!v.to) return "";
      const q = [v.subject && `subject=${enc(v.subject)}`, v.body && `body=${enc(v.body)}`].filter(Boolean).join("&");
      return `mailto:${v.to}${q ? "?" + q : ""}`;
    },
  },
  {
    id: "sms", slug: "sms-qr-code-generator", icon: "sms",
    fields: [
      { key: "phone", kind: "tel", label: "phone", required: true },
      { key: "msg", kind: "textarea", label: "message" },
    ],
    build: (v) => (v.phone ? `SMSTO:${digits(v.phone)}:${v.msg || ""}` : ""),
  },
  {
    id: "phone", slug: "phone-qr-code-generator", icon: "phone",
    fields: [{ key: "phone", kind: "tel", label: "phone", required: true, placeholder: "+1 555 123 4567" }],
    build: (v) => (v.phone ? `tel:${digits(v.phone)}` : ""),
  },
  {
    id: "whatsapp", slug: "whatsapp-qr-code-generator", icon: "whatsapp",
    fields: [
      { key: "phone", kind: "tel", label: "whatsappNumber", required: true, placeholder: "+44 7700 900123" },
      { key: "msg", kind: "textarea", label: "prefilledMessage" },
    ],
    build: (v) => {
      const n = digits(v.phone).replace(/^\+/, "");
      if (!n) return "";
      return `https://wa.me/${n}${v.msg ? "?text=" + enc(v.msg) : ""}`;
    },
  },
  {
    id: "location", slug: "location-qr-code-generator", icon: "pin",
    fields: [
      { key: "q", kind: "text", label: "addressOrPlace" },
      { key: "lat", kind: "text", label: "latitude", half: true, placeholder: "40.7128" },
      { key: "lng", kind: "text", label: "longitude", half: true, placeholder: "-74.0060" },
    ],
    build: (v) => {
      if (v.lat && v.lng) return `https://maps.google.com/?q=${v.lat.trim()},${v.lng.trim()}`;
      if (v.q) return `https://maps.google.com/?q=${enc(v.q)}`;
      return "";
    },
  },
  {
    id: "event", slug: "event-qr-code-generator", icon: "calendar",
    fields: [
      { key: "title", kind: "text", label: "eventTitle", required: true },
      { key: "start", kind: "datetime-local", label: "start", half: true },
      { key: "end", kind: "datetime-local", label: "end", half: true },
      { key: "loc", kind: "text", label: "location" },
      { key: "desc", kind: "textarea", label: "description" },
    ],
    build: (v) => {
      if (!v.title) return "";
      const L = ["BEGIN:VEVENT", `SUMMARY:${vesc(v.title)}`];
      if (v.start) L.push(`DTSTART:${icsDate(v.start)}`);
      if (v.end) L.push(`DTEND:${icsDate(v.end)}`);
      if (v.loc) L.push(`LOCATION:${vesc(v.loc)}`);
      if (v.desc) L.push(`DESCRIPTION:${vesc(v.desc)}`);
      L.push("END:VEVENT");
      return L.join("\n");
    },
  },
  {
    id: "social", slug: "social-media-qr-code-generator", icon: "share",
    fields: [
      { key: "net", kind: "select", label: "platform", def: "instagram",
        options: Object.keys(SOCIALS).map((k) => ({ value: k, label: "=" + (k === "x" ? "X (Twitter)" : k[0].toUpperCase() + k.slice(1)) })) },
      { key: "user", kind: "text", label: "usernameOrLink", required: true, placeholder: "yourname" },
    ],
    build: (v) => {
      const u = (v.user || "").trim().replace(/^@/, "");
      if (!u) return "";
      if (/^https?:\/\//i.test(u)) return u;
      return (SOCIALS[v.net || "instagram"] || "") + u;
    },
  },
  {
    id: "upi", slug: "upi-qr-code-generator", icon: "rupee",
    fields: [
      { key: "pa", kind: "text", label: "upiId", required: true, placeholder: "name@bank" },
      { key: "pn", kind: "text", label: "payeeName" },
      { key: "am", kind: "number", label: "amountOptional", half: true },
      { key: "tn", kind: "text", label: "note", half: true },
    ],
    build: (v) => {
      if (!v.pa) return "";
      const p = [`pa=${enc(v.pa.trim())}`];
      if (v.pn) p.push(`pn=${enc(v.pn)}`);
      if (v.am) p.push(`am=${enc(v.am)}`);
      p.push("cu=INR");
      if (v.tn) p.push(`tn=${enc(v.tn)}`);
      return `upi://pay?${p.join("&")}`;
    },
  },
  {
    id: "crypto", slug: "crypto-qr-code-generator", icon: "coin",
    fields: [
      { key: "coin", kind: "select", label: "coin", def: "bitcoin", half: true,
        options: [
          { value: "bitcoin", label: "=Bitcoin (BTC)" }, { value: "ethereum", label: "=Ethereum (ETH)" },
          { value: "litecoin", label: "=Litecoin (LTC)" }, { value: "dogecoin", label: "=Dogecoin (DOGE)" },
          { value: "solana", label: "=Solana (SOL)" }, { value: "tron", label: "=TRON / USDT-TRC20" },
        ] },
      { key: "amount", kind: "number", label: "amountOptional", half: true },
      { key: "addr", kind: "text", label: "walletAddress", required: true },
    ],
    build: (v) => {
      const a = (v.addr || "").trim();
      if (!a) return "";
      const c = v.coin || "bitcoin";
      if (c === "tron") return a;
      return `${c}:${a}${v.amount ? `?amount=${enc(v.amount)}` : ""}`;
    },
  },
  {
    id: "paypal", slug: "paypal-qr-code-generator", icon: "card",
    fields: [
      { key: "user", kind: "text", label: "paypalMeUser", required: true, placeholder: "yourname" },
      { key: "amount", kind: "number", label: "amountOptional", half: true },
      { key: "cur", kind: "select", label: "currency", def: "USD", half: true,
        options: ["USD", "EUR", "GBP", "CAD", "AUD", "BRL", "MXN", "TRY", "INR", "JPY"].map((c) => ({ value: c, label: "=" + c })) },
    ],
    build: (v) => {
      const u = (v.user || "").trim().replace(/^https?:\/\/(www\.)?paypal\.me\//i, "").replace(/\/.*$/, "");
      if (!u) return "";
      return `https://paypal.me/${u}${v.amount ? `/${v.amount}${v.cur || "USD"}` : ""}`;
    },
  },
];

export const TYPE_BY_ID = Object.fromEntries(QR_TYPES.map((t) => [t.id, t])) as Record<QrTypeId, QrType>;
export const TYPE_BY_SLUG = Object.fromEntries(QR_TYPES.map((t) => [t.slug, t])) as Record<string, QrType>;
