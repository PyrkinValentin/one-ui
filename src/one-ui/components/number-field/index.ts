export type * from "./number-field.props"

import { composeComponent } from "../../utils"

import {
	NumberFieldRoot,
	NumberFieldScrubArea,
	NumberFieldScrubAreaCursor,
	NumberFieldGroup,
	NumberFieldDecrement,
	NumberFieldInput,
	NumberFieldIncrement,
} from "./number-field"

type NumberFieldSlots = {
	ScrubArea: typeof NumberFieldScrubArea
	ScrubAreaCursor: typeof NumberFieldScrubAreaCursor
	Group: typeof NumberFieldGroup
	Decrement: typeof NumberFieldDecrement
	Input: typeof NumberFieldInput
	Increment: typeof NumberFieldIncrement
}

export const NumberField = composeComponent<typeof NumberFieldRoot, NumberFieldSlots>(NumberFieldRoot, {
	ScrubArea: NumberFieldScrubArea,
	ScrubAreaCursor: NumberFieldScrubAreaCursor,
	Group: NumberFieldGroup,
	Decrement: NumberFieldDecrement,
	Input: NumberFieldInput,
	Increment: NumberFieldIncrement,
})