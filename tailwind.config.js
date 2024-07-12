/** @type {import('tailwindcss').Config} */
module.exports = {
	important: false,
	content: ['./src/**/*.{html,js,jsx}', './index.html'],
	theme: {
		screens: {},
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
