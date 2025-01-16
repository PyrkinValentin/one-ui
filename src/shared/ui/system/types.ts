import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"

export type SlotProps = ComponentProps<"span", SlotOwnProps>

type SlotOwnProps = {
	fallbackElement?: boolean
	shouldMergeProps?: boolean
}

export type VisuallyHiddenProps = {
	children?: ReactNode
}