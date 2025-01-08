"use client"

import type { ButtonGroupContextValue, ButtonGroupProps, ButtonProps } from "./types"

import { use, useMemo } from "react"

import { createContext } from "react"
import { isUndefined } from "@/shared/helpers/is-undefined"

import { Spinner } from "@/shared/ui/spinner"

import { buttonGroupVariants, buttonVariants } from "./variants"

const ButtonGroupContext = createContext<ButtonGroupContextValue>({})
const useButtonGroupContext = () => use(ButtonGroupContext)

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

export const Button = (props: ButtonProps) => {
	const buttonGroupContext = useButtonGroupContext()

	const {
		startContent,
		endContent,
		spinnerProps,
		className,
		classNames,
		variant,
		size,
		color,
		rounded,
		fullWidth,
		loading,
		disabled,
		iconOnly,
		disableAnimation,
		children,
		...restProps
	} = {
		...buttonGroupContext,
		...props,
	}

	const inGroup = !isUndefined(buttonGroupContext)

	const slots = useMemo(() => {
		return buttonVariants({
			variant,
			size,
			color,
			rounded,
			fullWidth,
			loading,
			disabled,
			inGroup,
			iconOnly,
			disableAnimation,
		})
	}, [
		variant,
		size,
		color,
		rounded,
		fullWidth,
		loading,
		disabled,
		inGroup,
		iconOnly,
		disableAnimation,
	])

	const wrapperContent = loading ? (
		<div className={slots.wrapper({ className: classNames?.wrapper })}>
			{startContent}
			{children}
			{endContent}
		</div>
	) : (
		<>
			{startContent}
			{children}
			{endContent}
		</>
	)

	return (
		<button
			disabled={loading || disabled}
			className={slots.base({ className: [className, classNames?.base] })}
			{...restProps}
		>
			{wrapperContent}

			{loading && (
				<Spinner
					color="current"
					size="sm"
					className={slots.spinner({ className: classNames?.spinner })}
					{...spinnerProps}
				/>
			)}
		</button>
	)
}