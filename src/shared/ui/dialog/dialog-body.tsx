"use client"

import type { DialogBodyProps } from "./types"

import { useDialogContext } from "./dialog"

export const DialogBody = (props: DialogBodyProps) => {
	const {
		bodyId,
		classNames,
	} = useDialogContext()

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