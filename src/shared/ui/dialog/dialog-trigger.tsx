"use client"

import type { DialogTriggerProps } from "./types"

import { Slot } from "@/shared/ui/system"

import { useDialogContext } from "./dialog"

export const DialogTrigger = (props: DialogTriggerProps) => {
	const {
		refs,
		getReferenceProps,
	} = useDialogContext()

	const { children } = props

	return (
		<Slot
			ref={refs?.setReference}
			{...getReferenceProps?.()}
		>
			{children}
		</Slot>
	)
}