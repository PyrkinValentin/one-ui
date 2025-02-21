"use client"

import type { DrawerTriggerProps } from "./types"

import { Slot } from "@/shared/ui/system"

import { useDrawerContext } from "./drawer"

export const DrawerTrigger = (props: DrawerTriggerProps) => {
	const {
		refs,
		getReferenceProps,
	} = useDrawerContext()

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