"use client"

import type { CardContextValue, CardProps } from "./types"

import { use, useMemo } from "react"

import { createContext } from "react"

import { cardVariants } from "./variants"

const CardContext = createContext<CardContextValue>({})
export const useCardContext = () => use(CardContext)

export const Card = (props: CardProps) => {
	const {
		className,
		shadow,
		rounded,
		fullWidth,
		hoverable,
		clickable,
		blurred,
		footerBlurred,
		disabled,
		disableAnimation,
		children,
		...restProps
	} = props

	const slots = useMemo(() => {
		return cardVariants({
			shadow,
			rounded,
			fullWidth,
			hoverable,
			clickable,
			blurred,
			footerBlurred,
			disabled,
			disableAnimation,
		})
	}, [
		shadow,
		rounded,
		fullWidth,
		hoverable,
		clickable,
		blurred,
		footerBlurred,
		disabled,
		disableAnimation,
	])

	const contextValue: CardContextValue = {
		slots,
	}

	return (
		<CardContext value={contextValue}>
			<div
				className={slots.base({ className })}
				tabIndex={clickable && !disabled ? 0 : undefined}
				{...restProps}
			>
				{children}
			</div>
		</CardContext>
	)
}