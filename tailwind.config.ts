import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: "var(--white)",
        },
        yellow: {
          DEFAULT: "var(--bg-selection)",
        },
        black: {
          DEFAULT: "var(--text)",
        },
      },
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
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
            background: "var(--black)",
          },
          "70%": {
            background: "var(--black)",
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
            background: "var(--black)",
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
      },
    },
  },
  plugins: [],
};
export default config;
