import { ImageResponse } from "next/og";
import { SITE, LOCALES } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE.name} — Free QR Code Generator`;
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default function OG() {
  const cells = [
    "1111111001011", "1000001010001", "1011101001101", "1011101110001", "1011101010111", "1000001001001", "1111111010101",
    "0000000110100", "1101011011011", "0110100101100", "1011111001011", "0100010110110", "1101101011001",
  ];
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", background: "linear-gradient(135deg,#eef4ff 0%,#ffffff 55%,#e0f7ff 100%)", padding: 80, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 34, fontWeight: 800, color: "#b45309" }}>{SITE.name}</div>
          <div style={{ fontSize: 72, fontWeight: 900, color: "#0f172a", lineHeight: 1.05, marginTop: 18 }}>Free QR Code Generator</div>
          <div style={{ fontSize: 32, color: "#475569", marginTop: 24 }}>Logo · Colors · Frames · SVG & PDF · Bulk</div>
          <div style={{ display: "flex", marginTop: 36, fontSize: 28, fontWeight: 700, color: "#047857" }}>No sign-up · No watermark · Never expires</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", background: "#fff", padding: 28, borderRadius: 36, boxShadow: "0 20px 60px rgba(37,67,240,.18)" }}>
          {cells.map((row, r) => (
            <div key={r} style={{ display: "flex" }}>
              {row.split("").map((c, i) => (
                <div key={i} style={{ width: 26, height: 26, background: c === "1" ? (r < 7 && i < 7 ? "#2543f0" : "#0f172a") : "transparent", borderRadius: 6 }} />
              ))}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
