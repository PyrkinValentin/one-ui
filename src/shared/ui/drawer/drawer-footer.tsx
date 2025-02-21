"use client"

import type { DrawerFooterProps } from "./types"

import { useDrawerContext } from "./drawer"

export const DrawerFooter = (props: DrawerFooterProps) => {
	const { classNames } = useDrawerContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div
			className={classNames?.footer({ className })}
			{...restProps}
		>
			{children}
		</div>
	)
}