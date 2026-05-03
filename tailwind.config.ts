import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        georgian: ["Noto Sans Georgian", "sans-serif"],
      },
      colors: {
        primary: "#2E86AB",
        secondary: "#F5A623",
        cream: "#FDF6EC",
        dark: "#2D3436",
        footer: "#1B4965",
      }
    },
  },
  plugins: [],
};

export default config;