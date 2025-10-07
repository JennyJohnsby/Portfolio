/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alegreya: ["Alegreya Sans SC", "sans-serif"],
        cormorant: ["Cormorant Garamond", "serif"],
        montserrat: ["Montserrat Alternates", "sans-serif"],
        museo: ["MuseoModerno", "cursive"],
        silkscreen: ["Silkscreen", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
}