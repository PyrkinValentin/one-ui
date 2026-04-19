export type * from "./pagination.props"

import { composeComponent } from "../../utils"

import {
	PaginationRoot,
	PaginationList,
	PaginationItem,
	PaginationPrev,
	PaginationNext,
	PaginationRange,
	PaginationPage,
	PaginationEllipsis,
} from "./pagination"

type PaginationSlots = {
	List: typeof PaginationList
	Item: typeof PaginationItem
	Prev: typeof PaginationPrev
	Next: typeof PaginationNext
	Range: typeof PaginationRange
	Page: typeof PaginationPage
	Ellipsis: typeof PaginationEllipsis
}

export const Pagination = composeComponent<typeof PaginationRoot, PaginationSlots>(PaginationRoot, {
	List: PaginationList,
	Item: PaginationItem,
	Prev: PaginationPrev,
	Next: PaginationNext,
	Range: PaginationRange,
	Page: PaginationPage,
	Ellipsis: PaginationEllipsis,
})