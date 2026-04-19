import type { TextareaProps } from "./textarea.props"

import { getDataAttributes, resolveClassNames } from "../../utils"

import { Input } from "@base-ui/react"

export const TextareaRoot = (props: TextareaProps) => {
	const {
		rows = 3,
		size = "md",
		className,
		render = <textarea rows={rows}/>,
		...restProps
	} = props

	return (
		<Input
			{...restProps}
			{...getDataAttributes({ size })}
			data-slot="textarea"
			className={resolveClassNames(className, "textarea")}
			render={render}
		/>
	)
}