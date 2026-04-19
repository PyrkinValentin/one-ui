import type { ComponentProps } from "react"
import type { AlertDialog } from "@base-ui/react"
import type { SafetyPick } from "../../types"

export type AlertDialogProps<P = unknown> = AlertDialog.Root.Props<P>
export type AlertDialogTriggerProps<P = unknown> = AlertDialog.Trigger.Props<P>

export type AlertDialogPopupProps = AlertDialog.Popup.Props & SafetyPick<AlertDialog.Portal.Props, "keepMounted"> & {
	backdrop?: "transparent" | "opaque" | "blur"
	placement?: "auto" | "top" | "center" | "bottom"
	size?: "xs" | "sm" | "md" | "lg" | "full"
}

export type AlertDialogTitleProps = AlertDialog.Title.Props
export type AlertDialogDescriptionProps = AlertDialog.Description.Props
export type AlertDialogActionsProps = ComponentProps<"div">
export type AlertDialogCloseProps = AlertDialog.Close.Props