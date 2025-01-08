import Plugin from "tailwindcss/plugin"
import { fontFamily } from "tailwindcss/defaultTheme"

import { rem, spacing } from "./utils/convert"

import { darkBackgroundVars, lightBackgroundVars, backgroundColors } from "./colors/background"
import { darkForegroundVars, lightForegroundVars, foregroundColors } from "./colors/foreground"
import { darkDefaultVars, defaultColors, lightDefaultVars } from "./colors/default"
import { darkPrimaryVars, lightPrimaryVars, primaryColors } from "./colors/primary"
import { darkSecondaryVars, lightSecondaryVars, secondaryColors } from "./colors/secondary"
import { darkSuccessVars, lightSuccessVars, successColors } from "./colors/success"
import { darkWarningVars, lightWarningVars, warningColors } from "./colors/warning"
import { dangerColors, darkDangerVars, lightDangerVars } from "./colors/danger"
import { darkDividerVars, dividerColors, lightDividerVars } from "./colors/divider"
import { contentColors, darkContentVars, lightContentVars } from "./colors/content"
import { darkFocusVars, lightFocusVars, focusColors } from "./colors/focus"

import { backgroundImageStripe } from "./background-image/stripe"

import { boxShadow, darkBoxShadowVars, lightBoxShadowVars } from "./shadows/box"
import { borderRadius } from "./border-radius"
import { animations } from "./animations"
import { keyframes } from "./keyframes"

export const plugin = Plugin((api) => {
	const { addBase } = api

	addBase({
		":root": {
			fontSize: rem(16),
			backgroundColor: "rgb(var(--background))",
			color: "rgb(var(--foreground))",
		},
		":root, [data-theme]": {
			...lightBackgroundVars,
			...lightForegroundVars,
			...lightDefaultVars,
			...lightPrimaryVars,
			...lightSecondaryVars,
			...lightSuccessVars,
			...lightWarningVars,
			...lightDangerVars,
			...lightBoxShadowVars,
			...lightDividerVars,
			...lightContentVars,
			...lightFocusVars,
		},
		"[data-theme='dark']": {
			...darkBackgroundVars,
			...darkForegroundVars,
			...darkDefaultVars,
			...darkPrimaryVars,
			...darkSecondaryVars,
			...darkSuccessVars,
			...darkWarningVars,
			...darkDangerVars,
			...darkBoxShadowVars,
			...darkDividerVars,
			...darkContentVars,
			...darkFocusVars,
		},
	})
}, {
	darkMode: ["selector", "[data-theme='dark']"],
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
		},
		container: {
			center: true,
			padding: spacing(4),
			screens: {
				lg: "1024px",
			},
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)", ...fontFamily.sans],
			},
			colors: {
				...backgroundColors,
				...foregroundColors,
				...defaultColors,
				...primaryColors,
				...secondaryColors,
				...successColors,
				...warningColors,
				...dangerColors,
				...dividerColors,
				...contentColors,
				...focusColors,
			},
			backgroundImage: {
				...backgroundImageStripe,
			},
			opacity: {
				"disabled": "0.5",
				"hover": "0.9",
			},
			boxShadow,
			borderRadius,
			animation: animations,
			keyframes,
		},
	},
})