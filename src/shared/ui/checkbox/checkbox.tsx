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
		size: sizeContext,
		color: colorContext,
		rounded: roundedContext,
		lineThrough: lineThroughContext,
		readOnly: readOnlyContext,
		invalid: invalidContext,
		disableAnimation: disableAnimationContext,
		slotProps: slotPropsContext = {},
		isDisabled,
		isChecked,
		onChecked,
	} = useCheckboxGroupContext()

	const valueId = useId()

	const {
		value,
		icon,
		defaultChecked = false,
		checked: checkedProp = isChecked?.(value ?? valueId),
		onCheckedChange = onChecked?.(value ?? valueId),
		onChange,
		className,
		size = sizeContext,
		color = colorContext,
		rounded = roundedContext,
		lineThrough = lineThroughContext,
		readOnly = readOnlyContext,
		disabled = isDisabled?.(value ?? valueId),
		invalid = invalidContext,
		disableAnimation = disableAnimationContext,
		children,
		slotProps,
		...restProps
	} = props

	const { checkboxSlotProps } = slotPropsContext

	const {
		baseProps,
		wrapperProps,
		labelProps,
		iconProps,
	} = {
		...checkboxSlotProps,
		...slotProps,
	}

	const inputId = useId()

	const [checked, setChecked] = useControlledState({
		defaultValue: defaultChecked,
		value: checkedProp,
		onValueChange: onCheckedChange,
	})

	const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
		onChange?.(ev)
		setChecked(ev.target.checked)
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
			{...baseProps}
			className={classNames.base({ className: baseProps?.className })}
		>
			<span
				{...wrapperProps}
				className={classNames.wrapper({ className: wrapperProps?.className })}
			>
				<input
					type="checkbox"
					id={inputId}
					value={value}
					readOnly={readOnly}
					disabled={disabled}
					className={classNames.input({ className })}
					checked={checked}
					onChange={handleChange}
					{...restProps}
				/>

				{icon ? (
					<Slot
						as="svg"
						{...iconProps}
						className={classNames.icon({ className: iconProps?.className })}
					>
						{isFunction(icon)
							? icon(checked)
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
							strokeDashoffset={checked ? 44 : 66}
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							style={{
								...(!disableAnimation
										? { transition: "stroke-dashoffset 0.15s linear 0.15s" }
										: undefined
								),
							}}
						/>
					</svg>
				)}
			</span>

			{children ? (
				<label
					htmlFor={inputId}
					{...labelProps}
					className={classNames.label({ className: labelProps?.className })}
				>
					{children}
				</label>
			) : null}
		</label>
	)
}