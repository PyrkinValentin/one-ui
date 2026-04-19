import type { CheckboxGroupProps } from "./checkbox-group.props"

import { resolveClassNames } from "../../utils"

import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui/react"

export const CheckboxGroup = (props: CheckboxGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<CheckboxGroupPrimitive
			{...restProps}
			data-slot="checkbox-group"
			className={resolveClassNames(className, "checkbox-group")}
		>
			{children}
		</CheckboxGroupPrimitive>
	)
}