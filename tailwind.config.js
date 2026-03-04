/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: ["class", "[data-theme='light']"],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: "#020a24", light: "#f4f8ff" },
        panel: {
          DEFAULT: "#0f1b3d",
          soft: "#1d2c4d",
          light: "#ffffff",
          "soft-light": "#e8f0ff",
        },
        line: { DEFAULT: "#2a3e67", light: "#c9d8f0" },
        text: {
          DEFAULT: "#f2f5ff",
          strong: "#f4f8ff",
          soft: "#d4dff8",
          light: "#14213d",
        },
        muted: { DEFAULT: "#9fb0d4", light: "#4a628d" },
        accent: { DEFAULT: "#00d9a5", strong: "#00b98d", light: "#009d7b" },
        success: "#4ade80",
        warning: "#fbbf24",
        error: "#f87171",
        nav: { link: "#dce5fb" },
        topbar: { bg: "rgba(2, 10, 36, 0.9)" },
        "menu-toggle": { bg: "rgba(29, 44, 79, 0.7)", line: "#dce5fb" },
        "panel-text": "#c6d2ed",
        "panel-text-strong": "#dbe6ff",
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(2.5rem, 6.6vw, 5.4rem)", { lineHeight: "1.1" }],
        heading: ["clamp(1.7rem, 3.5vw, 2.6rem)", { lineHeight: "1.15" }],
      },
      maxWidth: { shell: "1180px" },
      borderRadius: { panel: "18px", card: "14px" },
      boxShadow: {
        glow: "0 0 20px rgba(0, 217, 165, 0.3)",
        "glow-strong": "0 0 30px rgba(0, 217, 165, 0.5)",
        menu: "0 10px 26px rgba(2, 10, 36, 0.35)",
      },
      animation: { pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" },
      transitionTimingFunction: { smooth: "cubic-bezier(0.4, 0, 0.2, 1)" },
    },
  },
  plugins: [],
};

export default config;
