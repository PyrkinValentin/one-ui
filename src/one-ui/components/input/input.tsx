import type { InputProps } from "./input.props"

import { getDataAttributes, resolveClassNames } from "../../utils"

import { Input as InputPrimitive } from "@base-ui/react"

export const Input = (props: InputProps) => {
	const {
		autoComplete = "off",
		size = "md",
		className,
		...restProps
	} = props

	return (
		<InputPrimitive
			{...restProps}
			{...getDataAttributes({ size })}
			data-slot="input"
			autoComplete={autoComplete}
			className={resolveClassNames(className, "input")}
		/>
	)
}