"use client"

import type { ButtonGroupContextValue, ButtonGroupProps } from "./types"

import { use, useMemo } from "react"

import { createContext } from "react"

import { buttonGroupVariants } from "./variants"

const ButtonGroupContext = createContext<ButtonGroupContextValue>({})
export const useButtonGroupContext = () => use(ButtonGroupContext)

export const ButtonGroup = (props: ButtonGroupProps) => {
	const {
		className,
		variant,
		color,
		size,
		rounded,
		fullWidth,
		disabled,
		iconOnly,
		disableAnimation,
		children,
		...restProps
	} = props

	const classNames = useMemo(() => {
		return buttonGroupVariants({
			className,
			fullWidth,
		})
	}, [
		className,
		fullWidth,
	])

	const contextValue: ButtonGroupContextValue = {
		inGroup: true,
		variant,
		color,
		size,
		rounded,
		fullWidth,
		disabled,
		iconOnly,
		disableAnimation,
	}

	return (
		<ButtonGroupContext value={contextValue}>
			<div
				role="group"
				className={classNames}
				{...restProps}
			>
				{children}
			</div>
		</ButtonGroupContext>
	)
}