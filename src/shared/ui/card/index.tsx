"use client"

import type { CardBodyProps, CardContextValue, CardFooterProps, CardHeaderProps, CardProps } from "./types"

import { use, useMemo } from "react"

import { createContext } from "react"

import { cardVariants } from "./variants"

const CardContext = createContext<CardContextValue>({})
const useCardContext = () => use(CardContext)

export const Card = (props: CardProps) => {
	const {
		className,
		classNames,
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
		classNames,
	}

	return (
		<CardContext value={contextValue}>
			<div
				className={slots.base({ className: [className, classNames?.base] })}
				tabIndex={clickable && !disabled ? 0 : undefined}
				{...restProps}
			>
				{children}
			</div>
		</CardContext>
	)
}

export const CardHeader = (props: CardHeaderProps) => {
	const {
		slots,
		classNames,
	} = useCardContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div className={slots?.header({ className: [className, classNames?.header] })} {...restProps}>
			{children}
		</div>
	)
}

export const CardBody = (props: CardBodyProps) => {
	const {
		slots,
		classNames,
	} = useCardContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div className={slots?.body({ className: [className, classNames?.body] })} {...restProps}>
			{children}
		</div>
	)
}

export const CardFooter = (props: CardFooterProps) => {
	const {
		slots,
		classNames,
	} = useCardContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div className={slots?.footer({ className: [className, classNames?.footer] })} {...restProps}>
			{children}
		</div>
	)
}