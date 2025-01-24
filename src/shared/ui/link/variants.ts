import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type LinkVariantsProps = VariantProps<typeof linkVariants>

export const linkVariants = tv({
	base: "relative inline-flex items-center outline-none",
	variants: {
		size: {
			sm: "text-sm",
			md: "text-md",
			lg: "text-lg",
		},
		color: {
			default: "text-default-500",
			foreground: "text-foreground",
			primary: "text-primary",
			secondary: "text-secondary",
			success: "text-success",
			warning: "text-warning",
			danger: "text-danger",
		},
		underline: {
			none: "no-underline",
			hover: "hover:underline",
			always: "underline",
			active: "active:underline",
			focus: "focus:underline",
		},
		block: {
			true: [
				"px-2 py-1 hover:after:opacity-100 after:content-[''] after:inset-0 after:opacity-0 after:w-full after:h-full",
				"after:rounded-xl after:transition-[background] after:absolute",
			],
			false: "hover:opacity-80 active:opacity-disabled transition-opacity",
		},
		external: {
			true: "gap-1",
		},
		disabled: {
			true: "opacity-disabled cursor-default pointer-events-none",
			false: "focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2",
		},
		disableAnimation: {
			true: "after:transition-none transition-none",
			false: "motion-reduce:transition-none",
		},
	},
	defaultVariants: {
		size: "md",
		color: "primary",
		underline: "none",
	},
	compoundVariants: [
		{
			block: true,
			color: "foreground",
			className: "hover:after:bg-foreground/10",
		},
		{
			block: true,
			color: "primary",
			className: "hover:after:bg-primary/20",
		},
		{
			block: true,
			color: "secondary",
			className: "hover:after:bg-secondary/20",
		},
		{
			block: true,
			color: "success",
			className: "hover:after:bg-success/20",
		},
		{
			block: true,
			color: "warning",
			className: "hover:after:bg-warning/20",
		},
		{
			block: true,
			color: "danger",
			className: "hover:after:bg-danger/20",
		},
		{
			underline: ["hover", "always", "active", "focus"],
			className: "underline-offset-4",
		},
	],
})