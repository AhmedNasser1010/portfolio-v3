/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        open: ["var(--font-open)"],
        dmSerif: ["var(--font-dmSerif)"],
        archivo: ["var(--font-archivo)"],
        dream: ["var(--font-dream)"],
        palatino: ["var(--font-palatino)"],
        myriad: ["var(--font-myriad)"],
        montserrat: ["var(--font-montserrat)"],
        futura: ["var(--font-futura)"],
      },
    },
  },
  plugins: [],
};
