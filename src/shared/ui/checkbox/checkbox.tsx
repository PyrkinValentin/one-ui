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
		disabled: disabledContext,
		invalid: invalidContext,
		required: requiredContext,
		disableAnimation: disableAnimationContext,
		slotProps: slotPropsContext,
		getItemState,
	} = useCheckboxGroupContext()

	const {
		required = requiredContext,
		autoFocus,
		name,
		value,
		icon,
		defaultChecked = false,
		checked,
		onCheckedChange,
		onChange,
		className,
		size = sizeContext,
		color = colorContext,
		rounded = roundedContext,
		lineThrough = lineThroughContext,
		readOnly = readOnlyContext,
		disabled = disabledContext,
		invalid = invalidContext,
		disableAnimation = disableAnimationContext,
		children,
		slotProps = {},
		...restProps
	} = props

	const {
		wrapperProps,
		inputProps,
		iconProps,
		labelProps,
	} = {
		...slotPropsContext,
		...slotProps,
	}

	const valueId = useId()
	const inputId = useId()

	const itemState = getItemState?.(value, {
		valueId,
		disabled,
	})

	const [state, setState] = useControlledState({
		defaultValue: defaultChecked,
		value: checked ?? itemState?.checked,
		onValueChange: onCheckedChange ?? itemState?.toggleChecked,
	})

	const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
		onChange?.(ev)
		setState?.(ev.target.checked)
	}

	const classNames = useMemo(() => {
		return checkboxVariants({
			size,
			color,
			rounded,
			lineThrough,
			readOnly,
			disabled: itemState?.disabled,
			invalid,
			disableAnimation,
		})
	}, [
		size,
		color,
		rounded,
		lineThrough,
		readOnly,
		itemState?.disabled,
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
					id={inputId}
					autoFocus={autoFocus}
					name={name}
					value={value}
					required={required}
					readOnly={readOnly}
					disabled={disabled}
					checked={state}
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
							? icon(state)
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
							strokeDashoffset={state ? 44 : 66}
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