import type { ElementType, ReactNode } from "react"
import type { ComponentProps, ComponentPropsWithAs } from "@/shared/types/props"
import type { BreadcrumbItemVariantsProps, BreadcrumbsVariantsProps } from "./variants"

export type BreadcrumbsContextValue =
	Pick<
		BreadcrumbsProps,
		"hideSeparator" | "separator" | "onAction" | "size" | "color" | "underline" | "disabled" | "disableAnimation"
	> &
	BreadcrumbsContextOwnValue

type BreadcrumbsContextOwnValue = {
	slotProps?: BreadcrumbItemSlotProps
}

export type BreadcrumbsProps = ComponentProps<
	"nav",
	BreadcrumbsVariantsProps &
	BreadcrumbsOwnProps &
	Pick<BreadcrumbItemProps, "hideSeparator" | "separator" | "color" | "underline" | "disabled" | "disableAnimation">
>

type BreadcrumbsOwnProps = {
	maxItems?: number
	beforeCollapse?: number
	afterCollapse?: number
	onAction?: (value: string) => void
	slotProps?: BreadcrumbsSlotProps
}

type BreadcrumbsSlotProps = {
	listProps?: ComponentProps<"ol">
	ellipsisProps?: ComponentProps<"svg">
	breadcrumbItemSlotProps?: BreadcrumbItemSlotProps
}

export type BreadcrumbItemProps<As extends ElementType = "button"> = ComponentPropsWithAs<
	As,
	BreadcrumbItemVariantsProps &
	BreadcrumbItemOwnProps
>

type BreadcrumbItemOwnProps = {
	last?: boolean
	hideSeparator?: boolean
	value?: string | null
	startContent?: ReactNode
	endContent?: ReactNode
	separator?: ReactNode
	slotProps?: BreadcrumbItemSlotProps
}

type BreadcrumbItemSlotProps = {
	baseProps?: ComponentProps<"li">
	separatorProps?: ComponentProps<"span">
}