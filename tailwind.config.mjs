/** @type {import('tailwindcss').Config} */
import themer from '@tailus/themer'
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/@tailus/themer-**/dist/**/*.{js,ts}'
	],
	theme: {
		extend: {},
	},
	plugins: [
		themer({
			// ... your themer config
		})
	],
}
