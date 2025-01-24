import type { ElementType } from "react"
import type { ComponentPropsWithAs } from "@/shared/types/props"

export type SlotProps<
	As extends ElementType = "span"
> = ComponentPropsWithAs<As, SlotOwnProps>

type SlotOwnProps = Record<string, unknown> | {
	fallbackElement?: boolean
	shouldMergeProps?: boolean
}