import type { MouseEvent } from "react"
import type { BaseUIEvent } from "@base-ui/react"

import { createContext, use } from "react"

export type PaginationContextValue = {
	total: number
	page: number
	siblings: number
	boundaries: number
	onPageChange?: (page: number, ev: BaseUIEvent<MouseEvent<HTMLButtonElement>>) => void
}

export const PaginationContext = createContext<PaginationContextValue>({
	total: 0,
	page: 1,
	siblings: 1,
	boundaries: 1,
})

export const usePaginationContext = () => use(PaginationContext)