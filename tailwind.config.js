/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        ink: {
          950: "#05070d",
          900: "#0a0e18",
          850: "#0e1320",
          800: "#131a2b",
          700: "#1b2337",
          600: "#26304a",
          500: "#3a4666",
        },
        mist: {
          400: "#8891ab",
          300: "#a6afc7",
          200: "#c7cee0",
          100: "#e7eaf3",
        },
        brand: {
          DEFAULT: "#7c8cff",
          light: "#a6b1ff",
          dark: "#5b6bf0",
        },
        aqua: {
          DEFAULT: "#3fe0c5",
          light: "#7bf0dc",
        },
        sunset: {
          DEFAULT: "#ff9d5c",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(124,140,255,0.15), 0 20px 60px -20px rgba(124,140,255,0.35)",
        card: "0 12px 40px -16px rgba(5,7,13,0.55)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(5,7,13,0) 0%, #05070d 100%), radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
      },
      backgroundSize: {
        grid: "24px 24px",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        blob: "blob 16s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(24px, -18px) scale(1.06)" },
          "66%": { transform: "translate(-18px, 14px) scale(0.96)" },
        },
      },
    },
  },
  plugins: [],
};
