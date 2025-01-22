import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type BoxVariantsProps = VariantProps<typeof boxVariants>

export const boxVariants = tv({
	base: "",
	variants: {
		display: {
			none: "hidden",
			inline: "inline",
			"inline-block": "inline-block",
			block: "block",
		},
	},
}, {
	responsiveVariants: ["sm", "md", "lg"],
})