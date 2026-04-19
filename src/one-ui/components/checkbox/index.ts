export type * from "./checkbox.props"

import { composeComponent } from "../../utils"

import { CheckboxRoot, CheckboxIndicator } from "./checkbox"

type CheckboxSlots = {
	Indicator: typeof CheckboxIndicator
}

export const Checkbox = composeComponent<typeof CheckboxRoot, CheckboxSlots>(CheckboxRoot, {
	Indicator: CheckboxIndicator,
})