"use client"

import type { AccordionContextValue, AccordionProps, GetAccordionItemState } from "./types"

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
		value,
		onValueChange,
		className,
		variant,
		rounded,
		fullWidth,
		children,
		slotProps,
		...restProps
	} = props

	const [state, setState] = useControlledState({
		defaultValue,
		value,
		onValueChange: onValueChange as ((value: string | string[]) => void),
	})

	const getItemState: GetAccordionItemState = (value, options) => {
		const itemValue = value ?? options.valueId
		const disabled = options.disabled || disabledValue?.includes(itemValue)

		const expanded = selectionMode === "single"
			? state === itemValue
			: state.includes(itemValue)

		const toggleExpanded = () => {
			setState?.(
				expanded
					? selectionMode === "single"
						? ""
						: (state as string[]).filter((value) => value !== itemValue)
					: selectionMode === "single"
						? itemValue
						: [...(state as string[]), itemValue]
			)
		}

		return {
			disabled,
			expanded,
			toggleExpanded,
		}
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
		getItemState,
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