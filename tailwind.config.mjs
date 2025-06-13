/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
			},
			textColor: {
				default: "var(--color-text)",
				offset: "var(--color-text-offset)",
				link: "var(--color-link)",
				marking: "var(--color-marking)", 
			},
			backgroundColor: {
				default: "var(--color-background)",
				offset: "var(--color-background-offset)",
				border: "var(--color-border)",
				start: "var(--color-body-background-start)",
				end: "var(--color-body-background-end)",
				modal: "var(--color-modal-background)",
			},
			backgroundImage: {
				'soft-gradient': 'linear-gradient(to bottom right, #f9fafb, #ffffff)',
			},
			borderColor: {
				default: "var(--color-border)",
			},
			animation: {
				"spin-slower": "spin 35s ease infinite",
				"spin-slow": "spin 25s ease-in-out infinite reverse",
			},
		}
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
