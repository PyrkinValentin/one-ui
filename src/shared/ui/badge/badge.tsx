import type { BadgeProps } from "./types"

import { useMemo } from "react"

import { badgeVariants } from "./variants"

export const Badge = (props: BadgeProps) => {
	const {
		content,
		slotProps = {},
		className,
		variant,
		size,
		color,
		placement,
		shape,
		invisible,
		dot = !content,
		showOutline,
		children,
		...restProps
	} = props

	const { baseProps } = slotProps

	const classNames = useMemo(() => {
		return badgeVariants({
			variant,
			size,
			color,
			placement,
			shape,
			invisible,
			dot,
			showOutline,
		})
	}, [
		variant,
		size,
		color,
		placement,
		shape,
		invisible,
		dot,
		showOutline,
	])

	return (
		<div
			{...baseProps}
			className={classNames.base({ className: baseProps?.className })}
		>
			{children}

			<span
				className={classNames.badge({ className })}
				{...restProps}
			>
				{content}
			</span>
		</div>
	)
}