import type { LinearProgressProps } from "./types"

import { useId, useMemo } from "react"

import { formatNumber } from "@/shared/utils/format"
import { numberClump } from "@/shared/utils/number"

import { linearProgressVariants } from "./variants"

export const LinearProgress = (props: LinearProgressProps) => {
	const {
		showValueLabel,
		value = 0,
		minValue = 0,
		maxValue = 100,
		label,
		formatOptions = { style: "percent" },
		className,
		size,
		color,
		rounded,
		indeterminate,
		striped,
		disabled,
		disableAnimation,
		slotProps = {},
		...restProps
	} = props

	const {
		labelWrapperProps,
		labelProps,
		valueProps,
		trackProps,
		indicatorProps,
	} = slotProps

	const labelId = useId()

	const textValue = (!indeterminate && showValueLabel)
		? formatNumber(formatOptions).format(formatOptions.style === "percent" ? value / 100 : value)
		: undefined

	const percentage = !indeterminate
		? numberClump(((value - minValue) / (maxValue - minValue)) * 100, 0, maxValue)
		: 0

	const classNames = useMemo(() => {
		return linearProgressVariants({
			size,
			color,
			rounded,
			indeterminate,
			striped,
			disabled,
			disableAnimation,
		})
	}, [
		size,
		color,
		rounded,
		indeterminate,
		striped,
		disabled,
		disableAnimation,
	])

	return (
		<div
			role="progressbar"
			aria-labelledby={labelId}
			aria-valuenow={value}
			aria-valuemin={minValue}
			aria-valuemax={maxValue}
			aria-valuetext={textValue}
			className={classNames.base({ className })}
			{...restProps}
		>
			{(label || showValueLabel) ? (
				<div
					{...labelWrapperProps}
					className={classNames.labelWrapper({ className: labelWrapperProps?.className })}
				>
					{label ? (
						<label
							id={labelId}
							{...labelProps}
							className={classNames.label({ className: labelProps?.className })}
						>
							{label}
						</label>
					) : null}

					{showValueLabel ? (
						<output
							aria-live="off"
							htmlFor={labelId}
							{...valueProps}
							className={classNames.value({ className: valueProps?.className })}
						>
							{textValue}
						</output>
					) : null}
				</div>
			) : null}

			<div
				{...trackProps}
				className={classNames.track({ className: trackProps?.className })}
			>
				<div
					{...indicatorProps}
					className={classNames.indicator({ className: indicatorProps?.className })}
					style={{
						transform: `translateX(-${100 - (percentage || 0)}%)`,
						...indicatorProps?.style,
					}}
				/>
			</div>
		</div>
	)
}