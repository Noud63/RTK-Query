/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        twelfh : "1200px",
        eighth : "800px",
        sevenh : "700px",
        fiveh  :  "500px"
      }
    },
  },
  plugins: [],
}

