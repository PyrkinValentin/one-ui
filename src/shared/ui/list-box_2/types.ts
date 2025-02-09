import type { ElementType, ReactNode } from "react"
import type { ComponentProps, ComponentPropsWithAs } from "@/shared/types/props"
import type { ListBoxItemVariantsProps, ListBoxSectionVariantsProps, ListBoxVariantsProps } from "./variants"

export type ListBoxContextValue =
	Pick<
		ListBoxProps,
		| "hideSelectedIcon"
		| "selectionMode"
		| "selectedIcon"
	> &
	Pick<ListBoxProps, "slotProps"> &
	ListBoxContextOwnValue

type ListBoxContextOwnValue = {
	disabledItem?: (value: string) => boolean
	selectedItem?: (value: string) => boolean | undefined
	onValueChange?: (value: string, selected: boolean) => void
}

export type ListBoxProps = ComponentProps<
	"ul",
	ListBoxVariantsProps &
	Pick<ListBoxItemProps, "selectedIcon"> &
	ListBoxOwnProps
>

type ListBoxOwnProps = {
	disallowEmptySelection?: boolean
	hideEmptyContent?: boolean
	hideSelectedIcon?: boolean
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

type ListBoxSlotProps =
	ListBoxSectionSlotProps &
	ListBoxItemSlotProps &
	ListBoxOwnSlotProps

type ListBoxOwnSlotProps = {
	emptyContentProps?: ComponentProps<"li">
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

export type ListBoxItemProps<
	As extends ElementType = "button"
> = ComponentPropsWithAs<
	As,
	ListBoxItemVariantsProps &
	ListBoxItemOwnProps
>

type ListBoxItemOwnProps = {
	hideSelectedIcon?: boolean
	value?: string
	title?: ReactNode
	description?: ReactNode
	selectedIcon?: ReactNode | ((selected: boolean) => ReactNode)
	startContent?: ReactNode
	endContent?: ReactNode
	slotProps?: ListBoxItemSlotProps
}

type ListBoxItemSlotProps = {
	wrapperProps?: ComponentProps
	titleProps?: ComponentProps<"span">
	descriptionProps?: ComponentProps<"span">
}