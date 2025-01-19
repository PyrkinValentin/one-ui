import type { ElementType, Key, ReactNode, RefObject } from "react"
import type { ComponentPropsWithAs } from "@/shared/types/props"

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