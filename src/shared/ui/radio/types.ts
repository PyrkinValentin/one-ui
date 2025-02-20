import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { RadioVariantsProps, RadioGroupVariantsProps } from "./variants"

export type RadioGroupContextValue =
	Pick<RadioGroupProps, "name" | "size" | "color" | "readOnly" | "invalid" | "disableAnimation"> &
	RadioGroupContextOwnValue

type RadioGroupContextOwnValue = {
	isDisabled?: (value: string) => boolean
	isChecked?: (value: string) => boolean
	onChecked?: (value: string) => void
	slotProps?: Pick<RadioGroupSlotProps, "radioSlotProps">
}

export type RadioGroupProps = ComponentProps<
	"div",
	RadioGroupVariantsProps &
	RadioGroupOwnProps &
	RadioGroupStateProps &
	Pick<RadioProps, "size" | "color" | "readOnly" | "disabled">
>

type RadioGroupOwnProps = {
	name?: string
	label?: ReactNode
	description?: ReactNode
	invalidMessage?: ReactNode
	slotProps?: RadioGroupSlotProps
}

type RadioGroupSlotProps = {
	labelProps?: ComponentProps<"span">
	wrapperProps?: ComponentProps
	invalidMessageProps?: ComponentProps<"p">
	descriptionProps?: ComponentProps<"p">
	radioSlotProps?: RadioSlotProps
}

type RadioGroupStateProps = {
	disabledValue?: string[]
	defaultValue?: string
	value?: string
	onValueChange?: (value: string) => void
}

export type RadioProps = ComponentProps<
	"input",
	RadioVariantsProps &
	RadioOwnProps
>

type RadioOwnProps = {
	value: string
	description?: ReactNode
	slotProps?: RadioSlotProps
}

type RadioSlotProps = {
	baseProps?: ComponentProps<"label">
	wrapperProps?: ComponentProps<"span">
	controlProps?: ComponentProps<"span">
	labelWrapperProps?: ComponentProps<"span">
	labelProps?: ComponentProps<"label">
	descriptionProps?: ComponentProps<"span">
}