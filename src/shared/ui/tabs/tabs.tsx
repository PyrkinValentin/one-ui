"use client"

import type { TabCollection, TabsProps } from "./types"

import { useMemo } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { Children, cloneElement, isValidElement } from "react"

import { tabsVariants } from "./variants"
import { Tab } from "./tab"

const HORIZONTAL_PLACEMENTS = ["top", "bottom"]

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
		disableAnimation,
		children,
		...restProps
	} = props

	const {
		tabListProps,
		tabPanelProps,
	} = slotProps

	const collection = Children.map(children, (child, i) => {
		return isValidElement<TabCollection>(child)
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
			return !disabled &&
				!tab.props.disabled &&
				!disabledValue?.includes(tab.props.value)
		})

		return tab?.props.value ?? tabs.at(0)?.props.value ?? "0"
	}

	const [controlledValue, setControlledValue] = useControlledState({
		defaultValue: getDefaultValue,
		value,
		setValue: onValueChange,
	})

	const getOrientation = () => {
		return !placement || HORIZONTAL_PLACEMENTS.includes(placement)
			? "horizontal"
			: "vertical"
	}

	const handleClick = (value: string) => {
		setControlledValue?.(value)
	}

	const isDisabled = (value: string) => {
		return disabled || disabledValue?.includes(value)
	}

	const isSelected = (value: string) => {
		return controlledValue === value
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
				{tabs.map((tab) => {
					const {
						label,
						value,
						className,
						onClick,
						...restTabProps
					} = tab.props

					return (
						<Tab
							key={tab.key}
							role="tab"
							id={`tab-${value}`}
							aria-controls={`tabPanel-${value}`}
							aria-selected={isSelected(value) || undefined}
							disabled={isDisabled(value)}
							className={classNames.tab({ className })}
							onClick={(ev) => {
								onClick?.(ev)
								handleClick(value)
							}}
							{...restTabProps}
						>
							{label}
						</Tab>
					)
				})}
			</div>

			{tabs.map((tab) => {
				const { value, children } = tab.props

				if (!isSelected(value)) {
					return null
				}

				return (
					<div
						key={tab.key}
						role="tabpanel"
						id={`tabPanel-${value}`}
						aria-labelledby={`tab-${value}`}
						{...tabPanelProps}
						className={classNames.tabPanel({ className: tabPanelProps?.className })}
					>
						{children}
					</div>
				)
			})}
		</div>
	)
}