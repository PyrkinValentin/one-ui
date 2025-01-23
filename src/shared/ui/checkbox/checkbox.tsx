"use client"

import type { ChangeEvent } from "react"
import type { CheckboxProps } from "./types"

import { useId, useMemo } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { isFunction } from "@/shared/helpers/is-function"

import { Slot, VisuallyHidden } from "@/shared/ui/system"

import { useCheckboxGroupContext } from "./checkbox-group"
import { checkboxVariants } from "./variants"
import { CheckboxIcon } from "./checkbox-icon"

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

	const slots = useMemo(() => {
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
			className={slots.base({ className })}
			{...restProps}
		>
			<span
				aria-hidden="true"
				{...wrapperProps}
				className={slots.wrapper({ className: wrapperProps?.className })}
			>
				<VisuallyHidden>
					<input
						type="checkbox"
						aria-labelledby={labelId}
						name={name}
						value={value}
						checked={controlledChecked}
						required={required}
						readOnly={readOnly}
						disabled={disabled}
						onChange={handleChange}
						{...inputProps}
						className={slots.input({ className: inputProps?.className })}
					/>
				</VisuallyHidden>

				{icon ? (
					<Slot
						as="svg"
						{...iconProps}
						className={slots.icon({ className: iconProps?.className })}
					>
						{isFunction(icon)
							? icon(controlledChecked)
							: icon
						}
					</Slot>
				) : (
					<CheckboxIcon
						checked={controlledChecked}
						disableAnimation={disableAnimation}
						{...iconProps}
						className={slots.icon({ className: iconProps?.className })}
					/>
				)}
			</span>

			{children ? (
				<span
					id={labelId}
					{...labelProps}
					className={slots.label({ className: labelProps?.className })}
				>
					{children}
				</span>
			) : null}
		</label>
	)
}