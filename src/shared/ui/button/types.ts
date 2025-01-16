import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { SpinnerProps } from "@/shared/ui/spinner/types"
import type { ButtonGroupVariantsProps, ButtonVariantsSlots, ButtonVariantsProps } from "./variants"

export type ButtonGroupContextValue = Pick<
	ButtonGroupProps,
	| "variant"
	| "color"
	| "size"
	| "rounded"
	| "fullWidth"
	| "disabled"
	| "iconOnly"
	| "disableAnimation"
>

export type ButtonGroupProps = ComponentProps<
	"div",
	ButtonGroupVariantsProps &
	Pick<
		ButtonProps,
		| "variant"
		| "color"
		| "size"
		| "rounded"
		| "fullWidth"
		| "disabled"
		| "iconOnly"
		| "disableAnimation"
	>
>

export type ButtonProps = ComponentProps<
	"button",
	Omit<ButtonVariantsProps, "inGroup"> &
	ButtonOwnProps
>

type ButtonOwnProps = {
	startContent?: ReactNode
	endContent?: ReactNode
	spinnerProps?: SpinnerProps
	classNames?: ButtonVariantsSlots
}