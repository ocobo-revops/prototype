import type { Config } from 'tailwindcss';

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
					gray: '#F5F5F5',
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
