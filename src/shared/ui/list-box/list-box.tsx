"use client"

import type { GetListBoxItemState, ListBoxContextValue, ListBoxProps } from "./types"

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
		value,
		onValueChange,
		className,
		children,
		...restProps
	} = props

	const [state, setState] = useControlledState({
		defaultValue,
		value,
		onValueChange: onValueChange as (value: string | string[]) => void,
	})

	const getItemState: GetListBoxItemState = (value, options) => {
		if (selectionMode === "none") return

		const itemValue = value ?? options.valueId
		const disabled = options.disabled || disabledValue?.includes(itemValue)

		const selected = selectionMode === "single"
			? state === itemValue
			: state.includes(itemValue)

		const toggleSelected = () => {
			if (
				disallowEmptySelection && selected && (
					selectionMode === "single" ||
					selectionMode === "multiple" && state.length === 1
				)
			) return

			setState?.(
				selected
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
			selected,
			toggleSelected,
		}
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
		getItemState,
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