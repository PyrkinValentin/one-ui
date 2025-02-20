import type { DropdownCloseProps } from "./types"

import { PopoverClose } from "@/shared/ui/popover"

export const DropdownClose = (props: DropdownCloseProps) => {
	const { children } = props

	return (
		<PopoverClose>
			{children}
		</PopoverClose>
	)
}