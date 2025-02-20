"use client"

import type { OpenChangeReason } from "@floating-ui/react"
import type { TooltipProps } from "./types"

import { useMemo } from "react"
import { useDismiss, useHover, useInteractions, useRole, useFocus } from "@floating-ui/react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"
import { useFloating } from "@/shared/hooks/use-floating"
import { useTransition } from "@/shared/hooks/use-transition"

import { safePolygon } from "@floating-ui/react"
import { mergeRefs } from "@/shared/utils/merge"

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
		open: openProp,
		onOpenChange,
		content,
		ref,
		style,
		className,
		size,
		color,
		rounded,
		shadow,
		disableAnimation,
		children,
		slotProps = {},
		...restProps
	} = props

	const {
		contentProps,
		arrowProps,
	} = slotProps

	const [open, setOpen] = useControlledState({
		defaultValue: defaultOpen,
		value: openProp,
		onValueChange: onOpenChange,
	})

	const handleOpenChange = (open: boolean, _ev?: Event, reason?: OpenChangeReason) => {
		setOpen(open, reason)
	}

	const {
		context,
		refs,
		floatingStyles,
		arrowStyles,
	} = useFloating({
		placement,
		open,
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

	const focus = useFocus(context)

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
		focus,
		hover,
		dismiss,
	])

	const [mounted, growStyle] = useTransition(context.open, {
		enabled: !disableAnimation,
		initial: { opacity: 0, transform: "scale(0.97)" },
		enter: { opacity: 1, transform: "scale(1)" },
	})

	const classNames = useMemo(() => {
		return tooltipVariants({
			className,
			size,
			color,
			rounded,
			shadow,
			disableAnimation,
		})
	}, [
		className,
		size,
		color,
		rounded,
		shadow,
		disableAnimation,
	])

	return (
		<>
			<Slot
				ref={refs.setReference}
				className={classNames.trigger()}
				{...getReferenceProps()}
			>
				{children}
			</Slot>

			{mounted ? (
				<Portal disablePortal={disablePortal}>
					<div
						ref={mergeRefs(ref, refs.setFloating)}
						className={classNames.base({ className })}
						style={{
							...floatingStyles,
							...growStyle,
							...style,
						}}
						{...getFloatingProps(restProps)}
					>
						<div
							{...contentProps}
							className={classNames.content({ className: contentProps?.className })}
						>
							{content}
						</div>

						{arrow ? (
							<div
								{...arrowProps}
								ref={mergeRefs(arrowProps?.ref, refs.setArrow)}
								className={classNames.arrow({ className: arrowProps?.className })}
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