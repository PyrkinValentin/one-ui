import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type AvatarVariantsProps = VariantProps<typeof avatarVariants>

export const avatarVariants = tv({
	slots: {
		base: "box-border z-0 relative overflow-hidden flex justify-center items-center align-middle text-white",
		img: "w-full h-full flex object-cover opacity-0 data-[loaded=true]:opacity-100",
		fallback: "flex items-center justify-center",
		name: "font-normal text-center text-inherit",
		icon: "w-full h-ful flex items-center justify-center",
	},
	variants: {
		size: {
			sm: {
				base: "w-8 h-8 text-xs",
				icon: "text-xl",
			},
			md: {
				base: "w-10 h-10 text-xs",
				icon: "text-2xl",
			},
			lg: {
				base: "w-14 h-14 text-sm",
				icon: "text-3xl",
			},
		},
		color: {
			default: {
				base: "bg-default text-default-foreground",
			},
			primary: {
				base: "bg-primary text-primary-foreground",
			},
			secondary: {
				base: "bg-secondary text-secondary-foreground",
			},
			success: {
				base: "bg-success text-success-foreground",
			},
			warning: {
				base: "bg-warning text-warning-foreground",
			},
			danger: {
				base: "bg-danger text-danger-foreground",
			},
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
		bordered: {
			true: {
				base: "ring-2 ring-offset-2 ring-offset-background",
			},
		},
		focusable: {
			true: {
				base: [
					"outline-none focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus",
					"focus-visible:outline-offset-2",
				],
			}
		},
		disabled: {
			true: {
				base: "opacity-disabled pointer-events-none",
			},
		},
		inGroup: {
			true: {
				base: "-ms-2 hover:-translate-x-3 transition-transform focus-visible:-translate-x-3",
			},
		},
		inGridGroup: {
			true: {
				base: "m-0 hover:translate-x-0",
			},
		},
		disableAnimation: {
			true: {
				base: "transition-none",
				img: "transition-none",
			},
			false: {
				img: "transition-opacity duration-300 motion-reduce:transition-none",
			},
		},
	},
	defaultVariants: {
		size: "md",
		color: "default",
		rounded: "full",
		disableAnimation: false,
	},
	compoundVariants: [
		{
			color: "default",
			bordered: true,
			className: {
				base: "ring-default",
			},
		},
		{
			color: "primary",
			bordered: true,
			className: {
				base: "ring-primary",
			},
		},
		{
			color: "secondary",
			bordered: true,
			className: {
				base: "ring-secondary",
			},
		},
		{
			color: "success",
			bordered: true,
			className: {
				base: "ring-success",
			},
		},
		{
			color: "warning",
			bordered: true,
			className: {
				base: "ring-warning",
			},
		},
		{
			color: "danger",
			bordered: true,
			className: {
				base: "ring-danger",
			},
		},
	],
	compoundSlots: [
		{
			slots: ["fallback", "name", "icon"],
			className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
		},
	],
})

export type AvatarGroupVariantsProps = VariantProps<typeof avatarGroupVariants>

export const avatarGroupVariants = tv({
	slots: {
		base: "flex items-center justify-center h-auto w-max",
		count: "hover:-translate-x-0",
	},
	variants: {
		grid: {
			true: "inline-grid grid-cols-4 gap-3",
		},
	},
})