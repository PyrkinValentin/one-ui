import type {
	AlertDialogProps,
	AlertDialogTriggerProps,
	AlertDialogPortalProps,
	AlertDialogBackdropProps,
	AlertDialogViewportProps,
	AlertDialogPopupProps,
	AlertDialogTitleProps,
	AlertDialogDescriptionProps,
	AlertDialogActionsProps,
	AlertDialogCloseProps,
} from "./alert-dialog.props"

import { getDataAttributes, resolveClassNames } from "../../utils"

import { AlertDialog } from "@base-ui/react"

export const AlertDialogRoot = <Payload = unknown>(props: AlertDialogProps<Payload>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Root {...restProps}>
			{children}
		</AlertDialog.Root>
	)
}

export const AlertDialogTrigger = <Payload = unknown>(props: AlertDialogTriggerProps<Payload>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Trigger
			{...restProps}
			data-slot="alert-dialog-trigger"
			className={resolveClassNames(className, "alert-dialog__trigger")}
		>
			{children}
		</AlertDialog.Trigger>
	)
}

export const AlertDialogPortal = (props: AlertDialogPortalProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Portal
			{...restProps}
			data-slot="alert-dialog-portal"
			className={resolveClassNames(className, "alert-dialog__portal")}
		>
			{children}
		</AlertDialog.Portal>
	)
}

export const AlertDialogBackdrop = (props: AlertDialogBackdropProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Backdrop
			{...restProps}
			data-slot="alert-dialog-backdrop"
			className={resolveClassNames(className, "alert-dialog__backdrop")}
		>
			{children}
		</AlertDialog.Backdrop>
	)
}

export const AlertDialogViewport = (props: AlertDialogViewportProps) => {
	const {
		position = "auto",
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Viewport
			{...restProps}
			{...getDataAttributes({ position })}
			data-slot="alert-dialog-viewport"
			className={resolveClassNames(className, "alert-dialog__viewport")}
		>
			{children}
		</AlertDialog.Viewport>
	)
}

export const AlertDialogPopup = (props: AlertDialogPopupProps) => {
	const {
		size = "md",
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Popup
			{...restProps}
			{...getDataAttributes({ size })}
			data-slot="alert-dialog-popup"
			className={resolveClassNames(className, "alert-dialog__popup")}
		>
			{children}
		</AlertDialog.Popup>
	)
}

export const AlertDialogTitle = (props: AlertDialogTitleProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Title
			{...restProps}
			data-slot="alert-dialog-title"
			className={resolveClassNames(className, "alert-dialog__title")}
		>
			{children}
		</AlertDialog.Title>
	)
}

export const AlertDialogDescription = (props: AlertDialogDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Description
			{...restProps}
			data-slot="alert-dialog-description"
			className={resolveClassNames(className, "alert-dialog__description")}
		>
			{children}
		</AlertDialog.Description>
	)
}

export const AlertDialogActions = (props: AlertDialogActionsProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div
			{...restProps}
			data-slot="alert-dialog-actions"
			className={resolveClassNames(className, "alert-dialog__actions")}
		>
			{children}
		</div>
	)
}

export const AlertDialogClose = (props: AlertDialogCloseProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Close
			{...restProps}
			data-slot="alert-dialog-close"
		>
			{children}
		</AlertDialog.Close>
	)
}

export const alertDialogCreateHandle = AlertDialog.createHandle