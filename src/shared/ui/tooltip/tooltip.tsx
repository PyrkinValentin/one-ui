"use client"

import type { OpenChangeReason } from "@floating-ui/react"
import type { TooltipProps } from "./types"

import { useMemo } from "react"
import { useDismiss, useHover, useInteractions, useRole } from "@floating-ui/react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"
import { useFloating } from "@/shared/hooks/use-floating"
import { useTransition } from "@/shared/hooks/use-transition"

import { mergeRefs } from "@/shared/utils/ref"
import { safePolygon } from "@floating-ui/react"

import { Portal, Slot } from "@/shared/ui/system"

import { tooltipVariants } from "./variants"

export const Tooltip = (props: TooltipProps) => {
	const {
		arrow = true,
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
		slotProps = {},
		className,
		size,
		color,
		rounded,
		shadow,
		children,
		...restProps
	} = props

	const {
		contentProps,
		arrowProps,
	} = slotProps

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
		arrowStyles,
	} = useFloating({
		placement,
		open: controlledOpen,
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
						<div
							{...contentProps}
							className={slots.content({ className: contentProps?.className })}
						>
							{content}
						</div>

						{arrow ? (
							<div
								{...arrowProps}
								ref={mergeRefs(arrowProps?.ref, refs.setArrow)}
								className={slots.arrow({ className: arrowProps?.className })}
								style={{
									...arrowStyles,
									...arrowProps?.style,
								}}
							/>
						) : null}
					</div>
				</Portal>
			) : null}
		</>
	)
}