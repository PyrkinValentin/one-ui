"use client"

import type { ChangeEvent } from "react"
import type { RadioProps } from "./types"

import { useId, useMemo } from "react"

import { useRadioGroupContext } from "./radio-group"
import { radioVariants } from "./variants"

export const Radio = (props: RadioProps) => {
	const {
		name,
		size: sizeContext,
		color: colorContext,
		readOnly: readOnlyContext,
		invalid: invalidContext,
		disableAnimation: disableAnimationContext,
		slotProps: slotPropsContext = {},
		isDisabled,
		isChecked,
		onChecked,
	} = useRadioGroupContext()

	const {
		value,
		description,
		checked = isChecked?.(value),
		onChange,
		className,
		size = sizeContext,
		color = colorContext,
		readOnly = readOnlyContext,
		disabled = isDisabled?.(value),
		invalid = invalidContext,
		disableAnimation = disableAnimationContext,
		children,
		slotProps,
		...restProps
	} = props

	const { radioSlotProps } = slotPropsContext

	const {
		baseProps,
		wrapperProps,
		controlProps,
		labelWrapperProps,
		labelProps,
		descriptionProps,
	} = {
		...radioSlotProps,
		...slotProps,
	}

	const inputId = useId()
	const descriptionId = useId()

	const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
		onChange?.(ev)
		onChecked?.(value)
	}

	const classNames = useMemo(() => {
		return radioVariants({
			size,
			color,
			readOnly,
			disabled,
			invalid,
			disableAnimation,
		})
	}, [
		size,
		color,
		readOnly,
		disabled,
		invalid,
		disableAnimation,
	])

	return (
		<label
			{...baseProps}
			className={classNames.base({ className: baseProps?.className })}
		>
			<span
				{...wrapperProps}
				className={classNames.wrapper({ className: wrapperProps?.className })}
			>
				<input
					type="radio"
					aria-describedby={descriptionId}
					id={inputId}
					name={name}
					value={value}
					readOnly={readOnly}
					disabled={disabled}
					className={classNames.input({ className })}
					checked={checked}
					onChange={handleChange}
					{...restProps}
				/>

				<span
					{...controlProps}
					className={classNames.control({ className: controlProps?.className })}
				/>
			</span>

			<span
				{...labelWrapperProps}
				className={classNames.labelWrapper({ className: labelWrapperProps?.className })}
			>
				{children ? (
					<label
						htmlFor={inputId}
						{...labelProps}
						className={classNames.label({ className: labelProps?.className })}
					>
						{children}
					</label>
				) : null}

				{description ? (
					<span
						id={descriptionId}
						{...descriptionProps}
						className={classNames.description({ className: descriptionProps?.className })}
					>
						{description}
					</span>
				) : null}
			</span>
		</label>
	)
}