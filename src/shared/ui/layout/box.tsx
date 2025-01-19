import type { ElementType } from "react"
import type { BoxProps } from "./types"

import { useMemo } from "react"

import { boxVariants } from "./variants"

export const Box = <
	As extends ElementType = "div"
>(props: BoxProps<As>) => {
	const {
		as = "div",
		className,
		display,
		children,
		...restProps
	} = props as BoxProps

	const classNames = useMemo(() => {
		return boxVariants({
			className,
			display,
		})
	}, [
		className,
		display,
	])

	const Component = as

	return (
		<Component className={classNames} {...restProps}>
			{children}
		</Component>
	)
}