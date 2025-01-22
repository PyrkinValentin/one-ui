"use client"

import type { OpenChangeReason } from "@floating-ui/react"
import type { TooltipProps } from "./types"

import { useMemo } from "react"
import { useDismiss, useFloating, useHover, useInteractions, useRole } from "@floating-ui/react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"
import { useTransition } from "@/shared/hooks/use-transition"

import { autoUpdate, flip, offset, safePolygon, shift } from "@floating-ui/react"
import { mergeRefs } from "@/shared/utils/ref"

import { Portal, Slot } from "@/shared/ui/system"

import { tooltipVariants } from "./variants"

export const Tooltip = (props: TooltipProps) => {
	const {
		dismissable = true,
		placement,
		offset: offsetProp = 7,
		delay,
		delayClose,
		delayHover,
		disablePortal,
		defaultOpen = false,
		open,
		onOpenChange,
		content,
		ref,
		style,
		className,
		size,
		color,
		rounded,
		shadow,
		children,
		...restProps
	} = props

	const [controlledOpen, setControlledOpen] = useControlledState({
		defaultValue: defaultOpen,
		value: open,
		setValue: onOpenChange,
	})

	const handleOpenChange = (open: boolean, _ev?: Event, reason?: OpenChangeReason) => {
		setControlledOpen?.(open, reason)
	}

	const {
		context,
		refs,
		floatingStyles,
	} = useFloating({
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
		role: "tooltip",
	})

	const hover = useHover(context, {
		handleClose: safePolygon(),
		delay: {
			open: delay,
			close: delayClose,
		},
		restMs: delayHover,
	})

	const dismiss = useDismiss(context, {
		enabled: dismissable,
		ancestorScroll: true,
	})

	const { getReferenceProps, getFloatingProps } = useInteractions([
		role,
		hover,
		dismiss,
	])

	const [mounted, growStyle] = useTransition(controlledOpen, {
		initial: { opacity: 0, transform: "scale(0.97)" },
		enter: { opacity: 1, transform: "scale(1)" },
	})

	const slots = useMemo(() => {
		return tooltipVariants({
			className,
			size,
			color,
			rounded,
			shadow,
		})
	}, [
		className,
		size,
		color,
		rounded,
		shadow,
	])

	return (
		<>
			<Slot
				ref={refs.setReference}
				className={slots.trigger()}
				{...getReferenceProps()}
			>
				{children}
			</Slot>

			{mounted ? (
				<Portal disablePortal={disablePortal}>
					<div
						ref={mergeRefs(ref, refs.setFloating)}
						className={slots.base({ className })}
						style={{
							...floatingStyles,
							...growStyle,
							...style,
						}}
						{...restProps}
						{...getFloatingProps(restProps)}
					>
						{content}
					</div>
				</Portal>
			) : null}
		</>
	)
}