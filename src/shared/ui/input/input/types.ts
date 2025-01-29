import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { InputVariantsProps } from "./variants"

export type InputProps = ComponentProps<
	"div",
	InputVariantsProps &
	Pick<ComponentProps<"input">,
		| "type"
		| "inputMode"
		| "name"
		| "placeholder"
		| "autoFocus"
		| "autoComplete"
		| "minLength"
		| "maxLength"
		| "onChange"
	> &
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
	slotProps?: InputSlotProps
}

type InputSlotProps = {
	wrapperProps?: ComponentProps
	labelProps?: ComponentProps<"label">
	inputWrapperProps?: ComponentProps<"label">
	inputProps?: ComponentProps<"input">
	clearButtonProps?: ComponentProps<"button">
	invalidMessageProps?: ComponentProps<"p">
	descriptionProps?: ComponentProps<"p">
}