import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type AlertVariantsProps = VariantProps<typeof alertVariants>

export const alertVariants = tv({
	slots: {
		base: "flex flex-grow flex-row w-full items-start py-3 px-4 gap-x-3",
		iconWrapper: "flex-none relative w-9 h-9 rounded-full grid place-items-center",
		alertIcon: "w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
		mainWrapper: "h-full flex-grow min-h-9 flex flex-col box-border items-start text-inherit justify-center",
		title: "text-sm w-full font-semibold block text-inherit leading-5",
		description: "pl-px text-sm font-normal text-inherit",
	},
	variants: {
		variant: {
			solid: "",
			flat: "",
			faded: {
				base: "border",
			},
			bordered: {
				base: "border bg-transparent",
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
			},
		},
		hideIconWrapper: {
			true: {
				base: "gap-x-0",
				iconWrapper: "!bg-transparent !shadow-none !border-none",
			},
		},
		hideIcon: {
			true: {
				iconWrapper: "hidden",
			},
		},
	},
	defaultVariants: {
		variant: "flat",
		color: "default",
		rounded: "md",
	},
	compoundVariants: [
		// solid / color
		{
			variant: "solid",
			color: "default",
			className: {
				base: "bg-default text-default-foreground",
				alertIcon: "text-default-foreground",
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
		// flat & faded / color
		{
			variant: ["flat", "faded"],
			color: "default",
			className: {
				base: "bg-default-100 dark:bg-default-50/50 text-default-foreground",
				iconWrapper: "bg-default-50 dark:bg-default-100 border-default-200",
				description: "text-default-600",
			},
		},
		{
			variant: ["flat", "faded"],
			color: "primary",
			className: {
				base: "bg-primary-50 dark:bg-primary-50/50 text-primary-600",
				iconWrapper: "bg-primary-50 dark:bg-primary-100 border-primary-100",
			},
		},
		{
			variant: ["flat", "faded"],
			color: "secondary",
			className: {
				base: "bg-secondary-50 dark:bg-secondary-50/50 text-secondary-600",
				iconWrapper: "bg-secondary-50 dark:bg-secondary-100 border-secondary-100",
			},
		},
		{
			variant: ["flat", "faded"],
			color: "success",
			className: {
				base: "bg-success-50 dark:bg-success-50/50 text-success-700 dark:text-success",
				iconWrapper: "bg-success-50 dark:bg-success-100 border-success-100",
			},
		},
		{
			variant: ["flat", "faded"],
			color: "warning",
			className: {
				base: "bg-warning-50 dark:bg-warning-50/50 text-warning-700 dark:text-warning",
				iconWrapper: "bg-warning-50 dark:bg-warning-100 border-warning-100",
			},
		},
		{
			variant: ["flat", "faded"],
			color: "danger",
			className: {
				base: "bg-danger-50 dark:bg-danger-50/50 text-danger-600 dark:text-danger-500",
				iconWrapper: "bg-danger-50 dark:bg-danger-100 border-danger-100",
			},
		},
		// faded / color
		{
			variant: "faded",
			color: "default",
			className: {
				base: "border-default-300 dark:border-default-200",
			},
		},
		{
			variant: "faded",
			color: "primary",
			className: {
				base: "border-primary-200 dark:border-primary-100",
			},
		},
		{
			variant: "faded",
			color: "secondary",
			className: {
				base: "border-secondary-200",
			},
		},
		{
			variant: "faded",
			color: "success",
			className: {
				base: "border-success-300 dark:border-success-100",
			},
		},
		{
			variant: "faded",
			color: "warning",
			className: {
				base: "border-warning-300 dark:border-warning-100",
			},
		},
		{
			variant: "faded",
			color: "danger",
			className: {
				base: "border-danger-200 dark:border-danger-100",
			},
		},
		// bordered / color
		{
			variant: "bordered",
			color: "default",
			className: {
				base: "border-default text-foreground",
				description: "text-default-600",
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
		// flat & bordered & faded
		{
			variant: ["flat", "bordered", "faded"],
			className: {
				iconWrapper: "shadow-small",
			},
		},
		// flat & faded
		{
			variant: ["flat", "faded"],
			className: {
				iconWrapper: "shadow-small border",
			},
		},
		// bordered & color
		{
			variant: "bordered",
			color: "default",
			className: {
				iconWrapper: "bg-default-200 dark:bg-default-100",
			},
		},
		{
			variant: "bordered",
			color: "primary",
			className: {
				iconWrapper: "bg-primary-100 dark:bg-primary-50",
			},
		},
		{
			variant: "bordered",
			color: "secondary",
			className: {
				iconWrapper: "bg-secondary-100 dark:bg-secondary-50",
			},
		},
		{
			variant: "bordered",
			color: "success",
			className: {
				iconWrapper: "bg-success-100 dark:bg-success-50",
			},
		},
		{
			variant: "bordered",
			color: "warning",
			className: {
				iconWrapper: "bg-warning-100 dark:bg-warning-50",
			},
		},
		{
			variant: "bordered",
			color: "danger",
			className: {
				iconWrapper: "bg-danger-100 dark:bg-danger-50",
			},
		},
	],
})