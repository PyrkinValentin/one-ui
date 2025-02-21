import type { ReactNode } from "react"

import type {
	FloatingFocusManagerProps,
	FloatingOverlayProps,
	OpenChangeReason,
	Placement,
	UseInteractionsReturn,
	UseRoleProps,
} from "@floating-ui/react"

import type { ComponentProps } from "@/shared/types/props"
import type { PortalProps } from "@/shared/ui/system"
import type { UseFloatingReturn } from "@/shared/hooks/use-floating"
import type { PopoverVariantsProps, PopoverVariantsReturn } from "./variants"

export type PopoverContextValue =
	Partial<Pick<UseFloatingReturn, "context" | "refs">> &
	Partial<Pick<UseInteractionsReturn, "getReferenceProps" | "getFloatingProps">> &
	Pick<PopoverProps, "arrow" | "lockScroll" | "disablePortal" | "disableAnimation"> &
	PopoverContextOwnValue

type PopoverContextOwnValue = {
	classNames?: PopoverVariantsReturn
	slotProps?: PopoverSlotProps
}

export type PopoverProps =
	Pick<FloatingOverlayProps, "lockScroll"> &
	Pick<PortalProps, "disablePortal"> &
	PopoverVariantsProps &
	PopoverOwnProps &
	PopoverStateProps

type PopoverOwnProps = {
	role?: UseRoleProps["role"]
	arrow?: boolean
	dismissable?: boolean
	placement?: Placement
	offset?: number
	slotProps?: PopoverSlotProps
	children?: ReactNode
}

type PopoverSlotProps = {
	backdropProps?: ComponentProps<"div", FloatingOverlayProps>
	contentProps?: ComponentProps
	arrowProps?: ComponentProps
	focusManagerProps?: Omit<FloatingFocusManagerProps, "context" | "children">
}

type PopoverStateProps = {
	defaultOpen?: boolean
	open?: boolean
	onOpenChange?: (open: boolean, reason?: OpenChangeReason) => void
	onClose?: (reason?: OpenChangeReason) => void
}

export type PopoverTriggerProps = {
	children?: ReactNode
}

export type PopoverCloseProps = {
	children?: ReactNode
}

export type PopoverContentProps = ComponentProps