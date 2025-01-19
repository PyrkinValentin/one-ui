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
			none: "rounded-none",
			sm: "rounded-small",
			md: "rounded-medium",
			lg: "rounded-large",
			full: "rounded-full",
		},
		shadow: {
			none: "shadow-none",
			sm: "shadow-small",
			md: "shadow-medium",
			lg: "shadow-large",
		},
		zoomed: {
			true: {
				img: "object-cover transform hover:scale-125",
			},
		},
		showPlaceholder: {
			true: "bg-content3 dark:bg-content2",
		},
		disableAnimation: {
			true: {
				img: "transition-none",
			},
			false: {
				img: "transition motion-reduce:transition-none duration-300",
			},
		},
	},
	defaultVariants: {
		rounded: "lg",
		showPlaceholder: true,
		disableAnimation: false,
	},
})