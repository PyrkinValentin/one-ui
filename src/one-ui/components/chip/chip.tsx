import type { ChipProps } from "./chip.props"

import { getDataAttributes, resolveClassNames } from "../../utils"

export const ChipRoot = (props: ChipProps) => {
	const {
		variant = "solid",
		size = "md",
		color = "default",
		className,
		children,
		...restProps
	} = props

	return (
		<span
			{...restProps}
			{...getDataAttributes({ variant, size, color })}
			data-slot="chip"
			className={resolveClassNames(className, "chip")}
		>
			{children}
		</span>
	)
}