import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type BreadcrumbsVariantsProps = VariantProps<typeof breadcrumbsVariants>

export const breadcrumbsVariants = tv({
	slots: {
		base: "max-w-fit",
		list: "flex flex-wrap gap-1",
		item: "flex items-center gap-1",
		link: [
			"flex items-center gap-1 whitespace-nowrap outline-none hover:[&:not([aria-current=page])]:opacity-80",
			"active:[&:not([aria-current=page])]:opacity-disabled aria-[current=page]:pointer-events-none",
			"focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2",
		],
		ellipsis: "",
		separator: "",
	},
	variants: {
		variant: {
			solid: {
				list: "bg-default-100",
			},
			bordered: {
				list: "border-2 border-default-200 shadow-sm",
			},
			light: "",
		},
		size: {
			sm: {
				item: "text-xs",
			},
			md: {
				item: "text-sm",
			},
			lg: {
				item: "text-md",
			},
		},
		color: {
			foreground: {
				link: "text-foreground/50 aria-[current=page]:text-foreground",
				ellipsis: "text-foreground/50",
				separator: "text-foreground/50",
			},
			primary: {
				link: "text-primary/80 aria-[current=page]:text-primary",
				ellipsis: "text-primary/80",
				separator: "text-primary/80",
			},
			secondary: {
				link: "text-secondary/80 aria-[current=page]:text-secondary",
				ellipsis: "text-secondary/80",
				separator: "text-secondary/80",
			},
			success: {
				link: "text-success/80 aria-[current=page]:text-success",
				ellipsis: "text-success/80",
				separator: "text-success/80",
			},
			warning: {
				link: "text-warning/80 aria-[current=page]:text-warning",
				ellipsis: "text-warning/80",
				separator: "text-warning/80",
			},
			danger: {
				link: "text-danger/80 aria-[current=page]:text-danger",
				ellipsis: "text-danger/80",
				separator: "text-danger/80",
			},
		},
		rounded: {
			none: {
				list: "rounded-none",
			},
			sm: {
				list: "rounded-small",
			},
			md: {
				list: "rounded-medium",
			},
			lg: {
				list: "rounded-large",
			},
			full: {
				list: "rounded-full",
			},
		},
		underline: {
			none: {
				link: "no-underline",
			},
			hover: {
				link: "hover:underline",
			},
			always: {
				link: "underline",
			},
			active: {
				link: "active:underline",
			},
			focus: {
				link: "focus:underline",
			},
		},
		disabled: {
			true: {
				list: "opacity-disabled pointer-events-none",
				separator: "opacity-disabled",
			},
		},
		disableAnimation: {
			true: {
				list: "transition-none",
				link: "transition-none",
			},
			false: {
				list: "transition-opacity motion-reduce:transition-none",
				link: "transition-opacity motion-reduce:transition-none",
			},
		},
	},
	defaultVariants: {
		variant: "light",
		size: "md",
		color: "foreground",
		rounded: "sm",
	},
	compoundVariants: [
		{
			variant: ["solid", "bordered"],
			size: "sm",
			className: {
				list: "px-2 py-1",
			},
		},
		{
			variant: ["solid", "bordered"],
			size: "md",
			className: {
				list: "px-2.5 py-1.5",
			},
		},
		{
			variant: ["solid", "bordered"],
			size: "lg",
			className: {
				list: "px-3 py-2",
			},
		},
		// Underline
		{
			underline: ["hover", "always", "active", "focus"],
			className: "underline-offset-4",
		},
	],
})