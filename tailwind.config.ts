import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff", 100: "#dbe6ff", 200: "#bfd2ff", 300: "#93b4ff", 400: "#608bff",
          500: "#3b63fb", 600: "#2543f0", 700: "#1d32dc", 800: "#1e2bb2", 900: "#1e2b8c",
        },
      },
      boxShadow: { soft: "0 1px 2px rgba(16,24,40,.04), 0 8px 24px -8px rgba(16,24,40,.12)" },
    },
  },
  plugins: [],
} satisfies Config;
