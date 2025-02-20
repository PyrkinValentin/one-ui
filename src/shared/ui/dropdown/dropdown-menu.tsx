import type { DropdownMenuProps } from "./types"

import { PopoverContent } from "@/shared/ui/popover"
import { ListBox } from "@/shared/ui/list-box"

export const DropdownMenu = (props: DropdownMenuProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<PopoverContent>
			<ListBox {...restProps}>
				{children}
			</ListBox>
		</PopoverContent>
	)
}