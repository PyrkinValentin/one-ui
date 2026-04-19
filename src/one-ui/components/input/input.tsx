import type { InputProps } from "./input.props"

import { getDataAttributes, resolveClassNames } from "../../utils"

import { Input } from "@base-ui/react"

export const InputRoot = (props: InputProps) => {
	const {
		autoComplete = "off",
		size = "md",
		className,
		...restProps
	} = props

	return (
		<Input
			{...restProps}
			{...getDataAttributes({ size })}
			data-slot="input"
			autoComplete={autoComplete}
			className={resolveClassNames(className, "input")}
		/>
	)
}