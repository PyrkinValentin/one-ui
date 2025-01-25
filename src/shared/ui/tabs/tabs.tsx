"use client"

import type { TabProps, TabsProps } from "./types"

import { useMemo } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { Children, cloneElement, isValidElement } from "react"

import { tabsVariants } from "./variants"
import { Tab } from "./tab"

type TabCollection = TabProps & { value: string }

const horizontalPlacements = ["top", "bottom"]

export const Tabs = (props: TabsProps) => {
	const {
		disabledValues,
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
		disableAnimation,
		children,
		...restProps
	} = props

	const {
		tabListProps,
		tabPanelProps,
	} = slotProps

	const collection = Children.map(children, (item, i) => {
		return isValidElement<TabCollection>(item)
			? item.props.value
				? item
				: cloneElement(item, { value: String(i) })
			: null
	})

	const tabs = collection ?? []

	const getDefaultValue = () => {
		if (defaultValue) {
			return defaultValue
		}

		const tab = tabs.find((tab) => {
			return !tab.props.disabled && !disabledValues?.includes(tab.props.value)
		})

		return tab?.props.value
	}

	const [controlledValue, setControlledValue] = useControlledState({
		defaultValue: getDefaultValue,
		value,
		setValue: onValueChange,
	})

	const isSelected = (value: string) => {
		return controlledValue === value
	}

	const handleClick = (value: string) => {
		setControlledValue?.(value)
	}

	const getOrientation = () => {
		return !placement || horizontalPlacements.includes(placement)
			? "horizontal"
			: "vertical"
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

	return (
		<div className={classNames.base({ className })} {...restProps}>
			<div
				role="tablist"
				aria-orientation={getOrientation()}
				{...tabListProps}
				className={classNames.tabList({ className: tabListProps?.className })}
			>
				{tabs.map(({ props: { label, value, onClick, ...restTabProps } }) => (
					<Tab
						key={value}
						value={value}
						aria-selected={isSelected(value) || undefined}
						aria-disabled={disabled || restTabProps.disabled}
						tabIndex={disabled || restTabProps.disabled ? -1 : undefined}
						{...restTabProps}
						className={classNames.tab({ className: restTabProps.className })}
						onClick={(ev) => {
							onClick?.(ev)
							handleClick(value)
						}}
					>
						{label}
					</Tab>
				))}
			</div>

			{tabs.map(({ props: { value, children } }) => isSelected(value) ? (
				<div
					key={value}
					role="tabpanel"
					id={`tabpanel-${value}`}
					aria-labelledby={`tab-${value}`}
					{...tabPanelProps}
					className={classNames.tabPanel({ className: tabPanelProps?.className })}
				>
					{children}
				</div>
			) : null)}
		</div>
	)
}