import type { ElementType, ReactNode } from "react"
import type { ComponentProps, ComponentPropsWithAs } from "@/shared/types/props"
import type { PaginationVariantsProps, PaginationVariantsReturn } from "./variants"

export type PaginationContextValue = {
	disabled?: boolean
	classNames?: PaginationVariantsReturn
	getPage?: (item: ItemValue) => number
	isDisabledControl?: (item: Extract<ItemValue, "prev" | "next">) => boolean
	isCurrentPage?: (page: number) => boolean
	onPageChange?: (page: number) => void
}

export type PaginationProps = ComponentProps<
	"nav",
	PaginationVariantsProps &
	PaginationOwnProps
>

type PaginationOwnProps = {
	loop?: boolean
	showControls?: boolean
	totalPages?: number
	dotsJump?: number
	siblings?: number
	boundaries?: number
	defaultPage?: number
	page?: number
	onPageChange?: (page: number) => void
	renderItem?: (props: PaginationRenderItemProps) => ReactNode
	slotProps?: {}
}

type PaginationRenderItemProps = {
	page: number
	item: ItemValue
}

export type PaginationItemProps<
	As extends ElementType = "button"
> = ComponentPropsWithAs<As, PaginationButtonOwnProps>

type PaginationButtonOwnProps = {
	item: ItemValue
}

export type ItemValue =
	| "prev"
	| "next"
	| "prevDots"
	| "nextDots"
	| number
