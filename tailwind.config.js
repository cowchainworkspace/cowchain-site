/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roc': ['Roc Grotesk', 'sans-serif'],
      },
      colors: {
        'th-grey': "#bbb",
        'th-violet': "EABBFF",
      }
    },
  },
  plugins: [],
}

