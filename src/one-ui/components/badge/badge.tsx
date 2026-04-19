import type { BadgeProps, BadgeIndicatorProps } from "./badge.props"

import { getDataAttributes, resolveClassNames } from "../../utils"

export const BadgeRoot = (props: BadgeProps) => {
	const {
		variant = "solid",
		size = "md",
		color = "default",
		placement = "top-right",
		className,
		children,
		...restProps
	} = props

	return (
		<span
			{...restProps}
			{...getDataAttributes({ variant, size, color, placement })}
			data-slot="badge"
			className={resolveClassNames(className, "badge")}
		>
			{children}
		</span>
	)
}

export const BadgeIndicator = (props: BadgeIndicatorProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<span
			{...restProps}
			data-slot="badge-indicator"
			className={resolveClassNames(className, "badge__indicator")}
		>
			{children}
		</span>
	)
}