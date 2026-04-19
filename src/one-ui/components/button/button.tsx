import type { ButtonProps } from "./button.props"

import { getDataAttributes, resolveClassNames } from "../../utils"

import { Button as ButtonPrimitive } from "@base-ui/react"

export const Button = (props: ButtonProps) => {
	const {
		fullWidth = false,
		iconOnly = false,
		variant = "solid",
		size = "md",
		color = "default",
		className,
		children,
		...restProps
	} = props

	return (
		<ButtonPrimitive
			{...restProps}
			{...getDataAttributes({ fullWidth, iconOnly, variant, size, color })}
			data-slot="button"
			className={resolveClassNames(className, "button")}
		>
			{children}
		</ButtonPrimitive>
	)
}