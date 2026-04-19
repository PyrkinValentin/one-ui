import type { SwitchProps, SwitchThumbProps } from "./switch.props"

import { getDataAttributes, resolveClassNames } from "../../utils"

import { Switch } from "@base-ui/react"

export const SwitchRoot = (props: SwitchProps) => {
	const {
		size = "md",
		color = "primary",
		className,
		children,
		...restProps
	} = props

	return (
		<Switch.Root
			{...restProps}
			{...getDataAttributes({ size, color })}
			data-slot="switch"
			className={resolveClassNames(className, "switch")}
		>
			{children}
		</Switch.Root>
	)
}

export const SwitchThumb = (props: SwitchThumbProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Switch.Thumb
			{...restProps}
			data-slot="switch-thumb"
			className={resolveClassNames(className, "switch__thumb")}
		>
			{children}
		</Switch.Thumb>
	)
}