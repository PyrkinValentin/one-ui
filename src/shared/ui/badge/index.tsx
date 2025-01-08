import type { BadgeProps } from "./types"

import { useMemo } from "react"

import { isUndefined } from "@/shared/helpers/is-undefined"

import { badgeVariants } from "./variants"

export const Badge = (props: BadgeProps) => {
	const {
		ref,
		content,
		className,
		classNames,
		variant,
		size,
		color,
		placement,
		shape,
		invisible,
		dot = isUndefined(content),
		showOutline,
		children,
		...restProps
	} = props

	const slots = useMemo(() => {
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
		<div className={slots.base({ className: [className, classNames?.base] })}>
			{children}

			<span ref={ref} className={slots.badge({ className: classNames?.badge })}{...restProps}>
			 {content}
			</span>
		</div>
	)
}