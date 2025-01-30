"use client"

import type { ItemValue, PaginationContextValue, PaginationProps } from "./types"

import { use, useMemo } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { createContext } from "react"

import { usePaginationRange } from "./use-pagination-range"
import { paginationVariants } from "./variants"
import { PaginationItem } from "./pagination-item"

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
		showShadow,
		disabled,
		disableAnimation,
		...restProps
	} = props

	const [controlledPage, setControlledPage] = useControlledState({
		defaultValue: defaultPage,
		value: page,
		setValue: onPageChange,
	})

	const range = usePaginationRange({
		totalPages,
		siblings,
		boundaries,
		showControls,
		page: controlledPage,
	})

	const getPage = (item: ItemValue) => {
		switch (item) {
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
				return item
		}
	}

	const handlePageChange = (page: number) => {
		setControlledPage?.(page)
	}

	const isDisabledControl = (item: Extract<ItemValue, "prev" | "next">) => {
		return !loop && item === "prev"
			? controlledPage === 1
			: controlledPage === totalPages
	}

	const isCurrentPage = (page: number) => {
		return controlledPage === page
	}

	const classNames = useMemo(() => {
		return paginationVariants({
			variant,
			size,
			color,
			rounded,
			showShadow,
			disabled,
			disableAnimation,
		})
	}, [
		variant,
		size,
		color,
		rounded,
		showShadow,
		disabled,
		disableAnimation,
	])

	const contextValue: PaginationContextValue = {
		disabled,
		classNames,
		getPage,
		isDisabledControl,
		isCurrentPage,
		onPageChange: handlePageChange,
	}

	return (
		<PaginationContext value={contextValue}>
			<nav
				aria-label="Pages navigation"
				className={classNames.base({ className })}
				{...restProps}
			>
				<ul className={classNames.wrapper()}>
					{range.map((item, i) => (
						<li key={i}>
							{renderItem
								? renderItem({ page: getPage(item), item })
								: <PaginationItem item={item}/>
							}
						</li>
					))}
				</ul>
			</nav>
		</PaginationContext>
	)
}