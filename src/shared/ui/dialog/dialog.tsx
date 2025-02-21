"use client"

import type { OpenChangeReason } from "@floating-ui/react"
import type { DialogContextValue, DialogProps } from './types'

import { use, useId, useMemo } from "react"
import { useClick, useDismiss, useInteractions, useRole } from "@floating-ui/react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"
import { useFloating } from "@/shared/hooks/use-floating"

import { createContext } from "react"

import { dialogVariants } from "./variants"

const DialogContext = createContext<DialogContextValue>({})
export const useDialogContext = () => use(DialogContext)

export const Dialog = (props: DialogProps) => {
	const {
		lockScroll = true,
		disablePortal,
		dismissable = true,
		hideCloseButton,
		closeButtonIcon,
		defaultOpen = false,
		open: openProp,
		onOpenChange,
		onClose,
		size,
		rounded,
		placement,
		shadow,
		backdrop,
		scrollBehavior,
		disableAnimation,
		children,
		slotProps,
	} = props

	const headerId = useId()
	const bodyId = useId()

	const [open, setOpen] = useControlledState({
		defaultValue: defaultOpen,
		value: openProp,
		onValueChange: onOpenChange,
	})

	const handleOpenChange = (open: boolean, _ev?: Event, reason?: OpenChangeReason) => {
		setOpen(open, reason)

		if (!open) {
			onClose?.(reason)
		}
	}

	const { context, refs } = useFloating({
		strategy: "fixed",
		open,
		onOpenChange: handleOpenChange,
	})

	const role = useRole(context, {
		role: "dialog",
	})

	const click = useClick(context)

	const dismiss = useDismiss(context, {
		enabled: dismissable,
	})

	const { getReferenceProps, getFloatingProps } = useInteractions([
		role,
		click,
		dismiss,
	])

	const classNames = useMemo(() => {
		return dialogVariants({
			size,
			rounded,
			placement,
			shadow,
			backdrop,
			scrollBehavior,
			disableAnimation,
		})
	}, [
		size,
		rounded,
		placement,
		shadow,
		backdrop,
		scrollBehavior,
		disableAnimation,
	])

	const contextValue: DialogContextValue = {
		lockScroll,
		disablePortal,
		disableAnimation,
		hideCloseButton,
		closeButtonIcon,
		headerId,
		bodyId,
		context,
		refs,
		classNames,
		slotProps,
		getReferenceProps,
		getFloatingProps,
	}

	return (
		<DialogContext value={contextValue}>
			{children}
		</DialogContext>
	)
}