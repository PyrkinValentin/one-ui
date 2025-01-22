import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type TooltipVariantsProps = VariantProps<typeof tooltipVariants>

export const tooltipVariants = tv({
	base: "z-10 box-border relative px-2.5 py-1 subpixel-antialiased outline-none",
	variants: {
		size: {
			sm: "text-xs",
			md: "text-sm",
			lg: "text-md",
		},
		color: {
			default: "bg-content1",
			foreground: "bg-foreground text-background",
			primary: "bg-primary text-primary-foreground",
			secondary: "bg-secondary text-secondary-foreground",
			success: "bg-success text-success-foreground",
			warning: "bg-warning text-warning-foreground",
			danger: "bg-danger text-danger-foreground",
		},
		rounded: {
			none: "rounded-none",
			sm: "rounded-small",
			md: "rounded-medium",
			lg: "rounded-large",
			full: "rounded-full",
		},
		shadow: {
			none: "shadow-none",
			sm: "shadow-small",
			md: "shadow-medium",
			lg: "shadow-large",
		},
	},
	defaultVariants: {
		size: "md",
		color: "default",
		rounded: "md",
		shadow: "md",
	},
})