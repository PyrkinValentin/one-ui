"use client"

import type { ChangeEvent } from "react"
import type { SwitchProps } from "./types"

import { useId, useMemo } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { isFunction } from "@/shared/helpers/is-function"

import { Slot } from "@/shared/ui/system"

import { switchVariants } from "./variants"

export const Switch = (props: SwitchProps) => {
	const {
		startContent,
		endContent,
		thumbIcon,
		name,
		value,
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
		children,
		slotProps = {},
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
		onValueChange: onCheckedChange,
	})

	const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
		onChange?.(ev)
		setControlledChecked?.(ev.target.checked)
	}

	const classNames = useMemo(() => {
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
			className={classNames.base({ className })}
			{...restProps}
		>
			<span
				{...wrapperProps}
				className={classNames.wrapper({ className: wrapperProps?.className })}
			>
				<input
					type="checkbox"
					role="switch"
					aria-labelledby={labelId}
					name={name}
					value={value}
					checked={controlledChecked}
					readOnly={readOnly}
					disabled={disabled}
					onChange={handleChange}
					{...inputProps}
					className={classNames.input({ className: inputProps?.className })}
				/>

				{startContent ? (
					<Slot className={classNames.startContent()}>
						{startContent}
					</Slot>
				) : null}

				<span
					{...thumbProps}
					className={classNames.thumb({ className: thumbProps?.className })}
				>
					{thumbIcon ? (
						<Slot className={classNames.thumbIcon()}>
							{isFunction(thumbIcon)
								? thumbIcon(controlledChecked)
								: thumbIcon
							}
						</Slot>
					) : null}
				</span>

				{endContent ? (
					<Slot className={classNames.endContent()}>
						{endContent}
					</Slot>
				) : null}
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