import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { BadgeVariantsProps } from "./variants"

export type BadgeProps = ComponentProps<
	"span",
	BadgeVariantsProps &
	BadgeOwnProps
>

type BadgeOwnProps = {
	content?: ReactNode
	slotProps?: BadgeSlotProps
}

type BadgeSlotProps = {
	baseProps?: ComponentProps
}