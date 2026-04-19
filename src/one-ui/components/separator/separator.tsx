import type { SeparatorProps } from "./separator.props"

import { resolveClassNames } from "../../utils"

import { Separator } from "@base-ui/react"

export const SeparatorRoot = (props: SeparatorProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Separator
			{...restProps}
			data-slot="separator"
			className={resolveClassNames(className, "separator")}
		/>
	)
}