"use client"

import type { RadioGroupContextValue, RadioGroupProps } from "./types"

import { use, useId, useMemo } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { createContext } from "react"

import { radioGroupVariants } from "./variants"

const RadioGroupContext = createContext<RadioGroupContextValue>({})
export const useRadioGroupContext = () => use(RadioGroupContext)

export const RadioGroup = (props: RadioGroupProps) => {
	const {
		name,
		label,
		description,
		invalidMessage,
		size,
		color,
		readOnly,
		disabled,
		disabledValue,
		defaultValue = "",
		value: valueProp,
		onValueChange,
		className,
		orientation = "vertical",
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
		radioSlotProps,
	} = slotProps

	const labelId = useId()
	const descriptionId = useId()
	const radioNameId = useId()

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

	const onChecked = (itemValue: string) => {
		setValue(itemValue)
	}

	const classNames = useMemo(() => {
		return radioGroupVariants({
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

	const contextValue: RadioGroupContextValue = {
		name: name ?? radioNameId,
		size,
		color,
		readOnly,
		invalid,
		disableAnimation,
		slotProps: radioSlotProps,
		isDisabled,
		isChecked,
		onChecked,
	}

	return (
		<RadioGroupContext value={contextValue}>
			<div
				role="radiogroup"
				aria-orientation={orientation}
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
		</RadioGroupContext>
	)
}