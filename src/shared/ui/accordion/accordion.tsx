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
		hideIndicator,
		keepMounted,
		compact,
		selectionMode = "single",
		disabledValue,
		defaultValue = selectionMode === "multiple" ? [] : "",
		value: valueProp,
		onValueChange,
		className,
		variant,
		rounded,
		fullWidth,
		children,
		slotProps,
		...restProps
	} = props

	const [value, setValue] = useControlledState({
		defaultValue,
		value: valueProp,
		onValueChange: onValueChange as ((value: string | string[]) => void),
	})

	const isDisabled = (itemValue: string) => {
		return !!disabledValue?.includes(itemValue)
	}

	const isExpanded = (itemValue: string) => {
		return selectionMode === "single"
			? value === itemValue
			: value.includes(itemValue)
	}

	const onExpand = (itemValue: string, expanded: boolean) => {
		setValue(
			expanded
				? selectionMode === "single"
					? ""
					: (value as string[]).filter((v) => v !== itemValue)
				: selectionMode === "single"
					? itemValue
					: [...(value as string[]), itemValue]
		)
	}

	const classNames = useMemo(() => {
		return accordionVariants({
			className,
			variant,
			rounded,
			fullWidth,
		})
	}, [
		className,
		variant,
		rounded,
		fullWidth,
	])

	const contextValue: AccordionContextValue = {
		hideIndicator,
		keepMounted,
		variant,
		rounded,
		compact,
		slotProps,
		isDisabled,
		isExpanded,
		onExpand,
	}

	return (
		<AccordionContext value={contextValue}>
			<div
				className={classNames}
				{...restProps}
			>
				{children}
			</div>
		</AccordionContext>
	)
}