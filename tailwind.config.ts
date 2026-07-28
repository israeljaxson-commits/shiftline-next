import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./styles/**/*.css"],
  theme: {
    extend: {
      colors: {
        paper: "var(--color-paper)",
        charcoal: "var(--color-charcoal)",
        "emerald-deep": "var(--color-emerald-deep)",
        emerald: "var(--color-emerald)",
        "emerald-bright": "var(--color-emerald-bright)",
        beige: "var(--color-beige)",
        steel: "var(--color-steel)",
        line: "var(--color-line)",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ["ui-serif", "Georgia", "Cambria", "Times New Roman", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "monospace"],
      },
      boxShadow: {
        lift: "0 30px 60px -20px rgba(18, 20, 15, 0.25)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
