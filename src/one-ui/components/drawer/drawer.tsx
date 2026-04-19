import type {
	DrawerProps,
	DrawerTriggerProps,
	DrawerSwipeAreaProps,
	DrawerPortalProps,
	DrawerBackdropProps,
	DrawerViewportProps,
	DrawerPopupProps,
	DrawerIndicatorProps,
	DrawerContentProps,
	DrawerDismissProps,
	DrawerTitleProps,
	DrawerDescriptionProps,
	DrawerActionsProps,
	DrawerCloseProps,
} from "./drawer.props"

import { getDataAttributes, resolveClassNames } from "../../utils"

import { Drawer } from "@base-ui/react"
import { X } from "lucide-react"

export const DrawerRoot = <Payload = unknown>(props: DrawerProps<Payload>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Drawer.Root {...restProps}>
			{children}
		</Drawer.Root>
	)
}

export const DrawerTrigger = <Payload = unknown>(props: DrawerTriggerProps<Payload>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Drawer.Trigger
			{...restProps}
			data-slot="drawer-trigger"
			className={resolveClassNames(className, "drawer__trigger")}
		>
			{children}
		</Drawer.Trigger>
	)
}

export const DrawerSwipeArea = (props: DrawerSwipeAreaProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Drawer.SwipeArea
			{...restProps}
			data-slot="drawer-swipe-area"
			className={resolveClassNames(className, "drawer__swipe-area")}
		>
			{children}
		</Drawer.SwipeArea>
	)
}

export const DrawerPortal = (props: DrawerPortalProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Drawer.Portal
			{...restProps}
			data-slot="drawer-portal"
			className={resolveClassNames(className, "drawer__portal")}
		>
			{children}
		</Drawer.Portal>
	)
}

export const DrawerBackdrop = (props: DrawerBackdropProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Drawer.Backdrop
			{...restProps}
			data-slot="drawer-backdrop"
			className={resolveClassNames(className, "drawer__backdrop")}
		>
			{children}
		</Drawer.Backdrop>
	)
}

export const DrawerViewport = (props: DrawerViewportProps) => {
	const {
		position = "bottom",
		className,
		children,
		...restProps
	} = props

	return (
		<Drawer.Viewport
			{...restProps}
			{...getDataAttributes({ position })}
			data-slot="drawer-viewport"
			className={resolveClassNames(className, "drawer__viewport")}
		>
			{children}
		</Drawer.Viewport>
	)
}

export const DrawerPopup = (props: DrawerPopupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Drawer.Popup
			{...restProps}
			data-slot="drawer-popup"
			className={resolveClassNames(className, "drawer__popup")}
		>
			{children}
		</Drawer.Popup>
	)
}

export const DrawerIndicator = (props: DrawerIndicatorProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div
			{...restProps}
			data-slot="drawer-indicator"
			className={resolveClassNames(className, "drawer__indicator")}
		>
			{children}
		</div>
	)
}

export const DrawerContent = (props: DrawerContentProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Drawer.Content
			{...restProps}
			data-slot="drawer-content"
			className={resolveClassNames(className, "drawer__content")}
		>
			{children}
		</Drawer.Content>
	)
}

export const DrawerDismiss = (props: DrawerDismissProps) => {
	const {
		className,
		children = <X/>,
		...restProps
	} = props

	return (
		<Drawer.Close
			{...restProps}
			data-slot="drawer-dismiss"
			className={resolveClassNames(className, "drawer__dismiss")}
		>
			{children}
		</Drawer.Close>
	)
}

export const DrawerTitle = (props: DrawerTitleProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Drawer.Title
			{...restProps}
			data-slot="drawer-title"
			className={resolveClassNames(className, "drawer__title")}
		>
			{children}
		</Drawer.Title>
	)
}

export const DrawerDescription = (props: DrawerDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Drawer.Description
			{...restProps}
			data-slot="drawer-description"
			className={resolveClassNames(className, "drawer__description")}
		>
			{children}
		</Drawer.Description>
	)
}

export const DrawerActions = (props: DrawerActionsProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div
			{...restProps}
			data-slot="drawer-actions"
			className={resolveClassNames(className, "drawer__actions")}
		>
			{children}
		</div>
	)
}

export const DrawerClose = (props: DrawerCloseProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Drawer.Close
			{...restProps}
			data-slot="drawer-close"
			className={resolveClassNames(className, "drawer__close")}
		>
			{children}
		</Drawer.Close>
	)
}

export const drawerCreateHandle = Drawer.createHandle