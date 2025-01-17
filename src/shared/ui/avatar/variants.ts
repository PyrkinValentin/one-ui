import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type AvatarVariantsProps = VariantProps<typeof avatarVariants>
export type AvatarVariantsSlots = VariantSlots<typeof avatarVariants>

export const avatarVariants = tv({
	slots: {
		base: "z-0 box-border relative overflow-hidden flex justify-center items-center align-middle text-white",
		img: "object-cover",
		fallback: "flex items-center justify-center",
		name: "font-normal text-center text-inherit",
		icon: "w-full h-full flex items-center justify-center text-inherit",
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
				icon: "text-4xl",
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
	},
	defaultVariants: {
		size: "md",
		rounded: "full",
	},
})