import type { CheckboxProps, CheckboxIndicatorProps } from "./checkbox.props"

import { composeComponent, getDataAttributes, resolveClassNames } from "../../utils"

import { Checkbox as CheckboxPrimitive } from "@base-ui/react"
import { Check } from "lucide-react"

const Root = (props: CheckboxProps) => {
	const {
		size = "md",
		color = "default",
		className,
		children,
		...restProps
	} = props

	return (
		<CheckboxPrimitive.Root
			{...restProps}
			{...getDataAttributes({ size, color })}
			data-slot="checkbox"
			className={resolveClassNames(className, "checkbox")}
		>
			{children}
		</CheckboxPrimitive.Root>
	)
}

const Indicator = (props: CheckboxIndicatorProps) => {
	const {
		keepMounted = true,
		className,
		children = <Check/>,
		...restProps
	} = props

	return (
		<CheckboxPrimitive.Indicator
			{...restProps}
			data-slot="checkbox-indicator"
			keepMounted={keepMounted}
			className={resolveClassNames(className, "checkbox__indicator")}
		>
			{children}
		</CheckboxPrimitive.Indicator>
	)
}

type CheckboxSlots = {
	Indicator: typeof Indicator
}

export const Checkbox = composeComponent<typeof Root, CheckboxSlots>(Root, {
	Indicator,
})