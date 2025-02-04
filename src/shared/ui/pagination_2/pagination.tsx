"use client"

import type { PaginationItemProps, PaginationProps, PaginationRangeValue } from "./types"

import { useMemo } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { usePaginationRange } from "./use-pagination-range"
import { paginationVariants } from "./variants"
import { PaginationItem } from "./pagination-item"

export const Pagination = (props: PaginationProps) => {
	const {
		loop,
		showControls = true,
		totalPages = 10,
		dotsJump = 5,
		siblings = 1,
		boundaries = 1,
		defaultPage = 1,
		page,
		onPageChange,
		renderItem,
		slotProps = {},
		className,
		variant,
		disabled,
		...restProps
	} = props

	const {
		wrapperProps,
		itemProps,
	} = slotProps

	const [controlledPage, setControlledPage] = useControlledState({
		defaultValue: defaultPage,
		value: page,
		setValue: onPageChange,
	})

	const paginationRange = usePaginationRange({
		totalPages,
		siblings,
		boundaries,
		showControls,
		page: controlledPage,
	})

	const handlePageChange = (page: number) => {
		setControlledPage?.(page)
	}

	const getPage = (rangeValue: PaginationRangeValue) => {
		switch (rangeValue) {
			case "prev":
				return controlledPage <= 1
					? loop ? totalPages : 1
					: controlledPage - 1
			case "next":
				return controlledPage >= totalPages
					? loop ? 1 : totalPages
					: controlledPage + 1
			case "prevDots":
				return controlledPage - dotsJump >= 1
					? controlledPage - dotsJump
					: 1
			case "nextDots":
				return controlledPage + dotsJump <= totalPages
					? controlledPage + dotsJump
					: totalPages
			default:
				return rangeValue
		}
	}

	const isDisabled = (rangeValue: PaginationRangeValue) => {
		switch (rangeValue) {
			case "prev":
				return !loop && controlledPage === 1
			case "next":
				return !loop && controlledPage === totalPages
			default:
				return false
		}
	}

	const classNames = useMemo(() => {
		return paginationVariants({
			variant,
			disabled,
		})
	}, [
		variant,
		disabled,
	])

	return (
		<nav
			aria-label="pages navigation"
			className={classNames.base({ className })}
			{...restProps}
		>
			<ul
				{...wrapperProps}
				className={classNames.wrapper({ className: wrapperProps?.className })}
			>
				{paginationRange.map((rangeValue) => {
					const page = getPage(rangeValue)

					const paginationItemProps: PaginationItemProps = {
						disabled: isDisabled(rangeValue),
						current: controlledPage === page,
						rangeValue,
						page,
						classNames,
						onPageChange: handlePageChange,
						...itemProps,
					}

					return (
						<li key={`${rangeValue}-${page}`}>
							{renderItem
								? renderItem(paginationItemProps)
								: <PaginationItem {...paginationItemProps}/>
							}
						</li>
					)
				})}
			</ul>
		</nav>
	)
}