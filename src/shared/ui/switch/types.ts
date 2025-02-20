import type { ChangeEvent, ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { SwitchVariantsProps } from "./variants"

export type SwitchProps = ComponentProps<
	"input",
	SwitchVariantsProps &
	SwitchOwnProps
>

type SwitchOwnProps = {
	name?: string
	value?: string
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
	baseProps?: ComponentProps<"label">
	wrapperProps?: ComponentProps<"span">
	thumbProps?: ComponentProps<"span">
	labelProps?: ComponentProps<"span">
}