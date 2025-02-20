"use client"

import type { ChangeEvent } from "react"
import type { InputProps } from "./types"

import { useId, useMemo } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { MdCancel } from "react-icons/md"

import { inputVariants } from "./variants"

export const Input = (props: InputProps) => {
	const {
		defaultValue = "",
		value: valueProp,
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
		baseProps,
		wrapperProps,
		labelProps,
		inputWrapperProps,
		clearButtonProps,
		invalidMessageProps,
		descriptionProps,
	} = slotProps

	const inputId = useId()

	const [value, setValue] = useControlledState({
		defaultValue,
		value: valueProp,
		onValueChange,
	})

	const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
		onChange?.(ev)
		setValue?.(ev.target.value)
	}

	const handleClickClear = () => {
		onClear?.()
		setValue?.("")
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
			{...baseProps}
			className={classNames.base({ className: baseProps?.className })}
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
							required={required}
							readOnly={readOnly}
							disabled={disabled}
							value={value}
							onChange={handleChange}
							className={classNames.input({ className })}
							{...restProps}
						/>

						{clearable ? (
							<>
								{value ? (
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