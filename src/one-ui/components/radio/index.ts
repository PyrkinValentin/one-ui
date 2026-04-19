export type * from "./radio.props"

import { composeComponent } from "../../utils"

import { RadioRoot, RadioIndicator } from "./radio"

type RadioSlots = {
	Indicator: typeof RadioIndicator
}

export const Radio = composeComponent<typeof RadioRoot, RadioSlots>(RadioRoot, {
	Indicator: RadioIndicator,
})