import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type CardVariantsProps = VariantProps<typeof cardVariants>
export type CardVariantsReturn = ReturnType<typeof cardVariants>

export const cardVariants = tv({
	slots: {
		base: "box-border overflow-hidden relative h-auto flex flex-col bg-content1 text-foreground",
		header:
			"overflow-inherit z-10 p-3 w-full shrink-0 flex justify-start items-center color-inherit subpixel-antialiased",
		body: [
			"overflow-y-auto relative p-3 w-full h-auto flex flex-1 flex-auto flex-col",
			"break-words text-left subpixel-antialiased",
		],
		footer: "overflow-hidden p-3 w-full h-auto flex items-center color-inherit subpixel-antialiased",
	},
	variants: {
		shadow: {
			none: {
				base: "shadow-none",
			},
			sm: {
				base: "shadow-small",
			},
			md: {
				base: "shadow-medium",
			},
			lg: {
				base: "shadow-large",
			},
		},
		rounded: {
			none: {
				base: "rounded-none",
				header: "rounded-none",
				footer: "rounded-none",
			},
			sm: {
				base: "rounded-small",
				header: "rounded-t-small",
				footer: "rounded-b-small",
			},
			md: {
				base: "rounded-medium",
				header: "rounded-t-medium",
				footer: "rounded-b-medium",
			},
			lg: {
				base: "rounded-large",
				header: "rounded-t-large",
				footer: "rounded-b-large",
			},
		},
		fullWidth: {
			true: {
				base: "w-full",
			},
		},
		hoverable: {
			true: {
				base: "hover:bg-content2",
			},
		},
		clickable: {
			true: {
				base: [
					"cursor-pointer outline-none",
					"focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2",
				],
			},
		},
		blurred: {
			true: {
				base: "bg-background/80 dark:bg-background/20 backdrop-blur-md backdrop-saturate-150",
			},
		},
		footerBlurred: {
			true: {
				footer: "bg-background/10 backdrop-blur backdrop-saturate-150",
			},
		},
		disabled: {
			true: {
				base: "opacity-disabled cursor-not-allowed",
			},
		},
		disableAnimation: {
			false: "transition-[transform,background] motion-reduce:transition-none",
		},
	},
	defaultVariants: {
		shadow: "md",
		rounded: "lg",
	},
	compoundVariants: [
		{
			clickable: true,
			disableAnimation: false,
			className: "active:scale-[0.97]",
		},
	],
})