import type { VisuallyHiddenProps } from "./types"

import { Slot } from "../slot/slot"

export const VisuallyHidden = (props: VisuallyHiddenProps) => {
	const { children } = props

	return (
		<Slot className="sr-only">
			{children}
		</Slot>
	)
}