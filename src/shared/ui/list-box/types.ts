import type { ElementType, ReactNode } from "react"
import type { ComponentProps, ComponentPropsWithAs } from "@/shared/types/props"
import type { ListBoxVariantsProps, ListBoxSectionVariantsProps, ListBoxItemVariantsProps } from "./variants"

export type ListBoxContextValue =
	Pick<ListBoxProps, "hideSelectedIcon" | "selectedIcon" | "selectionMode" | "variant" | "color" | "disableAnimation"> &
	ListBoxContextOwnValue

type ListBoxContextOwnValue = {
	isDisabled?: (value: string) => boolean
	isSelected?: (value: string) => boolean
	onSelected?: (value: string, selected: boolean) => void
	slotProps?: Pick<ListBoxSlotProps, "itemSlotProps" | "sectionSlotProps">
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
	slotProps?: ListBoxSlotProps
}

type ListBoxSlotProps = {
	sectionSlotProps?: ListBoxSectionSlotProps
	itemSlotProps?: ListBoxItemSlotProps
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
	selectedIcon?: ReactNode | ((selected: boolean) => ReactNode)
	slotProps?: ListBoxItemSlotProps
}

type ListBoxItemSlotProps = {
	baseProps?: ComponentProps<"li">
	wrapperProps?: ComponentProps
	titleProps?: ComponentProps<"span">
	descriptionProps?: ComponentProps<"span">
	selectedIconProps?: ComponentProps<"span">
}