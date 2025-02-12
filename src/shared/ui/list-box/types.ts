import type { ElementType, ReactNode } from "react"
import type { ComponentProps, ComponentPropsWithAs } from "@/shared/types/props"
import type { ListBoxVariantsProps, ListBoxSectionVariantsProps, ListBoxItemVariantsProps } from "./variants"

export type ListBoxContextValue =
	Pick<ListBoxProps, "hideSelectedIcon" | "selectedIcon" | "selectionMode" | "variant" | "color" | "disableAnimation"> &
	ListBoxContextOwnValue

type ListBoxContextOwnValue = {
	getItemState?: GetListBoxItemState
}

export type GetListBoxItemState = (
	value: string | undefined,
	options: GetItemStateOptions
) => GetItemStateReturn | void

type GetItemStateReturn = {
	disabled?: boolean
	selected: boolean
	toggleSelected: () => void
}

type GetItemStateOptions = {
	disabled?: boolean
	valueId: string
}

export type ListBoxProps = ComponentProps<
	"ul",
	ListBoxVariantsProps &
	ListBoxOwnProps &
	ListBoxStateProps &
	Pick<ListBoxItemProps, "hideSelectedIcon" | "selectedIcon" | "variant" | "color" | "disableAnimation">
>

type ListBoxOwnProps = {
	disallowEmptySelection?: boolean
	disabledValue?: string[]
}

type ListBoxStateProps = {
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
}

export type ListBoxSectionProps = ComponentProps<
	"li",
	ListBoxSectionVariantsProps &
	ListBoxSectionOwnProps
>

type ListBoxSectionOwnProps = {
	title?: ReactNode
	slotProps?: ListBoxSectionSlotProps
}

type ListBoxSectionSlotProps = {
	headingProps?: ComponentProps<"span">
	groupProps?: ComponentProps<"ul">
}

export type ListBoxItemProps<As extends ElementType = "button"> = ComponentPropsWithAs<
	As,
	ListBoxItemVariantsProps &
	ListBoxItemOwnProps
>

type ListBoxItemOwnProps = {
	hideSelectedIcon?: boolean
	value?: string
	title?: ReactNode
	description?: ReactNode
	startContent?: ReactNode
	endContent?: ReactNode
	selectedIcon?: ReactNode | ((selected?: boolean) => ReactNode)
}