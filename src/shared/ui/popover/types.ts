import type { ReactNode } from "react"

import type {
	FloatingOverlayProps,
	OpenChangeReason,
	Placement,
	UseFloatingReturn,
	UseInteractionsReturn
} from "@floating-ui/react"

import type { ComponentProps } from "@/shared/types/props"
import type { PortalProps } from "@/shared/ui/system"
import type { PopoverVariantsProps, PopoverVariantsReturn } from "./variants"

export type PopoverContextValue =
	Partial<Pick<UseFloatingReturn, "context" | "refs">> &
	Partial<Pick<UseInteractionsReturn, "getReferenceProps" | "getFloatingProps">> &
	Pick<PopoverProps, "lockScroll" | "disablePortal"> &
	PopoverOwnContextValue

type PopoverOwnContextValue = {
	slots?: PopoverVariantsReturn
	slotProps?: PopoverSlotProps
}

export type PopoverProps =
	Pick<FloatingOverlayProps, "lockScroll"> &
	Pick<PortalProps, "disablePortal"> &
	PopoverVariantsProps &
	PopoverOwnProps

type PopoverOwnProps = {
	dismissable?: boolean
	placement?: Placement
	offset?: number
	defaultOpen?: boolean
	open?: boolean
	onOpenChange?: (open: boolean, reason?: OpenChangeReason) => void
	slotProps?: PopoverSlotProps
	children?: ReactNode
}

type PopoverSlotProps = {
	backdropProps?: ComponentProps<"div", FloatingOverlayProps>
}

export type PopoverTriggerProps = {
	children?: ReactNode
}

export type PopoverContentProps = ComponentProps

export type PopoverCloseProps = {
	children?: ReactNode
}