/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roc': ["roc-grotesk", 'sans-serif'],
      },
      colors: {
        'th-fade': "#ffffff41",
        'th-grey': "#ffffff71",
        'th-violet': "#EABBFF",
      }
    },
  },
  plugins: [],
}

