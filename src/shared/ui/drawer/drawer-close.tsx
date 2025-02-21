"use client"

import type { DrawerCloseProps } from "./types"

import { Slot } from "@/shared/ui/system"

import { useDrawerContext } from "./drawer"

export const DrawerClose = (props: DrawerCloseProps) => {
	const { context } = useDrawerContext()
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