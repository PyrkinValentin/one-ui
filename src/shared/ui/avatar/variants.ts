import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type AvatarVariantsProps = VariantProps<typeof avatarVariants>
export type AvatarVariantsSlots = VariantSlots<typeof avatarVariants>

export const avatarVariants = tv({
	slots: {
		base: "box-border",
		img: "object-cover",
		fallback: "flex items-center justify-center",
		name: "font-normal text-center text-inherit",
		icon: "flex items-center justify-center text-inherit",
	},
	variants: {
		size: {
			sm: {
				base: "w-8 h-8 text-xs",
			},
			md: {
				base: "w-10 h-10 text-xs",
			},
			lg: {
				base: "w-14 h-14 text-sm",
			},
		},
	},
	defaultVariants: {
		size: "md",
	},
})