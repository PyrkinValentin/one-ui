import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"

export type SlotProps = ComponentProps<"span">

export type VisuallyHiddenProps = {
	children?: ReactNode
}