import type { ComponentProps } from "react"
import type { Dialog } from "@base-ui/react"
import type { SafetyPick } from "../../types"

export type DialogProps<P = unknown> = Dialog.Root.Props<P>
export type DialogTriggerProps<P = unknown> = Dialog.Trigger.Props<P>

export type DialogPopupProps = Dialog.Popup.Props & SafetyPick<Dialog.Portal.Props, "keepMounted"> & {
	backdrop?: "transparent" | "opaque" | "blur"
	position?: "auto" | "top" | "center" | "bottom"
	size?: "xs" | "sm" | "md" | "lg" | "full"
}

export type DialogTitleProps = Dialog.Title.Props
export type DialogDescriptionProps = Dialog.Description.Props
export type DialogActionsProps = ComponentProps<"div">
export type DialogCloseProps = Dialog.Close.Props