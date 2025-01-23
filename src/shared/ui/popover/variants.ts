import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type PopoverVariantsProps = VariantProps<typeof popoverVariants>
export type PopoverVariantsReturn = ReturnType<typeof popoverVariants>

export const popoverVariants = tv({
	slots: {
		base: "outline-none",
		backdrop: "z-50",
		trigger: "z-10",
		content: "box-border z-10 relative px-2.5 py-1 subpixel-antialiased",
		arrow: "",
	},
	variants: {
		size: {
			sm: {
				content: "text-xs",
				arrow: "w-1.5 h-1.5",
			},
			md: {
				content: "text-sm",
				arrow: "w-2 h-2",
			},
			lg: {
				content: "text-md",
				arrow: "w-2.5 h-2.5",
			},
		},
		color: {
			default: {
				content: "bg-content1",
				arrow: "bg-content1",
			},
			foreground: {
				content: "bg-foreground text-background",
				arrow: "bg-foreground",
			},
			primary: {
				content: "bg-primary text-primary-foreground",
				arrow: "bg-primary",
			},
			secondary: {
				content: "bg-secondary text-secondary-foreground",
				arrow: "bg-secondary",
			},
			success: {
				content: "bg-success text-success-foreground",
				arrow: "bg-success",
			},
			warning: {
				content: "bg-warning text-warning-foreground",
				arrow: "bg-warning",
			},
			danger: {
				content: "bg-danger text-danger-foreground",
				arrow: "bg-danger",
			},
		},
		rounded: {
			none: {
				content: "rounded-none",
			},
			sm: {
				content: "rounded-small",
			},
			md: {
				content: "rounded-medium",
			},
			lg: {
				content: "rounded-large",
			},
			full: {
				content: "rounded-full",
			},
		},
		shadow: {
			none: {
				content: "shadow-none",
				arrow: "shadow-none",
			},
			sm: {
				content: "shadow-small",
				arrow: "shadow-small",
			},
			md: {
				content: "shadow-medium",
				arrow: "shadow-medium",
			},
			lg: {
				content: "shadow-large",
				arrow: "shadow-large",
			},
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