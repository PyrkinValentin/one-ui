import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type AccordionVariantsProps = VariantProps<typeof accordionVariants>

export const accordionVariants = tv({
	base: "",
	variants: {
		variant: {
			light: "",
			shadow: "px-4 shadow-medium bg-content1",
			bordered: "px-4 border-2 border-divider",
			splitted: "flex flex-col gap-2",
		},
		rounded: {
			none: "",
			sm: "",
			md: "",
			lg: "",
		},
		fullWidth: {
			true: "w-full",
		},
	},
	defaultVariants: {
		variant: "light",
		rounded: "md",
		fullWidth: true,
	},
	compoundVariants: [
		{
			variant: ["shadow", "bordered"],
			rounded: "none",
			className: "rounded-none",
		},
		{
			variant: ["shadow", "bordered"],
			rounded: "sm",
			className: "rounded-small",
		},
		{
			variant: ["shadow", "bordered"],
			rounded: "md",
			className: "rounded-medium",
		},
		{
			variant: ["shadow", "bordered"],
			rounded: "lg",
			className: "rounded-large",
		},
	],
})

export type AccordionItemVariantsProps = VariantProps<typeof accordionItemVariants>

export const accordionItemVariants = tv({
	slots: {
		base: "",
		heading: "",
		trigger: [
			"group py-4 w-full h-full flex items-center gap-3 outline-none",
			"focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2",
		],
		startContent: "shrink-0",
		indicator: "text-default-400",
		titleWrapper: "flex-1 flex flex-col text-start",
		title: "text-foreground text-md",
		description: "text-sm text-default-500 font-normal",
		contentWrapper: "grid",
		contentInnerWrapper: "overflow-hidden",
		content: "pb-2",
	},
	variants: {
		variant: {
			light: "",
			shadow: "",
			bordered: "",
			splitted: {
				base: "px-4 bg-content1 shadow-medium rounded-medium",
			},
		},
		rounded: {
			none: "",
			sm: "",
			md: "",
			lg: "",
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
		disabled: {
			true: {
				trigger: "opacity-disabled pointer-events-none",
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
				trigger: "transition-none",
				indicator: "transition-none",
			},
			false: {
				trigger: "transition-opacity motion-reduce:transition-none",
				indicator: "transition-transform motion-reduce:transition-none",
			},
		},
	},
	defaultVariants: {
		variant: "light",
		rounded: "md",
	},
	compoundVariants: [
		{
			variant: ["light", "shadow", "bordered"],
			className: {
				base: "[&:not(:last-of-type)]:border-b [&:not(:last-of-type)]:border-divider",
			},
		},
		{
			variant: "splitted",
			rounded: "none",
			className: {
				base: "rounded-none",
			},
		},
		{
			variant: "splitted",
			rounded: "sm",
			className: {
				base: "rounded-small",
			},
		},
		{
			variant: "splitted",
			rounded: "md",
			className: {
				base: "rounded-medium",
			},
		},
		{
			variant: "splitted",
			rounded: "lg",
			className: {
				base: "rounded-large",
			},
		},
	],
})