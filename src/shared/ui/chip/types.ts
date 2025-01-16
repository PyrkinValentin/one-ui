import type { MouseEvent, ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { ChipVariantsSlots, ChipVariantsProps } from "./variants"

export type ChipProps = ComponentProps<
	"div",
	ChipVariantsProps &
	ChipOwnProps
>

type ChipOwnProps = {
	startContent?: ReactNode
	endContent?: ReactNode
	onClose?: (ev: MouseEvent<HTMLButtonElement>) => void
	classNames?: ChipVariantsSlots
}