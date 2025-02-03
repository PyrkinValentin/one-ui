import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type PaginationVariantsProps = VariantProps<typeof paginationVariants>
export type PaginationVariantsReturn = ReturnType<typeof paginationVariants>

export const paginationVariants = tv({
	slots: {
		base: "-m-2.5 p-2.5",
		wrapper: "max-w-fit h-fit flex items-center flex-nowrap gap-1",
		control: "",
		item: "",
		dots: "group relative",
		ellipsis: "opacity-100 group-hover:opacity-0 group-focus-visible:opacity-0",
		forwardIcon: [
			"absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100",
			"group-focus-visible:opacity-100",
		],
	},
	variants: {
		variant: {
			bordered: {
				item: "border-2 border-default hover:bg-default-100",
			},
			light: "",
			flat: "",
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
				item: "aria-[current=true]:bg-default aria-[current=true]:text-default-foreground",
			},
			primary: {
				item: "aria-[current=true]:bg-primary aria-[current=true]:text-primary-foreground",
			},
			secondary: {
				item: "aria-[current=true]:bg-secondary aria-[current=true]:text-secondary-foreground",
			},
			success: {
				item: "aria-[current=true]:bg-success aria-[current=true]:text-success-foreground",
			},
			warning: {
				item: "aria-[current=true]:bg-warning aria-[current=true]:text-warning-foreground",
			},
			danger: {
				item: "aria-[current=true]:bg-danger aria-[current=true]:text-danger-foreground",
			},
		},
		rounded: {
			none: "",
			sm: "",
			md: "",
			lg: "",
			full: "",
		},
		// compact: {
		// 	true: {
		// 		wrapper: "gap-0 shadow-sm",
		// 		item: [
		// 			"shadow-none",
		// 			"first-of-type:rounded-e-none",
		// 			"last-of-type:rounded-s-none",
		// 			"[&:not(:first-of-type):not(:last-of-type)]:rounded-none",
		// 		],
		// 		prev: "!rounded-e-none",
		// 		next: "!rounded-s-none",
		// 	},
		// },
		disabled: {
			true: "",
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
	compoundSlots: [
		{
			slots: ["control", "item", "dots"],
			className: "select-none touch-none",
		},
	],
})