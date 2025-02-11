import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type ImageVariantsProps = VariantProps<typeof imageVariants>

export const imageVariants = tv({
	slots: {
		base: "relative inline-block overflow-hidden",
		img: "opacity-0 data-[loaded=true]:opacity-100",
		fallback: "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-default-400",
	},
	variants: {
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
		shadow: {
			none: {
				base: "shadow-none",
			},
			sm: {
				base: "shadow-small",
			},
			md: {
				base: "shadow-medium",
			},
			lg: {
				base: "shadow-large",
			},
		},
		zoomed: {
			true: {
				img: "object-cover transform hover:scale-125",
			},
		},
		showPlaceholder: {
			true: {
				base: "bg-content3 dark:bg-content2",
			},
		},
		disableAnimation: {
			true: {
				img: "transition-none",
			},
			false: {
				img: "transition duration-300 motion-reduce:transition-none",
			},
		},
	},
	defaultVariants: {
		rounded: "lg",
		showPlaceholder: true,
	},
})