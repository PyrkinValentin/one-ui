import type { TextareaProps } from "./textarea.props"

import { getDataAttributes, resolveClassNames } from "../../utils"

import { Input as InputPrimitive } from "@base-ui/react"

export const Textarea = (props: TextareaProps) => {
	const {
		rows = 3,
		size = "md",
		className,
		render = <textarea rows={rows}/>,
		...restProps
	} = props

	return (
		<InputPrimitive
			{...restProps}
			{...getDataAttributes({ size })}
			data-slot="textarea"
			className={resolveClassNames(className, "textarea")}
			render={render}
		/>
	)
}