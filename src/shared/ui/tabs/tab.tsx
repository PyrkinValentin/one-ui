"use client"

import type { ElementType } from "react"
import type { TabProps } from "./types"

export const Tab = <As extends ElementType = "button">(props: TabProps<As>) => {
	const {
		as = "button",
		value,
		children,
		...restProps
	} = props as TabProps

	const Component = as

	return (
		<Component
			role="tab"
			id={`tab-${value}`}
			aria-controls={`tabpanel-${value}`}
			{...restProps}>
			{children}
		</Component>
	)
}