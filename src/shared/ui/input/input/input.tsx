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
		onClear,
		label,
		startContent,
		endContent,
		invalidMessage,
		description,
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
		slotProps = {},
		...restProps
	} = props

	const {
		wrapperProps,
		labelProps,
		inputWrapperProps,
		inputProps,
		clearButtonProps,
		invalidMessageProps,
		descriptionProps,
	} = slotProps

	const inputId = useId()

	const [state, setState] = useControlledState({
		defaultValue,
		value,
		onValueChange,
	})

	const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
		onChange?.(ev)
		setState?.(ev.target.value)
	}

	const handleClickClear = () => {
		onClear?.()
		setState?.("")
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

	return (
		<div
			className={classNames.base({ className })}
			{...restProps}
		>
			{label ? (
				<label
					htmlFor={inputId}
					{...labelProps}
					className={classNames.label({ className: labelProps?.className })}
				>
					{label}
				</label>
			) : null}

			<div
				{...wrapperProps}
				className={classNames.wrapper({ className: wrapperProps?.className })}
			>
				<label
					{...inputWrapperProps}
					className={classNames.inputWrapper({ className: inputWrapperProps?.className })}
				>
					{startContent}

					<input
						id={inputId}
						type={type}
						inputMode={inputMode}
						name={name}
						required={required}
						readOnly={readOnly}
						disabled={disabled}
						placeholder={placeholder}
						autoFocus={autoFocus}
						autoComplete={autoComplete}
						minLength={minLength}
						maxLength={maxLength}
						value={state}
						onChange={handleChange}
						{...inputProps}
						className={classNames.input({ className: inputProps?.className })}
					/>

					{clearable ? (
						<>
							{state ? (
								<button
									disabled={readOnly || disabled}
									onClick={handleClickClear}
									{...clearButtonProps}
									className={classNames.clearButton({ className: clearButtonProps?.className })}
								>
									{endContent ?? <MdCancel/>}
								</button>
							) : null}
						</>
					) : endContent}
				</label>

				{invalid && invalidMessage ? (
					<p
						{...invalidMessageProps}
						className={classNames.invalidMessage({ className: invalidMessageProps?.className })}
					>
						{invalidMessage}
					</p>
				) : description ? (
					<p
						{...descriptionProps}
						className={classNames.description({ className: descriptionProps?.className })}
					>
						{description}
					</p>
				) : null}
			</div>
		</div>
	)
}