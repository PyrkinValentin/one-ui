"use client"

import type { CardHeaderProps } from "./types"

import { useMemo } from "react"

import { useCardContext } from "./card"
import { cardHeaderVariants } from "./variants"

export const CardHeader = (props: CardHeaderProps) => {
	const { rounded } = useCardContext()

	const {
		className,
		children,
		...restProps
	} = props

	const classNames = useMemo(() => {
		return cardHeaderVariants({
			className,
			rounded,
		})
	}, [
		className,
		rounded,
	])

	return (
		<div
			className={classNames}
			{...restProps}
		>
			{children}
		</div>
	)
}