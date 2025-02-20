import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { OpenChangeReason, Placement } from "@floating-ui/react"
import type { PortalProps } from "@/shared/ui/system"
import type { TooltipVariantsProps } from "./variants"

export type TooltipProps = ComponentProps<
	"div",
	TooltipVariantsProps &
	Pick<PortalProps, "disablePortal"> &
	TooltipOwnProps &
	TooltipStateProps
>

type TooltipOwnProps = {
	arrow?: boolean
	dismissable?: boolean
	placement?: Placement
	offset?: number
	delay?: number
	delayClose?: number
	delayHover?: number
	content?: ReactNode
	slotProps?: TooltipSlotProps
}

type TooltipSlotProps = {
	contentProps?: ComponentProps
	arrowProps?: ComponentProps
}

type TooltipStateProps = {
	defaultOpen?: boolean
	open?: boolean
	onOpenChange?: (open: boolean, reason?: OpenChangeReason) => void
}