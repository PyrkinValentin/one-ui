import type {
	AlertDialogProps,
	AlertDialogTriggerProps,
	AlertDialogPopupProps,
	AlertDialogTitleProps,
	AlertDialogDescriptionProps,
	AlertDialogActionsProps,
	AlertDialogCloseProps,
} from "./alert-dialog.props"

import { composeComponent, getDataAttributes, resolveClassNames } from "../../utils"

import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react"

const Root = <P = unknown>(props: AlertDialogProps<P>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<AlertDialogPrimitive.Root {...restProps}>
			{children}
		</AlertDialogPrimitive.Root>
	)
}

const Trigger = <P = unknown>(props: AlertDialogTriggerProps<P>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialogPrimitive.Trigger
			{...restProps}
			data-slot="alert-dialog-trigger"
			className={resolveClassNames(className, "alert-dialog__trigger")}
		>
			{children}
		</AlertDialogPrimitive.Trigger>
	)
}

const Popup = (props: AlertDialogPopupProps) => {
	const {
		keepMounted,
		backdrop = "opaque",
		placement = "auto",
		size = "md",
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialogPrimitive.Portal
			data-slot="alert-dialog-portal"
			keepMounted={keepMounted}
		>
			<AlertDialogPrimitive.Backdrop
				{...getDataAttributes({ backdrop })}
				data-slot="alert-dialog-backdrop"
				className="alert-dialog__backdrop"
			/>

			<AlertDialogPrimitive.Viewport
				{...getDataAttributes({ placement })}
				data-slot="alert-dialog-viewport"
				className="alert-dialog__viewport"
			>
				<AlertDialogPrimitive.Popup
					{...restProps}
					{...getDataAttributes({ size })}
					data-slot="alert-dialog-popup"
					className={resolveClassNames(className, "alert-dialog__popup")}
				>
					{children}
				</AlertDialogPrimitive.Popup>
			</AlertDialogPrimitive.Viewport>
		</AlertDialogPrimitive.Portal>
	)
}

const Title = (props: AlertDialogTitleProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialogPrimitive.Title
			{...restProps}
			data-slot="alert-dialog-title"
			className={resolveClassNames(className, "alert-dialog__title")}
		>
			{children}
		</AlertDialogPrimitive.Title>
	)
}

const Description = (props: AlertDialogDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialogPrimitive.Description
			{...restProps}
			data-slot="alert-dialog-description"
			className={resolveClassNames(className, "alert-dialog__description")}
		>
			{children}
		</AlertDialogPrimitive.Description>
	)
}

const Actions = (props: AlertDialogActionsProps) => {
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

const Close = (props: AlertDialogCloseProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<AlertDialogPrimitive.Close
			{...restProps}
			data-slot="alert-dialog-close"
		>
			{children}
		</AlertDialogPrimitive.Close>
	)
}

type AlertDialogSlots = {
	Trigger: typeof Trigger
	Popup: typeof Popup
	Title: typeof Title
	Description: typeof Description
	Actions: typeof Actions
	Close: typeof Close
	createHandle: typeof AlertDialogPrimitive.createHandle
}

export const AlertDialog = composeComponent<typeof Root, AlertDialogSlots>(Root, {
	Trigger,
	Popup,
	Title,
	Description,
	Actions,
	Close,
	createHandle: AlertDialogPrimitive.createHandle,
})