"use client"

import type { PopoverCloseProps } from "./types"

import { Slot } from "@/shared/ui/system"

import { usePopoverContext } from "./popover"

export const PopoverClose = (props: PopoverCloseProps) => {
	const { context } = usePopoverContext()

	const { children } = props

	const handleClick = () => {
		context?.onOpenChange(false, undefined, "click")
	}

	return (
		<Slot onClick={handleClick}>
			{children}
		</Slot>
	)
}