import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type PaginationVariantsProps = VariantProps<typeof paginationVariants>

export const paginationVariants = tv({
	slots: {
		base: "-m-2.5 p-2.5",
		list: "relative max-w-fit h-fit flex flex-nowrap gap-1 items-center",
	},
	variants: {
		rounded: {
			none: {
				base: "rounded-none",
			},
			sm: {
				base: "rounded-small",
			},
			md: {
				base: "rounded-medium",
			},
			lg: {
				base: "rounded-large",
			},
			full: {
				base: "rounded-full",
			},
		},
		compact: {
			true: {
				list: "gap-0 shadow-sm",
			},
		},
		disabled: {
			true: {
				base: "opacity-disabled pointer-events-none",
			},
		},
		disableAnimation: {
			true: {
				base: "transition-none",
			},
			false: {
				base: "transition-opacity motion-reduce:transition-none",
			},
		},
	},
	defaultVariants: {
		rounded: "md",
	},
})

export type PaginationItemVariantsProps = VariantProps<typeof paginationItemVariants>

export const paginationItemVariants = tv({
	slots: {
		base: "group",
		prev: "",
		next: "",
		dots: "",
		item: "select-none touch-none",
		ellipsis: "group-hover:hidden group-has-[:focus-visible]:hidden",
		forwardIcon: "hidden group-hover:block group-has-[:focus-visible]:block",
	},
	variants: {
		variant: {
			light: "",
			flat: "",
			bordered: {
				item: "border-2 border-default hover:bg-default-100",
			},
			faded: {
				item: "border-2 border-default",
			},
		},
		size: {
			sm: "",
			md: "",
			lg: "",
		},
		color: {
			default: {
				item: [
					"group-aria-[current=true]:bg-default-400 group-aria-[current=true]:border-default-400",
					"group-aria-[current=true]:text-default-foreground",
				],
			},
			primary: {
				item: [
					"group-aria-[current=true]:bg-primary group-aria-[current=true]:border-primary",
					"group-aria-[current=true]:text-primary-foreground",
				],
			},
			secondary: {
				item: [
					"group-aria-[current=true]:bg-secondary group-aria-[current=true]:border-secondary",
					"group-aria-[current=true]:text-secondary-foreground",
				],
			},
			success: {
				item: [
					"group-aria-[current=true]:bg-success group-aria-[current=true]:border-success",
					"group-aria-[current=true]:text-success-foreground",
				],
			},
			warning: {
				item: [
					"group-aria-[current=true]:bg-warning group-aria-[current=true]:border-warning",
					"group-aria-[current=true]:text-warning-foreground",
				],
			},
			danger: {
				item: [
					"group-aria-[current=true]:bg-danger group-aria-[current=true]:border-danger",
					"group-aria-[current=true]:text-danger-foreground",
				],
			},
		},
		rounded: {
			none: "",
			sm: "",
			md: "",
			lg: "",
			full: "",
		},
		compact: {
			true: {
				prev: "!rounded-e-none",
				next: "!rounded-s-none",
				dots: "shadow-none !rounded-none",
				item: [
					"shadow-none",
					"first-of-type:rounded-e-none",
					"last-of-type:rounded-s-none",
					"[&:not(:first-of-type):not(:last-of-type)]:rounded-none",
				],
			},
		},
	},
	defaultVariants: {
		variant: "flat",
		size: "md",
		color: "primary",
		rounded: "md",
		// isCompact: false,
		// isDisabled: false,
		// showShadow: false,
		// disableCursorAnimation: false,
	},
})