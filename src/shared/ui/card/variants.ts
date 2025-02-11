import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type CardVariantsProps = VariantProps<typeof cardVariants>

export const cardVariants = tv({
	base: "overflow-hidden box-border relative w-fit h-auto flex flex-col bg-content1 text-foreground outline-none",
	variants: {
		rounded: {
			none: "rounded-none",
			sm: "rounded-small",
			md: "rounded-medium",
			lg: "rounded-large",
		},
		shadow: {
			none: "shadow-none",
			sm: "shadow-small",
			md: "shadow-medium",
			lg: "shadow-large",
		},
		hoverable: {
			true: "hover:bg-content2 dark:hover:bg-content2",
		},
		clickable: {
			true: [
				"cursor-pointer focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus",
				"focus-visible:outline-offset-2",
			],
		},
		blurred: {
			true: "bg-background/80 dark:bg-background/20 backdrop-blur-md backdrop-saturate-150",
		},
		fullWidth: {
			true: "w-full",
		},
		disabled: {
			true: "opacity-disabled pointer-events-none",
		},
		disableAnimation: {
			true: "transition-none",
			false: "transition motion-reduce:transition-none",
		},
	},
	defaultVariants: {
		rounded: "lg",
		shadow: "md",
	},
	compoundVariants: [
		{
			clickable: true,
			className: "active:scale-[0.97]",
		},
	],
})

export const cardHeaderVariants = tv({
	base: "overflow-inherit z-10 p-3 w-full flex justify-start items-center shrink-0 color-inherit subpixel-antialiased",
	variants: {
		rounded: {
			none: "rounded-t-none",
			sm: "rounded-t-small",
			md: "rounded-t-medium",
			lg: "rounded-t-large",
		},
	},
	defaultVariants: {
		rounded: "lg",
	},
})

export const cardBodyVariants = tv({
	base: "overflow-y-auto relative p-3 w-full h-auto flex flex-auto flex-col break-words text-left subpixel-antialiased",
})

export const cardFooterVariants = tv({
	base: "overflow-hidden p-3 w-full h-auto flex items-center color-inherit subpixel-antialiased",
	variants: {
		rounded: {
			none: "rounded-b-none",
			sm: "rounded-b-small",
			md: "rounded-b-medium",
			lg: "rounded-b-large",
		},
		blurred: {
			true: "bg-background/10 backdrop-blur backdrop-saturate-150",
		},
	},
	defaultVariants: {
		rounded: "lg",
	},
})