"use client"

import type { ChangeEvent } from "react"
import type { CheckboxProps } from "./types"

import { useId, useMemo } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { isFunction } from "@/shared/helpers/is-function"

import { Slot } from "@/shared/ui/system"

import { useCheckboxGroupContext } from "./checkbox-group"
import { checkboxVariants } from "./variants"

export const Checkbox = (props: CheckboxProps) => {
	const {
		disabledGroup,
		checkedGroup,
		onCheckedChangeGroup,
		...checkboxGroupContext
	} = useCheckboxGroupContext()

	const {
		required,
		name,
		value,
		icon,
		defaultChecked = false,
		checked = checkedGroup?.(value),
		onCheckedChange = onCheckedChangeGroup?.(value),
		onChange,
		slotProps = {},
		className,
		size,
		color,
		rounded,
		lineThrough,
		readOnly,
		disabled = disabledGroup?.(value),
		invalid,
		disableAnimation,
		children,
		...restProps
	} = {
		...checkboxGroupContext,
		...props,
	}

	const {
		wrapperProps,
		inputProps,
		iconProps,
		labelProps,
	} = slotProps

	const labelId = useId()

	const [controlledChecked, setControlledChecked] = useControlledState({
		defaultValue: defaultChecked,
		value: checked,
		setValue: onCheckedChange,
	})

	const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
		onChange?.(ev)
		setControlledChecked?.(ev.target.checked)
	}

	const classNames = useMemo(() => {
		return checkboxVariants({
			size,
			color,
			rounded,
			lineThrough,
			readOnly,
			disabled,
			invalid,
			disableAnimation,
		})
	}, [
		size,
		color,
		rounded,
		lineThrough,
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
					type="checkbox"
					aria-labelledby={labelId}
					name={name}
					value={value}
					required={required}
					readOnly={readOnly}
					disabled={disabled}
					checked={controlledChecked}
					onChange={handleChange}
					{...inputProps}
					className={classNames.input({ className: inputProps?.className })}
				/>

				{icon ? (
					<Slot
						as="svg"
						{...iconProps}
						className={classNames.icon({ className: iconProps?.className })}
					>
						{isFunction(icon)
							? icon(controlledChecked)
							: icon
						}
					</Slot>
				) : (
					<svg
						aria-hidden="true"
						role="presentation"
						viewBox="0 0 17 18"
						{...iconProps}
						className={classNames.icon({ className: iconProps?.className })}
					>
						<polyline
							fill="none"
							points="1 9 7 14 15 4"
							stroke="currentColor"
							strokeDasharray="22"
							strokeDashoffset={controlledChecked ? 44 : 66}
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							style={{
								...(!disableAnimation
										? { transition: "stroke-dashoffset 0.15s linear 0.2s" }
										: undefined
								),
							}}
						/>
					</svg>
				)}
			</span>

			{children ? (
				<span
					id={labelId}
					{...labelProps}
					className={classNames.label({ className: labelProps?.className })}
				>
					{children}
				</span>
			) : null}
		</label>
	)
}