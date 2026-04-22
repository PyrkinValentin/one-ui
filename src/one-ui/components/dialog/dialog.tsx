import type {
	DialogProps,
	DialogTriggerProps,
	DialogPortalProps,
	DialogBackdropProps,
	DialogViewportProps,
	DialogPopupProps,
	DialogDismissProps,
	DialogTitleProps,
	DialogDescriptionProps,
	DialogActionsProps,
	DialogCloseProps,
} from "./dialog.props"

import { getDataAttributes, resolveClassNames } from "../../utils"

import { Dialog } from "@base-ui/react"
import { X } from "lucide-react"

export const DialogRoot = <Payload = unknown>(props: DialogProps<Payload>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Dialog.Root {...restProps}>
			{children}
		</Dialog.Root>
	)
}

export const DialogTrigger = <Payload = unknown>(props: DialogTriggerProps<Payload>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Dialog.Trigger
			{...restProps}
			data-slot="dialog-trigger"
			className={resolveClassNames(className, "dialog__trigger")}
		>
			{children}
		</Dialog.Trigger>
	)
}

export const DialogPortal = (props: DialogPortalProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Dialog.Portal
			{...restProps}
			data-slot="dialog-portal"
			className={resolveClassNames(className, "dialog__portal")}
		>
			{children}
		</Dialog.Portal>
	)
}

export const DialogBackdrop = (props: DialogBackdropProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Dialog.Backdrop
			{...restProps}
			data-slot="dialog-backdrop"
			className={resolveClassNames(className, "dialog__backdrop")}
		>
			{children}
		</Dialog.Backdrop>
	)
}

export const DialogViewport = (props: DialogViewportProps) => {
	const {
		position = "auto",
		className,
		children,
		...restProps
	} = props

	return (
		<Dialog.Viewport
			{...restProps}
			{...getDataAttributes({ position })}
			data-slot="dialog-viewport"
			className={resolveClassNames(className, "dialog__viewport")}
		>
			{children}
		</Dialog.Viewport>
	)
}

export const DialogPopup = (props: DialogPopupProps) => {
	const {
		size = "md",
		className,
		children,
		...restProps
	} = props

	return (
		<Dialog.Popup
			{...restProps}
			{...getDataAttributes({ size })}
			data-slot="dialog-popup"
			className={resolveClassNames(className, "dialog__popup")}
		>
			{children}
		</Dialog.Popup>
	)
}

export const DialogDismiss = (props: DialogDismissProps) => {
	const {
		className,
		children = <X/>,
		...restProps
	} = props

	return (
		<Dialog.Close
			{...restProps}
			aria-label={props["aria-label"] ?? "Close"}
			data-slot="dialog-dismiss"
			className={resolveClassNames(className, "dialog__dismiss")}
		>
			{children}
		</Dialog.Close>
	)
}

export const DialogTitle = (props: DialogTitleProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Dialog.Title
			{...restProps}
			data-slot="dialog-title"
			className={resolveClassNames(className, "dialog__title")}
		>
			{children}
		</Dialog.Title>
	)
}

export const DialogDescription = (props: DialogDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Dialog.Description
			{...restProps}
			data-slot="dialog-description"
			className={resolveClassNames(className, "dialog__description")}
		>
			{children}
		</Dialog.Description>
	)
}

export const DialogActions = (props: DialogActionsProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div
			{...restProps}
			data-slot="dialog-actions"
			className={resolveClassNames(className, "dialog__actions")}
		>
			{children}
		</div>
	)
}

export const DialogClose = (props: DialogCloseProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Dialog.Close
			{...restProps}
			data-slot="dialog-close"
		>
			{children}
		</Dialog.Close>
	)
}

export const dialogCreateHandle = Dialog.createHandle