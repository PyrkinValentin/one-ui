"use client"

import type { PopoverTriggerProps } from "./types"

import { Slot } from "@/shared/ui/system"

import { usePopoverContext } from "./popover"

export const PopoverTrigger = (props: PopoverTriggerProps) => {
	const { children } = props

	const {
		refs,
		slots,
		getReferenceProps,
	} = usePopoverContext()

	return (
		<Slot
			ref={refs?.setReference}
			className={slots?.trigger()}
			{...getReferenceProps?.()}
		>
			{children}
		</Slot>
	)
}