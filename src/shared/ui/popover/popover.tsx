"use client"

import type { OpenChangeReason } from "@floating-ui/react"
import type { PopoverContextValue, PopoverProps } from "./types"

import { use, useMemo } from "react"
import { useClick, useDismiss, useRole, useFloating, useInteractions } from "@floating-ui/react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { createContext } from "react"
import { autoUpdate, flip, offset, shift } from "@floating-ui/react"

import { popoverVariants } from "./variants"

const PopoverContext = createContext<PopoverContextValue>({})
export const usePopoverContext = () => use(PopoverContext)

export const Popover = (props: PopoverProps) => {
	const {
		lockScroll,
		dismissable,
		placement,
		offset: offsetProp = 7,
		disablePortal,
		defaultOpen,
		open,
		onOpenChange,
		size,
		color,
		rounded,
		shadow,
		backdrop,
		triggerScaleOnOpen,
		slotProps,
		children,
	} = props

	const [controlledOpen, setControlledOpen] = useControlledState({
		defaultValue: defaultOpen,
		value: open,
		setValue: onOpenChange,
	})

	const handleOpenChange = (open: boolean, _ev?: Event, reason?: OpenChangeReason) => {
		setControlledOpen?.(open, reason)
	}

	const { context, refs } = useFloating({
		placement,
		open: controlledOpen,
		onOpenChange: handleOpenChange,
		whileElementsMounted: (referenceEl, floatingEl, update) => {
			return autoUpdate(referenceEl, floatingEl, update, {
				layoutShift: false,
			})
		},
		transform: false,
		middleware: [
			offset(offsetProp),
			shift(),
			flip(),
		],
	})

	const role = useRole(context, {
		role: "dialog",
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

	const slots = useMemo(() => {
		return popoverVariants({
			size,
			color,
			rounded,
			shadow,
			backdrop,
			triggerScaleOnOpen,
		})
	}, [
		size,
		color,
		rounded,
		shadow,
		backdrop,
		triggerScaleOnOpen,
	])

	const contextValue: PopoverContextValue = {
		lockScroll,
		disablePortal,
		context,
		refs,
		slots,
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