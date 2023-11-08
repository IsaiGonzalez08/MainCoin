/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          'overpass': ['Poppins'],
        },
      }
    },
    screens: {
        'custom': '700px',

        'sm': '838px',
        // => @media (min-width: 576px) { ... }
  
        'md': '980px',
        // => @media (min-width: 960px) { ... }
  
        'xl': '1254px',
        // => @media (min-width: 1440px) { ... }

        '2xl': '1420px'
      },
    },
  plugins: [],
}