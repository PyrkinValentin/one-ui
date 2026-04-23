export type * from "./alert.props"

import { composeComponent } from "../../utils"

import {
	AlertRoot,
	AlertIndicator,
	AlertContent,
	AlertTitle,
	AlertDescription,
	AlertDismiss,
} from "./alert"

type AlertSlots = {
	Indicator: typeof AlertIndicator
	Content: typeof AlertContent
	Title: typeof AlertTitle
	Description: typeof AlertDescription
	Dismiss: typeof AlertDismiss
}

export const Alert = composeComponent<typeof AlertRoot, AlertSlots>(AlertRoot, {
	Indicator: AlertIndicator,
	Content: AlertContent,
	Title: AlertTitle,
	Description: AlertDescription,
	Dismiss: AlertDismiss,
})