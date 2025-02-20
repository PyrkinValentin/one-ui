"use client"

import type { ElementType } from "react"
import type { DropdownMenuItemProps } from "./types"

import { useListBoxContext } from "@/shared/ui/list-box"

import { PopoverClose } from "@/shared/ui/popover"
import { ListBoxItem } from "@/shared/ui/list-box"

export const DropdownMenuItem = <As extends ElementType = "button">(props: DropdownMenuItemProps<As>) => {
	const { selectionMode } = useListBoxContext()

	const {
		children,
		...restProps
	} = props as DropdownMenuItemProps

	return (
		<>
			{selectionMode === "multiple" ? (
				<ListBoxItem {...restProps}>
					{children}
				</ListBoxItem>
			) : (
				<PopoverClose>
					<ListBoxItem {...restProps}>
						{children}
					</ListBoxItem>
				</PopoverClose>
			)}
		</>
	)
}