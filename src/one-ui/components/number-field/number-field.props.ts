import type { NumberField } from "@base-ui/react"

export type NumberFieldProps = NumberField.Root.Props & {
	fullWidth?: boolean
	size?: "sm" | "md" | "lg"
}

export type NumberFieldScrubAreaProps = NumberField.ScrubArea.Props
export type NumberFieldScrubAreaCursorProps = NumberField.ScrubAreaCursor.Props
export type NumberFieldGroupProps = NumberField.Group.Props
export type NumberFieldDecrementProps = NumberField.Decrement.Props
export type NumberFieldInputProps = NumberField.Input.Props
export type NumberFieldIncrementProps = NumberField.Increment.Props