"use client"

import type { ListBoxContextValue, ListBoxProps } from "./types"

import { use, useMemo } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { createContext } from "react"

import { listBoxVariants } from "./variants"

const ListBoxContext = createContext<ListBoxContextValue>({})
export const useListBoxContext = () => use(ListBoxContext)

export const ListBox = (props: ListBoxProps) => {
	const {
		disallowEmptySelection,
		hideSelectedIcon,
		selectedIcon,
		variant,
		color,
		disableAnimation,
		selectionMode = "none",
		disabledValue,
		defaultValue = selectionMode === "multiple" ? [] : "",
		value: valueProp,
		onValueChange,
		className,
		children,
		slotProps,
		...restProps
	} = props

	const [value, setValue] = useControlledState({
		defaultValue,
		value: valueProp,
		onValueChange: onValueChange as (value: string | string[]) => void,
	})

	const isDisabled = (itemValue: string) => {
		return !!disabledValue?.includes(itemValue)
	}

	const isSelected = (itemValue: string) => {
		if (selectionMode === "none") return false

		return selectionMode === "single"
			? value === itemValue
			: value.includes(itemValue)
	}

	const onSelected = (itemValue: string, selected: boolean) => {
		if (
			selectionMode === "none" ||
			disallowEmptySelection && selected && (
				selectionMode === "single" ||
				selectionMode === "multiple" && value.length === 1
			)
		) return

		setValue?.(
			selected
				? selectionMode === "single"
					? ""
					: (value as string[]).filter((v) => v !== itemValue)
				: selectionMode === "single"
					? itemValue
					: [...(value as string[]), itemValue]
		)
	}

	const classNames = useMemo(() => {
		return listBoxVariants({ className })
	}, [className])

	const contextValue: ListBoxContextValue = {
		hideSelectedIcon,
		selectedIcon,
		selectionMode,
		variant,
		color,
		disableAnimation,
		slotProps,
		isDisabled,
		isSelected,
		onSelected,
	}

	return (
		<ListBoxContext value={contextValue}>
			<ul
				role="listbox"
				aria-multiselectable={selectionMode === "multiple" || undefined}
				className={classNames}
				{...restProps}
			>
				{children}
			</ul>
		</ListBoxContext>
	)
}