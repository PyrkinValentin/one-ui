import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type CheckboxVariantsProps = VariantProps<typeof checkboxVariants>

export const checkboxVariants = tv({
	slots: {
		base: "group relative p-2 -m-2 max-w-fit inline-flex items-center justify-start cursor-pointer touch-none select-none",
		wrapper: [
			"overflow-hidden relative inline-flex items-center justify-start flex-shrink-0 outline-none",
			"before:content-[''] before:box-border before:absolute before:inset-0 before:border-solid before:border-2",
			"before:border-default after:content-[''] after:absolute after:inset-0 after:scale-50 after:opacity-0",
			"after:origin-center [&:has(input:checked)]:after:scale-100 [&:has(input:checked)]:after:opacity-100",
			"[&:has(input:focus-visible)]:z-10 [&:has(input:focus-visible)]:ring-2 [&:has(input:focus-visible)]:ring-focus",
			"[&:has(input:focus-visible)]:ring-offset-2 [&:has(input:focus-visible)]:ring-offset-background",
			"group-hover:before:bg-default-100",
		],
		input: "peer sr-only",
		icon: "z-10 opacity-0 peer-checked:opacity-100 pointer-events-none",
		label: "relative ms-2 text-foreground",
	},
	variants: {
		size: {
			sm: {
				wrapper: [
					"w-4 h-4 rounded-[calc(theme(borderRadius.medium)*0.5)] before:rounded-[calc(theme(borderRadius.medium)*0.5)]",
					"after:rounded-[calc(theme(borderRadius.medium)*0.5)]",
				],
				label: "text-sm",
				icon: "w-4 h-2",
			},
			md: {
				wrapper: [
					"w-5 h-5 rounded-[calc(theme(borderRadius.medium)*0.6)] before:rounded-[calc(theme(borderRadius.medium)*0.6)]",
					"after:rounded-[calc(theme(borderRadius.medium)*0.6)]",
				],
				label: "text-md",
				icon: "w-5 h-3",
			},
			lg: {
				wrapper: [
					"w-6 h-6 rounded-[calc(theme(borderRadius.medium)*0.7)] before:rounded-[calc(theme(borderRadius.medium)*0.7)]",
					"after:rounded-[calc(theme(borderRadius.medium)*0.7)]",
				],
				label: "text-lg",
				icon: "w-6 h-4",
			},
		},
		color: {
			default: {
				wrapper: "after:bg-default after:text-default-foreground text-default-foreground",
			},
			primary: {
				wrapper: "after:bg-primary after:text-primary-foreground text-primary-foreground",
			},
			secondary: {
				wrapper: "after:bg-secondary after:text-secondary-foreground text-secondary-foreground",
			},
			success: {
				wrapper: "after:bg-success after:text-success-foreground text-success-foreground",
			},
			warning: {
				wrapper: "after:bg-warning after:text-warning-foreground text-warning-foreground",
			},
			danger: {
				wrapper: "after:bg-danger after:text-danger-foreground text-danger-foreground",
			},
		},
		rounded: {
			none: {
				wrapper: "rounded-none before:rounded-none after:rounded-none",
			},
			sm: {
				wrapper: [
					"rounded-[calc(theme(borderRadius.medium)*0.5)] before:rounded-[calc(theme(borderRadius.medium)*0.5)]",
					"after:rounded-[calc(theme(borderRadius.medium)*0.5)]",
				],
			},
			md: {
				wrapper: [
					"rounded-[calc(theme(borderRadius.medium)*0.6)] before:rounded-[calc(theme(borderRadius.medium)*0.6)]",
					"after:rounded-[calc(theme(borderRadius.medium)*0.6)]",
				],
			},
			lg: {
				wrapper: [
					"rounded-[calc(theme(borderRadius.medium)*0.7)] before:rounded-[calc(theme(borderRadius.medium)*0.7)]",
					"after:rounded-[calc(theme(borderRadius.medium)*0.7)]",
				],
			},
			full: {
				wrapper: "rounded-full before:rounded-full after:rounded-full",
			},
		},
		lineThrough: {
			true: {
				label: [
					"inline-flex items-center justify-center",
					"before:content-[''] before:absolute before:bg-foreground before:w-0 before:h-0.5",
					"group-[&:has(input:checked)]:opacity-60",
					"group-[&:has(input:checked)]:before:w-full",
				],
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
				wrapper: "before:border-danger",
				label: "text-danger",
			},
		},
		disableAnimation: {
			true: {
				wrapper: "transition-none",
				icon: "transition-none",
				label: "transition-none",
			},
			false: {
				wrapper: [
					"before:transition-colors group-active:scale-[0.97] transition-transform",
					"after:transition-[transform,opacity] after:ease-linear motion-reduce:transition-none",
				],
				icon: "transition-opacity motion-reduce:transition-none",
				label: "transition-[color,opacity] motion-reduce:transition-none",
			},
		},
	},
	defaultVariants: {
		size: "md",
		color: "primary",
	},
	compoundVariants: [
		{
			disableAnimation: false,
			lineThrough: true,
			className: {
				label: "before:transition-[width]",
			},
		},
	],
})

export type CheckboxGroupVariantsProps = VariantProps<typeof checkboxGroupVariants>

export const checkboxGroupVariants = tv({
	slots: {
		base: "relative flex flex-col gap-2",
		label: "relative text-md text-default-500",
		wrapper: "flex flex-wrap gap-2",
		invalidMessage: "text-sm text-danger",
		description: "text-sm text-default-400",
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
			true: "",
			false: {
				description: "transition-colors motion-reduce:transition-none",
			},
		},
	},
	defaultVariants: {
		orientation: "vertical",
	},
})