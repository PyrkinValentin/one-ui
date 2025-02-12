import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type ListBoxVariantsProps = VariantProps<typeof listBoxVariants>

export const listBoxVariants = tv({
	base: "w-full flex flex-col gap-0.5 outline-none",
})

export type ListBoxSectionVariantsProps = VariantProps<typeof listBoxSectionVariants>

export const listBoxSectionVariants = tv({
	slots: {
		base: "relative mb-2 last-of-type:mb-0",
		heading: "block mb-2 pl-1 text-xs text-default-500",
		group: "w-full flex flex-col gap-0.5 outline-none",
	},
	variants: {
		showDivider: {
			true: {
				base: [
					"mb-5 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-px",
					"after:bg-divider",
				],
			},
		},
	},
})

export type ListBoxItemVariantsProps = VariantProps<typeof listBoxItemVariants>

export const listBoxItemVariants = tv({
	slots: {
		base: "",
		item: [
			"group box-border relative px-2 py-1.5 w-full h-full flex items-center justify-between gap-2 rounded-small",
			"subpixel-antialiased outline-none focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus",
			"focus-visible:outline-offset-2",
		],
		wrapper: "w-full flex flex-col items-start justify-center",
		title: "w-full text-sm font-normal text-start",
		description: "w-full text-xs text-default-500 text-start group-hover:text-current group-focus:text-current",
		selectedIcon: "w-3 h-3 shrink-0 text-inherit",
	},
	variants: {
		variant: {
			solid: "",
			bordered: {
				item: "border-2 border-transparent",
			},
			light: "",
			faded: {
				item: [
					"border border-transparent hover:border-default hover:bg-default-100 focus:border-default",
					"focus:bg-default-100",
				],
			},
			flat: "",
			shadow: {
				item: "hover:shadow-lg",
			},
		},
		color: {
			default: "",
			primary: "",
			secondary: "",
			success: "",
			warning: "",
			danger: "",
		},
		showDivider: {
			true: {
				item: [
					"mb-1.5 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-px",
					"after:bg-divider",
				],
			},
		},
		readOnly: {
			true: {
				item: "pointer-events-none",
			},
		},
		disabled: {
			true: {
				item: "opacity-disabled pointer-events-none",
			},
		},
		disableAnimation: {
			true: {
				item: "transition-none",
				title: "transition-none",
				description: "transition-none",
			},
			false: {
				item: "transition-[background,border-color,box-shadow] motion-reduce:transition-none",
				title: "transition-colors motion-reduce:transition-none",
				description: "transition-colors motion-reduce:transition-none",
			},
		},
	},
	defaultVariants: {
		variant: "solid",
		color: "default",
	},
	compoundVariants: [
		{
			variant: "solid",
			color: "default",
			className: {
				item: "hover:bg-default hover:text-default-foreground focus:bg-default focus:text-default-foreground",
			},
		},
		{
			variant: "solid",
			color: "primary",
			className: {
				item: "hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
			},
		},
		{
			variant: "solid",
			color: "secondary",
			className: {
				item: "hover:bg-secondary hover:text-secondary-foreground focus:bg-secondary focus:text-secondary-foreground",
			},
		},
		{
			variant: "solid",
			color: "success",
			className: {
				item: "hover:bg-success hover:text-success-foreground focus:bg-success focus:text-success-foreground",
			},
		},
		{
			variant: "solid",
			color: "warning",
			className: {
				item: "hover:bg-warning hover:text-warning-foreground focus:bg-warning focus:text-warning-foreground",
			},
		},
		{
			variant: "solid",
			color: "danger",
			className: {
				item: "hover:bg-danger hover:text-danger-foreground focus:bg-danger focus:text-danger-foreground",
			},
		},
		{
			variant: "shadow",
			color: "default",
			className: {
				item: [
					"hover:shadow-default/50 hover:bg-default hover:text-default-foreground",
					"focus:shadow-default/50 focus:bg-default focus:text-default-foreground",
				],
			},
		},
		{
			variant: "shadow",
			color: "primary",
			className: {
				item: [
					"hover:shadow-primary/30 hover:bg-primary hover:text-primary-foreground",
					"focus:shadow-primary/30 focus:bg-primary focus:text-primary-foreground",
				],
			},
		},
		{
			variant: "shadow",
			color: "secondary",
			className: {
				item: [
					"hover:shadow-secondary/30 hover:bg-secondary hover:text-secondary-foreground",
					"focus:shadow-secondary/30 focus:bg-secondary focus:text-secondary-foreground",
				],
			},
		},
		{
			variant: "shadow",
			color: "success",
			className: {
				item: [
					"hover:shadow-success/30 hover:bg-success hover:text-success-foreground",
					"focus:shadow-success/30 focus:bg-success focus:text-success-foreground",
				],
			},
		},
		{
			variant: "shadow",
			color: "warning",
			className: {
				item: [
					"hover:shadow-warning/30 hover:bg-warning hover:text-warning-foreground",
					"focus:shadow-warning/30 focus:bg-warning focus:text-warning-foreground",
				],
			},
		},
		{
			variant: "shadow",
			color: "danger",
			className: {
				item: [
					"hover:shadow-danger/30 hover:bg-danger hover:text-danger-foreground",
					"focus:shadow-danger/30 focus:bg-danger focus:text-danger-foreground",
				],
			},
		},
		{
			variant: "bordered",
			color: "default",
			className: {
				item: "hover:border-default focus:border-default",
			},
		},
		{
			variant: "bordered",
			color: "primary",
			className: {
				item: "hover:border-primary hover:text-primary focus:border-primary focus:text-primary",
			},
		},
		{
			variant: "bordered",
			color: "secondary",
			className: {
				item: "hover:border-secondary hover:text-secondary focus:border-secondary focus:text-secondary",
			},
		},
		{
			variant: "bordered",
			color: "success",
			className: {
				item: "hover:border-success hover:text-success focus:border-success focus:text-success",
			},
		},
		{
			variant: "bordered",
			color: "warning",
			className: {
				item: "hover:border-warning hover:text-warning focus:border-warning focus:text-warning",
			},
		},
		{
			variant: "bordered",
			color: "danger",
			className: {
				item: "hover:border-danger hover:text-danger focus:border-danger focus:text-danger",
			},
		},
		{
			variant: "flat",
			color: "default",
			className: {
				item: "hover:bg-default/40 hover:text-default-foreground focus:bg-default/40 focus:text-default-foreground",
			},
		},
		{
			variant: "flat",
			color: "primary",
			className: {
				item: "hover:bg-primary/20 hover:text-primary focus:bg-primary/20 focus:text-primary",
			},
		},
		{
			variant: "flat",
			color: "secondary",
			className: {
				item: "hover:bg-secondary/20 hover:text-secondary focus:bg-secondary/20 focus:text-secondary",
			},
		},
		{
			variant: "flat",
			color: "success",
			className: {
				item: "hover:bg-success/20 hover:text-success focus:bg-success/20 focus:text-success",
			},
		},
		{
			variant: "flat",
			color: "warning",
			className: {
				item: "hover:bg-warning/20 hover:text-warning focus:bg-warning/20 focus:text-warning",
			},
		},
		{
			variant: "flat",
			color: "danger",
			className: {
				item: "hover:bg-danger/20 hover:text-danger focus:bg-danger/20 focus:text-danger",
			},
		},
		{
			variant: "faded",
			color: "default",
			className: {
				item: "hover:text-default-foreground focus:text-default-foreground",
			},
		},
		{
			variant: "faded",
			color: "primary",
			className: {
				item: "hover:text-primary focus:text-primary",
			},
		},
		{
			variant: "faded",
			color: "secondary",
			className: {
				item: "hover:text-secondary focus:text-secondary",
			},
		},
		{
			variant: "faded",
			color: "success",
			className: {
				item: "hover:text-success focus:text-success",
			},
		},
		{
			variant: "faded",
			color: "warning",
			className: {
				item: "hover:text-warning focus:text-warning",
			},
		},
		{
			variant: "faded",
			color: "danger",
			className: {
				item: "hover:text-danger focus:text-danger",
			},
		},
		{
			variant: "light",
			color: "default",
			className: {
				item: "hover:text-default-500 focus:text-default-500",
			},
		},
		{
			variant: "light",
			color: "primary",
			className: {
				item: "hover:text-primary focus:text-primary",
			},
		},
		{
			variant: "light",
			color: "secondary",
			className: {
				item: "hover:text-secondary focus:text-secondary",
			},
		},
		{
			variant: "light",
			color: "success",
			className: {
				item: "hover:text-success focus:text-success",
			},
		},
		{
			variant: "light",
			color: "warning",
			className: {
				item: "hover:text-warning focus:text-warning",
			},
		},
		{
			variant: "light",
			color: "danger",
			className: {
				item: "hover:text-danger focus:text-danger",
			},
		},
	],
})