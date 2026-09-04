import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#11100F",
        ember: "#191614",
        vermilion: "#8F1D1D",
        crimson: "#B52A2A",
        gold: "#C9A45C",
        goldLight: "#E3C98B",
        ivory: "#F6F0E7",
        stonewarm: "#B8B0A6",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wide2: "0.22em",
        wide3: "0.32em",
      },
      maxWidth: {
        shell: "1360px",
      },
      keyframes: {
        scrollline: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "100%": { transform: "scaleY(1)", transformOrigin: "top" },
        },
      },
      animation: {
        scrollline: "scrollline 2.2s cubic-bezier(.4,0,.2,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
