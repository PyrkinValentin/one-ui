import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { CheckboxGroupVariantsProps, CheckboxVariantsProps } from "./variants"

export type CheckboxGroupContextValue =
	Pick<CheckboxGroupProps, "invalid" | "size" | "color" | "rounded" | "lineThrough" | "readOnly" | "disableAnimation"> &
	Pick<CheckboxProps, "slotProps"> &
	CheckboxGroupContextOwnValue

type CheckboxGroupContextOwnValue = {
	isDisabled?: (value: string) => boolean
	isChecked?: (value: string) => boolean
	onChecked?: (value: string) => (checked: boolean) => void
}

export type CheckboxGroupProps = ComponentProps<
	"div",
	CheckboxGroupVariantsProps &
	CheckboxGroupOwnProps &
	CheckboxGroupStateProps &
	Pick<CheckboxProps, "size" | "color" | "rounded" | "lineThrough" | "readOnly" | "disabled">
>

type CheckboxGroupOwnProps = {
	label?: ReactNode
	description?: ReactNode
	invalidMessage?: ReactNode
	slotProps?: CheckboxGroupSlotProps
}

type CheckboxGroupSlotProps = {
	labelProps?: ComponentProps<"span">
	wrapperProps?: ComponentProps
	invalidMessageProps?: ComponentProps<"p">
	descriptionProps?: ComponentProps<"p">
	checkboxSlotProps?: CheckboxSlotProps
}

type CheckboxGroupStateProps = {
	disabledValue?: string[]
	defaultValue?: string[]
	value?: string[]
	onValueChange?: (value: string[]) => void
}

export type CheckboxProps = ComponentProps<
	"input",
	CheckboxVariantsProps &
	CheckboxOwnProps &
	CheckboxStateProps
>

type CheckboxOwnProps = {
	value?: string
	icon?: ReactNode | ((checked: boolean) => ReactNode)
	slotProps?: CheckboxSlotProps
}

type CheckboxSlotProps = {
	baseProps?: ComponentProps<"label">
	wrapperProps?: ComponentProps<"span">
	iconProps?: ComponentProps<"svg">
	labelProps?: ComponentProps<"label">
}

type CheckboxStateProps = {
	defaultChecked?: boolean
	checked?: boolean
	onCheckedChange?: (checked: boolean) => void
}