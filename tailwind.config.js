/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");


module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '767px',
      // => @media (min-width: 767px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }

      'xxl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      colors: {
        // 'themeblue': '#6B45BC',
      },
      minHeight: {
        'custom-calc': 'calc(100vh - 10rem)',  // Custom height using calc function
      },
      zIndex: {
        '1000': '1000',
      }
    },
    fontFamily: {
      'Josefin': ['Josefin Sans', 'sans-serif'],
      'Jost': ['Jost', 'cursans-serifsive'],
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
