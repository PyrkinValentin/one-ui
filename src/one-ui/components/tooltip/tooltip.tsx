import type { TooltipProps, TooltipTriggerProps, TooltipPopupProps } from "./tooltip.props"

import { composeComponent, resolveClassNames } from "../../utils"

import { Tooltip as TooltipPrimitive } from "@base-ui/react"

const Root = <P = unknown>(props: TooltipProps<P>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<TooltipPrimitive.Root {...restProps}>
			{children}
		</TooltipPrimitive.Root>
	)
}

const Trigger = <P = unknown>(props: TooltipTriggerProps<P>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<TooltipPrimitive.Trigger
			{...restProps}
			data-slot="tooltip-trigger"
		>
			{children}
		</TooltipPrimitive.Trigger>
	)
}

const Popup = (props: TooltipPopupProps) => {
	const {
		arrow,
		keepMounted,
		disableAnchorTracking,
		side,
		sideOffset = arrow ? 7 : 3,
		align,
		alignOffset,
		className,
		children,
		...restProps
	} = props

	return (
		<TooltipPrimitive.Portal
			data-slot="tooltip-portal"
			keepMounted={keepMounted}
		>
			<TooltipPrimitive.Positioner
				data-slot="tooltip-positioner"
				disableAnchorTracking={disableAnchorTracking}
				side={side}
				sideOffset={sideOffset}
				align={align}
				alignOffset={alignOffset}
			>
				<TooltipPrimitive.Popup
					{...restProps}
					data-slot="tooltip-popup"
					className={resolveClassNames(className, "tooltip__popup")}
				>
					{arrow && (
						<TooltipPrimitive.Arrow
							data-slot="tooltip-arrow"
							className="tooltip__arrow"
						/>
					)}

					{children}
				</TooltipPrimitive.Popup>
			</TooltipPrimitive.Positioner>
		</TooltipPrimitive.Portal>
	)
}

type TooltipSlots = {
	Trigger: typeof Trigger
	Popup: typeof Popup
	createHandle: typeof TooltipPrimitive.createHandle
}

export const Tooltip = composeComponent<typeof Root, TooltipSlots>(Root, {
	Trigger,
	Popup,
	createHandle: TooltipPrimitive.createHandle,
})