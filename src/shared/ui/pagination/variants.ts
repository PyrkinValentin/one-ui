import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type PaginationVariantsProps = VariantProps<typeof paginationVariants>

export const paginationVariants = tv({
	slots: {
		base: "-m-2.5 p-2.5",
		list: "max-w-fit h-fit flex flex-nowrap items-center gap-1",
		item: "",
		page: "select-none touch-none aria-[current=page]:pointer-events-none",
		prev: "",
		next: "",
		dots: "group",
		ellipsis: "group-hover:opacity-0 group-focus-visible:opacity-0",
		forwardIcon: "absolute opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100",
	},
	variants: {
		variant: {
			bordered: "",
			light: "",
			flat: "",
			faded: "",
		},
		size: {
			sm: "",
			md: "",
			lg: "",
		},
		color: {
			default: {
				page: [
					"aria-[current=page]:bg-default-400 aria-[current=page]:border-default-400",
					"aria-[current=page]:text-default-foreground",
				],
			},
			primary: {
				page: [
					"aria-[current=page]:bg-primary aria-[current=page]:border-primary",
					"aria-[current=page]:text-primary-foreground",
				],
			},
			secondary: {
				page: [
					"aria-[current=page]:bg-secondary aria-[current=page]:border-secondary",
					"aria-[current=page]:text-secondary-foreground",
				],
			},
			success: {
				page: [
					"aria-[current=page]:bg-success aria-[current=page]:border-success",
					"aria-[current=page]:text-success-foreground",
				],
			},
			warning: {
				page: [
					"aria-[current=page]:bg-warning aria-[current=page]:border-warning",
					"aria-[current=page]:text-warning-foreground",
				],
			},
			danger: {
				page: [
					"aria-[current=page]:bg-danger aria-[current=page]:border-danger",
					"aria-[current=page]:text-danger-foreground",
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
				page: "aria-[current=page]:shadow-md",
			},
		},
		disabled: {
			true: {
				base: "opacity-disabled pointer-events-none",
			},
		},
		disableAnimation: {
			true: {
				base: "transition-none",
				ellipsis: "transition-none",
				forwardIcon: "transition-none",
			},
			false: {
				base: "transition-opacity motion-reduce:transition-none",
				ellipsis: "transition-opacity motion-reduce:transition-none",
				forwardIcon: "transition-opacity motion-reduce:transition-none",
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
		{
			showShadow: true,
			color: "default",
			className: {
				page: "aria-[current=page]:shadow-default/50",
			},
		},
		{
			showShadow: true,
			color: "primary",
			className: {
				page: "aria-[current=page]:shadow-primary/40",
			},
		},
		{
			showShadow: true,
			color: "secondary",
			className: {
				page: "aria-[current=page]:shadow-secondary/40",
			},
		},
		{
			showShadow: true,
			color: "success",
			className: {
				page: "aria-[current=page]:shadow-success/40",
			},
		},
		{
			showShadow: true,
			color: "warning",
			className: {
				page: "aria-[current=page]:shadow-warning/40",
			},
		},
		{
			showShadow: true,
			color: "danger",
			className: {
				page: "aria-[current=page]:shadow-danger/40",
			},
		},
	],
	compoundSlots: [
		{
			slots: ["prev", "next"],
			className: "aria-[disabled=true]:text-default-300 aria-[disabled=true]:pointer-events-none",
		},
		{
			slots: ["prev", "next", "dots", "page"],
			className: [
				"box-border flex flex-wrap items-center justify-center truncate text-default-foreground outline-none",
				"focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2",
			],
		},
		{
			slots: ["prev", "next", "dots", "page"],
			variant: "bordered",
			className: "shadow-sm border-2 border-default hover:bg-default-100",
		},
		{
			slots: ["prev", "next", "dots", "page"],
			variant: "light",
			class: "hover:bg-default-100 active:bg-default-200",
		},
		{
			slots: ["prev", "next", "dots", "page"],
			variant: "flat",
			className: "shadow-sm bg-default-100 hover:bg-default-200 active:bg-default-200",
		},
		{
			slots: ["prev", "next", "dots", "page"],
			variant: "faded",
			className: "shadow-sm border-2 border-default bg-default-50 hover:bg-default-100 active:bg-default-100",
		},
		{
			slots: ["prev", "next", "dots", "page"],
			size: "sm",
			className: "min-w-8 w-8 h-8 text-xs",
		},
		{
			slots: ["prev", "next", "dots", "page"],
			size: "md",
			className: "min-w-9 w-9 h-9 text-sm",
		},
		{
			slots: ["prev", "next", "dots", "page"],
			size: "lg",
			className: "min-w-10 w-10 h-10 text-md",
		},
		{
			slots: ["prev", "next", "dots", "page"],
			rounded: "none",
			className: "rounded-none",
		},
		{
			slots: ["prev", "next", "dots", "page"],
			rounded: "sm",
			className: "rounded-small",
		},
		{
			slots: ["prev", "next", "dots", "page"],
			rounded: "md",
			className: "rounded-medium",
		},
		{
			slots: ["prev", "next", "dots", "page"],
			rounded: "lg",
			className: "rounded-large",
		},
		{
			slots: ["prev", "next", "dots", "page"],
			rounded: "full",
			className: "rounded-full",
		},
		{
			slots: ["prev", "next", "dots", "page"],
			disableAnimation: true,
			className: "transition-none",
		},
		{
			slots: ["prev", "next", "dots", "page"],
			disableAnimation: false,
			className: "active:scale-[0.97] transition motion-reduce:transition-none",
		},
	],
})