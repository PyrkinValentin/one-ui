import { color } from "../utils/convert"

export const lightBackgroundVars = {
	"--background": color("#ffffff"),
}

export const darkBackgroundVars = {
	"--background": color("#000000"),
}

export const backgroundColors = {
	background: {
		DEFAULT: "rgb(var(--background) / <alpha-value>)",
	},
}