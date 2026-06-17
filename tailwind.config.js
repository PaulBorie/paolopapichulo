/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        ink: '#0C0A09',
        gold: '#FBBF24',
        golddeep: '#CA8A04',
        magenta: '#EC4899',
        cyan: '#06B6D4',
        cream: '#FAFAF9',
      },
    },
  },
};
