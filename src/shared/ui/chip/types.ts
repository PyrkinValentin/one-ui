import type { MouseEvent, ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { ChipVariantsProps } from "./variants"

export type ChipProps = ComponentProps<
	"div",
	Omit<ChipVariantsProps, "oneChar" | "closeable" | "hasStartContent" | "hasEndContent"> &
	ChipOwnProps
>

type ChipOwnProps = {
	startContent?: ReactNode
	endContent?: ReactNode
	onClose?: (ev: MouseEvent<HTMLButtonElement>) => void
	slotProps?: ChipSlotProps
}

type ChipSlotProps = {
	contentProps?: ComponentProps<"span">
	dotProps?: ComponentProps<"span">
	closeButtonProps?: ComponentProps<"button">
}