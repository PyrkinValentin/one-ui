import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type SpinnerVariantsProps = VariantProps<typeof spinnerVariants> & VariantSlots<typeof spinnerVariants>

export const spinnerVariants = tv({
	slots: {
		base: "inline-flex flex-col gap-2 items-center justify-center",
		spinner: "border-b-2 rounded-full animate-spin-fast",
		label: "",
	},
	variants: {
		size: {
			sm: {
				spinner: "w-5 h-5",
				label: "text-sm",
			},
			md: {
				spinner: "w-8 h-8",
				label: "text-md",
			},
			lg: {
				spinner: "w-10 h-10",
				label: "text-lg",
			},
		},
		color: {
			current: {
				spinner: "border-b-current",
				label: "text-current",
			},
			white: {
				spinner: "border-b-white",
				label: "text-white",
			},
			default: {
				spinner: "border-b-default",
				label: "text-default",
			},
			primary: {
				spinner: "border-b-primary",
				label: "text-primary",
			},
			secondary: {
				spinner: "border-b-secondary",
				label: "text-secondary",
			},
			success: {
				spinner: "border-b-success",
				label: "text-success",
			},
			warning: {
				spinner: "border-b-warning",
				label: "text-warning",
			},
			danger: {
				spinner: "border-b-danger",
				label: "text-danger",
			},
		},
	},
	defaultVariants: {
		size: "md",
		color: "primary",
	},
})