import type { RadioProps, RadioIndicatorProps } from "./radio.props"

import { getDataAttributes, resolveClassNames } from "../../utils"

import { Radio } from "@base-ui/react"

export const RadioRoot = <Value = unknown>(props: RadioProps<Value>) => {
	const {
		size = "md",
		color = "default",
		className,
		children,
		...restProps
	} = props

	return (
		<Radio.Root
			{...restProps}
			{...getDataAttributes({ size, color })}
			data-slot="radio"
			className={resolveClassNames(className, "radio")}
		>
			{children}
		</Radio.Root>
	)
}

export const RadioIndicator = (props: RadioIndicatorProps) => {
	const {
		keepMounted = true,
		className,
		children,
		...restProps
	} = props

	return (
		<Radio.Indicator
			{...restProps}
			data-slot="radio-indicator"
			keepMounted={keepMounted}
			className={resolveClassNames(className, "radio__indicator")}
		>
			{children}
		</Radio.Indicator>
	)
}