import type { ReactNode } from "react"

import { getInitials } from "../../utils"

export const getFallback = (children: ReactNode) => {
	return typeof children === "string"
		? getInitials(children)
		: children
}