import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type PopoverVariantsProps = VariantProps<typeof popoverVariants>
export type PopoverVariantsReturn = ReturnType<typeof popoverVariants>

export const popoverVariants = tv({
	slots: {
		base: "z-50 outline-none",
		content: "box-border relative px-2.5 py-1 subpixel-antialiased",
		backdrop: "z-50",
		trigger: "z-10",
		arrow: "",
	},
	variants: {
		size: {
			sm: {
				content: "text-xs",
				arrow: "w-2 h-2",
			},
			md: {
				content: "text-sm",
				arrow: "w-2.5 h-2.5",
			},
			lg: {
				content: "text-md",
				arrow: "w-3 h-3",
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
				trigger: "aria-[expanded=true]:scale-[0.97] aria-[expanded=true]:opacity-disabled subpixel-antialiased",
			},
		},
		disableAnimation: {
			true: {
				trigger: "transition-none",
			},
			false: {
				trigger: "transition motion-reduce:transition-none",
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