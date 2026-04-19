import type { ComponentProps } from "react"
import type { Drawer } from "@base-ui/react"

export type DrawerProps<Payload = unknown> = Drawer.Root.Props<Payload>
export type DrawerTriggerProps<Payload = unknown> = Drawer.Trigger.Props<Payload>
export type DrawerSwipeAreaProps = Drawer.SwipeArea.Props
export type DrawerPortalProps = Drawer.Portal.Props
export type DrawerBackdropProps = Drawer.Backdrop.Props

export type DrawerViewportProps = Drawer.Viewport.Props & {
	position?: "top" | "bottom" | "left" | "right"
}

export type DrawerPopupProps = Drawer.Popup.Props
export type DrawerIndicatorProps = ComponentProps<"div">
export type DrawerContentProps = Drawer.Content.Props
export type DrawerDismissProps = Drawer.Close.Props
export type DrawerTitleProps = Drawer.Title.Props
export type DrawerDescriptionProps = Drawer.Description.Props
export type DrawerActionsProps = ComponentProps<"div">
export type DrawerCloseProps = Drawer.Close.Props