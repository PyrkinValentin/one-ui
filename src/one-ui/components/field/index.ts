export type * from "./field.props"

import { composeComponent } from "../../utils"

import { FieldRoot, FieldItem, FieldLabel, FieldError, FieldDescription, FieldValidity } from "./field"

type FieldSlots = {
	Item: typeof FieldItem
	Label: typeof FieldLabel
	Error: typeof FieldError
	Description: typeof FieldDescription
	Validity: typeof FieldValidity
}

export const Field = composeComponent<typeof FieldRoot, FieldSlots>(FieldRoot, {
	Item: FieldItem,
	Label: FieldLabel,
	Error: FieldError,
	Description: FieldDescription,
	Validity: FieldValidity,
})