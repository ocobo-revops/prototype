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
          yellow: '#F1CF25',
          yellowLight: '#FFFCEE',
          mint: '#9ADBBA',
          mintLight: '#EBFDF5',
          sky: '#99D1DF',
          skyLight: '#F0F9FB',
          coral: '#FE9C87',
          coralLight: '#FFF5F2',
          gray: '#F5F5F5'
        }
      }
    }
  },
  plugins: [],
}
