"use client"

import type { DialogCloseProps } from "./types"

import { Slot } from "@/shared/ui/system"

import { useDialogContext } from "./dialog"

export const DialogClose = (props: DialogCloseProps) => {
	const { context } = useDialogContext()
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