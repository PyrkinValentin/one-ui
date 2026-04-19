export type * from "./popover.props"

import { composeComponent } from "../../utils"

import {
	PopoverRoot,
	PopoverTrigger,
	PopoverPortal,
	PopoverBackdrop,
	PopoverPositioner,
	PopoverPopup,
	PopoverArrow,
	PopoverTitle,
	PopoverDescription,
	PopoverClose,
	popoverCreateHandle,
} from "./popover"

type PopoverSlots = {
	Trigger: typeof PopoverTrigger
	Portal: typeof PopoverPortal
	Backdrop: typeof PopoverBackdrop
	Positioner: typeof PopoverPositioner
	Popup: typeof PopoverPopup
	Arrow: typeof PopoverArrow
	Title: typeof PopoverTitle
	Description: typeof PopoverDescription
	Close: typeof PopoverClose
	createHandle: typeof popoverCreateHandle
}

export const Popover = composeComponent<typeof PopoverRoot, PopoverSlots>(PopoverRoot, {
	Trigger: PopoverTrigger,
	Portal: PopoverPortal,
	Backdrop: PopoverBackdrop,
	Positioner: PopoverPositioner,
	Popup: PopoverPopup,
	Arrow: PopoverArrow,
	Title: PopoverTitle,
	Description: PopoverDescription,
	Close: PopoverClose,
	createHandle: popoverCreateHandle,
})