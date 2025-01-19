import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type ButtonGroupVariantsProps = VariantProps<typeof buttonGroupVariants>

export const buttonGroupVariants = tv({
	base: "inline-flex items-center justify-center h-auto",
	variants: {
		fullWidth: {
			true: "w-full",
		},
	},
})

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>

export const buttonVariants = tv({
	slots: {
		base: [
			"z-0 overflow-hidden relative min-w-max inline-flex items-center justify-center",
			"box-border appearance-none outline-none select-none whitespace-nowrap font-normal subpixel-antialiased",
			"focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2",
		],
		wrapper: "",
		spinner: "",
	},
	variants: {
		variant: {
			solid: "",
			bordered: "border-2 bg-transparent",
			light: "bg-transparent",
			flat: "",
			faded: "border-2 border-default bg-default-100",
			shadow: "shadow-lg",
			ghost: "border-2 bg-transparent",
		},
		size: {
			sm: {
				base: "px-3 min-w-16 h-8 text-xs gap-2 rounded-small",
				wrapper: "gap-2",
			},
			md: {
				base: "px-4 min-w-20 h-10 text-sm gap-2 rounded-medium",
				wrapper: "gap-2",
			},
			lg: {
				base: "px-6 min-w-24 h-12 text-md gap-3 rounded-large",
				wrapper: "gap-3",
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
		rounded: {
			none: "rounded-none",
			sm: "rounded-small",
			md: "rounded-medium",
			lg: "rounded-large",
			full: "rounded-full",
		},
		fullWidth: {
			true: "w-full",
		},
		loading: {
			true: {
				base: "opacity-disabled pointer-events-none",
				wrapper: "inline-flex items-center justify-center invisible",
				spinner: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
			},
		},
		disabled: {
			true: "opacity-disabled pointer-events-none",
		},
		inGroup: {
			true: "[&:not(:first-child):not(:last-child)]:rounded-none",
		},
		iconOnly: {
			true: "px-0",
		},
		disableAnimation: {
			true: "transition-none",
			false: "active:scale-[0.97] transition motion-reduce:transition-none",
		},
	},
	defaultVariants: {
		variant: "solid",
		size: "md",
		color: "primary",
	},
	compoundVariants: [
		// solid / color
		{
			variant: "solid",
			color: "default",
			className: "bg-default text-default-foreground",
		},
		{
			variant: "solid",
			color: "primary",
			className: "bg-primary text-primary-foreground",
		},
		{
			variant: "solid",
			color: "secondary",
			className: "bg-secondary text-secondary-foreground",
		},
		{
			variant: "solid",
			color: "success",
			className: "bg-success text-success-foreground",
		},
		{
			variant: "solid",
			color: "warning",
			className: "bg-warning text-warning-foreground",
		},
		{
			variant: "solid",
			color: "danger",
			className: "bg-danger text-danger-foreground",
		},
		// bordered / color
		{
			variant: "bordered",
			color: "default",
			className: "border-default text-foreground",
		},
		{
			variant: "bordered",
			color: "primary",
			className: "border-primary text-primary",
		},
		{
			variant: "bordered",
			color: "secondary",
			className: "border-secondary text-secondary",
		},
		{
			variant: "bordered",
			color: "success",
			className: "border-success text-success",
		},
		{
			variant: "bordered",
			color: "warning",
			className: "border-warning text-warning",
		},
		{
			variant: "bordered",
			color: "danger",
			className: "border-danger text-danger",
		},
		// light / color
		{
			variant: "light",
			color: "default",
			className: "text-default-foreground hover:bg-default/40",
		},
		{
			variant: "light",
			color: "primary",
			className: "text-primary hover:bg-primary/20",
		},
		{
			variant: "light",
			color: "secondary",
			className: "text-secondary hover:bg-secondary/20",
		},
		{
			variant: "light",
			color: "success",
			className: "text-success hover:bg-success/20",
		},
		{
			variant: "light",
			color: "warning",
			className: "text-warning hover:bg-warning/20",
		},
		{
			variant: "light",
			color: "danger",
			className: "text-danger hover:bg-danger/20",
		},
		// flat / color
		{
			variant: "flat",
			color: "default",
			className: "bg-default/40 text-default-700",
		},
		{
			variant: "flat",
			color: "primary",
			className: "bg-primary/20 text-primary-600",
		},
		{
			variant: "flat",
			color: "secondary",
			className: "bg-secondary/20 text-secondary-600",
		},
		{
			variant: "flat",
			color: "success",
			className: "bg-success/20 text-success-700 dark:text-success",
		},
		{
			variant: "flat",
			color: "warning",
			className: "bg-warning/20 text-warning-700 dark:text-warning",
		},
		{
			variant: "flat",
			color: "danger",
			className: "bg-danger/20 text-danger-600 dark:text-danger-500",
		},
		// faded / color
		{
			variant: "faded",
			color: "default",
			className: "text-default-foreground",
		},
		{
			variant: "faded",
			color: "primary",
			className: "text-primary",
		},
		{
			variant: "faded",
			color: "secondary",
			className: "text-secondary",
		},
		{
			variant: "faded",
			color: "success",
			className: "text-success",
		},
		{
			variant: "faded",
			color: "warning",
			className: "text-warning",
		},
		{
			variant: "faded",
			color: "danger",
			className: "text-danger",
		},
		// shadow / color
		{
			variant: "shadow",
			color: "default",
			className: "shadow-default/50 bg-default text-default-foreground",
		},
		{
			variant: "shadow",
			color: "primary",
			className: "shadow-primary/40 bg-primary text-primary-foreground",
		},
		{
			variant: "shadow",
			color: "secondary",
			className: "shadow-secondary/40 bg-secondary text-secondary-foreground",
		},
		{
			variant: "shadow",
			color: "success",
			className: "shadow-success/40 bg-success text-success-foreground",
		},
		{
			variant: "shadow",
			color: "warning",
			className: "shadow-warning/40 bg-warning text-warning-foreground",
		},
		{
			variant: "shadow",
			color: "danger",
			className: "shadow-danger/40 bg-danger text-danger-foreground",
		},
		// ghost / color
		{
			variant: "ghost",
			color: "default",
			className: "border-default text-default-foreground hover:bg-default",
		},
		{
			variant: "ghost",
			color: "primary",
			className: "border-primary text-primary hover:bg-primary hover:text-primary-foreground",
		},
		{
			variant: "ghost",
			color: "secondary",
			className: "border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground",
		},
		{
			variant: "ghost",
			color: "success",
			className: "border-success text-success hover:bg-success hover:text-success-foreground",
		},
		{
			variant: "ghost",
			color: "warning",
			className: "border-warning text-warning hover:bg-warning hover:text-warning-foreground",
		},
		{
			variant: "ghost",
			color: "danger",
			className: "border-danger text-danger hover:bg-danger hover:text-danger-foreground",
		},
		// inGroup / rounded / size <-- rounded not provided
		{
			inGroup: true,
			size: "sm",
			className: "rounded-none first:rounded-s-small last:rounded-e-small",
		},
		{
			inGroup: true,
			size: "md",
			className: "rounded-none first:rounded-s-medium last:rounded-e-medium",
		},
		{
			inGroup: true,
			size: "lg",
			className: "rounded-none first:rounded-s-large last:rounded-e-large",
		},
		// inGroup / rounded <-- rounded provided
		{
			inGroup: true,
			rounded: "none",
			className: "rounded-none first:rounded-s-none last:rounded-e-none",
		},
		{
			inGroup: true,
			rounded: "sm",
			className: "rounded-none first:rounded-s-small last:rounded-e-small",
		},
		{
			inGroup: true,
			rounded: "md",
			class: "rounded-none first:rounded-s-medium last:rounded-e-medium",
		},
		{
			inGroup: true,
			rounded: "lg",
			class: "rounded-none first:rounded-s-large last:rounded-e-large",
		},
		{
			inGroup: true,
			rounded: "full",
			class: "rounded-none first:rounded-s-full last:rounded-e-full",
		},
		// inGroup / faded
		{
			inGroup: true,
			variant: "faded",
			className: "[&+.border-2.border-default]:ms-[calc(theme(borderWidth.2)*-1)]",
		},
		// inGroup / bordered / ghost
		{
			inGroup: true,
			variant: ["bordered", "ghost"],
			color: "default",
			className: "[&+.border-2.border-default]:ms-[calc(theme(borderWidth.2)*-1)]",
		},
		{
			inGroup: true,
			variant: ["bordered", "ghost"],
			color: "primary",
			className: "[&+.border-2.border-primary]:ms-[calc(theme(borderWidth.2)*-1)]",
		},
		{
			inGroup: true,
			variant: ["bordered", "ghost"],
			color: "secondary",
			className: "[&+.border-2.border-secondary]:ms-[calc(theme(borderWidth.2)*-1)]",
		},
		{
			inGroup: true,
			variant: ["bordered", "ghost"],
			color: "success",
			className: "[&+.border-2.border-success]:ms-[calc(theme(borderWidth.2)*-1)]",
		},
		{
			inGroup: true,
			variant: ["bordered", "ghost"],
			color: "warning",
			className: "[&+.border-2.border-warning]:ms-[calc(theme(borderWidth.2)*-1)]",
		},
		{
			inGroup: true,
			variant: ["bordered", "ghost"],
			color: "danger",
			className: "[&+.border-2.border-danger]:ms-[calc(theme(borderWidth.2)*-1)]",
		},
		{
			iconOnly: true,
			size: "sm",
			className: "min-w-8 w-8 h-8",
		},
		{
			iconOnly: true,
			size: "md",
			className: "min-w-10 w-10 h-10",
		},
		{
			iconOnly: true,
			size: "lg",
			className: "min-w-12 w-12 h-12",
		},
		// variant / hover
		{
			variant: ["solid", "faded", "flat", "bordered", "shadow"],
			className: "hover:opacity-hover",
		},
	],
})