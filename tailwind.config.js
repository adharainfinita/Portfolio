/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Poppins: ["Poppins", "cursive"],
				tittilium: ["Titillium Web", "bold"],
			},
			colors: {
			
					background: "rgb(3, 0, 28)",
					purple: "rgb(48, 30, 103)",
					ciel: "rgb(91, 143, 185)",
					detail: "rgb(182, 234, 218)",
					pink: "rgb(247, 61, 147)",
					"violet-Ocean": "rgb(22, 0, 59)",
					grayLetter: "rgb(65, 63, 66)",
					grayOwn: "rgb(127, 132, 135)",
					wordpress: "rgb(33, 117, 155)",
					linkedin: "rgb(14, 118, 168)",
					'light-ocean': 'rgb(243, 188, 200)',
					'light-ciel': 'rgb(246, 255, 166)',
					'light-pink': 'rgb(232, 147, 207)',
					'light-purple': 'rgb(147, 118, 224)'
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
