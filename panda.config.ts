import { defineConfig } from '@pandacss/dev';

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
			},
		},
	},
});
