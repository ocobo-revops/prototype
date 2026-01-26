import { defineConfig, defineRecipe } from '@pandacss/dev';

const sectionRecipe = defineRecipe({
	className: 'section',
	description: 'Section component styles',
	base: {},
	variants: {
		bg: {
			white: {
				bg: 'white',
			},
			gray: {
				bg: 'gray.50',
			},
			dark: {
				bg: 'ocobo.dark',
				color: 'white',
			},
			yellow: {
				bg: 'ocobo.yellow',
				color: 'ocobo.dark',
			},
			sky: {
				bg: 'ocobo.sky.light',
			},
			mint: {
				bg: 'ocobo.mint.light',
			},
			coral: {
				bg: 'ocobo.coral.light',
			},
		},
		padding: {
			sm: {
				py: '12',
				md: { py: '16' },
			},
			md: {
				py: '16',
				md: { py: '24' },
			},
			lg: {
				py: '24',
			},
		},
	},
	defaultVariants: {
		bg: 'white',
		padding: 'lg',
	},
});

const inputRecipe = defineRecipe({
	className: 'input',
	description: 'Input component styles',
	base: {
		width: 'full',
		px: '4',
		py: '4',
		bg: 'gray.50',
		borderWidth: '1px',
		borderStyle: 'solid',
		transition: 'all',
		outline: 'none',
		_focus: {
			bg: 'white',
		},
	},
	variants: {
		error: {
			true: {
				borderColor: 'red.500',
				_focus: {
					borderColor: 'red.500',
				},
			},
			false: {
				borderColor: 'gray.100',
				_focus: {
					borderColor: 'ocobo.dark',
				},
			},
		},
	},
	defaultVariants: {
		error: false,
	},
});

const badgeRecipe = defineRecipe({
	className: 'badge',
	description: 'Badge component styles',
	base: {
		display: 'inline-block',
		fontFamily: 'display',
		fontWeight: 'black',
		textTransform: 'uppercase',
		borderWidth: '1px',
		borderStyle: 'solid',
	},
	variants: {
		variant: {
			yellow: {
				color: 'ocobo.dark',
				bg: 'ocobo.yellow.light',
				borderColor: 'ocobo.yellow/20',
			},
			mint: {
				color: 'ocobo.dark',
				bg: 'ocobo.mint.light',
				borderColor: 'ocobo.mint/20',
			},
			sky: {
				color: 'ocobo.sky',
				bg: 'ocobo.sky.light',
				borderColor: 'ocobo.sky/20',
			},
			coral: {
				color: 'ocobo.coral',
				bg: 'ocobo.coral.light',
				borderColor: 'ocobo.coral/20',
			},
			dark: {
				color: 'white',
				bg: 'ocobo.dark',
				borderColor: 'ocobo.dark/20',
			},
			gray: {
				color: 'gray.400',
				bg: 'gray.100',
				borderColor: 'gray.200',
			},
		},
		size: {
			sm: {
				px: '4',
				py: '1.5',
				fontSize: 'xs',
				letterSpacing: '0.3em',
			},
			md: {
				px: '6',
				py: '2',
				fontSize: 'xs',
				letterSpacing: '0.3em',
			},
		},
		rounded: {
			sm: {
				borderRadius: 'sm',
			},
			full: {
				borderRadius: 'full',
			},
		},
	},
	defaultVariants: {
		variant: 'yellow',
		size: 'sm',
		rounded: 'sm',
	},
});

const buttonRecipe = defineRecipe({
	className: 'button',
	description: 'Button component styles',
	base: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '2',
		borderRadius: 'full',
		fontWeight: 'semibold',
		letterSpacing: 'wide',
		cursor: 'pointer',
		transition: 'all 0.3s',
		borderWidth: '1px',
		borderStyle: 'solid',
		borderColor: 'transparent',
		_focusVisible: {
			outlineWidth: '2px',
			outlineStyle: 'solid',
			outlineOffset: '2px',
		},
		'& > svg': {
			transition: 'transform 0.3s',
		},
		_hover: {
			'& > svg': {
				transform: 'translateX(0.25rem)',
			},
		},
	},
	variants: {
		variant: {
			primary: {
				bg: 'ocobo.dark',
				color: 'white',
				_hover: {
					bg: 'ocobo.gray',
				},
				_focusVisible: {
					outlineColor: 'white',
				},
			},
			outline: {
				bg: 'transparent',
				color: 'ocobo.dark',
				borderColor: 'ocobo.dark',
				_hover: {
					bg: 'ocobo.dark',
					color: 'white',
				},
				_focusVisible: {
					outlineColor: 'ocobo.dark',
				},
			},
			white: {
				bg: 'white',
				color: 'ocobo.dark',
				_hover: {
					bg: 'gray.100',
				},
				_focusVisible: {
					outlineColor: 'ocobo.dark',
				},
			},
			cta: {
				bg: 'ocobo.dark',
				color: 'white',
				shadow: 'xl',
				_hover: {
					transform: 'translateY(-0.25rem)',
					shadow: '2xl',
				},
				_focusVisible: {
					outlineColor: 'white',
				},
			},
			nav: {
				bg: 'transparent',
				color: 'currentColor',
				_hover: {
					bg: 'currentColor/10',
				},
				_focusVisible: {
					outlineColor: 'currentColor',
				},
			},
		},
		size: {
			sm: {
				px: '4',
				py: '2',
				fontSize: 'xs',
			},
			md: {
				px: '6',
				py: '3',
				fontSize: 'sm',
			},
			lg: {
				px: '8',
				py: '4',
				fontSize: 'base',
			},
			xl: {
				px: '12',
				py: '5',
				fontSize: 'lg',
			},
		},
		fullWidth: {
			true: {
				width: 'full',
			},
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'md',
	},
});

