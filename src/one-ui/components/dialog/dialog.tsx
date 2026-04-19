import type {
	DialogProps,
	DialogTriggerProps,
	DialogPopupProps,
	DialogTitleProps,
	DialogDescriptionProps,
	DialogActionsProps,
	DialogCloseProps,
} from "./dialog.props"

import { composeComponent, getDataAttributes, resolveClassNames } from "../../utils"

import { Dialog as DialogPrimitive } from "@base-ui/react"
import { X } from "lucide-react"

const Root = <P = unknown>(props: DialogProps<P>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<DialogPrimitive.Root {...restProps}>
			{children}
		</DialogPrimitive.Root>
	)
}

const Trigger = <P = unknown>(props: DialogTriggerProps<P>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<DialogPrimitive.Trigger
			{...restProps}
			data-slot="dialog-trigger"
			className={resolveClassNames(className, "dialog__trigger")}
		>
			{children}
		</DialogPrimitive.Trigger>
	)
}

const Popup = (props: DialogPopupProps) => {
	const {
		keepMounted,
		backdrop = "opaque",
		position = "auto",
		size = "md",
		className,
		children,
		...restProps
	} = props

	return (
		<DialogPrimitive.Portal
			data-slot="dialog-portal"
			keepMounted={keepMounted}
		>
			<DialogPrimitive.Backdrop
				{...getDataAttributes({ backdrop })}
				data-slot="dialog-backdrop"
				className="dialog__backdrop"
			/>

			<DialogPrimitive.Viewport
				{...getDataAttributes({ position })}
				data-slot="dialog-viewport"
				className="dialog__viewport"
			>
				<DialogPrimitive.Popup
					{...restProps}
					{...getDataAttributes({ size })}
					data-slot="dialog-popup"
					className={resolveClassNames(className, "dialog__popup")}
				>
					<DialogPrimitive.Close
						data-slot="dialog-close"
						className="dialog__close"
					>
						<X/>
					</DialogPrimitive.Close>

					{children}
				</DialogPrimitive.Popup>
			</DialogPrimitive.Viewport>
		</DialogPrimitive.Portal>
	)
}

const Title = (props: DialogTitleProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<DialogPrimitive.Title
			{...restProps}
			data-slot="dialog-title"
			className={resolveClassNames(className, "dialog__title")}
		>
			{children}
		</DialogPrimitive.Title>
	)
}

const Description = (props: DialogDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<DialogPrimitive.Description
			{...restProps}
			data-slot="dialog-description"
			className={resolveClassNames(className, "dialog__description")}
		>
			{children}
		</DialogPrimitive.Description>
	)
}

const Actions = (props: DialogActionsProps) => {
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

const Close = (props: DialogCloseProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<DialogPrimitive.Close
			{...restProps}
			data-slot="dialog-close"
		>
			{children}
		</DialogPrimitive.Close>
	)
}

type DialogSlots = {
	Trigger: typeof Trigger
	Popup: typeof Popup
	Title: typeof Title
	Description: typeof Description
	Actions: typeof Actions
	Close: typeof Close
	createHandle: typeof DialogPrimitive.createHandle
}

export const Dialog = composeComponent<typeof Root, DialogSlots>(Root, {
	Trigger,
	Popup,
	Title,
	Description,
	Actions,
	Close,
	createHandle: DialogPrimitive.createHandle,
})