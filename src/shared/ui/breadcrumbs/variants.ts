import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type BreadcrumbsVariantsProps = VariantProps<typeof breadcrumbsVariants>

export const breadcrumbsVariants = tv({
	slots: {
		base: "relative",
		list: "flex items-center gap-1 flex-wrap",
		item: "flex items-center gap-1 whitespace-nowrap",
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
				separator: "text-md",
			},
			md: {
				item: "text-sm",
				separator: "text-lg",
			},
			lg: {
				item: "text-md",
				separator: "text-xl",
			},
		},
		color: {
			foreground: {
				item: "text-foreground/50",
				separator: "text-foreground/50",
			},
			primary: {
				item: "text-primary/80",
				separator: "text-primary/80",
			},
			secondary: {
				item: "text-secondary/80",
				separator: "text-secondary/80",
			},
			success: {
				item: "text-success/80",
				separator: "text-success/80",
			},
			warning: {
				item: "text-warning/80",
				separator: "text-warning/80",
			},
			danger: {
				item: "text-danger/80",
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
				item: "no-underline",
			},
			hover: {
				item: "hover:underline",
			},
			always: {
				item: "underline",
			},
			active: {
				item: "active:underline",
			},
			focus: {
				item: "focus:underline",
			},
		},
		current: {
			false: {
				item: [
					"cursor-pointer outline-none hover:opacity-80 active:opacity-disabled",
					"focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2",
				],
			},
		},
		disabled: {
			true: {
				item: "opacity-disabled pointer-events-none",
				separator: "opacity-disabled",
			},
		},
		disableAnimation: {
			true: {
				item: "transition-none",
			},
			false: {
				item: "transition-opacity motion-reduce:transition-none",
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
		// variant
		{
			variant: ["solid", "bordered"],
			className: {
				list: "max-w-fit",
			},
		},
		// variant && size
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
		// current && underline
		{
			underline: ["hover", "always", "active", "focus"],
			current: false,
			className: {
				item: "underline-offset-4",
			},
		},
		{
			underline: ["hover", "always", "active", "focus"],
			current: true,
			className: {
				item: "no-underline",
			},
		},
		// current && color
		{
			current: true,
			color: "foreground",
			className: {
				item: "text-foreground",
			},
		},
		{
			current: true,
			color: "primary",
			className: {
				item: "text-primary",
			},
		},
		{
			current: true,
			color: "secondary",
			className: {
				item: "text-secondary",
			},
		},
		{
			current: true,
			color: "success",
			className: {
				item: "text-success",
			},
		},
		{
			current: true,
			color: "warning",
			className: {
				item: "text-warning",
			},
		},
		{
			current: true,
			color: "danger",
			className: {
				item: "text-danger",
			},
		},
	],
})