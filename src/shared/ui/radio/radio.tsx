"use client"

import type { RadioProps } from "./types"

import { useId, useMemo } from "react"

import { useRadioGroupContext } from "./radio-group"
import { radioVariants } from "./variants"

export const Radio = (props: RadioProps) => {
	const {
		name,
		disabledGroup,
		checkedGroup,
		onChangeGroup,
		...radioGroupContext
	} = useRadioGroupContext()

	const {
		value,
		description,
		slotProps = {},
		className,
		size,
		color,
		readOnly,
		disabled = disabledGroup?.(value),
		invalid,
		disableAnimation,
		children,
		...restProps
	} = {
		...radioGroupContext,
		...props,
	}

	const {
		wrapperProps,
		inputProps,
		controlProps,
		labelWrapperProps,
		labelProps,
		descriptionProps,
	} = slotProps

	const labelId = useId()
	const descriptionId = useId()

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
			className={classNames.base({ className })}
			{...restProps}
		>
			<span
				{...wrapperProps}
				className={classNames.wrapper({ className: wrapperProps?.className })}
			>
				<input
					type="radio"
					aria-labelledby={labelId}
					aria-describedby={descriptionId}
					name={name}
					value={value}
					readOnly={readOnly}
					disabled={disabled}
					checked={checkedGroup?.(value)}
					onChange={onChangeGroup}
					{...inputProps}
					className={classNames.input({ className: inputProps?.className })}
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
					<span
						id={labelId}
						{...labelProps}
						className={classNames.label({ className: labelProps?.className })}
					>
						{children}
					</span>
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