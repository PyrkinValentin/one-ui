import type { SpinnerProps } from "./types"

import { useMemo } from "react"

import { spinnerVariants } from "./variants"

export const Spinner = (props: SpinnerProps) => {
	const {
		slotProps = {},
		className,
		size,
		color,
		children,
		...restProps
	} = props

	const {
		spinnerProps,
		labelProps,
	} = slotProps

	const classNames = useMemo(() => {
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
			className={classNames.base({ className })}
			{...restProps}
		>
			<div
				{...spinnerProps}
				className={classNames.spinner({ className: spinnerProps?.className })}
			/>

			{children ? (
				<span
					{...labelProps}
					className={classNames.label({ className: labelProps?.className })}
				>
					{children}
				</span>
			) : null}
		</div>
	)
}