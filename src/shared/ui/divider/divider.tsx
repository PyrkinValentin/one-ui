import type { DividerProps } from "./types"

import { useMemo } from "react"

import { dividerVariants } from "./variants"

export const Divider = (props: DividerProps) => {
	const {
		className,
		orientation,
		children,
		...restProps
	} = props

	const classNames = useMemo(() => {
		return dividerVariants({
			className,
			orientation,
		})
	}, [
		className,
		orientation,
	])

	return (
		<hr
			role="separator"
			aria-orientation={orientation}
			className={classNames}
			{...restProps}
		>
			{children}
		</hr>
	)
}