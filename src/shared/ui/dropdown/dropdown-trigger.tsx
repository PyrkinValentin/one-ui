import type { DropdownTriggerProps } from "./types"

import { PopoverTrigger } from "@/shared/ui/popover"

export const DropdownTrigger = (props: DropdownTriggerProps) => {
	const { children } = props

	return (
		<PopoverTrigger>
			{children}
		</PopoverTrigger>
	)
}