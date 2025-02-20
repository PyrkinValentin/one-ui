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
		arrow = true,
		lockScroll,
		dismissable,
		placement,
		offset: offsetProp = 7,
		disablePortal,
		defaultOpen = false,
		open,
		onOpenChange,
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

	const [state, setState] = useControlledState({
		defaultValue: defaultOpen,
		value: open,
		onValueChange: onOpenChange,
	})

	const handleOpenChange = (open: boolean, _ev?: Event, reason?: OpenChangeReason) => {
		setState?.(open, reason)
	}

	const { context, refs } = useFloating({
		placement,
		open: state,
		onOpenChange: handleOpenChange,
		offsetOptions: {
			mainAxis: offsetProp,
		},
		arrowOptions: {
			enabled: arrow,
			padding: 10,
		},
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