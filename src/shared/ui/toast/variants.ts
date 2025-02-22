import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export const toastRegionVariants = tv({
	base: "z-50",
})

export type ToastVariantsProps = VariantProps<typeof toastVariants>
export type ToastVariantsSlots = keyof typeof toastVariants.slots

export const toastVariants = tv({
	slots: {
		base:
			"group box-border relative my-1 sm:mx-1 p-3 w-full sm:w-[356px] min-h-4 flex gap-x-3 items-center cursor-pointer",
		wrapper: "flex flex-col",
		title: "text-sm font-medium",
		description: "text-xs",
		icon: "w-6 h-6 shrink-0 flex items-center justify-center text-2xl",
		closeButton: [
			"absolute -right-2 -top-2 p-0 w-5 h-5 min-w-4 flex items-center justify-center rounded-full opacity-0",
			"pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 border outline-none",
			"focus-visible:z-10 focus-visible:outline-1 focus-visible:outline-focus focus-visible:outline-offset-2",
		],
	},
	variants: {
		variant: {
			flat: {
				base: "border",
			},
			bordered: {
				base: "bg-background border",
			},
			solid: "",
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
			none: {
				base: "rounded-none",
			},
			sm: {
				base: "rounded-small",
			},
			md: {
				base: "rounded-medium",
			},
			lg: {
				base: "rounded-large",
			},
			full: {
				base: "rounded-full",
				closeButton: "-top-px -right-px",
			},
		},
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
		disableAnimation: {
			true: {
				closeButton: "[&>svg]:transition-none",
			},
			false: {
				closeButton: "[&>svg]:transition [&>svg]:motion-reduce:transition-none",
			},
		},
	},
	defaultVariants: {
		variant: "flat",
		color: "default",
		rounded: "md",
		shadow: "sm",
	},
	compoundVariants: [
		{
			variant: "flat",
			color: "default",
			className: {
				base: "bg-content1 text-foreground border-default-100",
				closeButton: "border-default-400 bg-default-100 text-default-400 hover:text-default-600",
				title: "text-foreground",
				description: "text-default-500",
			},
		},
		{
			variant: "flat",
			color: "primary",
			className: {
				base: "bg-primary-50 text-primary-600 border-primary-100",
				closeButton: "border-primary-400 bg-primary-100 text-primary-400 hover:text-primary-600",
				title: "text-primary-600",
				description: "text-primary-500",
			},
		},
		{
			variant: "flat",
			color: "secondary",
			className: {
				base: "bg-secondary-50 text-secondary-600 border-secondary-100",
				closeButton: "border-secondary-400 bg-secondary-100 text-secondary-400 hover:text-secondary-600",
				title: "text-secondary-600",
				description: "text-secondary-500",
			},
		},
		{
			variant: "flat",
			color: "success",
			className: {
				base: "bg-success-50 text-success-600 border-success-100",
				closeButton: "border-success-400 bg-success-100 text-success-400 hover:text-success-600",
				title: "text-success-600",
				description: "text-success-500",
			},
		},
		{
			variant: "flat",
			color: "warning",
			className: {
				base: "bg-warning-50 text-warning-600 border-warning-100",
				closeButton: "border-warning-400 bg-warning-100 text-warning-400 hover:text-warning-600",
				title: "text-warning-600",
				description: "text-warning-500",
			},
		},
		{
			variant: "flat",
			color: "danger",
			className: {
				base: "bg-danger-50 text-danger-600 border-danger-100",
				closeButton: "border-danger-400 bg-danger-100 text-danger-400 hover:text-danger-600",
				title: "text-danger-600",
				description: "text-danger-500",
			},
		},
		{
			variant: "bordered",
			color: "default",
			className: {
				base: "border-default-200 text-foreground",
				closeButton: "border-default-400 bg-default-100 text-default-400 hover:text-default-600",
				title: "text-foreground",
				description: "text-default-500",
			},
		},
		{
			variant: "bordered",
			color: "primary",
			className: {
				base: "border-primary-400 text-primary-600",
				closeButton: "border-primary-400 bg-primary-100 text-primary-400 hover:text-primary-600",
				title: "text-primary-600",
				description: "text-primary-500",
			},
		},
		{
			variant: "bordered",
			color: "secondary",
			className: {
				base: "border-secondary-400 text-secondary-600",
				closeButton: "border-secondary-400 bg-secondary-100 text-secondary-400 hover:text-secondary-600",
				title: "text-secondary-600",
				description: "text-secondary-500",
			},
		},
		{
			variant: "bordered",
			color: "success",
			className: {
				base: "border-success-400 text-success-600",
				closeButton: "border-success-400 bg-success-100 text-success-400 hover:text-success-600",
				title: "text-success-600",
				description: "text-success-500",
			},
		},
		{
			variant: "bordered",
			color: "warning",
			className: {
				base: "border-warning-400 text-warning-600",
				closeButton: "border-warning-400 bg-warning-100 text-warning-400 hover:text-warning-600",
				title: "text-warning-600",
				description: "text-warning-500",
			},
		},
		{
			variant: "bordered",
			color: "danger",
			className: {
				base: "border-danger-400 text-danger-600",
				closeButton: "border-danger-400 bg-danger-100 text-danger-400 hover:text-danger-600",
				title: "text-danger-600",
				description: "text-danger-500",
			},
		},
		{
			variant: "solid",
			color: "default",
			className: {
				base: "bg-default text-foreground",
				closeButton: "border-default-400 bg-default-100 text-default-400 hover:text-default-600",
				title: "text-foreground",
				description: "text-foreground",
			},
		},
		{
			variant: "solid",
			color: "primary",
			className: {
				base: "bg-primary text-primary-foreground",
				closeButton: "border-primary-400 bg-primary-100 text-primary-400 hover:text-primary-600",
				title: "text-primary-foreground",
				description: "text-primary-foreground",
			},
		},
		{
			variant: "solid",
			color: "secondary",
			className: {
				base: "bg-secondary text-secondary-foreground",
				closeButton: "border-secondary-400 bg-secondary-100 text-secondary-400 hover:text-secondary-600",
				title: "text-secondary-foreground",
				description: "text-secondary-foreground",
			},
		},
		{
			variant: "solid",
			color: "success",
			className: {
				base: "bg-success text-success-foreground",
				closeButton: "border-success-400 bg-success-100 text-success-400 hover:text-success-600",
				title: "text-success-foreground",
				description: "text-success-foreground",
			},
		},
		{
			variant: "solid",
			color: "warning",
			className: {
				base: "bg-warning text-warning-foreground",
				closeButton: "border-warning-400 bg-warning-100 text-warning-400 hover:text-warning-600",
				title: "text-warning-foreground",
				description: "text-warning-foreground",
			},
		},
		{
			variant: "solid",
			color: "danger",
			className: {
				base: "bg-danger text-danger-foreground",
				closeButton: "border-danger-400 bg-danger-100 text-danger-400 hover:text-danger-600",
				title: "text-danger-foreground",
				description: "text-danger-foreground",
			},
		},
	],
})