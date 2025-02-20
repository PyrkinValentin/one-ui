import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { SwitchVariantsProps } from "./variants"

export type SwitchProps = ComponentProps<
	"input",
	SwitchVariantsProps &
	SwitchOwnProps &
	SwitchStateProps
>

type SwitchOwnProps = {
	name?: string
	value?: string
	startContent?: ReactNode
	endContent?: ReactNode
	thumbIcon?: ReactNode | ((checked: boolean) => ReactNode)
	slotProps?: SwitchSlotProps
}

type SwitchSlotProps = {
	baseProps?: ComponentProps<"label">
	wrapperProps?: ComponentProps<"span">
	thumbProps?: ComponentProps<"span">
	labelProps?: ComponentProps<"span">
}

type SwitchStateProps = {
	defaultChecked?: boolean
	checked?: boolean
	onCheckedChange?: (checked: boolean) => void
}