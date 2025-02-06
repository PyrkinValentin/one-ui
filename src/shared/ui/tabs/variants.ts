import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type TabsVariantsProps = VariantProps<typeof tabsVariants>

export const tabsVariants = tv({
	slots: {
		base: "flex gap-3",
		tabList: "w-fit h-fit flex flex-nowrap items-center gap-2",
		tab: [
			"z-0 relative px-3 py-1 w-full flex items-center justify-center whitespace-nowrap text-default-500",
			"outline-none focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus",
			"focus-visible:outline-offset-2 hover:[&:not([aria-selected=true])]:opacity-disabled",
			"aria-[disabled=true]:!opacity-30 aria-[disabled=true]:pointer-events-none",
			"aria-[selected=true]:pointer-events-none",
		],
	},
	variants: {
		variant: {
			solid: {
				tabList: "p-1 bg-default-100",
			},
			light: "",
			underlined: {
				tab: [
					"after:content-[''] after:origin-center after:absolute after:left-1/2 after:bottom-0",
					"after:-translate-x-1/2 after:w-0 after:h-[2px] aria-[selected=true]:after:w-full",
					"shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
				]
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
			bottom: {
				base: "flex-col-reverse",
			},
			start: {
				tabList: "flex-col",
			},
			end: {
				base: "flex-row-reverse",
				tabList: "flex-col",
			},
		},
		fullWidth: {
			true: {
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
				tabList: "transition-opacity motion-reduce:transition-none",
				tab: "transition motion-reduce:transition-none",
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
		{
			variant: ["solid", "bordered", "light"],
			color: "default",
			className: {
				tab: [
					"aria-[selected=true]:bg-default aria-[selected=true]:shadow-small",
					"aria-[selected=true]:text-default-foreground",
				],
			},
		},
		{
			variant: ["solid", "bordered", "light"],
			color: "primary",
			className: {
				tab: "aria-[selected=true]:bg-primary aria-[selected=true]:text-primary-foreground",
			},
		},
		{
			variant: ["solid", "bordered", "light"],
			color: "secondary",
			className: {
				tab: "aria-[selected=true]:bg-secondary aria-[selected=true]:text-secondary-foreground",
			},
		},
		{
			variant: ["solid", "bordered", "light"],
			color: "success",
			className: {
				tab: "aria-[selected=true]:bg-success aria-[selected=true]:text-success-foreground",
			},
		},
		{
			variant: ["solid", "bordered", "light"],
			color: "warning",
			className: {
				tab: "aria-[selected=true]:bg-warning aria-[selected=true]:text-warning-foreground",
			},
		},
		{
			variant: ["solid", "bordered", "light"],
			color: "danger",
			className: {
				tab: "aria-[selected=true]:bg-danger aria-[selected=true]:text-danger-foreground",
			},
		},
		{
			color: "default",
			variant: "underlined",
			className: {
				tab: "after:bg-foreground aria-[selected=true]:text-default-foreground"
			},
		},
		{
			color: "primary",
			variant: "underlined",
			className: {
				tab: "after:bg-primary aria-[selected=true]:text-primary"
			},
		},
		{
			color: "secondary",
			variant: "underlined",
			className: {
				tab: "after:bg-secondary aria-[selected=true]:text-secondary"
			},
		},
		{
			color: "success",
			variant: "underlined",
			className: {
				tab: "after:bg-success aria-[selected=true]:text-success"
			},
		},
		{
			color: "warning",
			variant: "underlined",
			className: {
				tab: "after:bg-warning aria-[selected=true]:text-warning"
			},
		},
		{
			color: "danger",
			variant: "underlined",
			className: {
				tab: "after:bg-danger aria-[selected=true]:text-danger"
			},
		},
		{
			disableAnimation: true,
			variant: "underlined",
			className: {
				tab: "after:transition-none",
			},
		},
		{
			disableAnimation: false,
			variant: "underlined",
			className: {
				tab: "after:transition-[width] after:motion-reduce:transition-none",
			},
		},
	],
	compoundSlots: [
		{
			variant: "underlined",
			slots: ["tabList", "tab"],
			className: "rounded-none",
		},
	],
})