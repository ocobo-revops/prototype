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
				'2xl': ['1.375rem', { lineHeight: '1.25' }], // 22px
				'3xl': ['1.875rem', { lineHeight: '1.2' }], // 30px
				'4xl': ['2.25rem', { lineHeight: '1.1' }], // 36px
				'5xl': ['3rem', { lineHeight: '1' }], // 48px
				'6xl': ['3.75rem', { lineHeight: '1' }], // 60px
			},
			borderRadius: {
				'2xl': '1rem', // 16px
				'3xl': '1.5rem', // 24px
			},
			colors: {
				gray: {
					50: '#f9fafb',
					100: '#f3f4f6',
					200: '#e5e7eb',
					300: '#d1d5db',
					400: '#9ca3af',
					500: '#6b7280',
					600: '#4b5563',
					700: '#374151',
					800: '#1f2937',
				},
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
