import type { ElementType, ReactNode } from "react"
import type { ComponentProps, ComponentPropsWithAs } from "@/shared/types/props"
import type { PaginationVariantsProps, PaginationVariantsReturn } from "./variants"

export type PaginationRangeValue =
	| "prev"
	| "next"
	| "prevDots"
	| "nextDots"
	| number

export type PaginationContextValue = {
	disabledItem?: (rangeValue: PaginationRangeValue) => boolean
	currentItem?: (rangeValue: PaginationRangeValue) => boolean
	onPageChange?: (rangeValue: PaginationRangeValue) => void
	classNames?: Pick<
		PaginationVariantsReturn,
		| "control"
		| "dots"
		| "button"
		| "ellipsis"
		| "forwardIcon"
	>
	slotProps?: Pick<
		PaginationSlotProps,
		| "controlProps"
		| "dotsProps"
		| "buttonProps"
	>
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
	slotProps?: PaginationSlotProps
}

type PaginationRenderItemProps = {
	page: number
	rangeValue: PaginationRangeValue
}

type PaginationSlotProps = {
	wrapperProps?: ComponentProps<"ul">
	itemProps?: ComponentProps<"li">
	controlProps?: ComponentProps<"button">
	dotsProps?: ComponentProps<"button">
	buttonProps?: ComponentProps<"button">
}

export type PaginationItemProps<
	As extends ElementType = "button"
> = ComponentPropsWithAs<As, PaginationItemOwnProps>

type PaginationItemOwnProps = {
	rangeValue: PaginationRangeValue
}