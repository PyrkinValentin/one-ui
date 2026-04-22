import type { ComponentProps } from "react"
import type { Collapsible } from "@base-ui/react"

export type CollapsibleProps = Collapsible.Root.Props
export type CollapsibleTriggerProps = Collapsible.Trigger.Props
export type CollapsibleIndicatorProps = ComponentProps<"span">
export type CollapsiblePanelProps = Collapsible.Panel.Props