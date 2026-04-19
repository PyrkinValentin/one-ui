import type {
	SliderProps,
	SliderLabelProps,
	SliderValueProps,
	SliderControlProps,
	SliderTrackProps,
	SliderIndicatorProps,
	SliderThumbProps,
} from "./slider.props"

import { resolveClassNames } from "../../utils"

import { Slider } from "@base-ui/react"

export const SliderRoot = <Value extends number | readonly number[] = number | readonly number[]>(props: SliderProps<Value>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Slider.Root
			{...restProps}
			data-slot="slider"
			className={resolveClassNames(className, "slider")}
		>
			{children}
		</Slider.Root>
	)
}

export const SliderLabel = (props: SliderLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Slider.Label
			{...restProps}
			data-slot="slider-label"
			className={resolveClassNames(className, "slider__label")}
		>
			{children}
		</Slider.Label>
	)
}

export const SliderValue = (props: SliderValueProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Slider.Value
			{...restProps}
			data-slot="slider-value"
			className={resolveClassNames(className, "slider__value")}
		>
			{children}
		</Slider.Value>
	)
}

export const SliderControl = (props: SliderControlProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Slider.Control
			{...restProps}
			data-slot="slider-control"
			className={resolveClassNames(className, "slider__control")}
		>
			{children}
		</Slider.Control>
	)
}

export const SliderTrack = (props: SliderTrackProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Slider.Track
			{...restProps}
			data-slot="slider-track"
			className={resolveClassNames(className, "slider__track")}
		>
			{children}
		</Slider.Track>
	)
}

export const SliderIndicator = (props: SliderIndicatorProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Slider.Indicator
			{...restProps}
			data-slot="slider-indicator"
			className={resolveClassNames(className, "slider__indicator")}
		>
			{children}
		</Slider.Indicator>
	)
}

export const SliderThumb = (props: SliderThumbProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Slider.Thumb
			{...restProps}
			data-slot="slider-thumb"
			className={resolveClassNames(className, "slider__thumb")}
		>
			{children}
		</Slider.Thumb>
	)
}