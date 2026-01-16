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
        // Primitive color tokens - reference CSS custom properties (single source of truth in index.css)
        // Option B implementation: CSS variables as source of truth for runtime flexibility
        ocobo: {
          dark: 'var(--color-ocobo-dark)',
          yellow: {
            DEFAULT: 'var(--color-ocobo-yellow)',
            light: 'var(--color-ocobo-yellow-light)'
          },
          mint: {
            DEFAULT: 'var(--color-ocobo-mint)',
            light: 'var(--color-ocobo-mint-light)'
          },
          sky: {
            DEFAULT: 'var(--color-ocobo-sky)',
            light: 'var(--color-ocobo-sky-light)'
          },
          coral: {
            DEFAULT: 'var(--color-ocobo-coral)',
            light: 'var(--color-ocobo-coral-light)'
          },
          gray: {
            50: 'var(--color-ocobo-gray-50)',
            100: 'var(--color-ocobo-gray-100)',
            200: 'var(--color-ocobo-gray-200)',
            300: 'var(--color-ocobo-gray-300)',
            400: 'var(--color-ocobo-gray-400)',
            500: 'var(--color-ocobo-gray-500)',
            600: 'var(--color-ocobo-gray-600)',
            700: 'var(--color-ocobo-gray-700)',
            800: 'var(--color-ocobo-gray-800)',
            900: 'var(--color-ocobo-gray-900)'
          },
          white: 'var(--color-ocobo-white)',
          black: 'var(--color-ocobo-black)'
        },
        // Semantic color tokens - reference CSS custom properties (Option B from spec)
        semantic: {
          primary: 'var(--color-semantic-primary)',
          'primary-light': 'var(--color-semantic-primary-light)',
          accent: 'var(--color-semantic-accent)',
          success: 'var(--color-semantic-success)',
          info: 'var(--color-semantic-info)',
          surface: 'var(--color-semantic-surface)',
          background: 'var(--color-semantic-background)',
          text: 'var(--color-semantic-text)',
          'text-muted': 'var(--color-semantic-text-muted)',
          border: 'var(--color-semantic-border)'
        }
      },
      borderRadius: {
        sm: '0.5rem',   // 8px - Badges, small inputs
        md: '1rem',     // 16px - Standard cards, buttons
        lg: '1.5rem',   // 24px - Hero cards, sections
        xl: '2.5rem',   // 40px - Premium cards, modals
        full: '9999px'  // Pills, avatars
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
        hero: '0 40px 100px -20px rgb(0 0 0 / 0.08)'
      },
      fontSize: {
        micro: ['10px', { lineHeight: '1.4' }],  // Badges, labels uppercase
        xs: ['12px', { lineHeight: '1.4' }],     // Captions, metadata
        sm: ['14px', { lineHeight: '1.5' }],     // Body small, UI elements
        base: ['16px', { lineHeight: '1.5' }],   // Body default
        lg: ['18px', { lineHeight: '1.6' }],     // Body large, lead
        xl: ['20px', { lineHeight: '1.5' }],     // Subheadings
        '2xl': ['24px', { lineHeight: '1.4' }],  // H4
        '3xl': ['30px', { lineHeight: '1.3' }],  // H3
        '4xl': ['36px', { lineHeight: '1.2' }],  // H2
        '5xl': ['48px', { lineHeight: '1.1' }],  // H1
        '6xl': ['60px', { lineHeight: '1.1' }],  // Hero mobile
        '7xl': ['72px', { lineHeight: '1.0' }]   // Hero desktop
      }
    }
  },
  plugins: [],
}
