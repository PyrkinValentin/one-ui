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
		multiple,
		disabledValue,
		defaultValue = [],
		value,
		onValueChange,
		className,
		disabled,
		children,
		...restProps
	} = props

	const [controlledValue, setControlledValue] = useControlledState({
		defaultValue,
		value,
		setValue: onValueChange,
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
				? multiple
					? [...controlledValue, value]
					: [value]
				: multiple
					? controlledValue.filter((v) => v !== value)
					: []
		)
	}

	const classNames = useMemo(() => {
		return accordionVariants({})
	}, [])

	const contextValue: AccordionContextValue = {
		keepMounted,
		disabledItem,
		expandedItem,
		onExpandedChange: handleExpandedChange,
	}

	return (
		<AccordionContext value={contextValue}>
			<div {...restProps}>
				{children}
			</div>
		</AccordionContext>
	)
}