import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type PaginationVariantsProps = VariantProps<typeof paginationVariants>
export type PaginationVariantsReturn = ReturnType<typeof paginationVariants>

export const paginationVariants = tv({
	slots: {
		base: "-m-2.5 p-2.5",
		wrapper: "relative max-w-fit h-fit flex items-center flex-nowrap gap-1",
		prev: "",
		next: "",
		ellipsis: "group-hover:hidden group-focus-visible:hidden",
		forwardIcon: "hidden group-hover:block group-focus-visible:block",
		item: "select-none touch-none aria-[current=true]:pointer-events-none",
	},
	variants: {
		variant: {
			flat: "",
			bordered: "",
			light: "",
			faded: "",
		},
		size: {
			sm: "",
			md: "",
			lg: "",
		},
		color: {
			default: {
				item: [
					"aria-[current=true]:bg-default-400 aria-[current=true]:border-default-400",
					"aria-[current=true]:text-default-foreground"
				],
			},
			primary: {
				item: [
					"aria-[current=true]:bg-primary aria-[current=true]:border-primary",
					"aria-[current=true]:text-primary-foreground"
				],
			},
			secondary: {
				item: [
					"aria-[current=true]:bg-secondary aria-[current=true]:border-secondary",
					"aria-[current=true]:text-secondary-foreground"
				],
			},
			success: {
				item: [
					"aria-[current=true]:bg-success aria-[current=true]:border-success",
					"aria-[current=true]:text-success-foreground",
				],
			},
			warning: {
				item: [
					"aria-[current=true]:bg-warning aria-[current=true]:border-warning",
					"aria-[current=true]:text-warning-foreground",
				],
			},
			danger: {
				item: [
					"aria-[current=true]:bg-danger aria-[current=true]:border-danger",
					"aria-[current=true]:text-danger-foreground",
				],
			},
		},
		rounded: {
			none: "",
			sm: "",
			md: "",
			lg: "",
			full: "",
		},
		showShadow: {
			true: {
				item: "aria-[current=true]:shadow-md",
			},
		},
		disabled: {
			true: {
				base: "opacity-disabled pointer-events-none",
			},
		},
		disableAnimation: {
			true: {
				item: "transition-none",
			},
		},
	},
	defaultVariants: {
		variant: "flat",
		size: "md",
		color: "primary",
		rounded: "md",
		disableAnimation: false,
	},
	compoundVariants: [
		// showShadow / color
		{
			showShadow: true,
			color: "default",
			className: {
				item: "aria-[current=true]:shadow-default/50",
			},
		},
		{
			showShadow: true,
			color: "primary",
			className: {
				item: "aria-[current=true]:shadow-primary/40",
			},
		},
		{
			showShadow: true,
			color: "secondary",
			className: {
				item: "aria-[current=true]:shadow-secondary/40",
			},
		},
		{
			showShadow: true,
			color: "success",
			className: {
				item: "aria-[current=true]:shadow-success/40",
			},
		},
		{
			showShadow: true,
			color: "warning",
			className: {
				item: "aria-[current=true]:shadow-warning/40",
			},
		},
		{
			showShadow: true,
			color: "danger",
			className: {
				item: "aria-[current=true]:shadow-danger/40",
			},
		},
	],
	compoundSlots: [
		// !disableAnimation
		{
			slots: ["prev", "next", "item"],
			disableAnimation: false,
			className: "active:[&:not([aria-current=true])]:scale-[0.97] transition motion-reduce:transition-none",
		},
		// without variant
		{
			slots: ["prev", "next", "item"],
			className: [
				"box-border flex items-center justify-center flex-wrap truncate text-default-foreground outline-none",
				"focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2",
			],
		},
		{
			slots: ["prev", "next"],
			className: "aria-[disabled=true]:text-default-300 aria-[disabled=true]:pointer-events-none",
		},
		{
			slots: ["prev", "next", "item"],
			variant: ["flat", "bordered", "faded"],
			className: "shadow-sm",
		},
		{
			slots: ["prev", "next", "item"],
			variant: "flat",
			className: "bg-default-100 hover:bg-default-200 active:bg-default-300",
		},
		{
			slots: ["prev", "next", "item"],
			variant: "bordered",
			className: "border-2 border-default hover:bg-default-100 active:bg-default-100",
		},
		{
			slots: ["prev", "next", "item"],
			variant: "faded",
			className: "border-2 border-default bg-default-50 hover:bg-default-100 active:bg-default-100",
		},
		{
			slots: ["prev", "next", "item"],
			variant: "light",
			className: "hover:bg-default-100 active:bg-default-200",
		},
		// size
		{
			slots: ["prev", "next", "item"],
			size: "sm",
			className: "min-w-8 w-8 h-8 text-xs",
		},
		{
			slots: ["prev", "next", "item"],
			size: "md",
			className: "min-w-9 w-9 h-9 text-sm",
		},
		{
			slots: ["prev", "next", "item"],
			size: "lg",
			className: "min-w-10 w-10 h-10 text-md",
		},
		// rounded
		{
			slots: ["wrapper", "prev", "next", "item"],
			rounded: "none",
			className: "rounded-none",
		},
		{
			slots: ["wrapper", "prev", "next", "item"],
			rounded: "sm",
			className: "rounded-small",
		},
		{
			slots: ["wrapper", "prev", "next", "item"],
			rounded: "md",
			className: "rounded-medium",
		},
		{
			slots: ["wrapper", "prev", "next", "item"],
			rounded: "lg",
			className: "rounded-large",
		},
		{
			slots: ["wrapper", "prev", "next", "item"],
			rounded: "full",
			className: "rounded-full",
		},
	],
})