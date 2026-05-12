/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-a70': 'rgba(255, 255, 255, .7)',
        'black-a30': 'rgba(0, 0, 0, .3)',
        'cta-primary': '#FF6B35',
      }
    },
  },
  plugins: [],
}
