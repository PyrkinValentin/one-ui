import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type BadgeVariantsProps = VariantProps<typeof badgeVariants>

export const badgeVariants = tv({
	slots: {
		base: "relative inline-flex shrink-0",
		badge: [
			"box-border z-10 absolute select-none flex flex-wrap items-center rounded-full",
			"whitespace-nowrap text-inherit font-regular subpixel-antialiased place-content-center origin-center",
		],
	},
	variants: {
		showOutline: {
			true: {
				badge: "border-2 border-background",
			},
		},
		variant: {
			solid: "",
			flat: "",
			faded: {
				badge: "border-2 border-default bg-default-100",
			},
			shadow: {
				badge: "shadow-lg",
			},
		},
		size: {
			sm: {
				badge: "px-1 text-xs min-w-5 h-5",
			},
			md: {
				badge: "px-1 text-sm min-w-5 h-5",
			},
			lg: {
				badge: "px-1 text-md min-w-6 h-6",
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
		placement: {
			"top-right": "",
			"top-left": "",
			"bottom-right": "",
			"bottom-left": "",
		},
		shape: {
			circle: "",
			square: "",
		},
		invisible: {
			true: {
				badge: "scale-0 opacity-0",
			},
			false: {
				badge: "scale-100 opacity-100",
			}
		},
		dot: {
			true: "",
		},
		disableAnimation: {
			true: {
				badge: "transition-none",
			},
			false: {
				badge: "transition duration-300 motion-reduce:transition-none",
			},
		},
	},
	defaultVariants: {
		variant: "solid",
		size: "md",
		color: "default",
		placement: "top-right",
		shape: "square",
		showOutline: true,
	},
	compoundVariants: [
		// solid / color
		{
			variant: "solid",
			color: "default",
			className: {
				badge: "bg-default text-default-foreground",
			},
		},
		{
			variant: "solid",
			color: "primary",
			className: {
				badge: "bg-primary text-primary-foreground",
			},
		},
		{
			variant: "solid",
			color: "secondary",
			className: {
				badge: "bg-secondary text-secondary-foreground",
			},
		},
		{
			variant: "solid",
			color: "success",
			className: {
				badge: "bg-success text-success-foreground",
			},
		},
		{
			variant: "solid",
			color: "warning",
			className: {
				badge: "bg-warning text-warning-foreground",
			},
		},
		{
			variant: "solid",
			color: "danger",
			className: {
				badge: "bg-danger text-danger-foreground",
			},
		},
		// flat / color
		{
			variant: "flat",
			color: "default",
			className: {
				badge: "bg-default/40 text-default-700",
			},
		},
		{
			variant: "flat",
			color: "primary",
			className: {
				badge: "bg-primary/20 text-primary-600",
			},
		},
		{
			variant: "flat",
			color: "secondary",
			className: {
				badge: "bg-secondary/20 text-secondary-600",
			},
		},
		{
			variant: "flat",
			color: "success",
			className: {
				badge: "bg-success/20 text-success-700 dark:text-success",
			},
		},
		{
			variant: "flat",
			color: "warning",
			className: {
				badge: "bg-warning/20 text-warning-700 dark:text-warning",
			},
		},
		{
			variant: "flat",
			color: "danger",
			className: {
				badge: "bg-danger/20 text-danger-600 dark:text-danger-500",
			},
		},
		// faded / color
		{
			variant: "faded",
			color: "default",
			className: {
				badge: "text-default-foreground",
			},
		},
		{
			variant: "faded",
			color: "primary",
			className: {
				badge: "text-primary",
			},
		},
		{
			variant: "faded",
			color: "secondary",
			className: {
				badge: "text-secondary",
			},
		},
		{
			variant: "faded",
			color: "success",
			className: {
				badge: "text-success",
			},
		},
		{
			variant: "faded",
			color: "warning",
			className: {
				badge: "text-warning",
			},
		},
		{
			variant: "faded",
			color: "danger",
			className: {
				badge: "text-danger",
			},
		},
		// shadow / color
		{
			variant: "shadow",
			color: "default",
			className: {
				badge: "shadow-default/50 bg-default text-default-foreground",
			},
		},
		{
			variant: "shadow",
			color: "primary",
			className: {
				badge: "shadow-primary/40 bg-primary text-primary-foreground",
			},
		},
		{
			variant: "shadow",
			color: "secondary",
			className: {
				badge: "shadow-secondary/40 bg-secondary text-secondary-foreground",
			},
		},
		{
			variant: "shadow",
			color: "success",
			className: {
				badge: "shadow-success/40 bg-success text-success-foreground",
			},
		},
		{
			variant: "shadow",
			color: "warning",
			className: {
				badge: "shadow-warning/40 bg-warning text-warning-foreground",
			},
		},
		{
			variant: "shadow",
			color: "danger",
			className: {
				badge: "shadow-danger/40 bg-danger text-danger-foreground",
			},
		},
		// dot / size
		{
			dot: true,
			size: "sm",
			className: {
				badge: "w-3 h-3 min-w-3 min-h-3",
			},
		},
		{
			dot: true,
			size: "md",
			className: {
				badge: "w-3.5 h-3.5 min-w-3.5 min-h-3.5",
			},
		},
		{
			dot: true,
			size: "lg",
			className: {
				badge: "w-4 h-4 min-w-4 min-h-4",
			},
		},
		// placement / square
		{
			placement: "top-right",
			shape: "square",
			className: {
				badge: "top-[5%] right-[5%] translate-x-1/2 -translate-y-1/2",
			},
		},
		{
			placement: "top-left",
			shape: "square",
			className: {
				badge: "top-[5%] left-[5%] -translate-x-1/2 -translate-y-1/2",
			},
		},
		{
			placement: "bottom-right",
			shape: "square",
			className: {
				badge: "bottom-[5%] right-[5%] translate-x-1/2 translate-y-1/2",
			},
		},
		{
			placement: "bottom-left",
			shape: "square",
			className: {
				badge: "bottom-[5%] left-[5%] -translate-x-1/2 translate-y-1/2",
			},
		},
		// placement / circle
		{
			placement: "top-right",
			shape: "circle",
			className: {
				badge: "top-[10%] right-[10%] translate-x-1/2 -translate-y-1/2",
			},
		},
		{
			placement: "top-left",
			shape: "circle",
			className: {
				badge: "top-[10%] left-[10%] -translate-x-1/2 -translate-y-1/2",
			},
		},
		{
			placement: "bottom-right",
			shape: "circle",
			className: {
				badge: "bottom-[10%] right-[10%] translate-x-1/2 translate-y-1/2",
			},
		},
		{
			placement: "bottom-left",
			shape: "circle",
			className: {
				badge: "bottom-[10%] left-[10%] -translate-x-1/2 translate-y-1/2",
			},
		},
	],
})