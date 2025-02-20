import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type RadioGroupVariantsProps = VariantProps<typeof radioGroupVariants>

export const radioGroupVariants = tv({
	slots: {
		base: "relative flex flex-col gap-2",
		label: "relative text-md text-default-500",
		wrapper: "flex flex-wrap gap-2",
		invalidMessage: "pt-2 text-xs text-danger",
		description: "pt-2 text-xs text-default-400",
	},
	variants: {
		orientation: {
			horizontal: {
				wrapper: "flex-row",
			},
			vertical: {
				wrapper: "flex-col",
			},
		},
		required: {
			true: {
				label: "after:content-['*'] after:text-danger after:ml-0.5",
			},
		},
		invalid: {
			true: {
				description: "text-danger",
			},
		},
		disableAnimation: {
			true: {
				description: "transition-none",
			},
			false: {
				description: "transition-colors motion-reduce:transition-none",
			},
		},
	},
	defaultVariants: {
		orientation: "vertical",
	},
})

export type RadioVariantsProps = VariantProps<typeof radioVariants>

export const radioVariants = tv({
	slots: {
		base:
			"group relative p-2 -m-2 max-w-fit inline-flex items-center justify-start cursor-pointer touch-none select-none",
		wrapper: [
			"box-border overflow-hidden relative inline-flex items-center justify-center shrink-0 outline-none",
			"border-solid border-2 border-default rounded-full",
			"has-[input:focus-visible]:z-10 has-[input:focus-visible]:ring-2 has-[input:focus-visible]:ring-focus",
			"has-[input:focus-visible]:ring-offset-2 has-[input:focus-visible]:ring-offset-background",
			"group-hover:[&:has(input:not(:checked))]:bg-default-100",
		],
		input: "sr-only",
		control: [
			"z-10 w-2 h-2 opacity-0 scale-0 origin-center rounded-full group-has-[input:checked]:opacity-100",
			"group-has-[input:checked]:scale-100"
		],
		labelWrapper: "ms-2 flex flex-col",
		label: "relative text-foreground cursor-pointer",
		description: "relative text-default-400",
	},
	variants: {
		size: {
			sm: {
				wrapper: "w-4 h-4",
				control: "w-1.5 h-1.5",
				label: "text-sm",
				description: "text-xs",
			},
			md: {
				wrapper: "w-5 h-5",
				control: "w-2 h-2",
				label: "text-md",
				description: "text-sm",
			},
			lg: {
				wrapper: "w-6 h-6",
				control: "w-2.5 h-2.5",
				label: "text-lg",
				description: "text-md",
			},
		},
		color: {
			default: {
				wrapper: "has-[input:checked]:border-default-500",
				control: "bg-default-500 text-default-foreground",
			},
			primary: {
				wrapper: "has-[input:checked]:border-primary",
				control: "bg-primary text-primary-foreground",
			},
			secondary: {
				wrapper: "has-[input:checked]:border-secondary",
				control: "bg-secondary text-secondary-foreground",
			},
			success: {
				wrapper: "has-[input:checked]:border-success",
				control: "bg-success text-success-foreground",
			},
			warning: {
				wrapper: "has-[input:checked]:border-warning",
				control: "bg-warning text-warning-foreground",
			},
			danger: {
				wrapper: "has-[input:checked]:border-danger",
				control: "bg-danger text-danger-foreground",
			},
		},
		readOnly: {
			true: {
				base: "pointer-events-none",
			}
		},
		disabled: {
			true: {
				base: "opacity-disabled pointer-events-none",
			},
		},
		invalid: {
			true: {
				wrapper: "border-danger has-[input:checked]:border-danger",
				control: "bg-danger text-danger-foreground",
				label: "text-danger",
				description: "text-danger",
			},
		},
		disableAnimation: {
			true: {
				base: "transition-none",
				wrapper: "transition-none",
				control: "transition-none",
				label: "transition-none",
				description: "transition-none",
			},
			false: {
				base: "transition-opacity motion-reduce:transition-none",
				wrapper: [
					"has-[input:active]:scale-[0.97] transition-[transform,background-color,border-color]",
					"motion-reduce:transition-none",
				],
				control: "transition motion-reduce:transition-none",
				label: "transition-colors motion-reduce:transition-none",
				description: "transition-colors motion-reduce:transition-none",
			},
		},
	},
	defaultVariants: {
		size: "md",
		color: "primary",
	},
})