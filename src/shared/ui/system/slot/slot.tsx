import type { ElementType } from "react"
import type { SlotProps } from "./types"

import { cloneElement, isValidElement } from "react"
import { mergeProps } from "@/shared/utils/merge"

export const Slot = <As extends ElementType = "span">(props: SlotProps<As>) => {
	const {
		as = "span",
		disallowMergeProps,
		disallowFallbackElement,
		children,
		...restProps
	} = props as SlotProps

	const Component = as

	return (
		<>
			{isValidElement<SlotProps>(children)
				? cloneElement(children, !disallowMergeProps ? mergeProps(children.props, restProps) : restProps)
				: !disallowFallbackElement
					? <Component {...restProps}>{children}</Component>
					: null
			}
		</>
	)
}