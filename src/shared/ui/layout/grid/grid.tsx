import type { ElementType } from "react"
import type { GridProps } from "./types"

import { useMemo } from "react"

import { gridVariants } from "./variants"

export const Grid = <As extends ElementType = "div">(props: GridProps<As>) => {
	const {
		as = "div",
		className,
		container,
		display,
		size,
		gap,
		gapX,
		gapY,
		children,
		...restProps
	} = props as GridProps

	const classNames = useMemo(() => {
		return gridVariants({
			className,
			container,
			display,
			size,
			gap,
			gapX,
			gapY,
		})
	}, [
		className,
		container,
		display,
		size,
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