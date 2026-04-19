import type { ComponentProps } from "react"
import type { Accordion } from "@base-ui/react"

export type AccordionProps<Value = unknown> = Accordion.Root.Props<Value>
export type AccordionItemProps = Accordion.Item.Props
export type AccordionHeaderProps = Accordion.Header.Props
export type AccordionTriggerProps = Accordion.Trigger.Props
export type AccordionIndicatorProps = ComponentProps<"span">
export type AccordionPanelProps = Accordion.Panel.Props