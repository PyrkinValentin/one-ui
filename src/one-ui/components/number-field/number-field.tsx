import type {
	NumberFieldProps,
	NumberFieldScrubAreaProps,
	NumberFieldScrubAreaCursorProps,
	NumberFieldGroupProps,
	NumberFieldDecrementProps,
	NumberFieldInputProps,
	NumberFieldIncrementProps,
} from "./number-field.props"

import { getDataAttributes, resolveClassNames } from "../../utils"

import { NumberField } from "@base-ui/react"
import { Minus, MoveHorizontal, Plus } from "lucide-react"

export const NumberFieldRoot = (props: NumberFieldProps) => {
	const {
		fullWidth,
		size = "md",
		className,
		children,
		...restProps
	} = props

	return (
		<NumberField.Root
			{...restProps}
			{...getDataAttributes({ fullWidth, size })}
			data-slot="number-field"
			className={resolveClassNames(className, "number-field")}
		>
			{children}
		</NumberField.Root>
	)
}

export const NumberFieldScrubArea = (props: NumberFieldScrubAreaProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NumberField.ScrubArea
			{...restProps}
			data-slot="number-field-scrub-area"
			className={resolveClassNames(className, "number-field__scrub-area")}
		>
			{children}
		</NumberField.ScrubArea>
	)
}

export const NumberFieldScrubAreaCursor = (props: NumberFieldScrubAreaCursorProps) => {
	const {
		className,
		children = <MoveHorizontal/>,
		...restProps
	} = props

	return (
		<NumberField.ScrubAreaCursor
			{...restProps}
			data-slot="number-field-scrub-area-cursor"
			className={resolveClassNames(className, "number-field__scrub-area-cursor")}
		>
			{children}
		</NumberField.ScrubAreaCursor>
	)
}

export const NumberFieldGroup = (props: NumberFieldGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NumberField.Group
			{...restProps}
			data-slot="number-field-group"
			className={resolveClassNames(className, "number-field__group")}
		>
			{children}
		</NumberField.Group>
	)
}

export const NumberFieldDecrement = (props: NumberFieldDecrementProps) => {
	const {
		className,
		children = <Minus/>,
		...restProps
	} = props

	return (
		<NumberField.Decrement
			{...restProps}
			data-slot="number-field-decrement"
			className={resolveClassNames(className, "number-field__decrement")}
		>
			{children}
		</NumberField.Decrement>
	)
}

export const NumberFieldInput = (props: NumberFieldInputProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<NumberField.Input
			{...restProps}
			data-slot="number-field-input"
			className={resolveClassNames(className, "number-field__input")}
		/>
	)
}

export const NumberFieldIncrement = (props: NumberFieldIncrementProps) => {
	const {
		className,
		children = <Plus/>,
		...restProps
	} = props

	return (
		<NumberField.Increment
			{...restProps}
			data-slot="number-field-increment"
			className={resolveClassNames(className, "number-field__increment")}
		>
			{children}
		</NumberField.Increment>
	)
}