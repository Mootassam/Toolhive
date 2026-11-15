import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — Free QR Code Generator`,
    short_name: SITE.name,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2543f0",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
