import type {
	PopoverProps,
	PopoverTriggerProps,
	PopoverPopupProps,
	PopoverTitleProps,
	PopoverDescriptionProps,
	PopoverCloseProps,
} from "./popover.props"

import { composeComponent, resolveClassNames } from "../../utils"

import { Popover as PopoverPrimitive } from "@base-ui/react"

const Root = <P = unknown>(props: PopoverProps<P>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<PopoverPrimitive.Root {...restProps}>
			{children}
		</PopoverPrimitive.Root>
	)
}

const Trigger = <P = unknown>(props: PopoverTriggerProps<P>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<PopoverPrimitive.Trigger
			{...restProps}
			data-slot="popover-trigger"
			className={resolveClassNames(className, "popover__trigger")}
		>
			{children}
		</PopoverPrimitive.Trigger>
	)
}

const Popup = (props: PopoverPopupProps) => {
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
		<PopoverPrimitive.Portal
			data-slot="popover-portal"
			keepMounted={keepMounted}
		>
			<PopoverPrimitive.Positioner
				data-slot="popover-positioner"
				disableAnchorTracking={disableAnchorTracking}
				side={side}
				sideOffset={sideOffset}
				align={align}
				alignOffset={alignOffset}
			>
				<PopoverPrimitive.Popup
					{...restProps}
					data-slot="popover-popup"
					className={resolveClassNames(className, "popover__popup")}
				>
					{arrow && (
						<PopoverPrimitive.Arrow
							data-slot="popover-arrow"
							className="popover__arrow"
						/>
					)}

					{children}
				</PopoverPrimitive.Popup>
			</PopoverPrimitive.Positioner>
		</PopoverPrimitive.Portal>
	)
}

const Title = (props: PopoverTitleProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<PopoverPrimitive.Title
			{...restProps}
			data-slot="popover-title"
			className={resolveClassNames(className, "popover__title")}
		>
			{children}
		</PopoverPrimitive.Title>
	)
}

const Description = (props: PopoverDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<PopoverPrimitive.Description
			{...restProps}
			data-slot="popover-description"
			className={resolveClassNames(className, "popover__description")}
		>
			{children}
		</PopoverPrimitive.Description>
	)
}

const Close = (props: PopoverCloseProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<PopoverPrimitive.Close
			{...restProps}
			data-slot="popover-close"
		>
			{children}
		</PopoverPrimitive.Close>
	)
}

type PopoverSlots = {
	Trigger: typeof Trigger
	Popup: typeof Popup
	Title: typeof Title
	Description: typeof Description
	Close: typeof Close
	createHandle: typeof PopoverPrimitive.createHandle
}

export const Popover = composeComponent<typeof Root, PopoverSlots>(Root, {
	Trigger,
	Popup,
	Title,
	Description,
	Close,
	createHandle: PopoverPrimitive.createHandle,
})