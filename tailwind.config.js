/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bornia', 'Inter', 'sans-serif'], 
        display: ['Bermia', 'Inter', 'sans-serif'],
      },
      colors: {
        ocobo: {
          dark: '#212323',
          yellow: {
            DEFAULT: '#F1CF25',
            light: '#FFFCEE'
          },
          mint: {
            DEFAULT: '#9ADBBA',
            light: '#EBFDF5'
          },
          sky: {
            DEFAULT: '#99D1DF',
            light: '#F0F9FB'
          },
          coral: {
            DEFAULT: '#FE9C87',
            light: '#FFF5F2'
          },
          gray: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#E5E5E5',
            300: '#D4D4D4',
            400: '#A3A3A3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717'
          },
          white: '#FFFFFF',
          black: '#000000'
        }
      }
    }
  },
  plugins: [],
}
