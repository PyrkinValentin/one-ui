import type { ComponentProps } from "react"
import type { AlertDialog } from "@base-ui/react"

export type AlertDialogProps<Payload = unknown> = AlertDialog.Root.Props<Payload>
export type AlertDialogTriggerProps<Payload = unknown> = AlertDialog.Trigger.Props<Payload>
export type AlertDialogPortalProps = AlertDialog.Portal.Props
export type AlertDialogBackdropProps = AlertDialog.Backdrop.Props

export type AlertDialogViewportProps = AlertDialog.Viewport.Props & {
	position?: "auto" | "top" | "center" | "bottom"
}

export type AlertDialogPopupProps = AlertDialog.Popup.Props & {
	size?: "xs" | "sm" | "md" | "lg" | "full"
}

export type AlertDialogTitleProps = AlertDialog.Title.Props
export type AlertDialogDescriptionProps = AlertDialog.Description.Props
export type AlertDialogActionsProps = ComponentProps<"div">
export type AlertDialogCloseProps = AlertDialog.Close.Props