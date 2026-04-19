import type { SwitchProps, SwitchThumbProps } from "./switch.props"

import { composeComponent, getDataAttributes, resolveClassNames } from "../../utils"

import { Switch as SwitchPrimitive } from "@base-ui/react"

const Root = (props: SwitchProps) => {
	const {
		size = "md",
		color = "primary",
		className,
		children,
		...restProps
	} = props

	return (
		<SwitchPrimitive.Root
			{...restProps}
			{...getDataAttributes({ size, color })}
			data-slot="switch"
			className={resolveClassNames(className, "switch")}
		>
			{children}
		</SwitchPrimitive.Root>
	)
}

const Thumb = (props: SwitchThumbProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<SwitchPrimitive.Thumb
			{...restProps}
			data-slot="switch-thumb"
			className={resolveClassNames(className, "switch__thumb")}
		>
			{children}
		</SwitchPrimitive.Thumb>
	)
}

type SwitchSlots = {
	Thumb: typeof Thumb
}

export const Switch = composeComponent<typeof Root, SwitchSlots>(Root, {
	Thumb,
})