import type { ReactNode } from "react"
import type { OpenChangeReason, Placement } from "@floating-ui/react"
import type { ComponentProps } from "@/shared/types/props"
import type { TooltipVariantsProps } from "./variants"

export type TooltipProps = ComponentProps<
	"span",
	// TooltipVariantsProps &
	TooltipOwnProps
>

type TooltipOwnProps = {
	shouldAutoUpdate?: boolean
	shouldFlip?: boolean
	shouldShift?: boolean
	shouldSafePolygon?: boolean
	closeWhenAncestorScroll?: boolean
	closeWhenEscapeKey?: boolean
	closeWhenOutsidePress?: boolean
	closeWhenReferencePress?: boolean
	dismissable?: boolean
	arrow?: boolean
	placement?: Placement
	offset?: number
	offsetCross?: number
	offsetAxis?: number
	delay?: number
	delayClose?: number
	delayHover?: number
	disablePortal?: boolean
	defaultOpen?: boolean
	open?: boolean
	onOpenChange?: (open: boolean, ev: Event, reason?: OpenChangeReason) => void
	content?: ReactNode
}