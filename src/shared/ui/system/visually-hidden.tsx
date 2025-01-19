import type { CSSProperties } from "react"
import type { VisuallyHiddenProps } from "./types"

import { Slot } from "./slot"

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