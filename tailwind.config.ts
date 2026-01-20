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
		},
	},
	plugins: [],
} satisfies Config;
