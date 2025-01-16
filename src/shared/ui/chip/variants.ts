import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type ChipVariantsProps = VariantProps<typeof chipVariants>
export type ChipVariantsSlots = VariantSlots<typeof chipVariants>

export const chipVariants = tv({
	slots: {
		base: "box-border relative min-w-min max-w-fit inline-flex items-center justify-between whitespace-nowrap",
		content: "flex-1 text-inherit font-normal",
		dot: "w-2 h-2 rounded-full",
		closeButton: [
			"z-10 appearance-none cursor-pointer outline-none select-none",
			"transition-opacity opacity-70 hover:opacity-100 active:opacity-disabled rounded-full",
			"focus-visible:ring-1 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background",
		],
	},
	variants: {
		variant: {
			solid: "",
			bordered: "border-2 bg-transparent",
			light: "bg-transparent",
			flat: "",
			faded: "border-2 border-default bg-default-100",
			shadow: "shadow-lg",
			dot: "border-2 border-default text-foreground bg-transparent",
		},
		size: {
			sm: {
				base: "px-1 h-6 text-xs",
				content: "pl-0.5 pr-0.5 first:pl-1 last:pr-1",
				closeButton: "text-lg",
			},
			md: {
				base: "px-1 h-7 text-sm",
				content: "pl-1 pr-1 first:pl-2 last:pr-2",
				closeButton: "text-xl",
			},
			lg: {
				base: "px-1 h-8 text-md",
				content: "pl-1 pr-1 first:pl-3 last:pr-3",
				closeButton: "text-2xl",
			},
		},
		color: {
			default: {
				dot: "bg-default-400",
			},
			primary: {
				dot: "bg-primary",
			},
			secondary: {
				dot: "bg-secondary",
			},
			success: {
				dot: "bg-success",
			},
			warning: {
				dot: "bg-warning",
			},
			danger: {
				dot: "bg-danger",
			},
		},
		rounded: {
			none: "rounded-none",
			sm: "rounded-small",
			md: "rounded-medium",
			lg: "rounded-large",
			full: "rounded-full",
		},
		disabled: {
			true: "opacity-disabled pointer-events-none",
		},
	},
	defaultVariants: {
		variant: "solid",
		size: "md",
		color: "default",
		rounded: "full",
	},
	compoundVariants: [
		// solid / color
		{
			variant: "solid",
			color: "default",
			className: {
				base: "bg-default text-default-foreground",
			},
		},
		{
			variant: "solid",
			color: "primary",
			className: {
				base: "bg-primary text-primary-foreground",
			},
		},
		{
			variant: "solid",
			color: "secondary",
			className: {
				base: "bg-secondary text-secondary-foreground",
			},
		},
		{
			variant: "solid",
			color: "success",
			className: {
				base: "bg-success text-success-foreground",
			},
		},
		{
			variant: "solid",
			color: "warning",
			className: {
				base: "bg-warning text-warning-foreground",
			},
		},
		{
			variant: "solid",
			color: "danger",
			className: {
				base: "bg-danger text-danger-foreground",
			},
		},
		// bordered / color
		{
			variant: "bordered",
			color: "default",
			className: {
				base: "border-default text-foreground",
			},
		},
		{
			variant: "bordered",
			color: "primary",
			className: {
				base: "border-primary text-primary",
			},
		},
		{
			variant: "bordered",
			color: "secondary",
			className: {
				base: "border-secondary text-secondary",
			},
		},
		{
			variant: "bordered",
			color: "success",
			className: {
				base: "border-success text-success",
			},
		},
		{
			variant: "bordered",
			color: "warning",
			className: {
				base: "border-warning text-warning",
			},
		},
		{
			variant: "bordered",
			color: "danger",
			className: {
				base: "border-danger text-danger",
			},
		},
		// light / color
		{
			variant: "light",
			color: "default",
			className: {
				base: "text-default-foreground",
			},
		},
		{
			variant: "light",
			color: "primary",
			className: {
				base: "text-primary",
			},
		},
		{
			variant: "light",
			color: "secondary",
			className: {
				base: "text-secondary",
			},
		},
		{
			variant: "light",
			color: "success",
			className: {
				base: "text-success",
			},
		},
		{
			variant: "light",
			color: "warning",
			className: {
				base: "text-warning",
			},
		},
		{
			variant: "light",
			color: "danger",
			className: {
				base: "text-danger",
			},
		},
		// flat / color
		{
			variant: "flat",
			color: "default",
			className: {
				base: "bg-default/40 text-default-700",
			},
		},
		{
			variant: "flat",
			color: "primary",
			className: {
				base: "bg-primary/20 text-primary-600",
			},
		},
		{
			variant: "flat",
			color: "secondary",
			className: {
				base: "bg-secondary/20 text-secondary-600",
			},
		},
		{
			variant: "flat",
			color: "success",
			className: {
				base: "bg-success/20 text-success-700 dark:text-success",
			},
		},
		{
			variant: "flat",
			color: "warning",
			className: {
				base: "bg-warning/20 text-warning-700 dark:text-warning",
			},
		},
		{
			variant: "flat",
			color: "danger",
			className: {
				base: "bg-danger/20 text-danger-600 dark:text-danger-500",
			},
		},
		// faded / color
		{
			variant: "faded",
			color: "default",
			className: {
				base: "text-default-foreground",
			},
		},
		{
			variant: "faded",
			color: "primary",
			className: {
				base: "text-primary",
			},
		},
		{
			variant: "faded",
			color: "secondary",
			className: {
				base: "text-secondary",
			},
		},
		{
			variant: "faded",
			color: "success",
			className: {
				base: "text-success",
			},
		},
		{
			variant: "faded",
			color: "warning",
			className: {
				base: "text-warning",
			},
		},
		{
			variant: "faded",
			color: "danger",
			className: {
				base: "text-danger",
			},
		},
		// shadow / color
		{
			variant: "shadow",
			color: "default",
			className: {
				base: "shadow-default/50 bg-default text-default-foreground",
			},
		},
		{
			variant: "shadow",
			color: "primary",
			className: {
				base: "shadow-primary/40 bg-primary text-primary-foreground",
			},
		},
		{
			variant: "shadow",
			color: "secondary",
			className: {
				base: "shadow-secondary/40 bg-secondary text-secondary-foreground",
			},
		},
		{
			variant: "shadow",
			color: "success",
			className: {
				base: "shadow-success/40 bg-success text-success-foreground",
			},
		},
		{
			variant: "shadow",
			color: "warning",
			className: {
				base: "shadow-warning/40 bg-warning text-warning-foreground",
			},
		},
		{
			variant: "shadow",
			color: "danger",
			className: {
				base: "shadow-danger/40 bg-danger text-danger-foreground",
			},
		},
	],
})