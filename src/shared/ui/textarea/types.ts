import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { TextareaVariantsProps } from "./variants"

export type TextareaProps = ComponentProps<
	"div",
	TextareaVariantsProps &
	Pick<ComponentProps<"textarea">,
		| "inputMode"
		| "name"
		| "placeholder"
		| "autoFocus"
		| "autoComplete"
		| "cols"
		| "rows"
		| "minLength"
		| "maxLength"
		| "onChange"
	> &
	TextareaOwnProps
>

type TextareaOwnProps = {
	label?: ReactNode
	startContent?: ReactNode
	endContent?: ReactNode
	invalidMessage?: ReactNode
	description?: ReactNode
	defaultValue?: string
	value?: string
	onValueChange?: (value: string) => void
	onClear?: () => void
	slotProps?: TextareaSlotProps
}

type TextareaSlotProps = {
	wrapperProps?: ComponentProps
	labelProps?: ComponentProps<"label">
	textareaWrapperProps?: ComponentProps<"label">
	textareaProps?: ComponentProps<"textarea">
	clearButtonProps?: ComponentProps<"button">
	invalidMessageProps?: ComponentProps<"p">
	descriptionProps?: ComponentProps<"p">
}