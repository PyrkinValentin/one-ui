import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type InputOtpVariantsProps = VariantProps<typeof inputOtpVariants>

export const inputOtpVariants = tv({
	slots: {
		base: "relative flex flex-col gap-2 w-fit",
		wrapper: "group flex items-center has-[:disabled]:opacity-60",
		segmentWrapper: "py-2 inline-flex gap-x-1",
		segment: "flex items-center justify-center font-semibold shadow-sm data-[active=true]:scale-110",
		caret: "w-px h-[50%] flex items-center justify-center text-2xl bg-foreground animate-caret-blink",
		passwordChar: "w-1 h-1 bg-default-800 rounded-full",
		invalidMessage: "text-xs text-danger",
		description: "text-xs text-default-400",
	},
	variants: {
		variant: {
			flat: "",
			faded: {
				segment: "border-2",
			},
			bordered: {
				segment: "border-2",
			},
			underlined: {
				segment: [
					"box-border relative border-b-2 !rounded-none shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
					"after:content-[''] after:origin-center after:absolute after:left-1/2 after:-bottom-[2px]",
					"after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-default-foreground data-[active=true]:after:w-full",
					"data-[active=true]:scale-100",
				],
			},
		},
		size: {
			sm: {
				segment: "h-8 min-h-8 w-8 min-w-8 text-sm",
			},
			md: {
				segment: "h-10 min-h-10 w-10 min-w-10 text-sm",
			},
			lg: {
				segment: "h-12 min-h-12 w-12 min-w-12 text-md",
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
				segment: "rounded-none",
			},
			sm: {
				segment: "rounded-sm",
			},
			md: {
				segment: "rounded-md",
			},
			lg: {
				segment: "rounded-lg",
			},
			full: {
				segment: "rounded-full",
			},
		},
		fullWidth: {
			true: {
				base: "w-full",
			},
		},
		readOnly: {
			true: {
				caret: "bg-transparent",
				segment: "data-[active=true]:scale-100",
			},
		},
		invalid: {
			true: "",
		},
		disabled: {
			true: {
				segment: "opacity-disabled pointer-events-none",
			},
		},
		disableAnimation: {
			true: {
				segment: "transition-none",
			},
			false: {
				segment: "transition motion-reduce:transition-none",
			},
		},
	},
	defaultVariants: {
		variant: "flat",
		size: "md",
		color: "default",
		rounded: "md",
	},
	compoundVariants: [
		// flat & color
		{
			variant: "flat",
			color: "default",
			className: {
				segment: "bg-default-100 data-[active=true]:bg-default-200",
			},
		},
		{
			variant: "flat",
			color: "primary",
			className: {
				segment: "bg-primary-100 data-[active=true]:bg-primary-200 text-primary",
				caret: "bg-primary",
				passwordChar: "bg-primary",
			},
		},
		{
			variant: "flat",
			color: "secondary",
			className: {
				segment: "bg-secondary-100 data-[active=true]:bg-secondary-200 text-secondary",
				caret: "bg-secondary",
				passwordChar: "bg-secondary",
			},
		},
		{
			variant: "flat",
			color: "success",
			className: {
				segment: "bg-success-100 data-[active=true]:bg-success-200 text-success",
				caret: "bg-success",
				passwordChar: "bg-success",
			},
		},
		{
			variant: "flat",
			color: "warning",
			className: {
				segment: "bg-warning-100 data-[active=true]:bg-warning-200 text-warning",
				caret: "bg-warning",
				passwordChar: "bg-warning",
			},
		},
		{
			variant: "flat",
			color: "danger",
			className: {
				segment: "bg-danger-100 data-[active=true]:bg-danger-200 text-danger",
				caret: "bg-danger",
				passwordChar: "bg-danger",
			},
		},
		// faded & color
		{
			variant: "faded",
			color: "default",
			className: {
				segment: "bg-default-100 border-default-200 data-[active=true]:border-default-400",
			},
		},
		{
			variant: "faded",
			color: "primary",
			className: {
				segment: "bg-primary-100 text-primary border-primary-200 data-[active=true]:border-primary",
				caret: "bg-primary",
				passwordChar: "bg-primary",
			},
		},
		{
			variant: "faded",
			color: "secondary",
			className: {
				segment: "bg-secondary-100 text-secondary border-secondary-200 data-[active=true]:border-secondary",
				caret: "bg-secondary",
				passwordChar: "bg-secondary",
			},
		},
		{
			variant: "faded",
			color: "success",
			className: {
				segment: "bg-success-100 text-success border-success-200 data-[active=true]:border-success",
				caret: "bg-success",
				passwordChar: "bg-success",
			},
		},
		{
			variant: "faded",
			color: "warning",
			className: {
				segment: "bg-warning-100 text-warning border-warning-200 data-[active=true]:border-warning",
				caret: "bg-warning",
				passwordChar: "bg-warning",
			},
		},
		{
			variant: "faded",
			color: "danger",
			className: {
				segment: "bg-danger-100 text-danger border-danger-200 data-[active=true]:border-danger",
				caret: "bg-danger",
				passwordChar: "bg-danger",
			},
		},
		// bordered & color
		{
			variant: "bordered",
			color: "default",
			className: {
				segment: "border-default-200 text-default-foreground data-[active=true]:border-foreground",
			},
		},
		{
			variant: "bordered",
			color: "primary",
			className: {
				segment: "border-primary-200 text-primary data-[active=true]:border-primary",
				caret: "bg-primary",
				passwordChar: "bg-primary",
			},
		},
		{
			variant: "bordered",
			color: "secondary",
			className: {
				segment: "border-secondary-200 text-secondary data-[active=true]:border-secondary",
				caret: "bg-secondary",
				passwordChar: "bg-secondary",
			},
		},
		{
			variant: "bordered",
			color: "success",
			className: {
				segment: "border-success-200 text-success data-[active=true]:border-success",
				caret: "bg-success",
				passwordChar: "bg-success",
			},
		},
		{
			variant: "bordered",
			color: "warning",
			className: {
				segment: "border-warning-200 text-warning data-[active=true]:border-warning",
				caret: "bg-warning",
				passwordChar: "bg-warning",
			},
		},
		{
			variant: "bordered",
			color: "danger",
			className: {
				segment: "border-danger-200 text-danger data-[active=true]:border-danger",
				caret: "bg-danger",
				passwordChar: "bg-danger",
			},
		},
		// underlined & color
		{
			variant: "underlined",
			color: "default",
			className: {
				segment: "border-default-200 text-default-foreground after:bg-foreground data-[active=true]:border-default-300",
			},
		},
		{
			variant: "underlined",
			color: "primary",
			className: {
				segment: "border-primary-200 text-primary after:bg-primary data-[active=true]:border-primary-300",
				caret: "bg-primary",
				passwordChar: "bg-primary",
			},
		},
		{
			variant: "underlined",
			color: "secondary",
			className: {
				segment: "border-secondary-200 text-secondary after:bg-secondary data-[active=true]:border-secondary-300",
				caret: "bg-secondary",
				passwordChar: "bg-secondary",
			},
		},
		{
			variant: "underlined",
			color: "success",
			className: {
				segment: "border-success-200 text-success after:bg-success data-[active=true]:border-success-300",
				caret: "bg-success",
				passwordChar: "bg-success",
			},
		},
		{
			variant: "underlined",
			color: "warning",
			className: {
				segment: "border-warning-200 text-warning after:bg-warning data-[active=true]:border-warning-300",
				caret: "bg-warning",
				passwordChar: "bg-warning",
			},
		},
		{
			variant: "underlined",
			color: "danger",
			className: {
				segment: "border-danger-200 text-danger after:bg-danger data-[active=true]:border-danger-300",
				caret: "bg-danger",
				passwordChar: "bg-danger",
			},
		},
		// invalid & flat
		{
			variant: "flat",
			invalid: true,
			className: {
				segment: "bg-danger-50 text-danger data-[active=true]:bg-danger-100",
				caret: "bg-danger",
			},
		},
		// invalid & faded
		{
			variant: "faded",
			invalid: true,
			className: {
				segment: "bg-danger-50 text-danger border-danger-200 data-[active=true]:border-danger-400",
				caret: "bg-danger",
			},
		},
		// invalid & bordered
		{
			variant: "bordered",
			invalid: true,
			className: {
				segment: "border-danger-200 text-danger data-[active=true]:border-danger-400",
				caret: "bg-danger",
			},
		},
		// invalid & underlined
		{
			variant: "underlined",
			invalid: true,
			className: {
				segment: "border-danger-200 text-danger data-[active=true]:after:bg-danger-400",
				caret: "bg-danger",
			},
		},
		// disableAnimation & underlined
		{
			disableAnimation: false,
			variant: "underlined",
			className: {
				segment: "after:transition-[width] motion-reduce:after:transition-none",
			},
		},
	],
})