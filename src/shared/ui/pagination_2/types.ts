import type { ElementType, ReactNode } from "react"
import type { ComponentProps, ComponentPropsWithAs } from "@/shared/types/props"
import type { PaginationVariantsProps, PaginationItemVariantsProps } from "./variants"

export type PaginationItemValue =
	| "prev"
	| "next"
	| "prevDots"
	| "nextDots"
	| number

export type PaginationContextValue = {
	getItemState?: GetPaginationItemState
}

export type GetPaginationItemState = (
	itemValue?: PaginationItemValue,
	options?: GetItemStateOptions
) => GetItemStateReturn | undefined

type GetItemStateOptions = {
	disabled?: boolean
}

type GetItemStateReturn = {
	disabled?: boolean
	current: boolean
	pageChange: () => void
}

export type PaginationProps = ComponentProps<
	"nav",
	PaginationVariantsProps &
	PaginationOwnProps &
	PaginationStateProps
>

type PaginationOwnProps = {
	loop?: boolean
	showControls?: boolean
	total?: number
	dotsJump?: number
	siblings?: number
	boundaries?: number
	renderItem?: (page: number) => ReactNode
}

type PaginationStateProps = {
	defaultPage?: number
	page?: number
	onPageChange?: (page: number) => void
}

export type PaginationItemProps<As extends ElementType = "button"> = ComponentPropsWithAs<
	As,
	PaginationItemVariantsProps &
	PaginationItemOwnProps
>

type PaginationItemOwnProps = {
	itemValue?: PaginationItemValue
}