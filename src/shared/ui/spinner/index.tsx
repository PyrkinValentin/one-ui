import type { SpinnerProps } from "./types"

import { useMemo } from "react"

import { spinnerVariants } from "./variants"

export const Spinner = (props: SpinnerProps) => {
	const {
		className,
		classNames,
		children,
		size,
		color,
		...restProps
	} = props

	const slots = useMemo(() => {
		return spinnerVariants({
			size,
			color,
		})
	}, [
		color,
		size,
	])

	return (
		<div
			className={slots.base({ className: [className, classNames?.base] })}
			{...restProps}
		>
			<div className={slots.spinner({ class: classNames?.spinner })}/>

			{children
				? <span className={slots.label({ class: classNames?.label })}>{children}</span>
				: null
			}
		</div>
	)
}