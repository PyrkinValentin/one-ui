import type { ElementType, ReactNode } from "react"
import type { ComponentProps, ComponentPropsWithAs } from "@/shared/types/props"
import type { ListBoxItemVariantsProps, ListBoxSectionVariantsProps, ListBoxVariantsProps } from "./variants"

export type ListBoxContextValue =
	Pick<
		ListBoxProps,
		| "showSelectedIcon"
		| "selectionMode"
		| "variant"
		| "color"
		| "disableAnimation"
	> & ListBoxContextOwnValue

type ListBoxContextOwnValue = Pick<ListBoxProps, "slotProps">

export type ListBoxProps = ComponentProps<
	"ul",
	ListBoxVariantsProps &
	ListBoxOwnProps &
	Pick<
		ListBoxItemProps,
		| "variant"
		| "color"
		| "disableAnimation"
	>
>

type ListBoxOwnProps = {
	showEmptyContent?: boolean
	showSelectedIcon?: boolean
	disabledValue?: string[]
	emptyContent?: ReactNode
	slotProps?: ListBoxSlotProps
} & ({
	selectionMode?: "none"
	defaultValue?: undefined
	value?: undefined
	onValueChange?: (value: undefined) => void
} | {
	selectionMode: "single"
	defaultValue?: string
	value?: string
	onValueChange?: (value: string) => void
} | {
	selectionMode: "multiple"
	defaultValue?: string[]
	value?: string[]
	onValueChange?: (value: string[]) => void
})

type ListBoxSlotProps = {
	buttonProps?: ComponentProps<"button">
}

export type ListBoxSectionProps = ComponentProps<
	"li",
	ListBoxSectionVariantsProps &
	ListBoxSectionOwnProps
>

type ListBoxSectionOwnProps = {
	title?: ReactNode
}

export type ListBoxItemProps<
	As extends ElementType = "button"
> = ComponentPropsWithAs<
	As,
	ListBoxItemOwnProps &
	ListBoxItemVariantsProps
>

type ListBoxItemOwnProps = {
	title?: ReactNode
	description?: ReactNode
	startContent?: ReactNode
	endContent?: ReactNode
}