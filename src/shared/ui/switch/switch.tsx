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
		defaultChecked = false,
		checked: checkedProp,
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
		baseProps,
		wrapperProps,
		thumbProps,
		labelProps,
	} = slotProps

	const labelId = useId()

	const [checked, setChecked] = useControlledState({
		defaultValue: defaultChecked,
		value: checkedProp,
		onValueChange: onCheckedChange,
	})

	const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
		onChange?.(ev)
		setChecked?.(ev.target.checked)
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
			{...baseProps}
			className={classNames.base({ className: baseProps?.className })}
		>
			<span
				{...wrapperProps}
				className={classNames.wrapper({ className: wrapperProps?.className })}
			>
				<input
					type="checkbox"
					role="switch"
					aria-labelledby={labelId}
					readOnly={readOnly}
					disabled={disabled}
					className={classNames.input({ className })}
					checked={checked}
					onChange={handleChange}
					{...restProps}
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
								? thumbIcon(checked)
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