"use client"

import type { PopoverTriggerProps } from "./types"

import { Slot } from "@/shared/ui/system"

import { usePopoverContext } from "./popover"

export const PopoverTrigger = (props: PopoverTriggerProps) => {
	const {
		refs,
		classNames,
		getReferenceProps,
	} = usePopoverContext()

	const { children } = props

	return (
		<Slot
			ref={refs?.setReference}
			className={classNames?.trigger()}
			{...getReferenceProps?.()}
		>
			{children}
		</Slot>
	)
}