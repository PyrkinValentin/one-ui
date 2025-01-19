import type { SlotProps } from "./types"

import { cloneElement, ElementType, isValidElement } from "react"
import { mergeProps } from "@/shared/utils/props"

export const Slot = <
	As extends ElementType = "span"
>(props: SlotProps<As>) => {
	const {
		as = "span",
		fallbackElement = true,
		shouldMergeProps = true,
		children,
		...restProps
	} = props as SlotProps

	const Component = as

	return isValidElement<SlotProps>(children)
		? cloneElement(children, shouldMergeProps ? mergeProps(children.props, restProps) : restProps)
		: fallbackElement
			? <Component {...restProps}>{children}</Component>
			: null
}