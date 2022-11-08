/** @type {import('tailwindcss').Config} */
module.exports = {
	// extend: {
	// 	transitionTimingFunction: {
	// 		bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
	// 	}
	// },
	content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#6382dd',

					secondary: '#bcd83e',

					accent: '#8ebbdb',

					neutral: '#2C343A',

					'base-100': '#E8EAED',

					info: '#46AEE2',

					success: '#207E65',

					warning: '#F0D175',

					error: '#F53858'
				}
			}
		]
	},
	plugins: [require('daisyui'), require('flowbite/plugin')]
};
