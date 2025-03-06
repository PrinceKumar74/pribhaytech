
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				'wave-pulse': 'wave-pulse 4s ease-in-out infinite',
				'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
				'star-movement-top': 'star-movement-top linear infinite alternate',
			},
			keyframes: {
				'star-movement-bottom': {
					'0%': { transform: 'translate(0%, 0%)', opacity: '1' },
					'100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
				},
				'star-movement-top': {
					'0%': { transform: 'translate(0%, 0%)', opacity: '1' },
					'100%': { transform: 'translate(100%, 0%)', opacity: '0' },
				},
				'wave-pulse': {
					'0%, 100%': {
						opacity: '0.4.toString()'
					},
					'50%': {
						opacity: '0.7.toString()'
					}
				}
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'grid-pattern': '',
				'grid-pattern-light': ''
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
