import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { SpinnerProps } from "@/shared/ui/spinner"
import type { ButtonGroupVariantsProps, ButtonVariantsProps } from "./variants"

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
> & {
	inGroup?: boolean
}

export type ButtonGroupProps = ComponentProps<
	"div",
	ButtonGroupVariantsProps &
	ButtonGroupOwnProps
>

type ButtonGroupOwnProps = Pick<
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

export type ButtonProps = ComponentProps<
	"button",
	Omit<ButtonVariantsProps, "inGroup"> &
	ButtonOwnProps
>

type ButtonOwnProps = {
	startContent?: ReactNode
	endContent?: ReactNode
	slotProps?: ButtonSlotProps
}

type ButtonSlotProps = {
	wrapperProps?: ComponentProps
	spinnerProps?: SpinnerProps
}