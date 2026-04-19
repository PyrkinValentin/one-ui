import type { RadioProps, RadioIndicatorProps } from "./radio.props"

import { composeComponent, getDataAttributes, resolveClassNames } from "../../utils"

import { Radio as RadioPrimitive } from "@base-ui/react"

const Root = <V = unknown>(props: RadioProps<V>) => {
	const {
		size = "md",
		color = "default",
		className,
		children,
		...restProps
	} = props

	return (
		<RadioPrimitive.Root
			{...restProps}
			{...getDataAttributes({ size, color })}
			data-slot="radio"
			className={resolveClassNames(className, "radio")}
		>
			{children}
		</RadioPrimitive.Root>
	)
}

const Indicator = (props: RadioIndicatorProps) => {
	const {
		keepMounted = true,
		className,
		children,
		...restProps
	} = props

	return (
		<RadioPrimitive.Indicator
			{...restProps}
			data-slot="radio-indicator"
			keepMounted={keepMounted}
			className={resolveClassNames(className, "radio__indicator")}
		>
			{children}
		</RadioPrimitive.Indicator>
	)
}

type RadioSlots = {
	Indicator: typeof Indicator
}

export const Radio = composeComponent<typeof Root, RadioSlots>(Root, {
	Indicator,
})