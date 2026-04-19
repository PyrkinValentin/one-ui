import type {
	AccordionProps,
	AccordionItemProps,
	AccordionHeaderProps,
	AccordionTriggerProps,
	AccordionIndicatorProps,
	AccordionPanelProps,
} from "./accordion.props"

import { resolveClassNames } from "../../utils"

import { Accordion } from "@base-ui/react"
import { ChevronDown } from "lucide-react"

export const AccordionRoot = <Value = unknown>(props: AccordionProps<Value>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Accordion.Root
			{...restProps}
			data-slot="accordion"
			className={resolveClassNames(className, "accordion")}
		>
			{children}
		</Accordion.Root>
	)
}

export const AccordionItem = (props: AccordionItemProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Accordion.Item
			{...restProps}
			data-slot="accordion-item"
			className={resolveClassNames(className, "accordion__item")}
		>
			{children}
		</Accordion.Item>
	)
}

export const AccordionHeader = (props: AccordionHeaderProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Accordion.Header
			{...restProps}
			data-slot="accordion-header"
			className={resolveClassNames(className, "accordion__header")}
		>
			{children}
		</Accordion.Header>
	)
}

export const AccordionTrigger = (props: AccordionTriggerProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Accordion.Trigger
			{...restProps}
			data-slot="accordion-trigger"
			className={resolveClassNames(className, "accordion__trigger")}
		>
			{children}
		</Accordion.Trigger>
	)
}

export const AccordionIndicator = (props: AccordionIndicatorProps) => {
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

export const AccordionPanel = (props: AccordionPanelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Accordion.Panel
			{...restProps}
			data-slot="accordion-panel"
			className={resolveClassNames(className, "accordion__panel")}
		>
			{children}
		</Accordion.Panel>
	)
}