"use client"

import type { ChangeEvent } from "react"
import type { SwitchProps } from "./types"

import { useId, useMemo } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { isFunction } from "@/shared/helpers/is-function"

import { Slot, VisuallyHidden } from "@/shared/ui/system"

import { switchVariants } from "./variants"

export const Switch = (props: SwitchProps) => {
	const {
		startContent,
		endContent,
		thumbIcon,
		name,
		defaultChecked = false,
		checked,
		onCheckedChange,
		onChange,
		className,
		size,
		color,
		readOnly,
		disabled,
		disableAnimation,
		slotProps = {},
		children,
		...restProps
	} = props

	const {
		wrapperProps,
		inputProps,
		thumbProps,
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
		return switchVariants({
			size,
			color,
			readOnly,
			disabled,
			disableAnimation,
		})
	}, [
		size,
		color,
		readOnly,
		disabled,
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
						role="switch"
						aria-labelledby={labelId}
						type="checkbox"
						name={name}
						checked={controlledChecked}
						readOnly={readOnly}
						disabled={disabled}
						onChange={handleChange}
						{...inputProps}
						className={slots.input({ className: inputProps?.className })}
					/>
				</VisuallyHidden>

				{startContent ? (
					<Slot className={slots.startContent()}>
						{startContent}
					</Slot>
				) : null}

				<span
					{...thumbProps}
					className={slots.thumb({ className: thumbProps?.className })}
				>
					{thumbIcon ? (
						<Slot className={slots.thumbIcon()}>
							{isFunction(thumbIcon)
								? thumbIcon(controlledChecked)
								: thumbIcon
							}
						</Slot>
					) : null}
				</span>

				{endContent ? (
					<Slot className={slots.endContent()}>
						{endContent}
					</Slot>
				) : null}
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