/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'press': ['press', 'sans-serif']
      },
      colors: {
        background: {
          DEFAULT: '#0E0F3A'
        }
      }
    },
  },
  plugins: [],
}

