/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				mainTextColor: "hsl(200, 15%, 8%)",
				mainBgColor: "hsl(0, 0%, 98%)",
				mainElementColor: "hsl(0, 0%, 100%)",
				inputColor: "hsl(0, 0%, 52%)",
				mainTextColor2: "hsl(0, 0%, 100%)",
				mainBgColor2: "hsl(207, 26%, 17%)",
				mainElementColor2: "hsl(209, 23%, 22%)",
			},
			fontFamily: {
				NunitoSans: ["Nunito Sans", "sans-serif"],
			},
			screens: {
				laptop: "1440px",
				tablet: { min: "520px", max: "767px" },
			},
		},
	},
	plugins: [],
};
