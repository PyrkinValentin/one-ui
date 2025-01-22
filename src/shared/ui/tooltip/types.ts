import type { ReactNode } from "react"
import type { OpenChangeReason, Placement } from "@floating-ui/react"
import type { ComponentProps } from "@/shared/types/props"
import type { PortalProps } from "@/shared/ui/system"
import type { TooltipVariantsProps } from "./variants"

export type TooltipProps = ComponentProps<
	"div",
	TooltipVariantsProps &
	Pick<PortalProps, "disablePortal"> &
	TooltipOwnProps
>

type TooltipOwnProps = {
	dismissable?: boolean
	placement?: Placement
	offset?: number
	delay?: number
	delayClose?: number
	delayHover?: number
	defaultOpen?: boolean
	open?: boolean
	onOpenChange?: (open: boolean, reason?: OpenChangeReason) => void
	content?: ReactNode
}