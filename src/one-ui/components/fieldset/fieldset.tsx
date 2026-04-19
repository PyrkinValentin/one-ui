import type { FieldsetProps, FieldsetLegendProps } from "./fieldset.props"

import { composeComponent, resolveClassNames } from "../../utils"

import { Fieldset as FieldsetPrimitive } from "@base-ui/react"

const Root = (props: FieldsetProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<FieldsetPrimitive.Root
			{...restProps}
			data-slot="fieldset"
			className={resolveClassNames(className, "fieldset")}
		>
			{children}
		</FieldsetPrimitive.Root>
	)
}

const Legend = (props: FieldsetLegendProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<FieldsetPrimitive.Legend
			{...restProps}
			data-slot="fieldset-legend"
			className={resolveClassNames(className, "fieldset__legend")}
		>
			{children}
		</FieldsetPrimitive.Legend>
	)
}

type FieldsetSlots = {
	Legend: typeof Legend
}

export const Fieldset = composeComponent<typeof Root, FieldsetSlots>(Root, {
	Legend,
})