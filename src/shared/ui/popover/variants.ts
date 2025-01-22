import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type PopoverVariantsProps = VariantProps<typeof popoverVariants>
export type PopoverVariantsReturn = ReturnType<typeof popoverVariants>

export const popoverVariants = tv({
	slots: {
		base: "box-border relative px-2.5 py-1 subpixel-antialiased outline-none",
		trigger: "z-10",
		backdrop: "z-50",
	},
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
		backdrop: {
			transparent: "",
			opaque: {
				backdrop: "bg-black/50 backdrop-opacity-disabled",
			},
			blur: {
				backdrop: "backdrop-blur-sm backdrop-saturate-150 bg-black/30",
			},
		},
		triggerScaleOnOpen: {
			true: {
				trigger: "aria-expanded:scale-[0.97] aria-expanded:opacity-disabled subpixel-antialiased",
			},
		},
	},
	defaultVariants: {
		size: "md",
		color: "default",
		rounded: "md",
		shadow: "md",
		backdrop: "transparent",
		triggerScaleOnOpen: true,
	},
})