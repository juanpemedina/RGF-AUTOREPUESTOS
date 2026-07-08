/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rgf: {
          blue: "#133e87",
          red: "#981a20",
          gray: "#908d99",
          black: "#000000",
          white: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};