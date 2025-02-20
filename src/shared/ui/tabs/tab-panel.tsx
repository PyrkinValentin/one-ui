"use client"

import type { TabPanelProps } from "./types"

import { useTabsContext } from "./tabs"

export const TabPanel = (props: TabPanelProps) => {
	const { isSelected } = useTabsContext()

	const {
		value,
		children,
		...restProps
	} = props

	const selected = isSelected?.(value)
	
	if (!selected) {
		return <></>
	}

	return (
		<div
			role="tabpanel"
			aria-labelledby={`tab-${value}`}
			id={`tabPanel-${value}`}
			{...restProps}
		>
			{children}
		</div>
	)
}