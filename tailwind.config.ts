import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import tailwindcssAnimated from 'tailwindcss-animated';

export default {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	plugins: [tailwindcssAnimated, typography, forms, aspectRatio, containerQueries],
	theme: {
		// Reproduce font classes without line height
		fontSize: {
			'9xl': '8rem',
			'8xl': '6rem',
			'7xl': '4.5rem',
			'6xl': '3.75rem',
			'5xl': '3rem',
			'4xl': '2.25rem',
			'3xl': '1.875rem',
			'2xl': '1.5rem',
			lg: '1.125rem',
			xl: '1.25rem',
			base: '1rem',
			sm: '0.875rem',
			xs: '0.75rem'
		}
	}
};
