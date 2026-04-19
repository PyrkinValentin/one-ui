import type { Tabs } from "@base-ui/react"

export type TabsProps = Tabs.Root.Props & {
	size?: "sm" | "md" | "lg"
	color?: "default" | "primary" | "success" | "warning" | "danger"
}

export type TabsListProps = Tabs.List.Props
export type TabsTabProps = Tabs.Tab.Props
export type TabsIndicatorProps = Tabs.Indicator.Props
export type TabsPanelProps = Tabs.Panel.Props