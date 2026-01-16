/** @type {import('tailwindcss').Config} */
// EXEMPLE DE CONFIGURATION - À adapter lors de l'implémentation Phase 1

export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ============================================
      // FONT FAMILIES
      // ============================================
      fontFamily: {
        sans: ['Bornia', 'Inter', 'sans-serif'],
        display: ['Bermia', 'Inter', 'sans-serif'],
      },

      // ============================================
      // COLORS - PRIMITIFS
      // ============================================
      colors: {
        ocobo: {
          dark: '#212323',
          yellow: {
            DEFAULT: '#F1CF25',
            light: '#FFFCEE',
          },
          mint: {
            DEFAULT: '#9ADBBA',
            light: '#EBFDF5',
          },
          sky: {
            DEFAULT: '#99D1DF',
            light: '#F0F9FB',
          },
          coral: {
            DEFAULT: '#FE9C87',
            light: '#FFF5F2',
          },
        },
        // Gray scale pour complément
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
          900: '#171717',
        },
      },

      // ============================================
      // BORDER RADIUS - 4 TOKENS
      // ============================================
      borderRadius: {
        'sm': '0.5rem',    // 8px - Petits éléments, badges
        'md': '1rem',      // 16px - Cards standard
        'lg': '1.5rem',    // 24px - Cards hero
        'xl': '2.5rem',    // 40px - Cards premium
        'full': '9999px',  // Pills, avatars
      },

      // ============================================
      // SHADOWS - 4 TOKENS
      // ============================================
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'hero': '0 40px 100px -20px rgb(0 0 0 / 0.08)',
      },

      // ============================================
      // TYPOGRAPHY - 12 TAILLES
      // ============================================
      fontSize: {
        'micro': ['0.625rem', { lineHeight: '1.4' }],  // 10px
        'xs': ['0.75rem', { lineHeight: '1.4' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.5' }],     // 14px
        'base': ['1rem', { lineHeight: '1.5' }],       // 16px
        'lg': ['1.125rem', { lineHeight: '1.6' }],     // 18px
        'xl': ['1.25rem', { lineHeight: '1.5' }],      // 20px
        '2xl': ['1.5rem', { lineHeight: '1.4' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '1.3' }],    // 30px
        '4xl': ['2.25rem', { lineHeight: '1.2' }],     // 36px
        '5xl': ['3rem', { lineHeight: '1.1' }],        // 48px
        '6xl': ['3.75rem', { lineHeight: '1.1' }],     // 60px
        '7xl': ['4.5rem', { lineHeight: '1' }],        // 72px
      },

      // ============================================
      // SPACING (optionnel - pour standardiser)
      // ============================================
      spacing: {
        // Utiliser les valeurs Tailwind par défaut
        // ou ajouter des tokens custom si nécessaire
      },
    },
  },
  plugins: [],
}
