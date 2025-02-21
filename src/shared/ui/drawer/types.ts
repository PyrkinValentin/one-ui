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
import type { DrawerVariantsProps, DrawerVariantsReturn } from "./variants"

export type DrawerContextValue =
	Partial<Pick<UseFloatingReturn, "context" | "refs">> &
	Partial<Pick<UseInteractionsReturn, "getReferenceProps" | "getFloatingProps">> &
	Pick<
		DrawerProps,
		"lockScroll" | "disablePortal" | "disableAnimation" | "closeButtonIcon" | "hideCloseButton" | "placement"
	> &
	DrawerContextOwnValue

type DrawerContextOwnValue = {
	headerId?: string
	bodyId?: string
	classNames?: DrawerVariantsReturn
	slotProps?: DrawerSlotProps
}

export type DrawerProps =
	DrawerVariantsProps &
	DrawerOwnProps &
	DrawerStateProps &
	Pick<FloatingOverlayProps, "lockScroll"> &
	Pick<PortalProps, "disablePortal">

type DrawerOwnProps = {
	dismissable?: boolean
	hideCloseButton?: boolean
	closeButtonIcon?: ReactNode
	children?: ReactNode
	slotProps?: DrawerSlotProps
}

type DrawerSlotProps = {
	backdropProps?: ComponentProps<"div", FloatingOverlayProps>
	focusManagerProps?: Omit<FloatingFocusManagerProps, "context" | "children">
	closeButtonProps?: ComponentProps<"button">
}

type DrawerStateProps = {
	defaultOpen?: boolean
	open?: boolean
	onOpenChange?: (open: boolean, reason?: OpenChangeReason) => void
	onClose?: (reason?: OpenChangeReason) => void
}

export type DrawerTriggerProps = {
	children?: ReactNode
}

export type DrawerCloseProps = {
	children?: ReactNode
}

export type DrawerContentProps = ComponentProps<"section">
export type DrawerHeaderProps = ComponentProps<"header">
export type DrawerBodyProps = ComponentProps
export type DrawerFooterProps = ComponentProps<"footer">