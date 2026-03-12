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
          50: "#faf7f5",
          100: "#eee7e2",
          200: "#d7c7bf",
          300: "#bfa79b",
          400: "#a28779",
          500: "#87685a",
          600: "#6d5146",
          700: "#533c33",
          800: "#382723",
          900: "#1f1412",
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