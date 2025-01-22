import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type ContainerVariantsProps = VariantProps<typeof containerVariants>

export const containerVariants = tv({
	base: "container",
	variants: {
		size: {
			xs: "max-w-sm",
			sm: "max-w-screen-sm",
			md: "max-w-screen-md",
			lg: "max-w-screen-lg",
		},
	},
})