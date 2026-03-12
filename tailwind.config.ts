import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          50: "#fdf8f0",
          100: "#f5e8d0",
          200: "#e8cc9a",
          300: "#d4a55e",
          400: "#c08840",
          500: "#a06c28",
          600: "#7d5220",
          700: "#5c3c18",
          800: "#3c2810",
          900: "#1e1408",
        },
        cream: {
          50: "#fefdfb",
          100: "#fdf8f0",
          200: "#f8efd8",
          300: "#f0e0bb",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Cormorant Garamond", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
