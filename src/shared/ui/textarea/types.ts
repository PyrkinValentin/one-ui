import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { TextareaVariantsProps } from "./variants"

export type TextareaProps = ComponentProps<
	"textarea",
	TextareaVariantsProps &
	TextareaOwnProps &
	TextareaStateProps
>

type TextareaOwnProps = {
	label?: ReactNode
	startContent?: ReactNode
	endContent?: ReactNode
	invalidMessage?: ReactNode
	description?: ReactNode
	slotProps?: TextareaSlotProps
}

type TextareaSlotProps = {
	baseProps?: ComponentProps
	wrapperProps?: ComponentProps
	labelProps?: ComponentProps<"label">
	textareaWrapperProps?: ComponentProps<"label">
	clearButtonProps?: ComponentProps<"button">
	invalidMessageProps?: ComponentProps<"p">
	descriptionProps?: ComponentProps<"p">
}

type TextareaStateProps = {
	defaultValue?: string
	value?: string
	onValueChange?: (value: string) => void
	onClear?: () => void
}