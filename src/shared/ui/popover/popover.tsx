"use client"

import type { OpenChangeReason } from "@floating-ui/react"
import type { PopoverContextValue, PopoverProps } from "./types"

import { use, useMemo } from "react"
import { useClick, useDismiss, useInteractions, useRole } from "@floating-ui/react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"
import { useFloating } from "@/shared/hooks/use-floating"

import { createContext } from "react"

import { popoverVariants } from "./variants"

const PopoverContext = createContext<PopoverContextValue>({})
export const usePopoverContext = () => use(PopoverContext)

export const Popover = (props: PopoverProps) => {
	const {
		role: roleProp = "dialog",
		arrow,
		lockScroll,
		dismissable,
		placement,
		offset: offsetProp = arrow ? 10 : 7,
		disablePortal,
		defaultOpen = false,
		open: openProp,
		onOpenChange,
		onClose,
		size,
		color,
		rounded,
		shadow,
		backdrop,
		triggerScaleOnOpen,
		disableAnimation,
		children,
		slotProps,
	} = props

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
		transform: false,
		placement,
		open,
		onOpenChange: handleOpenChange,
		autoUpdateOptions: {
			enabled: true,
		},
		flipOptions: {
			enabled: true,
		},
		shiftOptions: {
			enabled: true,
		},
		offsetOptions: {
			enabled: true,
			mainAxis: offsetProp,
		},
		arrowOptions: {
			enabled: arrow,
			padding: 10,
		},
	})

	const role = useRole(context, {
		role: roleProp,
	})

	const click = useClick(context)

	const dismiss = useDismiss(context, {
		enabled: dismissable,
		ancestorScroll: true,
	})

	const { getReferenceProps, getFloatingProps } = useInteractions([
		role,
		click,
		dismiss,
	])

	const classNames = useMemo(() => {
		return popoverVariants({
			size,
			color,
			rounded,
			shadow,
			backdrop,
			triggerScaleOnOpen,
			disableAnimation,
		})
	}, [
		size,
		color,
		rounded,
		shadow,
		backdrop,
		triggerScaleOnOpen,
		disableAnimation,
	])

	const contextValue: PopoverContextValue = {
		arrow,
		lockScroll,
		disablePortal,
		disableAnimation,
		context,
		refs,
		classNames,
		slotProps,
		getReferenceProps,
		getFloatingProps,
	}

	return (
		<PopoverContext value={contextValue}>
			{children}
		</PopoverContext>
	)
}