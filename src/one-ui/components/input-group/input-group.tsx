"use client"

import type { MouseEvent } from "react"
import type { InputGroupProps } from "./input-group.props"

import { resolveClassNames } from "../../utils"
import { focusInputSlot } from "./input-group.utils"

export const InputGroup = (props: InputGroupProps) => {
	const {
		className,
		onClick,
		children,
		...restProps
	} = props

	const handleClick = (ev: MouseEvent<HTMLDivElement>) => {
		onClick?.(ev)
		focusInputSlot(ev)
	}

	return (
		<div
			{...restProps}
			role="group"
			data-slot="input-group"
			className={resolveClassNames(className, "input-group")}
			onClick={handleClick}
		>
			{children}
		</div>
	)
}