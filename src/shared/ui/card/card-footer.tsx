"use client"

import type { CardFooterProps } from "./types"

import { useMemo } from "react"

import { useCardContext } from "./card"
import { cardFooterVariants } from "./variants"

export const CardFooter = (props: CardFooterProps) => {
	const {
		rounded,
		footerBlurred,
	} = useCardContext()

	const {
		className,
		children,
		...restProps
	} = props

	const classNames = useMemo(() => {
		return cardFooterVariants({
			className,
			rounded,
			blurred: footerBlurred,
		})
	}, [
		className,
		rounded,
		footerBlurred,
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