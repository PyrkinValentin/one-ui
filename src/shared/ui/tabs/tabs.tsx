"use client"

import type { TabProps, TabsContextValue, TabsProps } from "./types"

import { use, useMemo } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { Children, createContext, cloneElement, isValidElement } from "react"

import { tabsVariants } from "./variants"
import { Tab } from "./tab"

const TabsContext = createContext<TabsContextValue>({})
export const useTabsContext = () => use(TabsContext)

export const Tabs = (props: TabsProps) => {
	const {
		disabledValue,
		defaultValue,
		value,
		onValueChange,
		slotProps = {},
		className,
		variant,
		size,
		color,
		rounded,
		placement,
		fullWidth,
		disabled,
		children,
		...restProps
	} = props

	const {
		tabListProps,
		tabPanelProps,
	} = slotProps

	const collection = Children.map(children, (child, i) => {
		return isValidElement<TabProps>(child)
			? child.props.value
				? child
				: cloneElement(child, { value: String(i) })
			: null
	})

	const tabs = collection ?? []

	const getDefaultValue = () => {
		if (defaultValue) {
			return defaultValue
		}

		const tab = tabs.find((tab) => {
			const { disabled, value } = tab.props

			return !disabled && value
				? !disabledValue?.includes(value)
				: false
		})

		return tab?.props.value ?? tabs.at(0)?.props.value ?? "0"
	}

	const [controlledValue, setControlledValue] = useControlledState({
		defaultValue: getDefaultValue,
		value,
		setValue: onValueChange,
	})

	const disabledTab = (value?: string) => {
		return value
			? !!disabledValue?.includes(value)
			: false
	}

	const selectedTab = (value?: string) => {
		return controlledValue === value
	}

	const handleValueChange = (value?: string) => {
		if (value) {
			setControlledValue?.(value)
		}
	}

	const classNames = useMemo(() => {
		return tabsVariants({
			variant,
			size,
			color,
			rounded,
			placement,
			fullWidth,
			disabled,
		})
	}, [
		variant,
		size,
		color,
		rounded,
		placement,
		fullWidth,
		disabled,
	])

	const contextValue: TabsContextValue = {
		disabledTab,
		selectedTab,
		onValueChange: handleValueChange,
	}

	return (
		<TabsContext value={contextValue}>
			<div
				className={classNames.base({ className })}
				{...restProps}
			>
				<div
					role="tablist"
					aria-orientation="horizontal"
					{...tabListProps}
					className={classNames.tabList({ className: tabListProps?.className })}
				>
					{tabs.map((tab) => (
						<Tab
							key={tab.props.value}
							{...tab.props}
							className={classNames.tab({ className: tab.props.className })}
						/>
					))}
				</div>

				{tabs.map((tab) => (
					selectedTab(tab.props.value) ? (
						<div
							key={tab.props.value}
							role="tabpanel"
							aria-labelledby={`tab-${tab.props.value}`}
							id={`tabPanel-${tab.props.value}`}
							{...tabPanelProps}
						>
							{tab.props.children}
						</div>
					) : null
				))}
			</div>
		</TabsContext>
	)
}