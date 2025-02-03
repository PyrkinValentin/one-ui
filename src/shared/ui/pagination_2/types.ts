import type { ElementType, ReactNode } from "react"
import type { ComponentProps, ComponentPropsWithAs } from "@/shared/types/props"
import type { PaginationVariantsProps, PaginationVariantsReturn } from "./variants"

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
	slotProps?: PaginationSlotProps
}

export type PaginationRenderItemProps = {
	disabled: boolean
	current: boolean
	rangeValue: PaginationRangeValue
	classNames: PaginationVariantsReturn
	page: number
	onPageChange: () => void
}

type PaginationSlotProps = {
	wrapperProps?: ComponentProps<"ul">
	itemProps?: ComponentProps<"button">
}

export type PaginationRangeValue =
	| "prev"
	| "next"
	| "prevDots"
	| "nextDots"
	| number

export type PaginationItemProps<
	As extends ElementType = "button"
> = ComponentPropsWithAs<As, PaginationRenderItemProps>