"use client"

import type { ChangeEvent, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react"
import type { SliderProps } from "./types"

import { useCallback, useEffect, useRef, useState, useId, useMemo } from "react"
import { useCallbackEvent } from "@/shared/hooks/use-callback-event"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { numberArrayFormat, numberClump, numberFindClosest, numberFormat } from "@/shared/utils/number"
import { mergeProps } from "@/shared/utils/props"
import { isUndefined } from "@/shared/helpers/is-undefined"

import { Fragment } from "react"
import { Tooltip } from "@/shared/ui/tooltip"
import { VisuallyHidden } from "@/shared/ui/system"

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
		tooltipProps,
	} = slotProps

	const labelId = useId()

	const {
		dragging,
		getTrackProps,
		getThumbProps,
	} = useRange({
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

	const handleChangeInput =
		(trigger: number) =>
			(ev: ChangeEvent<HTMLInputElement>) => {
				handleChangeRange(trigger, Number(ev.target.value))
			}

	const handleChangeComplete = () => {
		onValueChangeComplete?.(controlledValue)
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
			? numberArrayFormat(formatOptions).formatRange(controlledValue)
			: numberArrayFormat(formatOptions).format(controlledValue)
	}

	const steps = showSteps
		? Math.floor((maxValue - minValue) / step) + 1
		: 0

	const singleThumb = isUndefined(fillOffset)
		? !range
		: false

	const slots = useMemo(() => {
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
			className={slots.thumb({ className: thumbProps?.className })}
			style={{
				...thumbProps?.style,
				[orientation === "horizontal" ? "left" : "bottom"]: `${getThumbPercent(index) * 100}%`,
			}}
		>
			<VisuallyHidden>
				<input
					type="range"
					id={`${labelId}-${index}`}
					aria-labelledby={labelId}
					aria-orientation={orientation}
					disabled={disabled}
					min={minValue}
					max={maxValue}
					step={step}
					aria-valuetext={String(value)}
					value={value}
					onChange={handleChangeInput(index)}
					onBlur={handleChangeComplete}
				/>
			</VisuallyHidden>
		</div>
	)

	return (
		<div
			role="group"
			aria-labelledby={labelId}
			className={slots.base({ className })}
			{...restProps}
		>
			{(label || showValueLabel) ? (
				<div
					{...labelWrapperProps}
					className={slots.labelWrapper({ className: labelWrapperProps?.className })}
				>
					{label ? (
						<label
							{...labelProps}
							id={labelId}
							className={slots.label({ className: labelProps?.className })}
						>
							{label}
						</label>
					) : null}

					{showValueLabel ? (
						<output
							aria-live="off"
							{...valueProps}
							htmlFor={controlledValue.map((_, index) => `${labelId}-${index}`).join(" ")}
							className={slots.value({ className: valueProps?.className })}
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
				className={slots.trackWrapper({ className: trackWrapperProps?.className })}
			>
				{startContent}

				<div
					{...mergeProps(trackProps, getTrackProps())}
					className={slots.track({ className: trackProps?.className })}
				>
					<div
						{...fillerProps}
						className={slots.filler({ className: fillerProps?.className })}
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
									className={slots.step({ className: stepProps?.className })}
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
									content={numberFormat(formatOptions).format(value)}
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
									className={slots.mark({ className: markProps?.className })}
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

type UseRangeOptions = {
	step?: number
	minValue?: number
	maxValue?: number
	orientation?: "horizontal" | "vertical"
	onChange: (trigger: number, value: number) => void
	onChangeComplete: () => void
}

type GetThumbProps = {
	trigger: number
}

const useRange = (options: UseRangeOptions) => {
	const {
		step = 1,
		minValue = 0,
		maxValue = 100,
		orientation,
		onChange,
		onChangeComplete,
	} = options

	const trackRef = useRef<HTMLDivElement>(null)
	const triggerEventRef = useRef(-1)

	const onChangeEvent = useCallbackEvent(onChange)
	const onChangeCompleteEvent = useCallbackEvent(onChangeComplete)

	const [dragging, setDragging] = useState(false)

	const startDragging = () => setDragging(true)

	const endDragging = useCallback(() => {
		setDragging(false)
		onChangeCompleteEvent()
		triggerEventRef.current = -1
	}, [onChangeCompleteEvent])

	const roundValue = (value: number) => {
		return Math.round(value * 100) / 100
	}

	const clampValue = useCallback((value: number) => {
		return numberClump(value, minValue, maxValue)
	}, [maxValue, minValue])

	const incrementValue = useCallback((value: number) => {
		return Math.round(value / step) * step
	}, [step])

	const getPercentage = useCallback((clientX: number, clientY: number) => {
		const track = trackRef.current

		if (!track) return 0

		const {
			left,
			bottom,
			width,
			height,
		} = track.getBoundingClientRect()

		const draggingPercentage = orientation === "horizontal"
			? (clientX - left) / width * 100
			: (bottom - clientY) / height * 100

		const value = draggingPercentage * (maxValue - minValue) / 100 + minValue

		return clampValue(
			roundValue(
				incrementValue(value)
			)
		)
	}, [clampValue, incrementValue, maxValue, minValue, orientation])

	const mouseMoveListener = useCallback((ev: MouseEvent) => {
		const { clientX, clientY } = ev

		onChangeEvent(triggerEventRef.current, getPercentage(clientX, clientY))
	}, [getPercentage, onChangeEvent])

	const touchMoveListener = useCallback((ev: TouchEvent) => {
		const { clientX, clientY } = ev.touches[0]

		onChangeEvent(triggerEventRef.current, getPercentage(clientX, clientY))
	}, [getPercentage, onChangeEvent])

	const mouseUpListener = useCallback(() => {
		endDragging()
	}, [endDragging])

	const touchEndListener = useCallback(() => {
		endDragging()
	}, [endDragging])

	useEffect(() => {
		if (!dragging) return

		addEventListener("mousemove", mouseMoveListener)
		addEventListener("touchmove", touchMoveListener)
		addEventListener("mouseup", mouseUpListener)
		addEventListener("touchend", touchEndListener)

		return () => {
			removeEventListener("mousemove", mouseMoveListener)
			removeEventListener("touchmove", touchMoveListener)
			removeEventListener("mouseup", mouseUpListener)
			removeEventListener("touchend", touchEndListener)
		}
	}, [dragging, mouseMoveListener, mouseUpListener, touchEndListener, touchMoveListener])

	const onMouseDownTrack = (ev: ReactMouseEvent<HTMLDivElement>) => {
		const { clientX, clientY } = ev

		startDragging()
		onChangeEvent(triggerEventRef.current, getPercentage(clientX, clientY))
	}

	const onTouchStartTrack = (ev: ReactTouchEvent<HTMLDivElement>) => {
		const { clientX, clientY } = ev.touches[0]

		startDragging()
		onChangeEvent(triggerEventRef.current, getPercentage(clientX, clientY))
	}

	const onMouseDownThumb = (trigger: number) => (ev: ReactMouseEvent<HTMLDivElement>) => {
		ev.stopPropagation()
		startDragging()
		triggerEventRef.current = trigger

	}

	const onTouchStartThumb = (trigger: number) => (ev: ReactTouchEvent<HTMLDivElement>) => {
		ev.stopPropagation()
		startDragging()
		triggerEventRef.current = trigger
	}

	const getTrackProps = () => ({
		ref: trackRef,
		onMouseDown: onMouseDownTrack,
		onTouchStart: onTouchStartTrack,
	})

	const getThumbProps = (props: GetThumbProps) => {
		const { trigger } = props

		return {
			onMouseDown: onMouseDownThumb(trigger),
			onTouchStart: onTouchStartThumb(trigger),
		}
	}

	return {
		dragging,
		getTrackProps,
		getThumbProps,
	}
}