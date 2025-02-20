"use client"

import type { ChangeEvent } from "react"
import type { InputOtpProps } from "./types"

import { useMemo } from "react"

import { OTPInput } from "input-otp"

import { inputOtpVariants } from "./variants"

export const InputOtp = (props: InputOtpProps) => {
	const {
		type,
		pattern = "^[0-9]*$",
		length = 5,
		minLength = length,
		maxLength = length,
		invalidMessage,
		description,
		defaultValue,
		value,
		onValueChange,
		onComplete,
		onChange,
		className,
		variant,
		size,
		color,
		rounded,
		fullWidth,
		readOnly,
		invalid,
		disabled,
		disableAnimation,
		slotProps = {},
		...restProps
	} = props

	const {
		baseProps,
		segmentWrapperProps,
		segmentProps,
		caretProps,
		charProps,
		placeholderCharProps,
		invalidMessageProps,
		descriptionProps,
	} = slotProps

	const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
		const regex = new RegExp(pattern)

		if (regex.test(ev.target.value)) {
			onChange?.(ev)
		}
	}

	const classNames = useMemo(() => {
		return inputOtpVariants({
			variant,
			size,
			color,
			rounded,
			fullWidth,
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
		fullWidth,
		readOnly,
		invalid,
		disabled,
		disableAnimation,
	])

	return (
		<div
			{...baseProps}
			className={classNames.base({ className: baseProps?.className })}
			onChange={handleChange}
		>
			<OTPInput
				type={type}
				readOnly={readOnly}
				disabled={disabled}
				pattern={pattern}
				minLength={minLength}
				maxLength={maxLength}
				defaultValue={defaultValue}
				value={value}
				onChange={onValueChange}
				onComplete={onComplete}
				noScriptCSSFallback={null}
				containerClassName={classNames.wrapper({ className })}
				{...restProps}
				render={(props) => (
					<div
						{...segmentWrapperProps}
						className={classNames.segmentWrapper({ className: segmentWrapperProps?.className })}
					>
						{props.slots.map((slot, i) => (
							<div
								key={i}
								role="presentation"
								data-active={slot.isActive || undefined}
								{...segmentProps}
								className={classNames.segment({ className: segmentProps?.className })}
							>
								{slot.isActive && !slot.char ? (
									<div
										{...caretProps}
										className={classNames.caret({ className: caretProps?.className })}
									/>
								) : slot.char ? (
									<>
										{type === "password" ? (
											<div
												{...charProps}
												className={classNames.passwordChar({ className: charProps?.className })}
											/>
										) : (
											<div {...charProps}>
												{slot.char}
											</div>
										)}
									</>
								) : (
									<div {...placeholderCharProps}>
										{slot.placeholderChar}
									</div>
								)}
							</div>
						))}
					</div>
				)}
			/>

			{invalid && invalidMessage ? (
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
			) : null}
		</div>
	)
}