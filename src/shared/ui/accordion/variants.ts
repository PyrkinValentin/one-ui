import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type AccordionVariantsProps = VariantProps<typeof accordionVariants>

export const accordionVariants = tv({
	slots: {},
	variants: {
		disabled: {
			true: "",
		},
	},
})