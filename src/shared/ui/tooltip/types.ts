import type { ReactNode } from "react"
import type { OpenChangeReason, Placement } from "@floating-ui/react"
import type { ComponentProps } from "@/shared/types/props"
import type { TooltipVariantsProps } from "./variants"

export type TooltipProps = ComponentProps<
	"div",
	TooltipVariantsProps &
	TooltipOwnProps
>

type TooltipOwnProps = {
	dismissable?: boolean
	placement?: Placement
	offset?: number
	delay?: number
	delayClose?: number
	delayHover?: number
	keepMounted?: boolean
	disablePortal?: boolean
	defaultOpen?: boolean
	open?: boolean
	onOpenChange?: (open: boolean, reason?: OpenChangeReason) => void
	content?: ReactNode
}