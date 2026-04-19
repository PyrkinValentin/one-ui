import type { FormProps } from "./form.props"

import { Form as Primitive } from "@base-ui/react"

export const Form = <
	FormValues extends Record<string, unknown> = Record<string, unknown>
>(props: FormProps<FormValues>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Primitive
			{...restProps}
			data-slot="form"
		>
			{children}
		</Primitive>
	)
}