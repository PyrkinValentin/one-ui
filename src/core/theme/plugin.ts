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
import { darkBoxShadowVars, lightBoxShadowVars } from "./shadows/box"

const createStripeGradient = (stripeColor: string, backgroundColor: string) =>
	`linear-gradient(45deg,  rgb(var(--${stripeColor})) 25%,  rgb(var(--${backgroundColor})) 25%,  rgb(var(--${backgroundColor})) 50%,  rgb(var(--${stripeColor})) 50%,  rgb(var(--${stripeColor})) 75%,  rgb(var(--${backgroundColor})) 75%,  rgb(var(--${backgroundColor})))`

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
				sans: ["var(--font-sans)", ...fontFamily.sans],
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
				"stripe-gradient-default": createStripeGradient("default-200", "default-400"),
				"stripe-gradient-primary": createStripeGradient("primary-200", "primary"),
				"stripe-gradient-secondary": createStripeGradient("secondary-200", "secondary"),
				"stripe-gradient-success": createStripeGradient("success-200", "success"),
				"stripe-gradient-warning": createStripeGradient("warning-200", "warning"),
				"stripe-gradient-danger": createStripeGradient("danger-200", "danger"),
			},
			backgroundSize: {
				"stripe-size": "1.25rem 1.25rem",
			},
			opacity: {
				"disabled": "0.5",
				"hover": "0.9",
			},
			boxShadow: {
				"small": "var(--shadow-sm)",
				"medium": "var(--shadow-md)",
				"large": "var(--shadow-lg)",
			},
			borderRadius: {
				small: rem(8),
				medium: rem(12),
				large: rem(14),
			},
			animation: {
				"indeterminate-track": "indeterminate-track 1.5s cubic-bezier(.65,.815,.735,.395) infinite normal none running",
				"caret-blink": "caret-blink 1s ease-out infinite",
			},
			keyframes: {
				"indeterminate-track": {
					"0%": { transform: "translateX(-50%) scaleX(0.2)" },
					"100%": { transform: "translateX(100%) scaleX(1)" },
				},
				"caret-blink": {
					"0%, 70%, 100%": { opacity: "1" },
					"20%, 50%": { opacity: "0" },
				},
			},
		},
	},
})