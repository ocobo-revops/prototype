import { defineConfig } from '@pandacss/dev';

export const config = defineConfig({
	preflight: true,
	include: ['./App.tsx', './pages/**/*.tsx', './components/**/*.tsx'],
	exclude: [],
	outdir: 'styled-system',
	jsxFramework: 'react',
});
