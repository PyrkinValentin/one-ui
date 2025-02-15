import type { PaginationItemValue, PaginationProps } from "./types"

import { useMemo } from "react"

type UsePaginationOptions = Required<Pick<
	PaginationProps,
	| "total"
	| "siblings"
	| "boundaries"
	| "showControls"
	| "page"
>>

const range = (start: number, end: number) => {
	const length = end - start + 1

	return Array.from({ length }, (_, index) => index + start)
}

const formatRange = (
	range: PaginationItemValue[],
	showControls?: boolean
): PaginationItemValue[] => {
	return showControls
		? ["prev", ...range, "next"]
		: range
}

export const usePaginationItems = (options: UsePaginationOptions) => {
	const {
		total,
		siblings,
		boundaries,
		showControls,
		page,
	} = options

	return useMemo(() => {
		const totalPageNumbers = siblings * 2 + 3 + boundaries * 2

		if (totalPageNumbers >= total) {
			return formatRange(range(1, total), showControls)
		}

		const leftSiblingIndex = Math.max(page - siblings, boundaries)
		const rightSiblingIndex = Math.min(page + siblings, total - boundaries)

		const shouldShowLeftDots = leftSiblingIndex > boundaries + 2
		const shouldShowRightDots = rightSiblingIndex < total - (boundaries + 1)

		if (shouldShowLeftDots && !shouldShowRightDots) {
			const rightItemCount = boundaries + 1 + 2 * siblings

			return formatRange([
				...range(1, boundaries),
				"prevDots",
				...range(total - rightItemCount, total),
			], showControls)
		}

		if (!shouldShowLeftDots && shouldShowRightDots) {
			const leftItemCount = siblings * 2 + boundaries + 2

			return formatRange([
				...range(1, leftItemCount),
				"nextDots",
				...range(total - (boundaries - 1), total),
			], showControls)
		}

		return formatRange([
			...range(1, boundaries),
			"prevDots",
			...range(leftSiblingIndex, rightSiblingIndex),
			"nextDots",
			...range(total - boundaries + 1, total),
		], showControls)
	}, [
		total,
		siblings,
		boundaries,
		showControls,
		page,
	])
}