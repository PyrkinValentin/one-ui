import type {
	FieldProps,
	FieldItemProps,
	FieldLabelProps,
	FieldDescriptionProps,
	FieldErrorProps,
	FieldValidityProps
} from "./field.props"

import { resolveClassNames } from "../../utils"

import { Field } from "@base-ui/react"

export const FieldRoot = (props: FieldProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Field.Root
			{...restProps}
			data-slot="field"
			className={resolveClassNames(className, "field")}
		>
			{children}
		</Field.Root>
	)
}

export const FieldItem = (props: FieldItemProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Field.Item
			{...restProps}
			data-slot="field-item"
			className={resolveClassNames(className, "field__item")}
		>
			{children}
		</Field.Item>
	)
}

export const FieldLabel = (props: FieldLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Field.Label
			{...restProps}
			data-slot="field-label"
			className={resolveClassNames(className, "field__label")}
		>
			{children}
		</Field.Label>
	)
}

export const FieldError = (props: FieldErrorProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Field.Error
			{...restProps}
			data-slot="field-error"
			className={resolveClassNames(className, "field__error")}
		/>
	)
}

export const FieldDescription = (props: FieldDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Field.Description
			{...restProps}
			data-slot="field-description"
			className={resolveClassNames(className, "field__description")}
		>
			{children}
		</Field.Description>
	)
}

export const FieldValidity = (props: FieldValidityProps) => {
	const { children } = props

	return (
		<Field.Validity>
			{children}
		</Field.Validity>
	)
}