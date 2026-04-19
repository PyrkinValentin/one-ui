import type { ComponentProps } from "react"
import type { Dialog } from "@base-ui/react"

export type DialogProps<Payload = unknown> = Dialog.Root.Props<Payload>
export type DialogTriggerProps<Payload = unknown> = Dialog.Trigger.Props<Payload>
export type DialogPortalProps = Dialog.Portal.Props
export type DialogBackdropProps = Dialog.Backdrop.Props

export type DialogViewportProps = Dialog.Viewport.Props & {
	position?: "auto" | "top" | "center" | "bottom"
}

export type DialogPopupProps = Dialog.Popup.Props & {
	size?: "xs" | "sm" | "md" | "lg" | "full"
}

export type DialogDismissProps = Dialog.Close.Props
export type DialogTitleProps = Dialog.Title.Props
export type DialogDescriptionProps = Dialog.Description.Props
export type DialogActionsProps = ComponentProps<"div">
export type DialogCloseProps = Dialog.Close.Props