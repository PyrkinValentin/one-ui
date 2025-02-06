import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type AccordionVariantsProps = VariantProps<typeof accordionVariants>
export type AccordionVariantsReturn = ReturnType<typeof accordionVariants>

export const accordionVariants = tv({
	slots: {
		base: "",
		item: "",
		heading: "",
		trigger: [
			"group py-4 w-full h-full flex gap-3 items-center outline-none",
			"focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2",
		],
		startContent: "shrink-0",
		indicator: "text-default-400",
		wrapper: "flex-1 flex flex-col text-start",
		title: "text-foreground text-md",
		description: "text-sm text-default-500 font-normal",
		content: "pb-2",
	},
	variants: {
		variant: {
			light: "",
			shadow: {
				base: "px-4 shadow-medium rounded-medium bg-content1",
			},
			bordered: {
				base: "px-4 border-2 border-divider rounded-medium",
			},
			splitted: {
				base: "flex flex-col gap-2",
				item: "px-4 bg-content1 shadow-medium rounded-medium",
			},
		},
		compact: {
			true: {
				trigger: "py-2",
				title: "text-md",
				description: "text-sm",
				indicator: "text-md",
				content: "py-1",
			},
		},
		showDivider: {
			true: "",
		},
		fullWidth: {
			true: {
				base: "w-full",
			},
		},
		disabled: {
			true: {
				item: "opacity-disabled pointer-events-none",
			},
		},
		disableIndicatorAnimation: {
			true: {
				indicator: "transition-none",
			},
			false: {
				indicator: "rotate-90 group-aria-[expanded=true]:rotate-0",
			},
		},
		disableAnimation: {
			true: {
				item: "transition-none",
				indicator: "transition-none",
			},
			false: {
				item: "transition-opacity motion-reduce:transition-none",
				indicator: "transition-transform motion-reduce:transition-none",
			},
		},
	},
	defaultVariants: {
		variant: "light",
		showDivider: true,
		fullWidth: true,
	},
	compoundVariants: [
		{
			variant: ["light", "shadow", "bordered"],
			showDivider: true,
			className: {
				item: "[&:not(:last-of-type)]:border-b [&:not(:last-of-type)]:border-divider",
			},
		},
	],
})