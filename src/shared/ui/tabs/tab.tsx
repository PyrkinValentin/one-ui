"use client"

import type { TabProps } from "./types"

export const Tab = (props: TabProps) => {
	const { children, ...restProps } = props

	return (
		<button  {...restProps}>
			{children}
		</button>
	)
}