import type { MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react"
import type { SliderProps } from "./types"

import { useCallback, useEffect, useRef, useState } from "react"
import { useCallbackEvent } from "@/shared/hooks/use-callback-event"

import { numberClump } from "@/shared/utils/number"

type UseSliderRangeOptions = {
	step?: number
	minValue?: number
	maxValue?: number
	orientation?: SliderProps["orientation"]
	onChange: (trigger: number, value: number) => void
	onChangeComplete: () => void
}

type GetThumbProps = {
	trigger: number
}

export const useSliderRange = (options: UseSliderRangeOptions) => {
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