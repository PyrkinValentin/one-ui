export type * from "./drawer.props"

import { composeComponent } from "../../utils"

import {
	DrawerRoot,
	DrawerTrigger,
	DrawerSwipeArea,
	DrawerPortal,
	DrawerBackdrop,
	DrawerViewport,
	DrawerPopup,
	DrawerIndicator,
	DrawerContent,
	DrawerDismiss,
	DrawerTitle,
	DrawerDescription,
	DrawerActions,
	DrawerClose,
	drawerCreateHandle,
} from "./drawer"

type DrawerSlots = {
	Trigger: typeof DrawerTrigger
	SwipeArea: typeof DrawerSwipeArea
	Portal: typeof DrawerPortal
	Backdrop: typeof DrawerBackdrop
	Viewport: typeof DrawerViewport
	Popup: typeof DrawerPopup
	Indicator: typeof DrawerIndicator
	Content: typeof DrawerContent
	Dismiss: typeof DrawerDismiss
	Title: typeof DrawerTitle
	Description: typeof DrawerDescription
	Actions: typeof DrawerActions
	Close: typeof DrawerClose
	createHandle: typeof drawerCreateHandle,
}

export const Drawer = composeComponent<typeof DrawerRoot, DrawerSlots>(DrawerRoot, {
	Trigger: DrawerTrigger,
	SwipeArea: DrawerSwipeArea,
	Portal: DrawerPortal,
	Backdrop: DrawerBackdrop,
	Viewport: DrawerViewport,
	Popup: DrawerPopup,
	Indicator: DrawerIndicator,
	Content: DrawerContent,
	Dismiss: DrawerDismiss,
	Title: DrawerTitle,
	Description: DrawerDescription,
	Actions: DrawerActions,
	Close: DrawerClose,
	createHandle: drawerCreateHandle,
})