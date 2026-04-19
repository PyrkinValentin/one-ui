export type * from "./dialog.props"

import { composeComponent } from "../../utils"

import {
	DialogRoot,
	DialogTrigger,
	DialogPortal,
	DialogBackdrop,
	DialogViewport,
	DialogPopup,
	DialogDismiss,
	DialogTitle,
	DialogDescription,
	DialogActions,
	DialogClose,
	dialogCreateHandle,
} from "./dialog"

type DialogSlots = {
	Trigger: typeof DialogTrigger
	Portal: typeof DialogPortal
	Backdrop: typeof DialogBackdrop
	Viewport: typeof DialogViewport
	Popup: typeof DialogPopup
	Dismiss: typeof DialogDismiss
	Title: typeof DialogTitle
	Description: typeof DialogDescription
	Actions: typeof DialogActions
	Close: typeof DialogClose
	createHandle: typeof dialogCreateHandle
}

export const Dialog = composeComponent<typeof DialogRoot, DialogSlots>(DialogRoot, {
	Trigger: DialogTrigger,
	Portal: DialogPortal,
	Backdrop: DialogBackdrop,
	Viewport: DialogViewport,
	Popup: DialogPopup,
	Dismiss: DialogDismiss,
	Title: DialogTitle,
	Description: DialogDescription,
	Actions: DialogActions,
	Close: DialogClose,
	createHandle: dialogCreateHandle,
})