"use client"

import type { CheckboxGroupContextValue, CheckboxGroupProps, GetItemState } from "./types"

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
		disabledValue,
		defaultValue = [],
		value,
		onValueChange,
		color,
		size,
		rounded,
		lineThrough,
		readOnly,
		disabled,
		className,
		orientation,
		required,
		invalid,
		disableAnimation,
		children,
		slotProps = {},
		...restProps
	} = props

	const {
		labelProps,
		wrapperProps,
		invalidMessageProps,
		descriptionProps,
		checkboxSlotProps,
	} = slotProps

	const labelId = useId()
	const descriptionId = useId()

	const [state, setState] = useControlledState({
		defaultValue,
		value,
		onValueChange,
	})

	const getItemState: GetItemState = (value, options) => {
		const itemValue = value ?? options.valueId
		const disabled = options.disabled || disabledValue?.includes(itemValue)
		const checked = state.includes(itemValue)

		const toggleChecked = (checked: boolean) => {
			setState?.(
				checked
					? [...state, itemValue]
					: state.filter((value) => value !== itemValue)
			)
		}

		return {
			disabled,
			checked,
			toggleChecked,
		}
	}

	const classNames = useMemo(() => {
		return checkboxGroupVariants({
			className,
			orientation,
			required,
			invalid,
			disableAnimation,
		})
	}, [
		className,
		orientation,
		required,
		invalid,
		disableAnimation,
	])

	const contextValue: CheckboxGroupContextValue = {
		color,
		size,
		rounded,
		lineThrough,
		readOnly,
		disabled,
		invalid,
		required,
		disableAnimation,
		slotProps: checkboxSlotProps,
		getItemState,
	}

	return (
		<CheckboxGroupContext value={contextValue}>
			<div
				role="group"
				aria-labelledby={labelId}
				aria-describedby={descriptionId}
				className={classNames.base({ className })}
				{...restProps}
			>
				{label ? (
					<span
						id={labelId}
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
					<p
						id={descriptionId}
						{...invalidMessageProps}
						className={classNames.invalidMessage({ className: invalidMessageProps?.className })}
					>
						{invalidMessage}
					</p>
				) : description ? (
					<p
						id={descriptionId}
						{...descriptionProps}
						className={classNames.description({ className: descriptionProps?.className })}
					>
						{description}
					</p>
				) : null}
			</div>
		</CheckboxGroupContext>
	)
}