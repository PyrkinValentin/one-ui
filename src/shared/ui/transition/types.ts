import type { ComponentProps } from "@/shared/types/props"

export type CollapseProps = ComponentProps<"div", CollapseOwnProps>

type CollapseOwnProps = {
	keepMounted?: boolean
	open?: boolean
	duration?: number
}