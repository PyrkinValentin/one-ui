import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type ListBoxVariantsProps = VariantProps<typeof listBoxVariants>

export const listBoxVariants = tv({
	slots: {
		base: "w-full flex flex-col gap-0.5 outline-none",
		emptyContent: "px-2 py-1.5 w-full h-full text-start text-default-400",
	},
})

export type ListBoxSectionVariantsProps = VariantProps<typeof listBoxSectionVariants>

export const listBoxSectionVariants = tv({
	slots: {
		base: "relative mb-2 last-of-type:mb-0",
		heading: "pb-1 pl-1 text-xs text-default-500",
		group: "w-full flex flex-col gap-0.5 outline-none",
	},
	variants: {
		showDivider: {
			true: {
				base: [
					"mb-1.5 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-px",
					"after:bg-divider",
				],
			},
		},
	},
})

export type ListBoxItemVariantsProps = VariantProps<typeof listBoxItemVariants>

export const listBoxItemVariants = tv({
	slots: {
		base: "group w-full h-full",
		wrapper: "",
	},
})