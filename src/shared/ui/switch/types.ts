import type { ChangeEvent, ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { SwitchVariantsProps } from "./variants"

export type SwitchProps = ComponentProps<
	"label",
	SwitchVariantsProps &
	SwitchOwnProps
>

type SwitchOwnProps = {
	name?: string
	defaultChecked?: boolean
	checked?: boolean
	onCheckedChange?: (checked: boolean) => void
	onChange?: (ev: ChangeEvent<HTMLInputElement>) => void
	startContent?: ReactNode
	endContent?: ReactNode
	thumbIcon?: ReactNode | ((checked: boolean) => ReactNode)
	slotProps?: SwitchSlotProps
}

type SwitchSlotProps = {
	wrapperProps?: ComponentProps<"span">
	inputProps?: ComponentProps<"input">
	thumbProps?: ComponentProps<"span">
	labelProps?: ComponentProps<"span">
}