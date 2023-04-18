/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					main: '#c2d8ff',
					dark: '#353b40',
				},
				secondary: {
					main: '#5e5531',
					dark: '#3e3a2b',
					light: '#93854d',
				},
			},
		},
	},
	plugins: [],
};
