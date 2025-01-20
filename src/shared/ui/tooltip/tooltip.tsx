"use client"

import type { Side, UseFloatingReturn } from "@floating-ui/react"
import type { ComponentProps } from "@/shared/types/props"
import type { TooltipProps } from "./types"

import { useRef } from "react"
import { useDismiss, useFloating, useHover, useInteractions, useRole } from "@floating-ui/react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { arrow, autoUpdate, flip, offset, safePolygon, shift } from "@floating-ui/react"
import { mergeRefs } from "@/shared/utils/ref"

import { Portal, Slot } from "@/shared/ui/system"
import { Grow } from "@/shared/ui/transition"

export const Tooltip = (props: TooltipProps) => {
	const {
		shouldAutoUpdate = true,
		shouldFlip = true,
		shouldShift = true,
		shouldSafePolygon = true,
		dismissable = true,
		closeWhenAncestorScroll = true,
		closeWhenEscapeKey,
		closeWhenOutsidePress,
		closeWhenReferencePress,
		arrow: arrowProp,
		placement,
		offset: offsetProp = 7,
		offsetCross,
		offsetAxis,
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
		children,
		...restProps
	} = props

	const arrowRef = useRef<HTMLSpanElement>(null)

	const [controlledOpen, setControlledOpen] = useControlledState({
		defaultValue: defaultOpen,
		value: open,
		setValue: onOpenChange,
	})

	const {
		context,
		refs,
		floatingStyles,
	} = useFloating({
		placement,
		open: controlledOpen,
		onOpenChange: setControlledOpen,
		whileElementsMounted: shouldAutoUpdate ? autoUpdate : undefined,
		transform: false,
		middleware: [
			offset({
				mainAxis: offsetProp,
				crossAxis: offsetCross,
				alignmentAxis: offsetAxis,
			}),
			shouldFlip ? flip() : undefined,
			shouldShift ? shift() : undefined,
			arrowProp ? arrow({ element: arrowRef }) : undefined,
		],
	})

	const role = useRole(context, {
		role: "tooltip",
	})

	const hover = useHover(context, {
		handleClose: shouldSafePolygon ? safePolygon() : undefined,
		delay: {
			open: delay,
			close: delayClose,
		},
		restMs: delayHover,
	})

	const dismiss = useDismiss(context, {
		enabled: dismissable,
		ancestorScroll: closeWhenAncestorScroll,
		escapeKey: closeWhenEscapeKey,
		outsidePress: closeWhenOutsidePress,
		referencePress: closeWhenReferencePress,
	})

	const { getReferenceProps, getFloatingProps } = useInteractions([
		role,
		hover,
		dismiss,
	])

	return (
		<>
			<Slot ref={refs.setReference} {...getReferenceProps()}>
				{children}
			</Slot>

			<Grow open={controlledOpen}>
				{(animateStyles) => (
					<Portal disablePortal={disablePortal}>
						<span
							ref={mergeRefs(ref, refs.setFloating)}
							className={className}
							style={{
								...style,
								...floatingStyles,
								...animateStyles,
							}}
							{...restProps}
							{...getFloatingProps(restProps)}
						>
							{content}

							{arrowProp ? (
								<Arrow
									ref={arrowRef}
									className="border-l-transparent border-l-4 border-r-transparent border-r-4 border-b-4 border-b-primary"
									context={context}
								/>
							) : null}
						</span>
					</Portal>
				)}
			</Grow>
		</>
	)
}

type ArrowProps = ComponentProps<"span", ArrowOwnProps>

type ArrowOwnProps = {
	context: UseFloatingReturn["context"]
}

const Arrow = (props: ArrowProps) => {
	const {
		context,
		style,
		...restProps
	} = props

	const side = context.placement.split('-').at(0) as Side

	const offsetX = context.middlewareData.arrow?.x ?? 0
	const offsetY = context.middlewareData.arrow?.y ?? 0

	const placementX = side === "left"
		? "right"
		: "left"

	const placementY = side === "top"
		? "bottom"
		: "top"

	const vertical = !!offsetX

	const transformX = !vertical
		? placementX === "left"
			? "-100%"
			: "100%"
		: 0

	const transformY = vertical
		? placementY === "bottom"
			? "100%"
			: "-100%"
		: 0

	return (
		<span
			style={{
				position: "absolute",
				[placementX]: offsetX,
				[placementY]: offsetY,
				transform: `translate(${transformX}, ${transformY})`,
				...style,
			}}
			{...restProps}
		/>
	)
}