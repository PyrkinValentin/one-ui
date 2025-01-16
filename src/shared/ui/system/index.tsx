import type { CSSProperties } from "react"
import type { SlotProps, VisuallyHiddenProps } from "./types"

import { cloneElement, isValidElement } from "react"
import { mergeProps } from "@/shared/utils/props"

export const Slot = (props: SlotProps) => {
	const {
		fallbackElement = true,
		shouldMergeProps = true,
		children,
		...restProps
	} = props

	return isValidElement<SlotProps>(children)
		? cloneElement(children, shouldMergeProps ? mergeProps(children.props, restProps) : restProps)
		: fallbackElement
			? <span {...restProps}>{children}</span>
			: null
}

const visuallyHiddenStyles: CSSProperties = {
	overflow: "hidden",
	position: "absolute",
	margin: -1,
	padding: 0,
	border: 0,
	height: 0,
	width: 0,
	whiteSpace: "nowrap",
}

export const VisuallyHidden = (props: VisuallyHiddenProps) => {
	const { children } = props

	return (
		<Slot style={visuallyHiddenStyles}>
			{children}
		</Slot>
	)
}