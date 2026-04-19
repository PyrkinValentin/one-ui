import type { BadgeProps, BadgeIndicatorProps } from "./badge.props"

import { composeComponent, getDataAttributes, resolveClassNames } from "../../utils"

const Root = (props: BadgeProps) => {
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

const Indicator = (props: BadgeIndicatorProps) => {
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

type BadgeSlots = {
	Indicator: typeof Indicator
}

export const Badge = composeComponent<typeof Root, BadgeSlots>(Root, {
	Indicator,
})