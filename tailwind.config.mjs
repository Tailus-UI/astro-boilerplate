/** @type {import('tailwindcss').Config} */
import themer from '@tailus/themer'
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/@tailus/themer-**/dist/**/*.{js,ts}'
	],
	theme: {
		extend: {
			colors: ({ colors }) => ({
				primary: colors.blue,
				secondary: colors.purple,
				accent : colors.pink,
				success: colors.green,
				danger: colors.red,
				warning: colors.yellow,
				info: colors.blue,
				gray : colors.zinc,
				white: colors.white,
				black: colors.black,
				transparent: colors.transparent,
			}),
		},
	},
	plugins: [
		themer({
			// ... your themer config
			background: "lighter",
			radius: "smooth",
			shadow: {
				size: "md",
				opacity:5
			}
		})
	],
}
