import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { InputVariantsProps } from "./variants"

export type InputProps = ComponentProps<
	"input",
	InputVariantsProps &
	InputOwnProps
>

type InputOwnProps = {
	label?: ReactNode
	startContent?: ReactNode
	endContent?: ReactNode
	invalidMessage?: ReactNode
	description?: ReactNode
	defaultValue?: string
	value?: string
	onValueChange?: (value: string) => void
	onClear?: () => void
	slotProps?: InputSlotProps
}

type InputSlotProps = {
	baseProps?: ComponentProps
	wrapperProps?: ComponentProps
	labelProps?: ComponentProps<"label">
	inputWrapperProps?: ComponentProps<"label">
	clearButtonProps?: ComponentProps<"button">
	invalidMessageProps?: ComponentProps<"p">
	descriptionProps?: ComponentProps<"p">
}