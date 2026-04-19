import type { CheckboxProps, CheckboxIndicatorProps } from "./checkbox.props"

import { getDataAttributes, resolveClassNames } from "../../utils"

import { Checkbox } from "@base-ui/react"
import { Check } from "lucide-react"

export const CheckboxRoot = (props: CheckboxProps) => {
	const {
		size = "md",
		color = "default",
		className,
		children,
		...restProps
	} = props

	return (
		<Checkbox.Root
			{...restProps}
			{...getDataAttributes({ size, color })}
			data-slot="checkbox"
			className={resolveClassNames(className, "checkbox")}
		>
			{children}
		</Checkbox.Root>
	)
}

export const CheckboxIndicator = (props: CheckboxIndicatorProps) => {
	const {
		keepMounted = true,
		className,
		children = <Check/>,
		...restProps
	} = props

	return (
		<Checkbox.Indicator
			{...restProps}
			data-slot="checkbox-indicator"
			keepMounted={keepMounted}
			className={resolveClassNames(className, "checkbox__indicator")}
		>
			{children}
		</Checkbox.Indicator>
	)
}