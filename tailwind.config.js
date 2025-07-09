/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",              // 👈 add this!
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
