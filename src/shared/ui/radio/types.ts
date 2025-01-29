import type { ChangeEvent, ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { RadioVariantsProps, RadioGroupVariantsProps } from "./variants"

export type RadioProps = ComponentProps<
	"label",
	RadioVariantsProps &
	RadioOwnProps
>

type RadioOwnProps = {
	value: string
	description?: ReactNode
	slotProps?: RadioSlotProps
}

type RadioSlotProps = {
	wrapperProps?: ComponentProps<"span">
	inputProps?: ComponentProps<"input">
	controlProps?: ComponentProps<"span">
	labelWrapperProps?: ComponentProps<"span">
	labelProps?: ComponentProps<"span">
	descriptionProps?: ComponentProps<"span">
}

export type RadioGroupContextValue = Pick<
	RadioGroupProps,
	| "name"
	| "size"
	| "color"
	| "readOnly"
	| "disabled"
	| "invalid"
	| "disableAnimation"
> & RadioGroupContextOwnValue

type RadioGroupContextOwnValue = {
	disabledGroup?: (value: string) => boolean
	checkedGroup?: (value: string) => boolean
	onChangeGroup?: (ev: ChangeEvent<HTMLInputElement>) => void
}

export type RadioGroupProps = ComponentProps<
	"div",
	RadioGroupVariantsProps &
	Pick<
		RadioProps,
		| "size"
		| "color"
		| "readOnly"
		| "disabled"
	> &
	RadioGroupOwnProps
>

type RadioGroupOwnProps = {
	name?: string
	label?: ReactNode
	description?: ReactNode
	invalidMessage?: ReactNode
	disabledValue?: string[]
	defaultValue?: string
	value?: string
	onValueChange?: (value: string) => void
	onChange?: (ev: ChangeEvent<HTMLInputElement>) => void
	slotProps?: RadioGroupSlotProps
}

type RadioGroupSlotProps = {
	labelProps?: ComponentProps<"span">
	wrapperProps?: ComponentProps
	invalidMessageProps?: ComponentProps<"p">
	descriptionProps?: ComponentProps<"p">
}