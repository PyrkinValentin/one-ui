export type * from "./slider.props"

import { composeComponent } from "../../utils"

import {
	SliderRoot,
	SliderLabel,
	SliderValue,
	SliderControl,
	SliderTrack,
	SliderIndicator,
	SliderThumb,
} from "./slider"

type SliderSlots = {
	Label: typeof SliderLabel
	Value: typeof SliderValue
	Control: typeof SliderControl
	Track: typeof SliderTrack
	Indicator: typeof SliderIndicator
	Thumb: typeof SliderThumb
}

export const Slider = composeComponent<typeof SliderRoot, SliderSlots>(SliderRoot, {
	Label: SliderLabel,
	Value: SliderValue,
	Control: SliderControl,
	Track: SliderTrack,
	Indicator: SliderIndicator,
	Thumb: SliderThumb,
})