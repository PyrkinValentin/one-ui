"use client"

import type { PortalProps } from "./types"

import { useEffect, useState } from "react"

import { createPortal } from "react-dom"
import { isRefObject } from "@/shared/helpers/is-ref-object"

export const Portal = (props: PortalProps) => {
	const {
		disablePortal,
		container,
		key,
		children,
	} = props

	const [domContainer, setDomContainer] = useState<Element | null>(null)

	useEffect(() => {
		if (disablePortal) return

		setDomContainer(
			isRefObject(container)
				? container.current
				: container
					? container
					: document.body
		)
	}, [
		container,
		disablePortal,
	])

	if (disablePortal) {
		return (
			<>{children}</>
		)
	}

	return (
		<>
			{domContainer
				? createPortal(children, domContainer, key)
				: null
			}
		</>
	)
}