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
		<footer
			className={classNames?.footer({ className })}
			{...restProps}
		>
			{children}
		</footer>
	)
}