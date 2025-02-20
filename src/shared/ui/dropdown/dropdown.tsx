import type { DropdownProps } from "./types"

import { useMemo } from "react"

import { Popover } from "../popover"

import { dropdownVariants } from "./variants"

export const Dropdown = (props: DropdownProps) => {
	const {
		children,
		slotProps = {},
		...restProps
	} = props

	const {
		backdropProps,
		contentProps,
		...restSlotProps
	} = slotProps

	const classNames = useMemo(() => {
		return dropdownVariants({ className: contentProps?.className })
	}, [contentProps?.className])

	return (
		<Popover
			role="menu"
			slotProps={{
				...restSlotProps,
				backdropProps: {
					lockScroll: true,
					...backdropProps,
				},
				contentProps: {
					...contentProps,
					className: classNames,
				},
			}}
			{...restProps}
		>
			{children}
		</Popover>
	)
}