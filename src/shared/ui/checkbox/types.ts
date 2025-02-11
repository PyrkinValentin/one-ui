import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { CheckboxGroupVariantsProps, CheckboxVariantsProps } from "./variants"

export type CheckboxGroupContextValue =
	Pick<CheckboxGroupProps,
		| "invalid" | "required" | "size" | "color" | "rounded" | "lineThrough" | "readOnly" | "disabled"
		| "disableAnimation"
	> &
	Pick<CheckboxProps, "slotProps"> &
	CheckboxGroupContextOwnValue

type CheckboxGroupContextOwnValue = {
	getItemState?: GetItemState
}

export type GetItemState = (
	value: string | undefined,
	options: GetItemStateOptions
) => GetItemStateReturn

type GetItemStateReturn = {
	disabled?: boolean
	checked: boolean
	toggleChecked: (checked: boolean) => void
}

type GetItemStateOptions = {
	disabled?: boolean
	valueId: string
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
	"label",
	Pick<ComponentProps<"input">, "required" | "name" | "onChange"> &
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
	wrapperProps?: ComponentProps<"span">
	inputProps?: ComponentProps<"input">
	iconProps?: ComponentProps<"svg">
	labelProps?: ComponentProps<"label">
}

type CheckboxStateProps = {
	defaultChecked?: boolean
	checked?: boolean
	onCheckedChange?: (checked: boolean) => void
}