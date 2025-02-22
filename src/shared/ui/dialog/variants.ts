import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type DialogVariantsProps = VariantProps<typeof dialogVariants>
export type DialogVariantsReturn = ReturnType<typeof dialogVariants>

export const dialogVariants = tv({
	slots: {
		wrapper: "z-50 overflow-x-auto fixed inset-0 flex justify-center",
		base: "box-border relative m-1 sm:mx-6 sm:my-16 w-full flex flex-col bg-content1",
		backdrop: "z-50",
		header: "flex py-4 px-6 flex-initial text-lg font-semibold",
		body: [
			"flex flex-1 flex-col gap-3 px-6 py-2 outline-none focus-visible:z-10 focus-visible:outline-2",
			"focus-visible:outline-focus focus-visible:outline-offset-2",
		],
		footer: "flex flex-row gap-2 px-6 py-4 justify-end",
		closeButton: [
			"absolute top-1 end-1 p-2 appearance-none select-none text-default-500 rounded-full hover:bg-default-100",
			"active:bg-default-200 outline-none focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus",
			"focus-visible:outline-offset-2",
		],
	},
	variants: {
		rounded: {
			none: {
				base: "rounded-none"
			},
			sm: {
				base: "rounded-small"
			},
			md: {
				base: "rounded-medium"
			},
			lg: {
				base: "rounded-large"
			},
		},
		size: {
			xs: {
				base: "max-w-xs",
			},
			sm: {
				base: "max-w-sm",
			},
			md: {
				base: "max-w-md",
			},
			lg: {
				base: "max-w-lg",
			},
			xl: {
				base: "max-w-xl",
			},
			"2xl": {
				base: "max-w-2xl",
			},
			"3xl": {
				base: "max-w-3xl",
			},
			"4xl": {
				base: "max-w-4xl",
			},
			"5xl": {
				base: "max-w-5xl",
			},
			full: {
				base: "m-0 sm:mx-0 sm:my-0 max-w-full h-dvh min-h-dvh rounded-none",
			},
		},
		placement: {
			auto: {
				wrapper: "items-end sm:items-center",
			},
			center: {
				wrapper: "items-center sm:items-center",
			},
			top: {
				wrapper: "items-start sm:items-start",
			},
			"top-center": {
				wrapper: "items-start sm:items-center",
			},
			bottom: {
				wrapper: "items-end sm:items-end",
			},
			"bottom-center": {
				wrapper: "items-end sm:items-center",
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
		backdrop: {
			transparent: "",
			opaque: {
				backdrop: "bg-black/50 backdrop-opacity-disabled",
			},
			blur: {
				backdrop: "backdrop-blur-sm backdrop-saturate-150 bg-black/30",
			},
		},
		scrollBehavior: {
			normal: {
				base: "overflow-y-hidden",
			},
			inside: {
				base: "max-h-[calc(100%_-_8rem)]",
				body: "overflow-y-auto",
			},
			outside: {
				wrapper: "items-start sm:items-start overflow-y-auto",
			},
		},
		disableAnimation: {
			true: {
				closeButton: "transition-none",
			},
			false: {
				closeButton: "transition-colors motion-reduce:transition-none",
			},
		},
	},
	defaultVariants: {
		size: "md",
		rounded: "lg",
		placement: "auto",
		shadow: "sm",
		backdrop: "opaque",
		scrollBehavior: "inside",
	},
})