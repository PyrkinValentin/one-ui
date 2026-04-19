import type {
	NumberFieldProps,
	NumberFieldScrubAreaProps,
	NumberFieldScrubAreaCursorProps,
	NumberFieldGroupProps,
	NumberFieldDecrementProps,
	NumberFieldInputProps,
	NumberFieldIncrementProps,
} from "./number-field.props"

import { composeComponent, getDataAttributes, resolveClassNames } from "../../utils"

import { NumberField as NumberFieldPrimitive } from "@base-ui/react"
import { Minus, MoveHorizontal, Plus } from "lucide-react"

const Root = (props: NumberFieldProps) => {
	const {
		fullWidth,
		size = "md",
		className,
		children,
		...restProps
	} = props

	return (
		<NumberFieldPrimitive.Root
			{...restProps}
			{...getDataAttributes({ fullWidth, size })}
			data-slot="number-field"
			className={resolveClassNames(className, "number-field")}
		>
			{children}
		</NumberFieldPrimitive.Root>
	)
}

const ScrubArea = (props: NumberFieldScrubAreaProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NumberFieldPrimitive.ScrubArea
			{...restProps}
			data-slot="number-field-scrub-area"
			className={resolveClassNames(className, "number-field__scrub-area")}
		>
			{children}
		</NumberFieldPrimitive.ScrubArea>
	)
}

const ScrubAreaCursor = (props: NumberFieldScrubAreaCursorProps) => {
	const {
		className,
		children = <MoveHorizontal/>,
		...restProps
	} = props

	return (
		<NumberFieldPrimitive.ScrubAreaCursor
			{...restProps}
			data-slot="number-field-scrub-area-cursor"
			className={resolveClassNames(className, "number-field__scrub-area-cursor")}
		>
			{children}
		</NumberFieldPrimitive.ScrubAreaCursor>
	)
}

const Group = (props: NumberFieldGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NumberFieldPrimitive.Group
			{...restProps}
			data-slot="number-field-group"
			className={resolveClassNames(className, "number-field__group")}
		>
			{children}
		</NumberFieldPrimitive.Group>
	)
}

const Decrement = (props: NumberFieldDecrementProps) => {
	const {
		className,
		children = <Minus/>,
		...restProps
	} = props

	return (
		<NumberFieldPrimitive.Decrement
			{...restProps}
			data-slot="number-field-decrement"
			className={resolveClassNames(className, "number-field__decrement")}
		>
			{children}
		</NumberFieldPrimitive.Decrement>
	)
}

const Input = (props: NumberFieldInputProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<NumberFieldPrimitive.Input
			{...restProps}
			data-slot="number-field-input"
			className={resolveClassNames(className, "number-field__input")}
		/>
	)
}

const Increment = (props: NumberFieldIncrementProps) => {
	const {
		className,
		children = <Plus/>,
		...restProps
	} = props

	return (
		<NumberFieldPrimitive.Increment
			{...restProps}
			data-slot="number-field-increment"
			className={resolveClassNames(className, "number-field__increment")}
		>
			{children}
		</NumberFieldPrimitive.Increment>
	)
}

type NumberFieldSlots = {
	ScrubArea: typeof ScrubArea
	ScrubAreaCursor: typeof ScrubAreaCursor
	Group: typeof Group
	Decrement: typeof Decrement
	Input: typeof Input
	Increment: typeof Increment
}

export const NumberField = composeComponent<typeof Root, NumberFieldSlots>(Root, {
	ScrubArea,
	ScrubAreaCursor,
	Group,
	Decrement,
	Input,
	Increment,
})