import type { ComponentProps, MouseEvent, ReactNode } from "react"
import type { BaseUIEvent, Button } from "@base-ui/react"

export type PaginationProps = ComponentProps<"nav"> & {
	total?: number
	page?: number
	siblings?: number
	boundaries?: number
	size?: "sm" | "md" | "lg"
	color?: "default" | "primary" | "success" | "warning" | "danger"
	onPageChange?: (page: number, ev: BaseUIEvent<MouseEvent<HTMLButtonElement>>) => void
	onPageSync?: (page: number) => void
}

export type PaginationListProps = ComponentProps<"ul">
export type PaginationItemProps = ComponentProps<"li">
export type PaginationPrevProps = Button.Props
export type PaginationNextProps = Button.Props

export type PaginationRangeProps = {
	children?: (page: string | number, index: number) => ReactNode
}

export type PaginationPageProps = Button.Props & {
	page: number
}

export type PaginationEllipsisProps = ComponentProps<"span">