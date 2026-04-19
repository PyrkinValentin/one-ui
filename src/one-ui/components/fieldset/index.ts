export type * from "./fieldset.props"

import { composeComponent } from "../../utils"

import { FieldsetRoot, FieldsetLegend } from "./fieldset"

type FieldsetSlots = {
	Legend: typeof FieldsetLegend
}

export const Fieldset = composeComponent<typeof FieldsetRoot, FieldsetSlots>(FieldsetRoot, {
	Legend: FieldsetLegend,
})