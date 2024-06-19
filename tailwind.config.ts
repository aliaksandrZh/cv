import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
          "0%": {
            "border-color": "transparent",
          },
          "50%": {
            "border-color": "var(--blue)",
          },
          "100%": {
            "border-color": "transparent",
          },
        },

        unfoldIn: {
          "0%": {
            transform: "scaleY(.005) scaleX(.005)",
          },
          "50%": {
            transform: "scaleY(.005) scaleX(1)",
          },
          "100%": {
            transform: "scaleY(1) scaleX(1)",
          },
        },
        unfoldOut: {
          "0%": {
            transform: "scaleY(1) scaleX(1)",
          },
          "50%": {
            transform: "scaleY(.005) scaleX(1)",
          },
          "100%": {
            transform: "scaleY(.005) scaleX(0)",
          },
        },
        zoomIn: {
          "0%": {
            transform: "scale(0)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        zoomOut: {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(0)",
          },
        },

        bgIn: {
          "0%": {
            background: "var(--blue)",
          },
          "70%": {
            background: "var(--blue)",
          },
          "100%": {
            background: "var(--bg-selection)",
          },
        },
        bgOut: {
          "0%": {
            background: "var(--bg-selection)",
          },
          "70%": {
            background: "var(--bg-selection)",
          },
          "100%": {
            background: "var(--blue)",
          },
        },
        shine: {
          to: {
            "background-position-x": "-20%",
          },
        },
      },
      animation: {
        unfoldIn: "unfoldIn 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards",
        unfoldOut:
          "unfoldOut 1s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards",
        zoomIn: "zoomIn 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards",
        zoomOut: "zoomOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards",
        bgIn: "bgIn 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) forwards",
        bgOut: "bgOut 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards",
        blinkCaret: "blinkCaret 1s ease-in-out infinite",
        "pulse-fast": "pulse 0.5s linear infinite",
        loading: "shine 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
