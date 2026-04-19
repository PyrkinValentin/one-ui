import type { TabsProps, TabsListProps, TabsTabProps, TabsIndicatorProps, TabsPanelProps } from "./tabs.props"

import { getDataAttributes, resolveClassNames } from "../../utils"

import { Tabs } from "@base-ui/react"

export const TabsRoot = (props: TabsProps) => {
	const {
		size = "md",
		color = "default",
		className,
		children,
		...restProps
	} = props

	return (
		<Tabs.Root
			{...restProps}
			{...getDataAttributes({ size, color })}
			data-slot="tabs"
			className={resolveClassNames(className, "tabs")}
		>
			{children}
		</Tabs.Root>
	)
}

export const TabsList = (props: TabsListProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Tabs.List
			{...restProps}
			data-slot="tabs-list"
			className={resolveClassNames(className, "tabs__list")}
		>
			{children}
		</Tabs.List>
	)
}

export const TabsTab = (props: TabsTabProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Tabs.Tab
			{...restProps}
			data-slot="tabs-tab"
			className={resolveClassNames(className, "tabs__tab")}
		>
			{children}
		</Tabs.Tab>
	)
}

export const TabsIndicator = (props: TabsIndicatorProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Tabs.Indicator
			{...restProps}
			data-slot="tabs-indicator"
			className={resolveClassNames(className, "tabs__indicator")}
		>
			{children}
		</Tabs.Indicator>
	)
}

export const TabsPanel = (props: TabsPanelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Tabs.Panel
			{...restProps}
			data-slot="tabs-panel"
			className={resolveClassNames(className, "tabs__panel")}
		>
			{children}
		</Tabs.Panel>
	)
}