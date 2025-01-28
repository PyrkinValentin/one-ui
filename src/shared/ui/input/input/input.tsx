"use client"

import type { ChangeEvent } from "react"
import type { InputProps } from "./types"

import { useId, useMemo } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { MdCancel } from "react-icons/md"

import { inputVariants } from "./variants"

export const Input = (props: InputProps) => {
	const {
		type,
		inputMode,
		name,
		placeholder,
		autoFocus,
		autoComplete,
		minLength,
		maxLength,
		defaultValue = "",
		value,
		onChange,
		onValueChange,
		label,
		startContent,
		endContent,
		invalidMessage,
		description,
		slotProps = {},
		className,
		variant,
		size,
		color,
		rounded,
		labelPlacement,
		fullWidth,
		clearable,
		required,
		readOnly,
		invalid,
		disabled,
		disableAnimation,
		...restProps
	} = props

	const {
		labelProps,
		mainWrapperProps,
		inputWrapperProps,
		innerWrapperProps,
		inputProps,
		clearButtonProps,
		invalidMessageProps,
		descriptionProps,
	} = slotProps

	const inputId = useId()

	const [controlledValue, setControlledValue] = useControlledState({
		defaultValue,
		value,
		setValue: onValueChange,
	})

	const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
		onChange?.(ev)
		setControlledValue?.(ev.target.value)
	}

	const handleClickClear = () => {
		setControlledValue?.("")
	}

	const classNames = useMemo(() => {
		return inputVariants({
			variant,
			size,
			color,
			rounded,
			labelPlacement,
			fullWidth,
			clearable,
			required,
			readOnly,
			invalid,
			disabled,
			disableAnimation,
		})
	}, [
		variant,
		size,
		color,
		rounded,
		labelPlacement,
		fullWidth,
		clearable,
		required,
		readOnly,
		invalid,
		disabled,
		disableAnimation,
	])

	const labelContent = label ? (
		<label
			htmlFor={inputId}
			{...labelProps}
			className={classNames.label({ className: labelProps?.className })}
		>
			{label}
		</label>
	) : null

	const helperContent = invalid && invalidMessage ? (
		<span
			{...invalidMessageProps}
			className={classNames.invalidMessage({ className: invalidMessageProps?.className })}
		>
			{invalidMessage}
		</span>
	) : description ? (
		<span
			{...descriptionProps}
			className={classNames.description({ className: descriptionProps?.className })}
		>
			{description}
		</span>
	) : null

	const innerContent = (
		<div
			{...innerWrapperProps}
			className={classNames.innerWrapper({ className: innerWrapperProps?.className })}
		>
			{startContent}

			<input
				id={inputId}
				type={type}
				inputMode={inputMode}
				name={name}
				placeholder={placeholder ?? " "}
				autoFocus={autoFocus}
				autoComplete={autoComplete}
				minLength={minLength}
				maxLength={maxLength}
				value={controlledValue}
				onChange={handleChange}
				{...inputProps}
				className={classNames.input({ className: inputProps?.className })}
			/>

			{clearable ? (
				<>
					{controlledValue ? (
						<button
							onClick={handleClickClear}
							{...clearButtonProps}
							className={classNames.clearButton({ className: clearButtonProps?.className })}
						>
							{endContent ?? <MdCancel/>}
						</button>
					) : null}
				</>
			) : endContent}
		</div>
	)

	return (
		<div
			data-has-label={!!label || undefined}
			data-has-helper={!!description || !!invalidMessage || undefined}
			data-within={!!placeholder || undefined}
			className={classNames.base({ className })}
			{...restProps}
		>
			{labelPlacement === "outside-left"
				? labelContent
				: null
			}

			{labelPlacement === "outside" || labelPlacement === "outside-left" ? (
				<div
					{...mainWrapperProps}
					className={classNames.mainWrapper({ className: mainWrapperProps?.className })}
				>
					<label
						{...inputWrapperProps}
						className={classNames.inputWrapper({ className: inputWrapperProps?.className })}
					>
						{labelPlacement !== "outside-left"
							? labelContent
							: null
						}

						{innerContent}
					</label>

					{helperContent}
				</div>
			) : (
				<>
					<label
						{...inputWrapperProps}
						className={classNames.inputWrapper({ className: inputWrapperProps?.className })}
					>
						{labelContent}
						{innerContent}
					</label>

					{helperContent}
				</>
			)}
		</div>
	)
}