"use client"

import type { DialogFooterProps } from "./types"

import { useDialogContext } from "./dialog"

export const DialogFooter = (props: DialogFooterProps) => {
	const { classNames } = useDialogContext()

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