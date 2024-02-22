/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
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
      "th-violet": "#EABBFF",
      secondary: "#BBBBBB"
    },
    backgroundImage: {
      credo: 'url("assets/clients/credo_bg.jpg")'
    }
  }
};
export const plugins = ["tailwindcss/nesting"];
