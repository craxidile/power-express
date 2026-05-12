/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-a50': 'rgba(255, 255, 255, .5)',
        'white-a70': 'rgba(255, 255, 255, .7)',
        'black-a30': 'rgba(0, 0, 0, .3)',
        'green-a10': 'rgba(123, 206, 67, .1)',
        'green-bullet': '#2C8E31',
        'gray-light': '#EFEFEF',
        'cta-primary': '#FF6B35',
        'sep-light': '#EAEAEA',
        'sep-green': '#2D5016',
        'sep-green-light': '#519723',
      },
      fontSize: {
        '2hxl': '1.75rem',
        '3hxl': '2rem',
        '4hxl': '2.5rem',
      }
    },
  },
  plugins: [],
}
