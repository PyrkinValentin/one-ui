import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type BreadcrumbsVariantsProps = VariantProps<typeof breadcrumbsVariants>

export const breadcrumbsVariants = tv({
	slots: {
		base: "",
		list: "flex flex-wrap list-none",
	},
	variants: {
		variant: {
			light: "",
			solid: {
				list: "max-w-fit bg-default-100",
			},
			bordered: {
				list: "max-w-fit border-2 border-default-200 shadow-sm",
			},
		},
		size: {
			sm: "",
			md: "",
			lg: "",
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
	},
	defaultVariants: {
		variant: "light",
		size: "md",
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
	],
})

export type BreadcrumbItemVariantsProps = VariantProps<typeof breadcrumbItemVariants>

export const breadcrumbItemVariants = tv({
	slots: {
		base: "flex items-center",
		item: [
			"flex gap-1 items-center whitespace-nowrap outline-none focus-visible:z-10 focus-visible:outline-2",
			"focus-visible:outline-focus focus-visible:outline-offset-2",
		],
		separator: "px-1",
	},
	variants: {
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
			true: {
				item: "cursor-default pointer-events-none",
			},
			false: {
				item: "hover:opacity-80 active:opacity-disabled",
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
		size: "md",
		color: "foreground",
	},
	compoundVariants: [
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
		{
			current: false,
			underline: "none",
			className: {
				item: "no-underline",
			},
		},
		{
			underline: ["hover", "always", "active", "focus"],
			className: "underline-offset-4",
		},
	],
})