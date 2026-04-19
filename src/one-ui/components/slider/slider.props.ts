import type { Slider } from "@base-ui/react"

export type SliderProps<V extends number | readonly number[] = number | readonly number[]> = Slider.Root.Props<V>
export type SliderLabelProps = Slider.Label.Props
export type SliderValueProps = Slider.Value.Props
export type SliderControlProps = Slider.Control.Props
export type SliderTrackProps = Slider.Track.Props
export type SliderIndicatorProps = Slider.Indicator.Props
export type SliderThumbProps = Slider.Thumb.Props