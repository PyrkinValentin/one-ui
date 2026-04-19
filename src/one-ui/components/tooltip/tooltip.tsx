import type {
	TooltipProviderProps,
	TooltipProps,
	TooltipTriggerProps,
	TooltipPortalProps,
	TooltipPositionerProps,
	TooltipPopupProps,
	TooltipArrowProps,
} from "./tooltip.props"

import { resolveClassNames } from "../../utils"

import { Tooltip } from "@base-ui/react"

export const TooltipProvider = (props: TooltipProviderProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Tooltip.Provider {...restProps}>
			{children}
		</Tooltip.Provider>
	)
}

export const TooltipRoot = <Payload = unknown>(props: TooltipProps<Payload>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Tooltip.Root {...restProps}>
			{children}
		</Tooltip.Root>
	)
}

export const TooltipTrigger = <Payload = unknown>(props: TooltipTriggerProps<Payload>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Tooltip.Trigger
			{...restProps}
			data-slot="tooltip-trigger"
		>
			{children}
		</Tooltip.Trigger>
	)
}

export const TooltipPortal = (props: TooltipPortalProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Tooltip.Portal
			{...restProps}
			data-slot="tooltip-portal"
			className={resolveClassNames(className, "tooltip__portal")}
		>
			{children}
		</Tooltip.Portal>
	)
}

export const TooltipPositioner = (props: TooltipPositionerProps) => {
	const {
		sideOffset = 7,
		className,
		children,
		...restProps
	} = props

	return (
		<Tooltip.Positioner
			{...restProps}
			sideOffset={sideOffset}
			data-slot="tooltip-positioner"
			className={resolveClassNames(className, "tooltip__positioner")}
		>
			{children}
		</Tooltip.Positioner>
	)
}

export const TooltipPopup = (props: TooltipPopupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Tooltip.Popup
			{...restProps}
			data-slot="tooltip-popup"
			className={resolveClassNames(className, "tooltip__popup")}
		>
			{children}
		</Tooltip.Popup>
	)
}

export const TooltipArrow = (props: TooltipArrowProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Tooltip.Arrow
			{...restProps}
			data-slot="tooltip-arrow"
			className={resolveClassNames(className, "tooltip__arrow")}
		>
			{children}
		</Tooltip.Arrow>
	)
}

export const tooltipCreateHandle = Tooltip.createHandle