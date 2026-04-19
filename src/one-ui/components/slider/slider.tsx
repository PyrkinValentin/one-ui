import type {
	SliderProps,
	SliderLabelProps,
	SliderValueProps,
	SliderControlProps,
	SliderTrackProps,
	SliderIndicatorProps,
	SliderThumbProps,
} from "./slider.props"

import { composeComponent, resolveClassNames } from "../../utils"

import { Slider as SliderPrimitive } from "@base-ui/react"

const Root = <V extends number | readonly number[] = number | readonly number[]>(props: SliderProps<V>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<SliderPrimitive.Root
			{...restProps}
			data-slot="slider"
			className={resolveClassNames(className, "slider")}
		>
			{children}
		</SliderPrimitive.Root>
	)
}

const Label = (props: SliderLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<SliderPrimitive.Label
			{...restProps}
			data-slot="slider-label"
			className={resolveClassNames(className, "slider__label")}
		>
			{children}
		</SliderPrimitive.Label>
	)
}

const Value = (props: SliderValueProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<SliderPrimitive.Value
			{...restProps}
			data-slot="slider-value"
			className={resolveClassNames(className, "slider__value")}
		>
			{children}
		</SliderPrimitive.Value>
	)
}

const Control = (props: SliderControlProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<SliderPrimitive.Control
			{...restProps}
			data-slot="slider-control"
			className={resolveClassNames(className, "slider__control")}
		>
			{children}
		</SliderPrimitive.Control>
	)
}

const Track = (props: SliderTrackProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<SliderPrimitive.Track
			{...restProps}
			data-slot="slider-track"
			className={resolveClassNames(className, "slider__track")}
		>
			{children}
		</SliderPrimitive.Track>
	)
}

const Indicator = (props: SliderIndicatorProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<SliderPrimitive.Indicator
			{...restProps}
			data-slot="slider-indicator"
			className={resolveClassNames(className, "slider__indicator")}
		>
			{children}
		</SliderPrimitive.Indicator>
	)
}

const Thumb = (props: SliderThumbProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<SliderPrimitive.Thumb
			{...restProps}
			data-slot="slider-thumb"
			className={resolveClassNames(className, "slider__thumb")}
		>
			{children}
		</SliderPrimitive.Thumb>
	)
}

type SliderSlots = {
	Label: typeof Label
	Value: typeof Value
	Control: typeof Control
	Track: typeof Track
	Indicator: typeof Indicator
	Thumb: typeof Thumb
}

export const Slider = composeComponent<typeof Root, SliderSlots>(Root, {
	Label,
	Value,
	Control,
	Track,
	Indicator,
	Thumb,
})