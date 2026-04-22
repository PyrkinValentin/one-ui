import { useLayoutEffect, useMemo } from "react"

import { range } from "./pagination.utils"

import { PAGINATION_ITEM_TYPE } from "./pagination.vars"

type UsePaginationSyncOptions = {
	page: number
	total: number
	onPageSync?: (page: number) => void
}

export const usePaginationSync = (options: UsePaginationSyncOptions) => {
	const {
		page,
		total,
		onPageSync,
	} = options

	useLayoutEffect(() => {
		if (!onPageSync || total <= 0) return

		if (page > total) {
			onPageSync(total)
		} else if (page < 1) {
			onPageSync(1)
		}
	}, [total, page, onPageSync])
}

type UsePaginationRangeOptions = {
	total: number
	page: number
	siblings: number
	boundaries: number
}

export const usePaginationRange = (options: UsePaginationRangeOptions) => {
	const {
		page,
		total,
		boundaries,
		siblings,
	} = options

	return useMemo(() => {
		const totalPageNumbers = siblings * 2 + 3 + boundaries * 2

		if (totalPageNumbers >= total) {
			return range(1, total)
		}

		const leftSiblingIndex = Math.max(page - siblings, boundaries)
		const rightSiblingIndex = Math.min(page + siblings, total - boundaries)

		const shouldShowLeftDots = leftSiblingIndex > boundaries + 2
		const shouldShowRightDots = rightSiblingIndex < total - (boundaries + 1)

		if (!shouldShowLeftDots && shouldShowRightDots) {
			const leftItemCount = siblings * 2 + boundaries + 2

			return [
				...range(1, leftItemCount),
				PAGINATION_ITEM_TYPE.ELLIPSIS_END,
				...range(total - (boundaries - 1), total),
			]
		}

		if (shouldShowLeftDots && !shouldShowRightDots) {
			const rightItemCount = boundaries + 1 + 2 * siblings

			return [
				...range(1, boundaries),
				PAGINATION_ITEM_TYPE.ELLIPSIS_START,
				...range(total - rightItemCount, total),
			]
		}

		return [
			...range(1, boundaries),
			PAGINATION_ITEM_TYPE.ELLIPSIS_START,
			...range(leftSiblingIndex, rightSiblingIndex),
			PAGINATION_ITEM_TYPE.ELLIPSIS_END,
			...range(total - boundaries + 1, total),
		]
	}, [total, page, siblings, boundaries])
}