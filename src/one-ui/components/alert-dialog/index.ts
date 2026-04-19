export type * from "./alert-dialog.props"

import { composeComponent } from "../../utils"

import {
	AlertDialogRoot,
	AlertDialogTrigger,
	AlertDialogPortal,
	AlertDialogBackdrop,
	AlertDialogViewport,
	AlertDialogPopup,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogActions,
	AlertDialogClose,
	alertDialogCreateHandle
} from "./alert-dialog"

type AlertDialogSlots = {
	Trigger: typeof AlertDialogTrigger
	Portal: typeof AlertDialogPortal
	Backdrop: typeof AlertDialogBackdrop
	Viewport: typeof AlertDialogViewport
	Popup: typeof AlertDialogPopup
	Title: typeof AlertDialogTitle
	Description: typeof AlertDialogDescription
	Actions: typeof AlertDialogActions
	Close: typeof AlertDialogClose
	createHandle: typeof alertDialogCreateHandle
}

export const AlertDialog = composeComponent<typeof AlertDialogRoot, AlertDialogSlots>(AlertDialogRoot, {
	Trigger: AlertDialogTrigger,
	Portal: AlertDialogPortal,
	Backdrop: AlertDialogBackdrop,
	Viewport: AlertDialogViewport,
	Popup: AlertDialogPopup,
	Title: AlertDialogTitle,
	Description: AlertDialogDescription,
	Actions: AlertDialogActions,
	Close: AlertDialogClose,
	createHandle: alertDialogCreateHandle,
})