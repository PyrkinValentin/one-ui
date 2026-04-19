import type { SeparatorProps } from "./separator.props"

import { resolveClassNames } from "../../utils"

import { Separator as SeparatorPrimitive } from "@base-ui/react"

export const Separator = (props: SeparatorProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<SeparatorPrimitive
			{...restProps}
			data-slot="separator"
			className={resolveClassNames(className, "separator")}
		/>
	)
}