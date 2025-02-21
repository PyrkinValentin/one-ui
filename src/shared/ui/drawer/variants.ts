import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type DrawerVariantsProps = VariantProps<typeof drawerVariants>
export type DrawerVariantsReturn = ReturnType<typeof drawerVariants>

export const drawerVariants = tv({
	slots: {
		base: "z-50 box-border fixed w-full flex flex-col bg-content1",
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
				base: "max-w-xs max-h-[20rem]",
			},
			sm: {
				base: "max-w-sm max-h-[24rem]",
			},
			md: {
				base: "max-w-md max-h-[28rem]",
			},
			lg: {
				base: "max-w-lg max-h-[32rem]",
			},
			xl: {
				base: "max-w-xl max-h-[36rem]",
			},
			"2xl": {
				base: "max-w-2xl max-h-[42rem]",
			},
			"3xl": {
				base: "max-w-3xl max-h-[48rem]",
			},
			"4xl": {
				base: "max-w-4xl max-h-[56rem]",
			},
			"5xl": {
				base: "max-w-5xl max-h-[64rem]",
			},
			full: {
				base: "max-w-full max-h-full h-dvh rounded-none",
			},
		},
		placement: {
			top: {
				base: "inset-x-0 top-0 max-w-[none] rounded-t-none",
			},
			right: {
				base: "inset-y-0 right-0 max-h-[none] rounded-r-none",
			},
			bottom: {
				base: "inset-x-0 bottom-0 max-w-[none] rounded-b-none",
			},
			left: {
				base: "inset-y-0 left-0 max-h-[none] rounded-l-none",
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
			inside: {
				body: "overflow-y-auto",
			},
			outside: {
				base: "overflow-y-auto",
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
		placement: "right",
		shadow: "sm",
		backdrop: "opaque",
		scrollBehavior: "inside",
	},
})