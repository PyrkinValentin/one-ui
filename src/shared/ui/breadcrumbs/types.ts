import type { LinkProps } from "next/link"
import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { BreadcrumbsVariantsProps, BreadcrumbsVariantsReturn } from "./variants"

export type BreadcrumbsContextValue =
	Pick<BreadcrumbsProps, "separator" | "disabled" | "slotProps"> &
	BreadcrumbsContextOwnValue

type BreadcrumbsContextOwnValue = {
	controlledItem?: boolean
	classNames?: BreadcrumbsVariantsReturn
}

export type BreadcrumbsProps = ComponentProps<
	"nav",
	BreadcrumbsVariantsProps &
	BreadcrumbsOwnProps
>

type BreadcrumbsOwnProps = {
	separator?: ReactNode
	slotProps?: BreadcrumbsSlotProps
}

type BreadcrumbsSlotProps = {
	listProps?: ComponentProps<"ol">
	separatorProps?: ComponentProps<"li">
}

export type BreadcrumbsItemProps = ComponentProps<"a", BreadcrumbsItemOwnProps>

type BreadcrumbsItemOwnProps = {
	current?: boolean
	last?: boolean
	startContent?: ReactNode
	endContent?: ReactNode
}