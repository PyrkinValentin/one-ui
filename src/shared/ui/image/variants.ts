import type { VariantProps, VariantSlots } from "@/core/theme"

import { tv } from "@/core/theme"

export type ImageVariantsProps = VariantProps<typeof imageVariants>
export type ImageVariantsClassNames = VariantSlots<typeof imageVariants>

export const imageVariants = tv({
	slots: {
		base: "group relative shadow-black/5",
		img: "z-10 opacity-0 group-data-[loaded=true]:opacity-100 shadow-black/5",
		zoomedWrapper: "overflow-hidden relative w-full h-full rounded-inherit",
		blurredImg: [
			"z-0 opacity-0 group-data-[loaded=true]:opacity-30 object-cover filter blur-lg scale-110 saturate-150",
			"translate-y-1",
		],
	},
	variants: {
		rounded: {
			none: "",
			sm: "",
			md: "",
			lg: "",
			full: "",
		},
		shadow: {
			none: {
				base: "shadow-none",
				img: "shadow-none",
			},
			sm: {
				base: "shadow-small",
				img: "shadow-small",
			},
			md: {
				base: "shadow-medium",
				img: "shadow-medium",
			},
			lg: {
				base: "shadow-large",
				img: "shadow-large",
			},
		},
		zoomed: {
			true: {
				img: "object-cover transform hover:scale-125",
			},
		},
		blurred: {
			true: "",
		},
		showPlaceholder: {
			true: "bg-content3 dark:bg-content2",
		},
		disableAnimation: {
			true: "",
		},
	},
	defaultVariants: {
		rounded: "lg",
		showPlaceholder: true,
		disableAnimation: false,
	},
	compoundSlots: [
		{
			slots: ["base", "img", "zoomedWrapper", "blurredImg"],
			rounded: "none",
			className: "rounded-none",
		},
		{
			slots: ["base", "img", "zoomedWrapper", "blurredImg"],
			rounded: "sm",
			className: "rounded-small",
		},
		{
			slots: ["base", "img", "zoomedWrapper", "blurredImg"],
			rounded: "md",
			className: "rounded-medium",
		},
		{
			slots: ["base", "img", "zoomedWrapper", "blurredImg"],
			rounded: "lg",
			className: "rounded-large",
		},
		{
			slots: ["base", "img", "zoomedWrapper", "blurredImg"],
			rounded: "full",
			className: "rounded-full",
		},
		{
			slots: ["img", "blurredImg"],
			disableAnimation: true,
			className: "transition-none",
		},
		{
			slots: ["img", "blurredImg"],
			disableAnimation: false,
			className: "transition-[transform,opacity] motion-reduce:transition-none duration-300",
		},
	],
})