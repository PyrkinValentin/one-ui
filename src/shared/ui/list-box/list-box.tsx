"use client"

import type { ListBoxContextValue, ListBoxProps } from "./types"

import { use, useMemo } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { Children, createContext } from "react"

import { listBoxVariants } from "./variants"

const ListBoxContext = createContext<ListBoxContextValue>({})
export const useListBoxContext = () => use(ListBoxContext)

export const ListBox = (props: ListBoxProps) => {
	const {
		disallowEmptySelection,
		hideEmptyContent,
		hideSelectedIcon,
		emptyContent = "Список пуст",
		selectionMode = "none",
		selectedIcon,
		variant,
		color,
		disabled,
		disableAnimation,
		disabledValue,
		defaultValue = selectionMode === "multiple" ? [] : "",
		value,
		onValueChange,
		slotProps = {},
		className,
		children,
		...restProps
	} = props

	const {
		emptyContentProps,
		...restSlotProps
	} = slotProps

	const [controlledValue, setControlledValue] = useControlledState({
		defaultValue,
		value,
		onValueChange: onValueChange as (value: string | string[]) => void,
	})

	const disabledItem = (value: string) => {
		return !!disabledValue?.includes(value)
	}

	const selectedItem = (value: string) => {
		if (selectionMode === "none") return

		return selectionMode === "single"
			? controlledValue === value
			: controlledValue.includes(value)
	}

	const handleValueChange = (value: string, selected: boolean) => {
		if (
			selectionMode === "none" ||
			disallowEmptySelection && !selected && (
				selectionMode === "single" ||
				selectionMode === "multiple" && controlledValue.length === 1
			)
		) return

		setControlledValue?.(
			selected
				? selectionMode === "single"
					? value
					: [...(controlledValue as string[]), value]
				: selectionMode === "single"
					? ""
					: (controlledValue as string[]).filter((v) => v !== value)
		)
	}

	const classNames = useMemo(() => {
		return listBoxVariants()
	}, [])

	const contextValue: ListBoxContextValue = {
		hideSelectedIcon,
		selectionMode,
		selectedIcon,
		variant,
		color,
		disabled,
		disableAnimation,
		disabledItem,
		selectedItem,
		onValueChange: handleValueChange,
		slotProps: restSlotProps,
	}

	return (
		<ListBoxContext value={contextValue}>
			<ul
				role="listbox"
				aria-multiselectable={selectionMode === "multiple" || undefined}
				className={classNames.base({ className })}
				{...restProps}
			>
				{!hideEmptyContent && !Children.count(children) ? (
					<li
						{...emptyContentProps}
						className={classNames.emptyContent({ className: emptyContentProps?.className })}
					>
						{emptyContent}
					</li>
				) : children}
			</ul>
		</ListBoxContext>
	)
}