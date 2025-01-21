"use client"

import type { Side, UseFloatingReturn } from "@floating-ui/react"
import type { ComponentProps } from "@/shared/types/props"
import type { PopperProps } from "./types"

import { useRef } from "react"
import { useClick, useDismiss, useFloating, useHover, useInteractions, useRole } from "@floating-ui/react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { createContext } from "react"
import { arrow, autoUpdate, flip, offset, shift } from "@floating-ui/react"

type ArrowProps = ComponentProps<"span", ArrowOwnProps>

type ArrowOwnProps = {
	context: UseFloatingReturn["context"]
}

export const Popper = (props: PopperProps) => {
	const {
		autoUpdate: autoUpdateProp = true,
		offsetOptions,
		flipOptions,
		shiftOptions,
		arrowOptions,
		useRoleOptions,
		useHoverOptions,
		useClickOptions,
		useDismissOptions,
		placement,
		defaultOpen,
		open,
		onOpenChange,
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
		whileElementsMounted: autoUpdateProp ? autoUpdate : undefined,
		transform: false,
		middleware: [
			offsetOptions?.enabled
				? offset(offsetOptions)
				: undefined,
			flipOptions?.enabled
				? flip(flipOptions)
				: undefined,
			shiftOptions?.enabled
				? shift(shiftOptions)
				: undefined,
			arrowOptions?.enabled
				? arrow({ element: arrowRef, padding: arrowOptions.padding })
				: undefined,
		],
	})

	const role = useRole(context, useRoleOptions)
	const hover = useHover(context, { enabled: false, ...useHoverOptions })
	const click = useClick(context, { enabled: !useHoverOptions?.enabled, ...useClickOptions })
	const dismiss = useDismiss(context, useDismissOptions)

	const { getReferenceProps, getFloatingProps } = useInteractions([
		role,
		hover,
		click,
		dismiss,
	])

	return (
		<>

		</>
	)
}

export const PopperTrigger = () => {
	return (
		<></>
	)
}

export const PopperClose = () => {
	return (
		<></>
	)
}

export const PopperContent = () => {
	return (
		<></>
	)
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