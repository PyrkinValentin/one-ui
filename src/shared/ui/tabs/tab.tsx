"use client"

import type { ElementType, MouseEvent } from "react"
import type { TabProps } from "./types"

import { useTabsContext } from "./tabs"

export const Tab = <As extends ElementType = "button">(props: TabProps<As>) => {
	const {
		disabledTab,
		selectedTab,
		onValueChange,
	} = useTabsContext()

	const {
		as = "button",
		value,
		disabled = disabledTab?.(value),
		title,
		onClick,
		...restProps
	} = props as TabProps

	const handleClick = (ev: MouseEvent<HTMLButtonElement>) => {
		onClick?.(ev)

		if (value) {
			onValueChange?.(value)
		}
	}

	const selected = selectedTab?.(value)

	const Component = as

	return (
		<Component
			role="tab"
			aria-controls={`tabPanel-${value}`}
			aria-disabled={disabled || undefined}
			aria-selected={selected || undefined}
			id={`tab-${value}`}
			tabIndex={disabled || selected ? -1 : undefined}
			onClick={handleClick}
			{...restProps}
		>
			{title}
		</Component>
	)
}