"use client"

import type { AccordionContextValue, AccordionProps } from "./types"

import { use, useMemo } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { createContext } from "react"

import { accordionVariants } from "./variants"

const AccordionContext = createContext<AccordionContextValue>({})
export const useAccordionContext = () => use(AccordionContext)

export const Accordion = (props: AccordionProps) => {
	const {
		keepMounted,
		selectionMode = "single",
		showIndicator = true,
		disabledValue,
		defaultValue = selectionMode === "multiple" ? [] : "",
		value,
		onValueChange,
		slotProps = {},
		className,
		variant,
		compact,
		showDivider,
		fullWidth,
		disabled,
		disableIndicatorAnimation,
		disableAnimation,
		children,
		...restProps
	} = props

	const [controlledValue, setControlledValue] = useControlledState({
		defaultValue,
		value,
		setValue: onValueChange as (value: string | string[]) => void,
	})

	const disabledItem = (value: string) => {
		return disabled || !!disabledValue?.includes(value)
	}

	const expandedItem = (value: string) => {
		return controlledValue.includes(value)
	}

	const handleExpandedChange = (value: string, expanded: boolean) => {
		setControlledValue?.(
			expanded
				? selectionMode === "single"
					? value
					: [...(controlledValue as string[]), value]
				: selectionMode === "single"
					? ""
					: (controlledValue as string[]).filter((v) => v !== value)
		)
	}

	const { base, ...restClassNames } = useMemo(() => {
		return accordionVariants({
			variant,
			compact,
			showDivider,
			fullWidth,
			disabled,
			disableIndicatorAnimation,
			disableAnimation,
		})
	}, [
		variant,
		compact,
		showDivider,
		fullWidth,
		disabled,
		disableIndicatorAnimation,
		disableAnimation,
	])

	const contextValue: AccordionContextValue = {
		keepMounted,
		showIndicator,
		disableAnimation,
		classNames: restClassNames,
		slotProps,
		disabledItem,
		expandedItem,
		onExpandedChange: handleExpandedChange,
	}

	return (
		<AccordionContext value={contextValue}>
			<div
				className={base({ className })}
				{...restProps}
			>
				{children}
			</div>
		</AccordionContext>
	)
}