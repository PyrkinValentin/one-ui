import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type ButtonVariantsProps = VariantProps<typeof buttonVariants> & VariantSlots<typeof buttonVariants>

export const buttonVariants = tv({
	slots: {
		base: "",
		wrapper: "",
	},
	variants: {
		loading: {
			true: {
				wrapper: "",
			},
		},
	},
})