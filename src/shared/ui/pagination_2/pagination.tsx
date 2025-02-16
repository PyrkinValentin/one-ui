"use client"

import type { GetPaginationItemState, PaginationContextValue, PaginationItemValue, PaginationProps } from "./types"

import { use, useMemo } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { createContext } from "react"
import { isNumber } from "@/shared/helpers/is-number"

import { Fragment } from "react"
import { Slot } from "@/shared/ui/system"

import { usePaginationItems } from "./use-pagination-items"
import { paginationVariants } from "./variants"
import { PaginationItem } from "./pagination-item"

const PaginationContext = createContext<PaginationContextValue>({})
export const usePaginationContext = () => use(PaginationContext)

export const Pagination = (props: PaginationProps) => {
	const {
		loop,
		showControls = false,
		total = 10,
		dotsJump = 5,
		siblings = 1,
		boundaries = 1,
		defaultPage = 1,
		page,
		onPageChange,
		renderItem,
		className,
		rounded,
		compact,
		disabled,
		disableAnimation,
		...restProps
	} = props

	const [state, setState] = useControlledState({
		defaultValue: defaultPage,
		value: page,
		onValueChange: onPageChange,
	})

	const itemValues = usePaginationItems({
		total,
		siblings,
		boundaries,
		showControls,
		page: state,
	})

	const getPage = (itemValue: PaginationItemValue) => {
		switch (itemValue) {
			case "prev":
				return state <= 1
					? loop ? total : 1
					: state - 1
			case "next":
				return state >= total
					? loop ? 1 : total
					: state + 1
			case "prevDots":
				return state - dotsJump >= 1
					? state - dotsJump
					: 1
			case "nextDots":
				return state + dotsJump <= total
					? state + dotsJump
					: total
			default:
				return itemValue
		}
	}

	const disabledPage = (itemValue: PaginationItemValue) => {
		switch (itemValue) {
			case "prev":
				return disabled || !loop && state === 1
			case "next":
				return disabled || !loop && state === total
			default:
				return !!disabled
		}
	}

	const getItemState: GetPaginationItemState = (itemValue, options) => {
		if (!itemValue) return

		const disabled = options?.disabled || disabledPage(itemValue)
		const page = getPage(itemValue)
		const current = isNumber(itemValue) && state === page

		const pageChange = () => {
			setState?.(page)
		}

		return {
			disabled,
			current,
			pageChange,
		}
	}

	const classNames = useMemo(() => {
		return paginationVariants({
			rounded,
			compact,
			disabled,
			disableAnimation,
		})
	}, [
		rounded,
		compact,
		disabled,
		disableAnimation,
	])

	const contextValue: PaginationContextValue = {
		getItemState,
	}

	return (
		<PaginationContext value={contextValue}>
			<nav
				className={classNames.base({ className })}
				{...restProps}
			>
				<ul className={classNames.list()}>
					{itemValues.map((itemValue) => (
						<Fragment key={itemValue}>
							{renderItem ? (
								<Slot
									as={PaginationItem}
									itemValue={itemValue}
								>
									{renderItem(getPage(itemValue))}
								</Slot>
							) : (
								<PaginationItem itemValue={itemValue}/>
							)}
						</Fragment>
					))}
				</ul>
			</nav>
		</PaginationContext>
	)
}