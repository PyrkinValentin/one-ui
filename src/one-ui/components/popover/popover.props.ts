import type { Popover } from "@base-ui/react"
import type { SafetyPick } from "../../types"

export type PopoverProps<P = unknown> = Popover.Root.Props<P>
export type PopoverTriggerProps<P = unknown> = Popover.Trigger.Props<P>

export type PopoverPopupProps = Popover.Popup.Props & SafetyPick<Popover.Portal.Props,
	| "keepMounted"
> & SafetyPick<Popover.Positioner.Props,
	| "disableAnchorTracking"
	| "side"
	| "sideOffset"
	| "align"
	| "alignOffset"
> & {
	arrow?: boolean
}

export type PopoverTitleProps = Popover.Title.Props
export type PopoverDescriptionProps = Popover.Description.Props
export type PopoverCloseProps = Popover.Close.Props