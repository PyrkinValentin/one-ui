"use client"

import type { ReactElement } from "react"
import type { TabProps, TabsContextValue, TabsProps } from "./types"

import { use, useMemo } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { Children, createContext, isValidElement } from "react"

import { tabsVariants } from "./variants"
import { Tab } from "./tab"
import { TabPanel } from "./tab-panel"

const TabsContext = createContext<TabsContextValue>({})
export const useTabsContext = () => use(TabsContext)

export const Tabs = (props: TabsProps) => {
	const {
		disabledValue,
		defaultValue,
		value: valueProp,
		onValueChange,
		className,
		variant,
		size,
		color,
		rounded,
		placement,
		fullWidth,
		disabled,
		disableAnimation,
		children,
		slotProps = {},
		...restProps
	} = props

	const {
		tabListProps,
		tabPanelProps,
	} = slotProps

	const items = Children
		.toArray(children)
		.filter<ReactElement<TabProps>>(isValidElement)

	const getDefaultValue = () => {
		if (defaultValue) {
			return defaultValue
		}

		const tab = items.find((item, i) => {
			return !disabledValue?.includes(item.props.value ?? String(i))
		})

		return tab?.props.value ?? "0"
	}

	const [value, setValue] = useControlledState({
		defaultValue: getDefaultValue,
		value: valueProp,
		onValueChange,
	})

	const isDisabled = (itemValue?: string) => {
		return itemValue
			? !!disabledValue?.includes(itemValue)
			: false
	}

	const isSelected = (itemValue?: string) => {
		return value === itemValue
	}

	const onSelect = (itemValue: string) => {
		setValue(itemValue)
	}

	const orientation = !placement
		? "horizontal"
		: ["top", "bottom"].includes(placement)
			? "horizontal"
			: "vertical"

	const classNames = useMemo(() => {
		return tabsVariants({
			variant,
			size,
			color,
			rounded,
			placement,
			fullWidth,
			disabled,
			disableAnimation,
		})
	}, [
		variant,
		size,
		color,
		rounded,
		placement,
		fullWidth,
		disabled,
		disableAnimation,
	])

	const contextValue: TabsContextValue = {
		isDisabled,
		isSelected,
		onSelect,
	}

	return (
		<TabsContext value={contextValue}>
			<div
				className={classNames.base({ className })}
				{...restProps}
			>
				<div
					role="tablist"
					aria-orientation={orientation}
					{...tabListProps}
					className={classNames.tabList({ className: tabListProps?.className })}
				>
					{items.map((item, i) => (
						<Tab
							key={item.key}
							value={String(i)}
							{...item.props}
							className={classNames.tab({ className: item.props.className })}
						/>
					))}
				</div>

				{items.map((item, i) => (
					<TabPanel
						key={item.key}
						value={item.props.value ?? String(i)}
						{...tabPanelProps}
					>
						{item.props.children}
					</TabPanel>
				))}
			</div>
		</TabsContext>
	)
}