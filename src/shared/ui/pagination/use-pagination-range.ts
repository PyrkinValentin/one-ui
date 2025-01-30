import type { ItemValue, PaginationProps } from "./types"

import { useMemo } from "react"

type UsePaginationOptions = Required<Pick<
	PaginationProps,
	| "totalPages"
	| "siblings"
	| "boundaries"
	| "showControls"
	| "page"
>>

const range = (start: number, end: number) => {
	const length = end - start + 1

	return Array.from({ length }, (_, index) => index + start)
}

const formatRange = (range: ItemValue[], showControls?: boolean): ItemValue[] => {
	return showControls
		? ["prev", ...range, "next"]
		: range
}

export const usePaginationRange = (options: UsePaginationOptions) => {
	const {
		totalPages,
		siblings,
		boundaries,
		showControls,
		page,
	} = options

	return useMemo(() => {
		const totalPageNumbers = siblings * 2 + 3 + boundaries * 2

		if (totalPageNumbers >= totalPages) {
			return formatRange(range(1, totalPages), showControls)
		}

		const leftSiblingIndex = Math.max(page - siblings, boundaries)
		const rightSiblingIndex = Math.min(page + siblings, totalPages - boundaries)

		const shouldShowLeftDots = leftSiblingIndex > boundaries + 2
		const shouldShowRightDots = rightSiblingIndex < totalPages - (boundaries + 1)

		if (shouldShowLeftDots && !shouldShowRightDots) {
			const rightItemCount = boundaries + 1 + 2 * siblings

			return formatRange([
				...range(1, boundaries),
				"prevDots",
				...range(totalPages - rightItemCount, totalPages),
			], showControls)
		}

		if (!shouldShowLeftDots && shouldShowRightDots) {
			const leftItemCount = siblings * 2 + boundaries + 2

			return formatRange([
				...range(1, leftItemCount),
				"nextDots",
				...range(totalPages - (boundaries - 1), totalPages),
			], showControls)
		}

		return formatRange([
			...range(1, boundaries),
			"prevDots",
			...range(leftSiblingIndex, rightSiblingIndex),
			"nextDots",
			...range(totalPages - boundaries + 1, totalPages),
		], showControls)
	}, [
		boundaries,
		page,
		showControls,
		siblings,
		totalPages,
	])
}