import type { Config } from 'tailwindcss';

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Bornia', 'Inter', 'sans-serif'],
				display: ['Bermia', 'Inter', 'sans-serif'],
			},
			fontSize: {
				'2xs': ['0.625rem', { lineHeight: '1' }], // 10px - badges, labels
				xs: ['0.6875rem', { lineHeight: '1.2' }], // 11px - small text
				sm: ['0.8125rem', { lineHeight: '1.4' }], // 13px
				base: ['0.875rem', { lineHeight: '1.5' }], // 14px
				lg: ['1rem', { lineHeight: '1.5' }], // 16px
				xl: ['1.25rem', { lineHeight: '1.4' }], // 20px
				'2xl': ['1.375rem', { lineHeight: '1.3' }], // 22px
				'3xl': ['1.875rem', { lineHeight: '1.2' }], // 30px
				'4xl': ['2.25rem', { lineHeight: '1.1' }], // 36px
				'5xl': ['3rem', { lineHeight: '1' }], // 48px
				'6xl': ['3.75rem', { lineHeight: '1' }], // 60px
				'7xl': ['4.5rem', { lineHeight: '1' }], // 72px
				'8xl': ['6rem', { lineHeight: '1' }], // 96px
				'9xl': ['8rem', { lineHeight: '1' }], // 128px - decorative
			},
			borderRadius: {
				'2xl': '1rem', // 16px
				'3xl': '1.5rem', // 24px
				'4xl': '2rem', // 32px - formerly rounded-[2rem]
				'5xl': '2.5rem', // 40px - formerly rounded-[2.5rem]
				'6xl': '3rem', // 48px - formerly rounded-[3rem]
				'7xl': '4rem', // 64px - formerly rounded-[4rem]
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
					gray: '#F5F5F5',
				},
			},
			boxShadow: {
				// Soft diffused shadows (UI elements)
				soft: '0 8px 20px -10px rgba(0,0,0,0.08)',
				'soft-md': '0 15px 40px -10px rgba(0,0,0,0.12)',
				'soft-lg': '0 25px 60px -15px rgba(0,0,0,0.15)',
				'soft-xl': '0 40px 100px -20px rgba(0,0,0,0.08)',
				'soft-2xl': '0 50px 100px -20px rgba(0,0,0,0.15)',
				'soft-3xl': '0 50px 100px -20px rgba(0,0,0,0.2)',
				'soft-dark': '0 30px 100px -20px rgba(0,0,0,0.5)',
				// Button/CTA shadow
				button: '0 20px 50px -10px rgba(0,0,0,0.2)',
				// Form shadow
				form: '0 20px 50px rgba(0,0,0,0.05)',
				// Method card shadow
				card: '0 15px 50px -15px rgba(0,0,0,0.05)',
				// Colored glow
				'glow-yellow': '0 50px 100px -20px rgba(241,207,37,0.3)',
				// Ring shadow
				ring: '0 0 0 10px #fcfcfc',
				// Brutalist offset shadows
				'offset-sm': '4px 4px 0px 0px rgba(33,35,35,1)',
				'offset-md': '8px 8px 0px 0px rgba(33,35,35,1)',
				'offset-lg': '10px 10px 0px 0px rgba(33,35,35,1)',
				'offset-coral': '8px 8px 0px 0px rgba(254,156,135,1)',
				'offset-sky': '8px 8px 0px 0px rgba(153,209,223,1)',
				'offset-yellow': '8px 8px 0px 0px rgba(241,207,37,1)',
				'offset-mint': '8px 8px 0px 0px rgba(154,219,186,1)',
			},
		},
	},
	plugins: [],
} satisfies Config;
