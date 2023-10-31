/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "10px",
      screens: {
        "2xl": "1220px"
      }
    },
    extend: {
      fontFamily: {
        roc: ["roc-grotesk", "sans-serif"]
      },
      colors: {
        "th-fade": "#ffffff41",
        "th-grey": "#ffffff71",
        "th-violet": "#EABBFF"
      },
      backgroundImage: {
        credo: 'url("assets/clients/credo_bg.jpg")'
      }
    }
  },
  plugins: []
};
