"use client"

import type { CardContextValue, CardProps } from "./types"

import { use, useMemo } from "react"

import { createContext } from "react"

import { cardVariants } from "./variants"

const CardContext = createContext<CardContextValue>({})
export const useCardContext = () => use(CardContext)

export const Card = (props: CardProps) => {
	const {
		footerBlurred,
		className,
		rounded,
		shadow,
		hoverable,
		clickable,
		blurred,
		fullWidth,
		disabled,
		disableAnimation,
		children,
		...restProps
	} = props

	const classNames = useMemo(() => {
		return cardVariants({
			className,
			rounded,
			shadow,
			hoverable,
			clickable,
			blurred,
			fullWidth,
			disabled,
			disableAnimation,
		})
	}, [
		className,
		rounded,
		shadow,
		hoverable,
		clickable,
		blurred,
		fullWidth,
		disabled,
		disableAnimation,
	])

	const contextValue: CardContextValue = {
		footerBlurred,
		rounded,
	}

	return (
		<CardContext value={contextValue}>
			<div
				tabIndex={clickable && !disabled ? 0 : undefined}
				className={classNames}
				{...restProps}
			>
				{children}
			</div>
		</CardContext>
	)
}