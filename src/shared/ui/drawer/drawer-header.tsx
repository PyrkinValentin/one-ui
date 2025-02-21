"use client"

import type { DrawerHeaderProps } from "./types"

import { useDrawerContext } from "./drawer"

export const DrawerHeader = (props: DrawerHeaderProps) => {
	const {
		headerId,
		classNames,
	} = useDrawerContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<header
			id={headerId}
			className={classNames?.header({ className })}
			{...restProps}
		>
			{children}
		</header>
	)
}