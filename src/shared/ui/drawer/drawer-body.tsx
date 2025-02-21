"use client"

import type { DrawerBodyProps } from "./types"

import { useDrawerContext } from "./drawer"

export const DrawerBody = (props: DrawerBodyProps) => {
	const {
		bodyId,
		classNames,
	} = useDrawerContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div
			id={bodyId}
			className={classNames?.body({ className })}
			{...restProps}
		>
			{children}
		</div>
	)
}