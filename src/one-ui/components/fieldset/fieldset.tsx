import type { FieldsetProps, FieldsetLegendProps } from "./fieldset.props"

import { resolveClassNames } from "../../utils"

import { Fieldset } from "@base-ui/react"

export const FieldsetRoot = (props: FieldsetProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Fieldset.Root
			{...restProps}
			data-slot="fieldset"
			className={resolveClassNames(className, "fieldset")}
		>
			{children}
		</Fieldset.Root>
	)
}

export const FieldsetLegend = (props: FieldsetLegendProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Fieldset.Legend
			{...restProps}
			data-slot="fieldset-legend"
			className={resolveClassNames(className, "fieldset__legend")}
		>
			{children}
		</Fieldset.Legend>
	)
}