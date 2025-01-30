"use client"

import type { ChangeEvent, FocusEvent } from "react"
import type { SliderProps } from "./types"

import { useId, useMemo } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { formatArrayNumber, formatNumber } from "@/shared/utils/format"
import { numberClump, numberFindClosest } from "@/shared/utils/number"
import { mergeProps } from "@/shared/utils/merge"
import { isUndefined } from "@/shared/helpers/is-undefined"

import { Fragment } from "react"
import { Tooltip } from "@/shared/ui/tooltip"

import { useSliderRange } from "./use-slider-range"
import { sliderVariants } from "./variants"

export const Slider = (props: SliderProps) => {
	const {
		label,
		showValueLabel = !!label,
		showTooltip,
		showSteps,
		marks,
		startContent,
		endContent,
		formatOptions,
		fillOffset,
		step = 1,
		minValue = 0,
		maxValue = 100,
		defaultValue = [0],
		value,
		onValueChange,
		onValueChangeComplete,
		renderValue,
		slotProps = {},
		className,
		size,
		rounded,
		color = "primary",
		orientation = "horizontal",
		disabled,
		showOutline,
		hideThumb,
		...restProps
	} = props

	const {
		labelWrapperProps,
		labelProps,
		valueProps,
		stepProps,
		markProps,
		trackWrapperProps,
		trackProps,
		fillerProps,
		thumbProps,
		inputProps,
		tooltipProps,
	} = slotProps

	const labelId = useId()

	const {
		dragging,
		getTrackProps,
		getThumbProps,
	} = useSliderRange({
		step,
		minValue,
		maxValue,
		orientation,
		onChange: (trigger, value) => handleChangeRange(trigger, value),
		onChangeComplete: () => handleChangeComplete(),
	})

	const [controlledValue, setControlledValue] = useControlledState({
		defaultValue: numberClump(defaultValue, minValue, maxValue),
		value: value ? numberClump(value, minValue, maxValue) : value,
		setValue: onValueChange,
	})

	const range = controlledValue.length > 1

	const handleChangeRange = (trigger: number, value: number) => {
		const findIndex = () => {
			const closestValue = numberFindClosest(controlledValue, value)

			return controlledValue.findIndex((v) => v === closestValue)
		}

		const indexValue = trigger === -1
			? findIndex()
			: trigger

		setControlledValue?.(
			controlledValue.with(
				indexValue,
				numberClump(
					value,
					controlledValue[indexValue - 1] ?? minValue,
					controlledValue[indexValue + 1] ?? maxValue,
				)
			)
		)
	}

	const handleChangeComplete = () => {
		onValueChangeComplete?.(controlledValue)
	}

	const handleChange =
		(trigger: number) =>
			(ev: ChangeEvent<HTMLInputElement>) => {
				inputProps?.onChange?.(ev)
				handleChangeRange(trigger, Number(ev.target.value))
			}

	const handleBlur = (ev: FocusEvent<HTMLInputElement>) => {
		inputProps?.onBlur?.(ev)
		handleChangeComplete()
	}

	const getValuePercent = (value: number = 0) => {
		return (value - minValue) / (maxValue - minValue)
	}

	const getThumbPercent = (index: number) => {
		return getValuePercent(controlledValue[index])
	}

	const offsetThumbValue = [
		range
			? getThumbPercent(0)
			: !isUndefined(fillOffset)
				? getValuePercent(fillOffset)
				: 0,
		getThumbPercent(controlledValue.length - 1),
	]

	const [startOffset, endOffset] = offsetThumbValue.toSorted()

	const getTextValue = () => {
		return range
			? formatArrayNumber(formatOptions).formatRange(controlledValue)
			: formatArrayNumber(formatOptions).format(controlledValue)
	}

	const steps = showSteps
		? Math.floor((maxValue - minValue) / step) + 1
		: 0

	const singleThumb = isUndefined(fillOffset)
		? !range
		: false

	const classNames = useMemo(() => {
		return sliderVariants({
			size,
			rounded,
			color,
			orientation,
			disabled,
			showOutline,
			hideThumb,
			singleThumb,
		})
	}, [
		size,
		rounded,
		color,
		orientation,
		disabled,
		showOutline,
		hideThumb,
		singleThumb,
	])

	const renderThumb = (value: number, index: number) => (
		<div
			key={index}
			{...mergeProps(thumbProps, getThumbProps({ trigger: index }))}
			className={classNames.thumb({ className: thumbProps?.className })}
			style={{
				...thumbProps?.style,
				[orientation === "horizontal" ? "left" : "bottom"]: `${getThumbPercent(index) * 100}%`,
			}}
		>
			<input
				type="range"
				id={`${labelId}-${index}`}
				aria-labelledby={labelId}
				aria-valuetext={String(value)}
				aria-orientation={orientation}
				disabled={disabled}
				min={minValue}
				max={maxValue}
				step={step}
				value={value}
				{...inputProps}
				onChange={handleChange(index)}
				onBlur={handleBlur}
				className={classNames.input({ className: inputProps?.className })}
			/>
		</div>
	)

	return (
		<div
			role="group"
			aria-labelledby={labelId}
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
							{...labelProps}
							id={labelId}
							className={classNames.label({ className: labelProps?.className })}
						>
							{label}
						</label>
					) : null}

					{showValueLabel ? (
						<output
							aria-live="off"
							{...valueProps}
							htmlFor={controlledValue.map((_, index) => `${labelId}-${index}`).join(" ")}
							className={classNames.value({ className: valueProps?.className })}
						>
							{renderValue
								? renderValue({ value: controlledValue, textValue: getTextValue() })
								: getTextValue().join(" ")
							}
						</output>
					) : null}
				</div>
			) : null}

			<div
				{...trackWrapperProps}
				className={classNames.trackWrapper({ className: trackWrapperProps?.className })}
			>
				{startContent}

				<div
					{...mergeProps(trackProps, getTrackProps())}
					className={classNames.track({ className: trackProps?.className })}
				>
					<div
						{...fillerProps}
						className={classNames.filler({ className: fillerProps?.className })}
						style={{
							...fillerProps?.style,
							[orientation === "vertical" ? "bottom" : "left"]: `${startOffset * 100}%`,
							[orientation === "vertical" ? "height" : "width"]: `${(endOffset - startOffset) * 100}%`,
						}}
					/>

					{showSteps && isFinite(steps) ? (
						Array.from({ length: steps }, (_, index) => {
							const percent = getValuePercent(index * step + minValue)

							return (
								<div
									key={index}
									data-in-range={getValuePercent(index * step + minValue) <= endOffset && percent >= startOffset}
									{...stepProps}
									className={classNames.step({ className: stepProps?.className })}
									style={{
										[orientation === "vertical" ? "bottom" : "left"]: `${percent * 100}%`,
										...stepProps?.style,
									}}
								/>
							)
						})
					) : null}

					{controlledValue.map((value, index) => (
						<Fragment key={index}>
							{showTooltip ? (
								<Tooltip
									color={color}
									open={dragging}
									content={formatNumber(formatOptions).format(value)}
									placement={orientation === "horizontal" ? "top" : "right"}
									{...tooltipProps}
								>
									{renderThumb(value, index)}
								</Tooltip>
							) : (
								renderThumb(value, index)
							)}
						</Fragment>
					))}

					{marks && marks.length > 0 &&
						marks.map(({ value, label }, index) => {
							const percent = getValuePercent(value)

							return (
								<div
									key={index}
									data-in-range={percent <= endOffset && percent >= startOffset}
									{...markProps}
									className={classNames.mark({ className: markProps?.className })}
									style={{
										[orientation === "vertical" ? "bottom" : "left"]: `${percent * 100}%`,
										...markProps?.style,
									}}
								>
									{label}
								</div>
							)
						})
					}
				</div>

				{endContent}
			</div>
		</div>
	)
}