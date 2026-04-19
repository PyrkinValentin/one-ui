import type {
	PopoverProps,
	PopoverTriggerProps,
	PopoverPortalProps,
	PopoverBackdropProps,
	PopoverPositionerProps,
	PopoverPopupProps,
	PopoverArrowProps,
	PopoverTitleProps,
	PopoverDescriptionProps,
	PopoverCloseProps,
} from "./popover.props"

import { resolveClassNames } from "../../utils"

import { Popover } from "@base-ui/react"

export const PopoverRoot = <P = unknown>(props: PopoverProps<P>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Popover.Root {...restProps}>
			{children}
		</Popover.Root>
	)
}

export const PopoverTrigger = <P = unknown>(props: PopoverTriggerProps<P>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Trigger
			{...restProps}
			data-slot="popover-trigger"
			className={resolveClassNames(className, "popover__trigger")}
		>
			{children}
		</Popover.Trigger>
	)
}

export const PopoverPortal = (props: PopoverPortalProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Portal
			{...restProps}
			data-slot="popover-portal"
			className={resolveClassNames(className, "popover__portal")}
		>
			{children}
		</Popover.Portal>
	)
}

export const PopoverBackdrop = (props: PopoverBackdropProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Backdrop
			{...restProps}
			data-slot="popover-backdrop"
			className={resolveClassNames(className, "popover__backdrop")}
		>
			{children}
		</Popover.Backdrop>
	)
}

export const PopoverPositioner = (props: PopoverPositionerProps) => {
	const {
		sideOffset = 7,
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Positioner
			{...restProps}
			sideOffset={sideOffset}
			data-slot="popover-positioner"
			className={resolveClassNames(className, "popover__positioner")}
		>
			{children}
		</Popover.Positioner>
	)
}

export const PopoverPopup = (props: PopoverPopupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Popup
			{...restProps}
			data-slot="popover-popup"
			className={resolveClassNames(className, "popover__popup")}
		>
			{children}
		</Popover.Popup>
	)
}

export const PopoverArrow = (props: PopoverArrowProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Arrow
			{...restProps}
			data-slot="popover-arrow"
			className={resolveClassNames(className, "popover__arrow")}
		>
			{children}
		</Popover.Arrow>
	)
}

export const PopoverTitle = (props: PopoverTitleProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Title
			{...restProps}
			data-slot="popover-title"
			className={resolveClassNames(className, "popover__title")}
		>
			{children}
		</Popover.Title>
	)
}

export const PopoverDescription = (props: PopoverDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Description
			{...restProps}
			data-slot="popover-description"
			className={resolveClassNames(className, "popover__description")}
		>
			{children}
		</Popover.Description>
	)
}

export const PopoverClose = (props: PopoverCloseProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Popover.Close
			{...restProps}
			data-slot="popover-close"
		>
			{children}
		</Popover.Close>
	)
}

export const popoverCreateHandle = Popover.createHandle