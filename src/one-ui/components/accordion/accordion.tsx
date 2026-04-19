import type {
	AccordionProps,
	AccordionItemProps,
	AccordionHeaderProps,
	AccordionTriggerProps,
	AccordionIndicatorProps,
	AccordionPanelProps
} from "./accordion.props"

import { composeComponent, resolveClassNames } from "../../utils"

import { Accordion as AccordionPrimitive } from "@base-ui/react"
import { ChevronDown } from "lucide-react"

const Root = <V = unknown>(props: AccordionProps<V>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<AccordionPrimitive.Root
			{...restProps}
			data-slot="accordion"
			className={resolveClassNames(className, "accordion")}
		>
			{children}
		</AccordionPrimitive.Root>
	)
}

const Item = (props: AccordionItemProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<AccordionPrimitive.Item
			{...restProps}
			data-slot="accordion-item"
			className={resolveClassNames(className, "accordion__item")}
		>
			{children}
		</AccordionPrimitive.Item>
	)
}

const Header = (props: AccordionHeaderProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<AccordionPrimitive.Header
			{...restProps}
			data-slot="accordion-header"
			className={resolveClassNames(className, "accordion__header")}
		>
			{children}
		</AccordionPrimitive.Header>
	)
}

const Trigger = (props: AccordionTriggerProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<AccordionPrimitive.Trigger
			{...restProps}
			data-slot="accordion-trigger"
			className={resolveClassNames(className, "accordion__trigger")}
		>
			{children}
		</AccordionPrimitive.Trigger>
	)
}

const Indicator = (props: AccordionIndicatorProps) => {
	const {
		className,
		children = <ChevronDown/>,
		...restProps
	} = props

	return (
		<span
			{...restProps}
			data-slot="accordion-indicator"
			className={resolveClassNames(className, "accordion__indicator")}
		>
			{children}
		</span>
	)
}

const Panel = (props: AccordionPanelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<AccordionPrimitive.Panel
			{...restProps}
			data-slot="accordion-panel"
			className={resolveClassNames(className, "accordion__panel")}
		>
			{children}
		</AccordionPrimitive.Panel>
	)
}

type AccordionSlots = {
	Item: typeof Item
	Header: typeof Header
	Trigger: typeof Trigger
	Indicator: typeof Indicator
	Panel: typeof Panel
}

export const Accordion = composeComponent<typeof Root, AccordionSlots>(Root, {
	Item,
	Header,
	Trigger,
	Indicator,
	Panel,
})