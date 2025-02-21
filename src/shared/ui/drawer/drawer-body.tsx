"use client"

import type { DrawerBodyProps } from "./types"

import { useDrawerContext } from "./drawer"

export const DrawerBody = (props: DrawerBodyProps) => {
	const { classNames } = useDrawerContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div
			className={classNames?.body({ className })}
			{...restProps}
		>
			{children}
		</div>
	)
}