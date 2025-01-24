"use client"

import type { ChangeEvent } from "react"
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
		value,
		onValueChange,
		onChange,
		slotProps = {},
		className,
		orientation = "vertical",
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
	const radioNameId = useId()

	const [controlledValue, setControlledValue] = useControlledState({
		defaultValue,
		value,
		setValue: onValueChange,
	})

	const disabledGroup = (value: string) => {
		return disabledValue
			? disabledValue.includes(value)
			: false
	}

	const checkedGroup = (value: string) => value === controlledValue

	const onChangeGroup = (ev: ChangeEvent<HTMLInputElement>) => {
		onChange?.(ev)
		setControlledValue?.(ev.target.value)
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
		disabledGroup,
		checkedGroup,
		onChangeGroup,
		size,
		color,
		readOnly,
		disabled,
		invalid,
		disableAnimation,
	}

	return (
		<RadioGroupContext value={contextValue}>
			<div
				role="radiogroup"
				aria-orientation={orientation}
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
		</RadioGroupContext>
	)
}