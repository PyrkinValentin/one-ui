import type { Tooltip } from "@base-ui/react"
import type { SafetyPick } from "../../types"

export type TooltipProps<P = unknown> = Tooltip.Root.Props<P>
export type TooltipTriggerProps<P = unknown> = Tooltip.Trigger.Props<P>

export type TooltipPopupProps = Tooltip.Popup.Props & SafetyPick<Tooltip.Portal.Props,
	| "keepMounted"
> & SafetyPick<Tooltip.Positioner.Props,
	| "disableAnchorTracking"
	| "side"
	| "sideOffset"
	| "align"
	| "alignOffset"
> & {
	arrow?: boolean
}