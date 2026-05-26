import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./**/*.html", "./src/**/*.ts", "./src/**/*.css"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        roboto: ['"Roboto Mono"', "monospace"],
      },
      colors: {
        white: {
          DEFAULT: "var(--white)",
        },
        hover: {
          DEFAULT: "var(--bg-selection)",
        },
        black: {
          DEFAULT: "var(--text)",
        },
        title: {
          DEFAULT: "var(--title)",
        },
        icon: {
          DEFAULT: "var(--icon)",
        },
      },
      keyframes: {
        blinkCaret: {
          "0%": { "border-color": "transparent" },
          "50%": { "border-color": "var(--blue)" },
          "100%": { "border-color": "transparent" },
        },
      },
      animation: {
        blinkCaret: "blinkCaret 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
