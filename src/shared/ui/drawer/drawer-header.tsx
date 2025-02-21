"use client"

import type { DrawerHeaderProps } from "./types"

import { useDrawerContext } from "./drawer"

export const DrawerHeader = (props: DrawerHeaderProps) => {
	const { classNames } = useDrawerContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div
			className={classNames?.header({ className })}
			{...restProps}
		>
			{children}
		</div>
	)
}