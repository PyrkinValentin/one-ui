import type { SpinnerProps } from "./spinner.props"

import { getDataAttributes, resolveClassNames } from "../../utils"

export const SpinnerRoot = (props: SpinnerProps) => {
	const {
		size = "md",
		color = "current",
		className,
		...restProps
	} = props

	return (
		<span
			{...restProps}
			{...getDataAttributes({ size, color })}
			data-slot="spinner"
			aria-hidden="true"
			className={resolveClassNames(className, "spinner")}
		/>
	)
}