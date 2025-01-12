/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '10px',
      screens: {
        '2xl': '1220px',
      },
    },
    extend: {
      screens: {
        'customSmall': '340px',
        '3xl': '1800px',
        '4xl': '2000px',
        'custom1200': '1200px',
        '1custom': '1400px',
        '2custom': '950px',
        'custom-1700': '1660px',
        'fullSlider': '3186px',
      },
      fontFamily: {
        roc: ['roc-grotesk', 'sans-serif'],
      },
      colors: {
        'th-fade': '#ffffff41',
        'th-grey': '#ffffff71',
        'th-violet': '#EABBFF',
        secondary: '#BBBBBB',
      },
      backgroundImage: {
        credo: 'url("/assets/credo_bg.jpg")',
      },
    },
  },
  plugins: [require('tailwindcss/nesting')],
};
