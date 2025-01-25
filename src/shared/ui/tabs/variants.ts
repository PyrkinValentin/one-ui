import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type TabsVariantsProps = VariantProps<typeof tabsVariants>

export const tabsVariants = tv({
	slots: {
		base: "flex gap-3",
		tabList: "w-fit h-fit flex items-center gap-2 flex-nowrap",
		tab: [
			"z-0 relative px-3 py-1 w-full flex items-center gap-2 justify-center whitespace-nowrap outline-none",
			"text-default-500 hover:opacity-disabled aria-selected:opacity-100 aria-disabled:opacity-30",
			"focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2",
		],
		tabPanel: "",
	},
	variants: {
		variant: {
			solid: {
				tabList: "p-1 bg-default-100",
			},
			light: "",
			underlined: {
				tab: [
					"border-t-transparent border-t-2 border-b-transparent border-b-2 aria-selected:text-foreground",
					"aria-selected:shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
				],
			},
			bordered: {
				tabList: "p-1 border-2 border-default-200 shadow-sm",
			},
		},
		size: {
			sm: {
				tabList: "rounded-medium",
				tab: "h-7 text-xs rounded-small",
			},
			md: {
				tabList: "rounded-medium",
				tab: "h-8 text-sm rounded-small",
			},
			lg: {
				tabList: "rounded-large",
				tab: "h-9 text-md rounded-medium",
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
				tabList: "rounded-none",
				tab: "rounded-none",
			},
			sm: {
				tabList: "rounded-medium",
				tab: "rounded-small",
			},
			md: {
				tabList: "rounded-medium",
				tab: "rounded-small",
			},
			lg: {
				tabList: "rounded-large",
				tab: "rounded-medium",
			},
			full: {
				tabList: "rounded-full",
				tab: "rounded-full",
			},
		},
		placement: {
			top: {
				base: "flex-col",
			},
			start: {
				base: "flex-row",
				tabList: "flex-col",
			},
			end: {
				base: "flex-row-reverse",
				tabList: "flex-col",
			},
			bottom: {
				base: "flex-col-reverse",
			},
		},
		fullWidth: {
			true: {
				base: "w-full",
				tabList: "w-full",
			},
		},
		disabled: {
			true: {
				tabList: "opacity-disabled pointer-events-none",
			},
		},
		disableAnimation: {
			true: {
				tabList: "transition-none",
				tab: "transition-none",
			},
			false: {
				tabList: "transition",
				tab: "transition",
			},
		},
	},
	defaultVariants: {
		variant: "solid",
		size: "md",
		color: "default",
		placement: "top",
	},
	compoundVariants: [
		// solid + bordered + light && color
		{
			variant: ["solid", "bordered", "light"],
			color: "default",
			className: {
				tab: [
					"aria-selected:bg-background dark:aria-selected:bg-default aria-selected:shadow-small",
					"aria-selected:text-foreground",
				],
			},
		},
		{
			variant: ["solid", "bordered", "light"],
			color: "primary",
			className: {
				tab: "aria-selected:bg-primary aria-selected:text-primary-foreground",
			},
		},
		{
			variant: ["solid", "bordered", "light"],
			color: "secondary",
			className: {
				tab: "aria-selected:bg-secondary aria-selected:text-secondary-foreground",
			},
		},
		{
			variant: ["solid", "bordered", "light"],
			color: "success",
			className: {
				tab: "aria-selected:bg-success aria-selected:text-success-foreground",
			},
		},
		{
			variant: ["solid", "bordered", "light"],
			color: "warning",
			className: {
				tab: "aria-selected:bg-warning aria-selected:text-warning-foreground",
			},
		},
		{
			variant: ["solid", "bordered", "light"],
			color: "danger",
			className: {
				tab: "aria-selected:bg-danger aria-selected:text-danger-foreground",
			},
		},
		// underlined && color
		{
			variant: "underlined",
			color: "default",
			className: {
				tab: "aria-selected:border-b-foreground",
			},
		},
		{
			variant: "underlined",
			color: "primary",
			className: {
				tab: "aria-selected:border-b-primary",
			},
		},
		{
			variant: "underlined",
			color: "secondary",
			className: {
				tab: "aria-selected:border-b-secondary",
			},
		},
		{
			variant: "underlined",
			color: "success",
			className: {
				tab: "aria-selected:border-b-success",
			},
		},
		{
			variant: "underlined",
			color: "warning",
			className: {
				tab: "aria-selected:border-b-warning",
			},
		},
		{
			variant: "underlined",
			color: "danger",
			className: {
				tab: "aria-selected:border-b-danger",
			},
		},
	],
	compoundSlots: [
		{
			variant: "underlined",
			slots: ["tab", "tabList"],
			className: "rounded-none",
		},
	],
})