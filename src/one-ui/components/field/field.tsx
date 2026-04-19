import type {
	FieldProps,
	FieldItemProps,
	FieldLabelProps,
	FieldDescriptionProps,
	FieldErrorProps,
	FieldValidityProps
} from "./field.props"

import { composeComponent, resolveClassNames } from "../../utils"

import { Field as FieldPrimitive } from "@base-ui/react"

const Root = (props: FieldProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<FieldPrimitive.Root
			{...restProps}
			data-slot="field"
			className={resolveClassNames(className, "field")}
		>
			{children}
		</FieldPrimitive.Root>
	)
}

const Item = (props: FieldItemProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<FieldPrimitive.Item
			{...restProps}
			data-slot="field-item"
			className={resolveClassNames(className, "field__item")}
		>
			{children}
		</FieldPrimitive.Item>
	)
}

const Label = (props: FieldLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<FieldPrimitive.Label
			{...restProps}
			data-slot="field-label"
			className={resolveClassNames(className, "field__label")}
		>
			{children}
		</FieldPrimitive.Label>
	)
}

const Error = (props: FieldErrorProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<FieldPrimitive.Error
			{...restProps}
			data-slot="field-error"
			className={resolveClassNames(className, "field__error")}
		/>
	)
}

const Description = (props: FieldDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<FieldPrimitive.Description
			{...restProps}
			data-slot="field-description"
			className={resolveClassNames(className, "field__description")}
		>
			{children}
		</FieldPrimitive.Description>
	)
}

const Validity = (props: FieldValidityProps) => {
	const { children } = props

	return (
		<FieldPrimitive.Validity>
			{children}
		</FieldPrimitive.Validity>
	)
}

type FieldSlots = {
	Item: typeof Item
	Label: typeof Label
	Error: typeof Error
	Description: typeof Description
	Validity: typeof Validity
}

export const Field = composeComponent<typeof Root, FieldSlots>(Root, {
	Item,
	Label,
	Error,
	Description,
	Validity,
})