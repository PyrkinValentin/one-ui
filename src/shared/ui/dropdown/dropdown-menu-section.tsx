import type { DropdownMenuSectionProps } from "./types"

import { ListBoxSection } from "@/shared/ui/list-box"

export const DropdownMenuSection = (props: DropdownMenuSectionProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<ListBoxSection {...restProps}>
			{children}
		</ListBoxSection>
	)
}