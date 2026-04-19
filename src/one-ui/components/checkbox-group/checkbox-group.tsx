import type { CheckboxGroupProps } from "./checkbox-group.props"

import { resolveClassNames } from "../../utils"

import { CheckboxGroup } from "@base-ui/react"

export const CheckboxGroupRoot = (props: CheckboxGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<CheckboxGroup
			{...restProps}
			data-slot="checkbox-group"
			className={resolveClassNames(className, "checkbox-group")}
		>
			{children}
		</CheckboxGroup>
	)
}