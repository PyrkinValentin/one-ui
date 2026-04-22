import type {
	CollapsibleProps,
	CollapsibleTriggerProps,
	CollapsibleIndicatorProps,
	CollapsiblePanelProps
} from "./collapsible.props"

import { resolveClassNames } from "../../utils"

import { Collapsible } from "@base-ui/react"
import { ChevronRight } from "lucide-react"

export const CollapsibleRoot = (props: CollapsibleProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Collapsible.Root
			{...restProps}
			data-slot="collapsible"
			className={resolveClassNames(className, "collapsible")}
		>
			{children}
		</Collapsible.Root>
	)
}

export const CollapsibleTrigger = (props: CollapsibleTriggerProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Collapsible.Trigger
			{...restProps}
			data-slot="collapsible-trigger"
			className={resolveClassNames(className, "collapsible__trigger")}
		>
			{children}
		</Collapsible.Trigger>
	)
}

export const CollapsibleIndicator = (props: CollapsibleIndicatorProps) => {
	const {
		className,
		children = <ChevronRight/>,
		...restProps
	} = props

	return (
		<span
			{...restProps}
			data-slot="collapsible-indicator"
			className={resolveClassNames(className, "collapsible__indicator")}
		>
			{children}
		</span>
	)
}

export const CollapsiblePanel = (props: CollapsiblePanelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Collapsible.Panel
			{...restProps}
			data-slot="collapsible-panel"
			className={resolveClassNames(className, "collapsible__panel")}
		>
			{children}
		</Collapsible.Panel>
	)
}
