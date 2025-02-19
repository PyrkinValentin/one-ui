"use client"

import type { ElementType } from "react"
import type { PaginationItemProps } from "./types"

export const PaginationItem = <As extends ElementType>(props: PaginationItemProps<As>) => {
	const {
		as = "button",
		children,
		...restProps
	} = props as PaginationItemProps

	const Component = as

	return (
		<Component {...restProps}>
			{children}
		</Component>
	)
}