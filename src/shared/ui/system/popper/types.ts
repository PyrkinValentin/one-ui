import type { ElementType, Key, ReactNode, RefObject } from "react"

import type {
	ArrowOptions, FlipOptions, OffsetOptions, OpenChangeReason, Placement,
	ShiftOptions, UseClickProps, UseDismissProps, UseHoverProps, UseRoleProps
} from "@floating-ui/react"

import type { ComponentProps, ComponentPropsWithAs } from "@/shared/types/props"

export type PopperProps = ComponentProps<"span", PopperOwnProps>

type PopperOwnProps = {
	autoUpdate?: boolean
	offsetOptions?: OffsetOptions & { enabled?: boolean }
	flipOptions?: FlipOptions & { enabled?: boolean }
	shiftOptions?: ShiftOptions & { enabled?: boolean }
	arrowOptions?: ArrowOptions & { enabled?: boolean }
	useRoleOptions?: UseRoleProps
	useHoverOptions?: UseHoverProps
	useClickOptions?: UseClickProps
	useDismissOptions?: UseDismissProps
	placement?: Placement
	defaultOpen?: boolean
	open?: boolean
	onOpenChange?: (open: boolean, ev: Event, reason?: OpenChangeReason) => void
}

export type PortalProps = {
	disablePortal?: boolean
	children?: ReactNode
	container?: Element | RefObject<HTMLElement | null>
	key?: Key | null
}

export type SlotProps<
	As extends ElementType = "span"
> = ComponentPropsWithAs<As, SlotOwnProps>

type SlotOwnProps = {
	fallbackElement?: boolean
	shouldMergeProps?: boolean
}

export type VisuallyHiddenProps = {
	children?: ReactNode
}