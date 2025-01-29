import type { ChangeEvent, ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { CheckboxGroupVariantsProps, CheckboxVariantsProps } from "./variants"

export type CheckboxProps = ComponentProps<
	"label",
	CheckboxVariantsProps &
	CheckboxOwnProps
>

type CheckboxOwnProps = {
	required?: boolean
	name?: string
	value?: string
	icon?: ReactNode | ((checked: boolean) => ReactNode)
	defaultChecked?: boolean
	checked?: boolean
	onCheckedChange?: (checked: boolean) => void
	onChange?: (ev: ChangeEvent<HTMLInputElement>) => void
	slotProps?: CheckboxSlotProps
}

type CheckboxSlotProps = {
	wrapperProps?: ComponentProps<"span">
	inputProps?: ComponentProps<"input">
	iconProps?: ComponentProps<"svg">
	labelProps?: ComponentProps<"span">
}

export type CheckboxIconProps = ComponentProps<
	"svg",
	Pick<CheckboxProps, "checked" | "disableAnimation">
>

export type CheckboxGroupContextValue = Pick<
	CheckboxGroupProps,
	| "name"
	| "size"
	| "color"
	| "rounded"
	| "lineThrough"
	| "invalid"
	| "required"
	| "readOnly"
	| "disabled"
	| "disableAnimation"
> & CheckboxGroupContextOwnValue

type CheckboxGroupContextOwnValue = {
	disabledGroup?: (value?: string) => boolean
	checkedGroup?: (value?: string) => boolean
	onCheckedChangeGroup?: (value?: string) => (checked: boolean) => void
}

export type CheckboxGroupProps = ComponentProps<
	"div",
	CheckboxGroupVariantsProps &
	Pick<
		CheckboxProps,
		| "name"
		| "size"
		| "color"
		| "rounded"
		| "lineThrough"
		| "readOnly"
		| "disabled"
	> &
	CheckboxGroupOwnProps
>

type CheckboxGroupOwnProps = {
	label?: ReactNode
	description?: ReactNode
	invalidMessage?: ReactNode
	disabledValue?: string[]
	defaultValue?: string[]
	value?: string[]
	onValueChange?: (value: string[]) => void
	slotProps?: CheckboxGroupSlotProps
}

type CheckboxGroupSlotProps = {
	labelProps?: ComponentProps<"span">
	wrapperProps?: ComponentProps
	invalidMessageProps?: ComponentProps<"p">
	descriptionProps?: ComponentProps<"p">
}