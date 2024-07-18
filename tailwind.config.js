/** @type {import('tailwindcss').Config} */
module.exports = {
	important: false,
	content: ['./src/**/*.{html,js,jsx}', './index.html'],
	theme: {
		screens: {
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			main: '1440px',
			'2xl': '1536px',
			'2xl': '1536px',
			'3xl': '1920px',
			'4xl': '2560px',
			'5xl': '3200px',
		},
		extend: {
			fontFamily: {
				oxanium: ['Oxanium', 'sans-serif'],
				sofiaSans: ['Sofia Sans', 'sans-serif'],
			},

			colors: {
				'mid-purp': '#29214D',
				'light-purp': '#958CF8',
				'bg-color': '#150E33',
				'color-default': '#B3B2BB',
			},
		},
	},
	plugins: [],
}
