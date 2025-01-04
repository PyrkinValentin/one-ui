import type { ClassValue, TV } from "tailwind-variants"

import { tv as tvBase, cn as tvCn } from "tailwind-variants"

const COMMON_UNITS = ["small", "medium", "large"]

const twMergeConfig = {
	theme: {
		opacity: ["disabled"],
		borderRadius: COMMON_UNITS,
	},
	classGroups: {
		shadow: [{ shadow: COMMON_UNITS }],
		"bg-image": [
			"bg-stripe-gradient-default",
			"bg-stripe-gradient-primary",
			"bg-stripe-gradient-secondary",
			"bg-stripe-gradient-success",
			"bg-stripe-gradient-warning",
			"bg-stripe-gradient-danger",
		],
	},
}

export const tv: TV = (options, config) => {
	return tvBase(options, {
		...config,
		twMerge: true,
		twMergeConfig: {
			...config?.twMergeConfig,
			theme: {
				...config?.twMergeConfig?.theme,
				...twMergeConfig.theme,
			},
			classGroups: {
				...config?.twMergeConfig?.classGroups,
				...twMergeConfig.classGroups,
			},
		},
	})
}

export const cn = (...inputs: ClassValue[]) => tvCn(...inputs)({
	twMerge: true,
})