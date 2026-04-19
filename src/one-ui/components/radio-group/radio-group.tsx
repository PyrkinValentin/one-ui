import type { RadioGroupProps } from "./radio-group.props"

import { resolveClassNames } from "../../utils"

import { RadioGroup } from "@base-ui/react"

export const RadioGroupRoot = <Value = unknown>(props: RadioGroupProps<Value>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<RadioGroup
			{...restProps}
			data-slot="radio-group"
			className={resolveClassNames(className, "radio-group")}
		>
			{children}
		</RadioGroup>
	)
}