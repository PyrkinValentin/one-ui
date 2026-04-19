export type * from "./tooltip.props"

import { composeComponent } from "../../utils"

import {
	TooltipProvider,
	TooltipRoot,
	TooltipTrigger,
	TooltipPortal,
	TooltipPositioner,
	TooltipPopup,
	TooltipArrow,
	tooltipCreateHandle,
} from "./tooltip"

type TooltipSlots = {
	Provider: typeof TooltipProvider
	Trigger: typeof TooltipTrigger
	Portal: typeof TooltipPortal
	Positioner: typeof TooltipPositioner
	Popup: typeof TooltipPopup
	Arrow: typeof TooltipArrow
	createHandle: typeof tooltipCreateHandle
}

export const Tooltip = composeComponent<typeof TooltipRoot, TooltipSlots>(TooltipRoot, {
	Provider: TooltipProvider,
	Trigger: TooltipTrigger,
	Portal: TooltipPortal,
	Positioner: TooltipPositioner,
	Popup: TooltipPopup,
	Arrow: TooltipArrow,
	createHandle: tooltipCreateHandle,
})