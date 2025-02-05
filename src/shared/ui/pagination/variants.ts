import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type PaginationVariantsProps = VariantProps<typeof paginationVariants>
export type PaginationVariantsReturn = ReturnType<typeof paginationVariants>

export const paginationVariants = tv({
	slots: {
		base: "-m-2.5 p-2.5",
		wrapper: "max-w-fit h-fit flex items-center flex-nowrap gap-1",
		item: "group",
		control: "",
		dots: "",
		button: "aria-[current=true]:z-10 aria-[current=true]:pointer-events-none",
		ellipsis: "opacity-100 group-hover:opacity-0 group-has-[:focus-visible]:opacity-0",
		forwardIcon: [
			"absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100",
			"group-has-[:focus-visible]:opacity-100",
		],
	},
	variants: {
		variant: {
			flat: "",
			faded: "",
			bordered: "",
			light: "",
		},
		size: {
			sm: "",
			md: "",
			lg: "",
		},
		color: {
			default: {
				button: [
					"aria-[current=true]:bg-default aria-[current=true]:border-default",
					"aria-[current=true]:text-default-foreground",
				],
			},
			primary: {
				button: [
					"aria-[current=true]:bg-primary aria-[current=true]:border-primary",
					"aria-[current=true]:text-primary-foreground"
				],
			},
			secondary: {
				button: [
					"aria-[current=true]:bg-secondary aria-[current=true]:border-secondary",
					"aria-[current=true]:text-secondary-foreground"
				],
			},
			success: {
				button: [
					"aria-[current=true]:bg-success aria-[current=true]:border-success",
					"aria-[current=true]:text-success-foreground"
				],
			},
			warning: {
				button: [
					"aria-[current=true]:bg-warning aria-[current=true]:border-warning",
					"aria-[current=true]:text-warning-foreground"
				],
			},
			danger: {
				button: [
					"aria-[current=true]:bg-danger aria-[current=true]:border-danger",
					"aria-[current=true]:text-danger-foreground"
				],
			},
		},
		rounded: {
			none: {
				wrapper: "rounded-none",
				control: "rounded-none",
				dots: "rounded-none",
				button: "rounded-none",
			},
			sm: {
				wrapper: "rounded-small",
				control: "rounded-small",
				dots: "rounded-small",
				button: "rounded-small",
			},
			md: {
				wrapper: "rounded-medium",
				control: "rounded-medium",
				dots: "rounded-medium",
				button: "rounded-medium",
			},
			lg: {
				wrapper: "rounded-large",
				control: "rounded-large",
				dots: "rounded-large",
				button: "rounded-large",
			},
			full: {
				wrapper: "rounded-full",
				control: "rounded-full",
				dots: "rounded-full",
				button: "rounded-full",
			},
		},
		compact: {
			true: {
				wrapper: "gap-0 shadow-sm",
				control: "group-first-of-type:rounded-e-none shadow-none group-last-of-type:rounded-s-none",
				dots: "rounded-none",
				button: [
					"group-first-of-type:rounded-e-none shadow-none group-last-of-type:rounded-s-none",
					"group-[&:not(:first-of-type):not(:last-of-type)]:rounded-none"
				],
			},
		},
		showShadow: {
			true: {
				button: "aria-[current=true]:shadow-md",
			},
		},
		disabled: {
			true: {
				base: "opacity-disabled pointer-events-none",
			},
		},
		disableAnimation: {
			true: {
				button: "transition-none",
				ellipsis: "transition-none",
				forwardIcon: "transition-none",
			},
			false: {
				ellipsis: "transition motion-reduce:transition-none",
				forwardIcon: "transition motion-reduce:transition-none",
			},
		},
	},
	defaultVariants: {
		variant: "flat",
		size: "md",
		color: "primary",
		rounded: "md",
		disabled: false,
		disableAnimation: false,
	},
	compoundVariants: [
		{
			showShadow: true,
			color: "default",
			className: {
				button: "aria-[current=true]:shadow-default/50",
			},
		},
		{
			showShadow: true,
			color: "primary",
			className: {
				button: "aria-[current=true]:shadow-primary/40",
			},
		},
		{
			showShadow: true,
			color: "secondary",
			className: {
				button: "aria-[current=true]:shadow-secondary/40",
			},
		},
		{
			showShadow: true,
			color: "success",
			className: {
				button: "aria-[current=true]:shadow-success/40",
			},
		},
		{
			showShadow: true,
			color: "warning",
			className: {
				button: "aria-[current=true]:shadow-warning/40",
			},
		},
		{
			showShadow: true,
			color: "danger",
			className: {
				button: "aria-[current=true]:shadow-danger/40",
			},
		},
		{
			disabled: false,
			className: {
				control: "aria-[disabled=true]:opacity-disabled aria-[disabled=true]:pointer-events-none",
			},
		},
	],
	compoundSlots: [
		{
			slots: ["control", "dots", "button"],
			className: [
				"box-border relative select-none touch-none flex flex-wrap items-center justify-center text-foreground",
				"truncate outline-none focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus",
				"focus-visible:outline-offset-2",
			],
		},
		{
			slots: ["control", "dots", "button"],
			compact: true,
			variant: ["faded", "bordered"],
			className: "group-[&:not(:first-of-type)]:ms-[calc(theme(borderWidth.2)*-1)]",
		},
		{
			slots: ["control", "dots", "button"],
			size: "sm",
			className: "min-w-8 w-8 h-8 text-xs",
		},
		{
			slots: ["control", "dots", "button"],
			size: "md",
			className: "min-w-9 w-9 h-9 text-sm",
		},
		{
			slots: ["control", "dots", "button"],
			size: "lg",
			className: "min-w-10 w-10 h-10 text-md",
		},
		{
			slots: ["control", "dots", "button"],
			variant: "flat",
			className: "shadow-sm bg-default-100 hover:bg-default-200 active:bg-default-300",
		},
		{
			slots: ["control", "dots", "button"],
			variant: "faded",
			className: "shadow-sm border-2 border-default bg-default-50 hover:bg-default-100 active:bg-default-200",
		},
		{
			slots: ["control", "dots", "button"],
			variant: "bordered",
			className: "shadow-sm border-2 border-default hover:bg-default-100 active:bg-default-200",
		},
		{
			slots: ["control", "dots", "button"],
			variant: "light",
			className: "hover:bg-default-100 active:bg-default-200",
		},
		{
			slots: ["control", "dots", "button"],
			disableAnimation: false,
			className: "active:[&:not([aria-current=true])]:scale-[0.97] transition motion-reduce:transition-none",
		},
	],
})