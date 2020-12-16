module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
	theme: {
		opacity: {
			'0': '0',
			'10': '0.1',
			'20': '0.2',
			'40': '0.4',
			'60': '0.6',
			'80': '0.8',
			'100': '1',
		},
		extend: {
			colors: {
				'accent-1': '#333',
				'yellow-600': '#d69e2e'
			},
			fontFamily: {
				'sans': ['Manrope'],
				'serif': ['Lato']
			}
		},
	},
	variants: {},
	plugins: [],
}

