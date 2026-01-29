/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B0B0B",
        secondary: "#111111",
        card: "#F6F3EE",
        "text-light": "#F2EFEA",
        "text-muted": "#B7B0A6",
        accent: {
          DEFAULT: "#C6A15B",
          hover: "#D2B06A",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "sans-serif"],
        script: ["Allura", "cursive"],
      },
      boxShadow: {
        luxury: "0 10px 30px rgba(0, 0, 0, 0.35)",
      },
      borderColor: {
        luxury: "rgba(255, 255, 255, 0.10)",
      },
    },
  },
  plugins: [],
};
