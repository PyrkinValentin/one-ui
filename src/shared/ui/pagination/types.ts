import type { ElementType, ReactNode } from "react"
import type { ComponentProps, ComponentPropsWithAs } from "@/shared/types/props"
import type { PaginationVariantsProps } from "./variants"

export type PaginationItemValue =
	| "prev"
	| "next"
	| "prevDots"
	| "nextDots"
	| number

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
	slotProps?: PaginationSlotProps
}

type PaginationSlotProps = {
	listProps?: ComponentProps<"ul">
	itemProps?: ComponentProps<"li">
	controlProps?: ComponentProps<"button">
	dotsProps?: ComponentProps<"button">
	pageProps?: ComponentProps<"button">
}

type PaginationStateProps = {
	defaultPage?: number
	page?: number
	onPageChange?: (page: number) => void
}

export type PaginationItemProps<As extends ElementType = "button"> = ComponentPropsWithAs<As>