"use client"

import type { DialogHeaderProps } from "./types"

import { useDialogContext } from "./dialog"

export const DialogHeader = (props: DialogHeaderProps) => {
	const {
		headerId,
		classNames,
	} = useDialogContext()

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