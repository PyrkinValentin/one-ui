import type { SlotProps } from "./types"

import { cloneElement, isValidElement } from "react"
import { mergeProps } from "@/shared/utils/props"

export const Slot = (props: SlotProps) => {
	const { children, ...restProps } = props

	return isValidElement<SlotProps>(children)
		? cloneElement(children, mergeProps(children.props, restProps))
		: <span {...restProps}>{children}</span>
}