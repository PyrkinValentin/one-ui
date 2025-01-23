import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type SwitchVariantsProps = VariantProps<typeof switchVariants>

export const switchVariants = tv({
	slots: {
		base: "relative max-w-fit inline-flex items-center justify-start cursor-pointer touch-none select-none",
		wrapper: [
			"overflow-hidden relative px-1 inline-flex items-center justify-start flex-shrink-0 bg-default-200",
			"rounded-full outline-none [&:has(input:focus-visible)]:z-10 [&:has(input:focus-visible)]:ring-2",
			"[&:has(input:focus-visible)]:ring-focus [&:has(input:focus-visible)]:ring-offset-2",
			"[&:has(input:focus-visible)]:ring-offset-background",
		],
		input: "peer",
		thumb: "z-10 flex items-center justify-center bg-white shadow-small rounded-full origin-right pointer-events-none",
		thumbIcon: "text-black",
		startContent: "z-0 absolute start-1.5",
		endContent: "z-0 absolute end-1.5 text-default-600",
		label: "relative ms-2 text-foreground",
	},
	variants: {
		size: {
			sm: {
				wrapper: "w-10 h-6",
				thumb: "w-4 h-4 text-xs peer-checked:ms-4",
				startContent: "text-xs",
				endContent: "text-xs",
				label: "text-sm",
			},
			md: {
				wrapper: "w-12 h-7",
				thumb: "w-5 h-5 text-sm peer-checked:ms-5",
				startContent: "text-sm",
				endContent: "text-sm",
				label: "text-md",
			},
			lg: {
				wrapper: "w-14 h-8",
				thumb: "w-6 h-6 text-md peer-checked:ms-6",
				endContent: "text-md",
				startContent: "text-md",
				label: "text-lg",
			},
		},
		color: {
			default: {
				wrapper: "[&:has(input:checked)]:bg-default-400 [&:has(input:checked)]:text-default-foreground",
			},
			primary: {
				wrapper: "[&:has(input:checked)]:bg-primary [&:has(input:checked)]:text-primary-foreground",
			},
			secondary: {
				wrapper: "[&:has(input:checked)]:bg-secondary [&:has(input:checked)]:text-secondary-foreground",
			},
			success: {
				wrapper: "[&:has(input:checked)]:bg-success [&:has(input:checked)]:text-success-foreground",
			},
			warning: {
				wrapper: "[&:has(input:checked)]:bg-warning [&:has(input:checked)]:text-warning-foreground",
			},
			danger: {
				wrapper: "[&:has(input:checked)]:bg-danger [&:has(input:checked)]:text-danger-foreground",
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
		disableAnimation: {
			true: {
				wrapper: "transition-none",
				thumb: "transition-none",
			},
			false: {
				wrapper: "transition-[background]",
				thumb: "transition-[margin]",
				startContent: [
					"opacity-0 -translate-x-3 transition-[transform,opacity]",
					"peer-checked:translate-x-0",
					"peer-checked:opacity-100",
				],
				endContent: [
					"opacity-100 transition-[transform,opacity]",
					"peer-checked:translate-x-3",
					"peer-checked:opacity-0",
				],
			},
		},
	},
	defaultVariants: {
		size: "md",
		color: "primary",
		disableAnimation: false,
	},
})