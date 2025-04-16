/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "10px",
      screens: {
        "2xl": "1220px",
      }
    },
    extend: {
      fontFamily: {
        roc: ["roc-grotesk", "sans-serif"]
      },
      screens: {
        '1440custom': '1440px',
        'customSmall': '340px',
        '3xl': '1800px',
        '4xl': '2000px',
        'custom1200': '1200px',
        'custom1000': '1000px',
        'custom815': '815px',
        '1custom': '1400px',
        '2custom': '950px',
        'custom1430': '1430px',
        'custom1400': '1400px',
        'custom1300': '1300px',
        'custom-1700': '1660px',
        'fullSlider': '3186px',
        'custom480': '480px'
      },
      colors: {
        "th-fade": "#ffffff41",
        "th-grey": "#ffffff71",
        "th-violet": "#EABBFF",
        secondary: "#BBBBBB"
      },
      backgroundImage: {
        credo: 'url("/assets/credo_bg.jpg")',
         'faq-gradient': 'linear-gradient(120.5deg, #883DBD 3.74%, #010101 68.54%)',
        "faq-fullstack-gradient": 'background: linear-gradient(163.81deg, #873CBC 0.26%, #5F2C91 16.97%, #11011F 42.6%, #000000 53.68%)'
      },
      width: {
        'calc-full-plus-329': 'calc(100% + 329px)',
        'calc-full-minus-271': 'calc(100% - 271px)'
      },
    }
  },
  plugins: [require("tailwindcss/nesting")]
};
