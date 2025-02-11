import type { CircularProgressProps } from "./types"

import { useId, useMemo } from "react"

import { formatNumber } from "@/shared/utils/format"
import { numberClump } from "@/shared/utils/number"

import { circularProgressVariants } from "./variants"

export const CircularProgress = (props: CircularProgressProps) => {
	const {
		showValueLabel,
		value = 0,
		minValue = 0,
		maxValue = 100,
		label,
		valueLabel,
		formatOptions = { style: "percent" },
		strokeWidth: strokeWidthProp,
		className,
		size,
		color,
		indeterminate = !showValueLabel,
		disabled,
		disableAnimation,
		slotProps = {},
		...restProps
	} = props

	const {
		svgWrapperProps,
		svgProps,
		trackProps,
		indicatorProps,
		valueProps,
		labelProps,
	} = slotProps

	const labelId = useId()

	const textValue = showValueLabel
		? formatNumber(formatOptions).format(formatOptions.style === "percent" ? value / 100 : value)
		: undefined

	const center = 16
	const strokeWidth = strokeWidthProp ?? (size === "sm" ? 2 : 3)
	const radius = 16 - strokeWidth
	const circumference = 2 * radius * Math.PI

	const percentage = indeterminate
		? 0.25
		: numberClump((value - minValue) / (maxValue - minValue), 0, 1)

	const classNames = useMemo(() => {
		return circularProgressVariants({
			color,
			size,
			indeterminate,
			disabled,
			disableAnimation,
		})
	}, [
		color,
		size,
		indeterminate,
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
			<div
				{...svgWrapperProps}
				className={classNames.svgWrapper({ className: svgWrapperProps?.className })}
			>
				<svg
					viewBox="0 0 32 32"
					fill="none"
					strokeWidth={strokeWidth}
					{...svgProps}
					className={classNames.svg({ className: svgProps?.className })}
				>
					<circle
						role="presentation"
						cx={center} cy={center} r={radius}
						strokeDasharray={`${circumference} ${circumference}`}
						strokeDashoffset="0"
						transform="rotate(-90 16 16)"
						strokeLinecap="round"
						{...trackProps}
						className={classNames.track({ className: trackProps?.className })}
					/>

					<circle
						role="presentation"
						cx={center} cy={center} r={radius}
						strokeDasharray={`${circumference} ${circumference}`}
						strokeDashoffset={circumference - percentage * circumference}
						transform="rotate(-90 16 16)"
						strokeLinecap="round"
						{...indicatorProps}
						className={classNames.indicator({ className: indicatorProps?.className })}
					/>
				</svg>

				{showValueLabel ? (
					<output
						aria-live="off"
						htmlFor={labelId}
						{...valueProps}
						className={classNames.value({ className: valueProps?.className })}
					>
						{valueLabel ?? textValue}
					</output>
				) : null}
			</div>

			{label ? (
				<label
					id={labelId}
					{...labelProps}
					className={classNames.label({ className: labelProps?.className })}
				>
					{label}
				</label>
			) : null}
		</div>
	)
}