import type { RadioGroupProps } from "./radio-group.props"

import { resolveClassNames } from "../../utils"

import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react"

export const RadioGroup = <V = unknown>(props: RadioGroupProps<V>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<RadioGroupPrimitive
			{...restProps}
			data-slot="radio-group"
			className={resolveClassNames(className, "radio-group")}
		>
			{children}
		</RadioGroupPrimitive>
	)
}