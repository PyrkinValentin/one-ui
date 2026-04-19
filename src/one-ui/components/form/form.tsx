import type { FormProps } from "./form.props"

import { Form } from "@base-ui/react"

export const FormRoot = <
	FormValues extends Record<string, unknown> = Record<string, unknown>
>(props: FormProps<FormValues>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Form
			{...restProps}
			data-slot="form"
		>
			{children}
		</Form>
	)
}