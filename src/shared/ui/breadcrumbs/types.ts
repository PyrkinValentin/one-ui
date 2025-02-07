import type { LinkProps } from "next/link"
import type { ReactNode } from "react"
import type { ComponentProps, ComponentPropsWithAs } from "@/shared/types/props"
import type { BreadcrumbsVariantsProps } from "./variants"

export type BreadcrumbsProps = ComponentProps<
	"nav",
	BreadcrumbsVariantsProps &
	BreadcrumbsOwnProps
>

type BreadcrumbsOwnProps = {
	showSeparator?: boolean
	maxItems?: number
	beforeCollapse?: number
	afterCollapse?: number
	separator?: ReactNode
	renderEllipsis?: (props: BreadcrumbsRenderEllipsisProps) => ReactNode
	slotProps?: BreadcrumbsSlotProps
}

type BreadcrumbsSlotProps = {
	listProps?: ComponentProps<"ol">
	itemProps?: ComponentProps<"li">
	ellipsisProps?: ComponentProps<"svg">
	separatorProps?: ComponentProps<"span">
}

type BreadcrumbsRenderEllipsisProps = {
	items: BreadcrumbProps[]
	icon: ReactNode
}

export type BreadcrumbProps = ComponentPropsWithAs<
	"a",
	LinkProps &
	BreadcrumbOwnProps
>

type BreadcrumbOwnProps = {
	startContent?: ReactNode
	endContent?: ReactNode
}