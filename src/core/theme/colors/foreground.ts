import { color } from "../utils/convert"

export const lightForegroundVars = {
	"--foreground": color("#11181C"),
}

export const darkForegroundVars = {
	"--foreground": color("#ECEDEE"),
}

export const foregroundColors = {
	foreground: {
		DEFAULT: "rgb(var(--foreground) / <alpha-value>)",
	}
}