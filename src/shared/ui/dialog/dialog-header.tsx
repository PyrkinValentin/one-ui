"use client"

import type { DialogHeaderProps } from "./types"

import { useDialogContext } from "./dialog"

export const DialogHeader = (props: DialogHeaderProps) => {
	const { classNames } = useDialogContext()

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