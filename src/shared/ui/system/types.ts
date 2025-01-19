import type { ElementType, ReactNode } from "react"
import type { ComponentPropsWithAs } from "@/shared/types/props"

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