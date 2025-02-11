import type { ElementType } from "react"
import type { FlexProps } from "./types"

import { useMemo } from "react"

import { flexVariants } from "./variants"

export const Flex = <As extends ElementType = "div">(props: FlexProps<As>) => {
	const {
		as = "div",
		className,
		display,
		direction,
		align,
		justify,
		wrap,
		gap,
		gapX,
		gapY,
		children,
		...restProps
	} = props as FlexProps

	const classNames = useMemo(() => {
		return flexVariants({
			className,
			display,
			direction,
			align,
			justify,
			wrap,
			gap,
			gapX,
			gapY,
		})
	}, [
		className,
		display,
		direction,
		align,
		justify,
		wrap,
		gap,
		gapX,
		gapY,
	])

	const Component = as

	return (
		<Component className={classNames} {...restProps}>
			{children}
		</Component>
	)
}