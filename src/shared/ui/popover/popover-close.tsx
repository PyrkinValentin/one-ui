"use client"

import type { PopoverCloseProps } from "./types"

import { Slot } from "@/shared/ui/system"

import { usePopoverContext } from "./popover"

export const PopoverClose = (props: PopoverCloseProps) => {
	const { refs, getReferenceProps } = usePopoverContext()

	const { children } = props

	return (
		<Slot ref={refs?.setReference} {...getReferenceProps?.()}>
			{children}
		</Slot>
	)
}