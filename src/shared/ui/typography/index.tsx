import type { ElementType } from "react"
import type { TypographyProps } from "./types"

import { useMemo } from "react"

import { typographyVariants } from "./variants"

export const Typography = <As extends ElementType = "span">(props: TypographyProps<As>) => {
	const {
		as = "span",
		className,
		variant,
		color,
		size,
		weight,
		align,
		truncate,
		wrap,
		letterSpacing,
		lineClamp,
		decoration,
		decorationColor,
		decorationStyle,
		transform,
		children,
		...restProps
	} = props as TypographyProps

	const classNames = useMemo(() => {
		return typographyVariants({
			className,
			variant,
			color,
			size,
			weight,
			align,
			truncate,
			wrap,
			letterSpacing,
			lineClamp,
			decoration,
			decorationColor,
			decorationStyle,
			transform,
		})
	}, [
		className,
		variant,
		color,
		size,
		weight,
		align,
		truncate,
		wrap,
		letterSpacing,
		lineClamp,
		decoration,
		decorationColor,
		decorationStyle,
		transform,
	])

	const Tag = as

	return (
		<Tag className={classNames} {...restProps}>
			{children}
		</Tag>
	)
}