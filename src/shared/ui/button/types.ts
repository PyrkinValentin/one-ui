import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { SpinnerProps } from "@/shared/ui/spinner"
import type { ButtonGroupVariantsProps, ButtonVariantsProps } from "./variants"

export type ButtonGroupContextValue =
	Pick<
		ButtonGroupProps,
		"variant" | "size" | "color" | "rounded" | "fullWidth" | "disabled" | "iconOnly" | "disableAnimation" | "slotProps"
	> &
	ButtonGroupContextOwnValue

type ButtonGroupContextOwnValue = {
	inGroup?: boolean
}

export type ButtonGroupProps = ComponentProps<
	"div",
	ButtonGroupVariantsProps &
	Pick<
		ButtonProps,
		"variant" | "color" | "size" | "rounded" | "fullWidth" | "disabled" | "iconOnly" | "disableAnimation" | "slotProps"
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
	slotProps?: ButtonSlotProps
}

type ButtonSlotProps = {
	wrapperProps?: ComponentProps
	spinnerProps?: SpinnerProps
}