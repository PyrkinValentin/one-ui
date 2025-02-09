"use client"

import type { ListBoxContextValue, ListBoxProps } from "./types"

import { use, useMemo } from "react"

import { Children, createContext } from "react"

import { listBoxVariants } from "./variants"

const ListBoxContext = createContext<ListBoxContextValue>({})
export const useListBoxContext = () => use(ListBoxContext)

export const ListBox = (props: ListBoxProps) => {
	const {
		showEmptyContent = true,
		showSelectedIcon = true,
		selectionMode = "none",
		emptyContent = "Список пуст",
		disabledValue,
		defaultValue = selectionMode === "multiple" ? [] : "",
		value,
		onValueChange,
		slotProps = {},
		className,
		variant,
		color,
		disableAnimation,
		children,
		...restProps
	} = props

	const classNames = useMemo(() => {
		return listBoxVariants()
	}, [])

	const contextValue: ListBoxContextValue = {
		showSelectedIcon,
		selectionMode,
		variant,
		color,
		disableAnimation,
		slotProps,
	}

	return (
		<ListBoxContext value={contextValue}>
			<ul
				role="listbox"
				aria-multiselectable={selectionMode === "multiple" || undefined}
				className={classNames.base({ className })}
				{...restProps}
			>
				{showEmptyContent && !Children.count(children) ? (
					<li>
						<div className={classNames.emptyContent()}>
							{emptyContent}
						</div>
					</li>
				) : children}
			</ul>
		</ListBoxContext>
	)
}