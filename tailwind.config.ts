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
				xs: ['0.75rem', { lineHeight: '1.2' }], // 12px
				sm: ['0.875rem', { lineHeight: '1.4' }], // 14px
				base: ['1rem', { lineHeight: '1.5' }], // 16px
				lg: ['1.125rem', { lineHeight: '1.4' }], // 18px
				xl: ['1.25rem', { lineHeight: '1.3' }], // 20px
				'2xl': ['1.5rem', { lineHeight: '1.25' }], // 24px
				'3xl': ['2rem', { lineHeight: '1.2' }], // 32px
				'4xl': ['2.5rem', { lineHeight: '1.1' }], // 40px
				'5xl': ['3.5rem', { lineHeight: '1' }], // 56px
				'6xl': ['4rem', { lineHeight: '1' }], // 64px
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
					gray: '#F5F5F5',
				},
			},
			boxShadow: {
				// Soft diffused shadows (4 tokens)
				soft: '0 8px 20px -10px rgba(0,0,0,0.08)',
				'soft-md': '0 15px 40px -10px rgba(0,0,0,0.12)',
				'soft-lg': '0 25px 60px -15px rgba(0,0,0,0.15)',
				// Dark shadow
				dark: '0 30px 100px -20px rgba(0,0,0,0.5)',
				// Card shadow
				card: '0 15px 50px -15px rgba(0,0,0,0.05)',
				// Ring shadow
				ring: '0 0 0 10px #fcfcfc',
				// Brutalist offset shadow (single token)
				offset: '8px 8px 0px 0px rgba(33,35,35,1)',
			},
			keyframes: {
				// Float animations
				'float-cursor': {
					'0%, 100%': { transform: 'translate(430px, 430px) rotate(-10deg)' },
					'50%': { transform: 'translate(440px, 420px) rotate(-5deg)' },
				},
				'float-very-slow': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-12px)' },
				},
				'float-gentle': {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'50%': { transform: 'translateY(-15px) rotate(2deg)' },
				},
				'float-grid': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-8px)' },
				},
				'float-blob': {
					'0%, 100%': { transform: 'translate(0, 0) scale(1)' },
					'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
					'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
				},
				// Fade animations
				'slow-fade': {
					'0%, 100%': { opacity: '0.1' },
					'50%': { opacity: '0.85' },
				},
				'fade-in-up': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in-up-small': {
					from: { opacity: '0', transform: 'translateY(15px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				'hero-reveal': {
					from: { opacity: '0', transform: 'translateY(15px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				'gentle-reveal': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				// Bounce animations
				'bounce-slow': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(6px)' },
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(8px)' },
				},
				// Rotation animations
				'spin-slow': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' },
				},
				'radar-sweep': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' },
				},
				// Marquee animations
				marquee: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
				'marquee-ultra-slow': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-33.33%)' },
				},
				// Entry animations
				'blueprint-in': {
					from: { opacity: '0', transform: 'scaleX(0)' },
					to: { opacity: '1', transform: 'scaleX(1)' },
				},
				'box-pop': {
					'0%': { opacity: '0', transform: 'translateY(20px) scale(0.9)' },
					'100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
				},
			},
			animation: {
				// Float animations
				'float-cursor': 'float-cursor 5s infinite ease-in-out',
				'float-very-slow': 'float-very-slow 12s ease-in-out infinite',
				'float-gentle': 'float-gentle 8s ease-in-out infinite',
				'float-grid': 'float-grid 6s ease-in-out infinite',
				'float-blob': 'float-blob 12s infinite ease-in-out',
				// Fade animations
				'slow-fade': 'slow-fade 6s infinite ease-in-out',
				'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
				'fade-in-up-small':
					'fade-in-up-small 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
				'hero-reveal':
					'hero-reveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
				'gentle-reveal':
					'gentle-reveal 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
				// Bounce animations
				'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
				'bounce-subtle': 'bounce-subtle 3s ease-in-out infinite',
				// Rotation animations
				'spin-slow': 'spin-slow 20s linear infinite',
				'radar-sweep': 'radar-sweep 10s linear infinite',
				// Marquee animations
				marquee: 'marquee 20s linear infinite',
				'marquee-ultra-slow': 'marquee-ultra-slow 90s linear infinite',
				// Entry animations
				'blueprint-in':
					'blueprint-in 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
				'box-pop': 'box-pop 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
			},
		},
	},
	plugins: [],
} satisfies Config;
