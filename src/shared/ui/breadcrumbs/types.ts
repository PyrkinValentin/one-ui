import type { LinkProps } from "next/link"
import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { BreadcrumbsVariantsProps } from "./variants"

export type BreadcrumbsProps = ComponentProps<
	"nav",
	Omit<BreadcrumbsVariantsProps, "current"> &
	BreadcrumbsOwnProps
>

type BreadcrumbsOwnProps = {
	separator?: ReactNode
	slotProps?: BreadcrumbsSlotProps
}

type BreadcrumbsSlotProps = {
	listProps?: ComponentProps<"ol">
	separatorProps?: ComponentProps<"svg">
}

export type BreadcrumbsItemProps = ComponentProps<
	"a",
	Partial<LinkProps> &
	BreadcrumbsItemOwnProps
>

type BreadcrumbsItemOwnProps = {
	current?: boolean
	startContent?: ReactNode
	endContent?: ReactNode
}