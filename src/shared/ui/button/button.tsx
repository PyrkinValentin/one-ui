"use client"

import type { ButtonProps } from "./types"

import { useMemo } from "react"

import { Spinner } from "@/shared/ui/spinner"

import { useButtonGroupContext } from "./button-group"
import { buttonVariants } from "./variants"

export const Button = (props: ButtonProps) => {
	const {
		inGroup,
		variant: variantContext,
		size: sizeContext,
		color: colorContext,
		rounded: roundedContext,
		fullWidth: fullWidthContext,
		disabled: disabledContext,
		iconOnly: iconOnlyContext,
		disableAnimation: disableAnimationContext,
		slotProps: slotPropsContext,
	} = useButtonGroupContext()

	const {
		startContent,
		endContent,
		slotProps = {},
		className,
		variant = variantContext,
		size = sizeContext,
		color = colorContext,
		rounded = roundedContext,
		fullWidth = fullWidthContext,
		loading,
		disabled = disabledContext,
		iconOnly = iconOnlyContext,
		disableAnimation = disableAnimationContext,
		children,
		...restProps
	} = props

	const {
		wrapperProps,
		spinnerProps,
	} = {
		...slotPropsContext,
		...slotProps,
	}

	const classNames = useMemo(() => {
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

	return (
		<button
			disabled={loading || disabled}
			className={classNames.base({ className })}
			{...restProps}
		>
			{loading ? (
				<div
					{...wrapperProps}
					className={classNames.wrapper({ className: wrapperProps?.className })}
				>
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
			)}

			{loading ? (
				<Spinner
					color="current"
					size="sm"
					{...spinnerProps}
					className={classNames.spinner({ className: spinnerProps?.className })}
				/>
			) : null}
		</button>
	)
}