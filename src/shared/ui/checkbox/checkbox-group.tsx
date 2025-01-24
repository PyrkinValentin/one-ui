"use client"

import type { CheckboxGroupContextValue, CheckboxGroupProps } from "./types"

import { use, useId, useMemo } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { createContext } from "react"

import { checkboxGroupVariants } from "./variants"

const CheckboxGroupContext = createContext<CheckboxGroupContextValue>({})
export const useCheckboxGroupContext = () => use(CheckboxGroupContext)

export const CheckboxGroup = (props: CheckboxGroupProps) => {
	const {
		label,
		description,
		invalidMessage,
		name,
		size,
		color,
		rounded,
		lineThrough,
		readOnly,
		disabled,
		disabledValue,
		defaultValue = [],
		value,
		onValueChange,
		slotProps = {},
		className,
		orientation,
		required,
		invalid,
		disableAnimation,
		children,
		...restProps
	} = props

	const {
		labelProps,
		wrapperProps,
		invalidMessageProps,
		descriptionProps,
	} = slotProps

	const descriptionId = useId()

	const [controlledValue, setControlledValue] = useControlledState({
		defaultValue,
		value,
		setValue: onValueChange,
	})

	const disabledGroup = (value?: string) => {
		return disabledValue && value
			? disabledValue.includes(value)
			: false
	}

	const checkedGroup = (value?: string) => {
		return value
			? controlledValue.includes(value)
			: false
	}

	const onCheckedChangeGroup = (value?: string) => (checked: boolean) => {
		if (!value) return

		setControlledValue?.(
			checked
				? [...controlledValue, value]
				: controlledValue.filter((v) => v !== value)
		)
	}

	const classNames = useMemo(() => {
		return checkboxGroupVariants({
			orientation,
			required,
			invalid,
			disableAnimation,
		})
	}, [
		orientation,
		required,
		invalid,
		disableAnimation,
	])

	const contextValue: CheckboxGroupContextValue = {
		name,
		size,
		color,
		rounded,
		lineThrough,
		invalid,
		required,
		readOnly,
		disabled,
		disableAnimation,
		disabledGroup,
		checkedGroup,
		onCheckedChangeGroup,
	}

	return (
		<CheckboxGroupContext value={contextValue}>
			<div
				role="group"
				aria-describedby={descriptionId}
				className={classNames.base({ className })}
				{...restProps}
			>
				{label ? (
					<span
						{...labelProps}
						className={classNames.label({ className: labelProps?.className })}
					>
						{label}
					</span>
				) : null}

				<div
					role="presentation"
					{...wrapperProps}
					className={classNames.wrapper({ className: wrapperProps?.className })}
				>
					{children}
				</div>

				{invalid && invalidMessage ? (
					<span
						id={descriptionId}
						{...invalidMessageProps}
						className={classNames.invalidMessage({ className: invalidMessageProps?.className })}
					>
						{invalidMessage}
					</span>
				) : description ? (
					<span
						id={descriptionId}
						{...descriptionProps}
						className={classNames.description({ className: descriptionProps?.className })}
					>
						{description}
					</span>
				) : null}
			</div>
		</CheckboxGroupContext>
	)
}