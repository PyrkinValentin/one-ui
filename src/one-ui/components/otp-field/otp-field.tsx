import type { OTPFieldProps, OTPFieldInputProps, OTPFieldSeparatorProps } from "./otp-field.props"

import { getDataAttributes, resolveClassNames } from "../../utils"

import { OTPFieldPreview as OTPField } from "@base-ui/react"
import { Minus } from "lucide-react"

export const OTPFieldRoot = (props: OTPFieldProps) => {
	const {
		size = "md",
		className,
		children,
		...restProps
	} = props

	return (
		<OTPField.Root
			{...restProps}
			{...getDataAttributes({ size })}
			data-slot="otp-field"
			className={resolveClassNames(className, "otp-field")}
		>
			{children}
		</OTPField.Root>
	)
}

export const OTPFieldInput = (props: OTPFieldInputProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<OTPField.Input
			{...restProps}
			data-slot="otp-field-input"
			className={resolveClassNames(className, "otp-field__input")}
		>
			{children}
		</OTPField.Input>
	)
}

export const OTPFieldSeparator = (props: OTPFieldSeparatorProps) => {
	const {
		className,
		children = <Minus/>,
		...restProps
	} = props

	return (
		<OTPField.Separator
			{...restProps}
			data-slot="otp-field-separator"
			className={resolveClassNames(className, "otp-field__separator")}
		>
			{children}
		</OTPField.Separator>
	)
}