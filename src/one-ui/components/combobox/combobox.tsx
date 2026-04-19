import type {
	ComboboxProps,
} from "./combobox.props"

import { Combobox } from "@base-ui/react"

export const ComboboxRoot = <Value, Multiple extends boolean | undefined = false>(props: ComboboxProps<Value, Multiple>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Combobox.Root {...restProps}>
			{children}
		</Combobox.Root>
	)
}