export default defineConfig({
	preflight: true,
	include: [
		'./src/**/*.{ts,tsx}',
		'./App.tsx',
		'./pages/**/*.tsx',
		'./components/**/*.tsx',
	],
	exclude: [],
	outdir: 'styled-system',
	jsxFramework: 'react',
	theme: {
		recipes: {
			badge: badgeRecipe,
			button: buttonRecipe,
			input: inputRecipe,
			section: sectionRecipe,
		},
		extend: {
			tokens: {
				fonts: {
					sans: { value: ['Bornia', 'Inter', 'sans-serif'] },
					display: { value: ['Bermia', 'Inter', 'sans-serif'] },
				},
				fontSizes: {
					xs: { value: '0.75rem' },
					sm: { value: '0.875rem' },
					base: { value: '1rem' },
					lg: { value: '1.125rem' },
					xl: { value: '1.25rem' },
					'2xl': { value: '1.375rem' },
					'3xl': { value: '1.875rem' },
					'4xl': { value: '2.25rem' },
					'5xl': { value: '3rem' },
					'6xl': { value: '3.75rem' },
				},
				lineHeights: {
					xs: { value: '1.2' },
					sm: { value: '1.4' },
					base: { value: '1.5' },
					lg: { value: '1.4' },
					xl: { value: '1.3' },
					'2xl': { value: '1.25' },
					'3xl': { value: '1.2' },
					'4xl': { value: '1.1' },
					'5xl': { value: '1' },
					'6xl': { value: '1' },
				},
				radii: {
					'2xl': { value: '1rem' },
					'3xl': { value: '1.5rem' },
				},
				colors: {
					ocobo: {
						dark: { value: '#212323' },
						gray: { value: '#F5F5F5' },
						yellow: { value: '#F1CF25' },
						'yellow.light': { value: '#FFFCEE' },
						mint: { value: '#9ADBBA' },
						'mint.light': { value: '#EBFDF5' },
						sky: { value: '#99D1DF' },
						'sky.light': { value: '#F0F9FB' },
						coral: { value: '#FE9C87' },
						'coral.light': { value: '#FFF5F2' },
					},
				},
				shadows: {
					soft: { value: '0 8px 20px -10px rgba(0,0,0,0.08)' },
					'soft-md': { value: '0 15px 40px -10px rgba(0,0,0,0.12)' },
					'soft-lg': { value: '0 25px 60px -15px rgba(0,0,0,0.15)' },
					dark: { value: '0 30px 100px -20px rgba(0,0,0,0.5)' },
					card: { value: '0 15px 50px -15px rgba(0,0,0,0.05)' },
					ring: { value: '0 0 0 10px #fcfcfc' },
					offset: { value: '8px 8px 0px 0px rgba(33,35,35,1)' },
				},
				animations: {
					// Float animations
					'float-cursor': { value: 'float-cursor 5s infinite ease-in-out' },
					'float-very-slow': {
						value: 'float-very-slow 12s ease-in-out infinite',
					},
					'float-gentle': { value: 'float-gentle 8s ease-in-out infinite' },
					'float-grid': { value: 'float-grid 6s ease-in-out infinite' },
					'float-blob': { value: 'float-blob 12s infinite ease-in-out' },
					// Fade animations
					'slow-fade': { value: 'slow-fade 6s infinite ease-in-out' },
					'fade-in-up': {
						value: 'fade-in-up 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
					},
					'fade-in-up-small': {
						value:
							'fade-in-up-small 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
					},
					'hero-reveal': {
						value: 'hero-reveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
					},
					'gentle-reveal': {
						value: 'gentle-reveal 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
					},
					// Bounce animations
					'bounce-slow': { value: 'bounce-slow 3s ease-in-out infinite' },
					'bounce-subtle': { value: 'bounce-subtle 3s ease-in-out infinite' },
					// Rotation animations
					'spin-slow': { value: 'spin-slow 20s linear infinite' },
					'radar-sweep': { value: 'radar-sweep 10s linear infinite' },
					// Marquee animations
					'marquee-ultra-slow': {
						value: 'marquee-ultra-slow 90s linear infinite',
					},
					// Entry animations
					'blueprint-in': {
						value: 'blueprint-in 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
					},
					'box-pop': {
						value: 'box-pop 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
					},
				},
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
		},
	},
});
