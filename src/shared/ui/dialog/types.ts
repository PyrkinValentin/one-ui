import type { ReactNode } from "react"

import type {
	FloatingFocusManagerProps,
	FloatingOverlayProps,
	OpenChangeReason,
	UseInteractionsReturn
} from "@floating-ui/react"

import type { ComponentProps } from "@/shared/types/props"
import type { UseFloatingReturn } from "@/shared/hooks/use-floating"
import type { PortalProps } from "@/shared/ui/system"
import type { DialogVariantsProps, DialogVariantsReturn } from "./variants"

export type DialogContextValue =
	Partial<Pick<UseFloatingReturn, "context" | "refs">> &
	Partial<Pick<UseInteractionsReturn, "getReferenceProps" | "getFloatingProps">> &
	Pick<DialogProps, "lockScroll" | "disablePortal" | "disableAnimation" | "closeButtonIcon" | "hideCloseButton"> &
	DialogContextOwnValue

type DialogContextOwnValue = {
	headerId?: string
	bodyId?: string
	classNames?: DialogVariantsReturn
	slotProps?: DialogSlotProps
}

export type DialogProps =
	DialogVariantsProps &
	DialogOwnProps &
	DialogStateProps &
	Pick<FloatingOverlayProps, "lockScroll"> &
	Pick<PortalProps, "disablePortal">

type DialogOwnProps = {
	dismissable?: boolean
	hideCloseButton?: boolean
	closeButtonIcon?: ReactNode
	children?: ReactNode
	slotProps?: DialogSlotProps
}

type DialogSlotProps = {
	backdropProps?: ComponentProps<"div", FloatingOverlayProps>
	focusManagerProps?: Omit<FloatingFocusManagerProps, "context" | "children">
	wrapperProps?: ComponentProps
	closeButtonProps?: ComponentProps<"button">
}

type DialogStateProps = {
	defaultOpen?: boolean
	open?: boolean
	onOpenChange?: (open: boolean, reason?: OpenChangeReason) => void
	onClose?: (reason?: OpenChangeReason) => void
}

export type DialogTriggerProps = {
	children?: ReactNode
}

export type DialogCloseProps = {
	children?: ReactNode
}

export type DialogContentProps = ComponentProps
export type DialogHeaderProps = ComponentProps
export type DialogBodyProps = ComponentProps
export type DialogFooterProps = ComponentProps