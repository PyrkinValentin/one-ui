"use client"

import type { PaginationContextValue, PaginationProps, PaginationRangeValue } from "./types"

import { use, useMemo } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { createContext } from "react"

import { usePaginationRange } from "./use-pagination-range"
import { paginationVariants } from "./variants"
import { PaginationItem } from "./pagination-item"
import { isNumber } from "@/shared/helpers/is-number";

const PaginationContext = createContext<PaginationContextValue>({})
export const usePaginationContext = () => use(PaginationContext)

export const Pagination = (props: PaginationProps) => {
	const {
		loop,
		showControls = false,
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
		size,
		color,
		rounded,
		compact,
		showShadow,
		disabled,
		disableAnimation,
		...restProps
	} = props

	const {
		wrapperProps,
		itemProps,
		...restSlotProps
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

	const handlePageChange = (rangeValue: PaginationRangeValue) => {
		setControlledPage?.(getPage(rangeValue))
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
				return disabled || !loop && controlledPage === 1
			case "next":
				return disabled || !loop && controlledPage === totalPages
			default:
				return !!disabled
		}
	}

	const isCurrent = (rangeValue: PaginationRangeValue) => {
		return isNumber(rangeValue) && controlledPage === getPage(rangeValue)
	}

	const {
		base: classNamesBase,
		wrapper: classNamesWrapper,
		item: classNamesItem,
		...restClassNames
	} = useMemo(() => {
		return paginationVariants({
			variant,
			size,
			color,
			rounded,
			compact,
			showShadow,
			disabled,
			disableAnimation,
		})
	}, [
		variant,
		size,
		color,
		rounded,
		compact,
		showShadow,
		disabled,
		disableAnimation,
	])

	const contextValue: PaginationContextValue = {
		classNames: restClassNames,
		slotProps: restSlotProps,
		isDisabled,
		isCurrent,
		onPageChange: handlePageChange,
	}

	return (
		<PaginationContext value={contextValue}>
			<nav
				aria-label="pages navigation"
				className={classNamesBase({ className })}
				{...restProps}
			>
				<ul
					{...wrapperProps}
					className={classNamesWrapper({ className: wrapperProps?.className })}
				>
					{paginationRange.map((rangeValue) => (
						<li
							key={rangeValue}
							{...itemProps}
							className={classNamesItem({ className: itemProps?.className })}
						>
							{renderItem
								? renderItem({ page: getPage(rangeValue), rangeValue })
								: <PaginationItem rangeValue={rangeValue}/>
							}
						</li>
					))}
				</ul>
			</nav>
		</PaginationContext>
	)
}