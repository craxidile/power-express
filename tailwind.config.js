/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-a10': 'rgba(255, 255, 255, .1)',
        'white-a20': 'rgba(255, 255, 255, .2)',
        'white-a30': 'rgba(255, 255, 255, .3)',
        'white-a50': 'rgba(255, 255, 255, .5)',
        'white-a70': 'rgba(255, 255, 255, .7)',
        'black-a30': 'rgba(0, 0, 0, .3)',
        'black-a40': 'rgba(0, 0, 0, .4)',
        'black-a70': 'rgba(0, 0, 0, .7)',
        'green-a10': 'rgba(123, 206, 67, .1)',
        'secondary': '#6A7282',
        'gray-excerpt': '#4A5565',
        'green-tag': '#2D5A3D',
        'green-bullet': '#2C8E31',
        'gray-light': '#EFEFEF',
        'gray-medium': '#4A5565',
        'gray-footer': '#192114',
        'cta-primary': '#FF6B35',
        'sep-pale': '#F3F4F6',
        'sep-light': '#EAEAEA',
        'sep-gray': '#D1D5DC',
        'sep-green': '#2D5016',
        'sep-green-light': '#519723',
        'title-pale': '#99A1AF',
        'title-light': '#6A7282',
        'pale': '#F9FAFB',
        'date-light': '#99A1AF',
        'activity-type': '#2D5016',
        'lime': '#C8FF00',
      },
      fontSize: {
        '2hxl': '1.75rem',
        '3hxl': '2rem',
        '4hxl': '2.5rem',
        '6hxl': '4rem',
      }
    },
  },
  plugins: [],
}
