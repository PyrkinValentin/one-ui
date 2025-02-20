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
		disabledValue,
		defaultValue = [],
		value: valueProp,
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

	const [value, setValue] = useControlledState({
		defaultValue,
		value: valueProp,
		onValueChange,
	})

	const isDisabled = (itemValue: string) => {
		return disabled || !!disabledValue?.includes(itemValue)
	}

	const isChecked = (itemValue: string) => {
		return value.includes(itemValue)
	}

	const onChecked = (itemValue: string) => (checked: boolean) => {
		setValue(
			checked
				? [...value, itemValue]
				: value.filter((v) => v !== itemValue)
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
		size,
		color,
		rounded,
		lineThrough,
		readOnly,
		invalid,
		disableAnimation,
		slotProps: checkboxSlotProps,
		isDisabled,
		isChecked,
		onChecked,
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