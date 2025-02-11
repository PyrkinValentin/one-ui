import type { CardBodyProps } from "./types"

import { useMemo } from "react"

import { cardBodyVariants } from "./variants"

export const CardBody = (props: CardBodyProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	const classNames = useMemo(() => {
		return cardBodyVariants({ className })
	}, [className])

	return (
		<div
			className={classNames}
			{...restProps}
		>
			{children}
		</div>
	)
}