"use client"

import type { PaginationItemProps, PaginationItemValue, PaginationProps } from "./types"

import { useMemo } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { isValidElement } from "react"

import { usePaginationRange } from "./use-pagination-range"
import { paginationVariants } from "./variants"
import { PaginationItem } from "./pagination-item"

import {
	MdChevronLeft,
	MdChevronRight,
	MdKeyboardDoubleArrowLeft,
	MdKeyboardDoubleArrowRight,
	MdMoreHoriz
} from "react-icons/md"

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
		variant,
		size,
		color,
		rounded,
		showShadow,
		disabled,
		disableAnimation,
		slotProps = {},
		...restProps
	} = props

	const {
		listProps,
		itemProps,
		controlProps,
		dotsProps,
		pageProps,
	} = slotProps

	const [currentPage, setCurrentPage] = useControlledState({
		defaultValue: defaultPage,
		value: page,
		onValueChange: onPageChange,
	})

	const range = usePaginationRange({
		total,
		siblings,
		boundaries,
		showControls,
		page: currentPage,
	})

	const getPage = (itemValue: PaginationItemValue) => {
		switch (itemValue) {
			case "prev":
				return currentPage <= 1
					? loop ? total : 1
					: currentPage - 1
			case "next":
				return currentPage >= total
					? loop ? 1 : total
					: currentPage + 1
			case "prevDots":
				return currentPage - dotsJump >= 1
					? currentPage - dotsJump
					: 1
			case "nextDots":
				return currentPage + dotsJump <= total
					? currentPage + dotsJump
					: total
			default:
				return itemValue
		}
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

	const getItemProps = (itemValue: PaginationItemValue): PaginationItemProps => {
		const page = getPage(itemValue)

		const item = renderItem
			? renderItem(page)
			: null

		const renderItemProps = isValidElement<PaginationItemProps>(item)
			? item.props
			: null

		if (itemValue === "prev") {
			const disabledControl = !loop && currentPage === 1

			return {
				"aria-label": "prev page",
				"aria-disabled": !loop && currentPage === 1 || undefined,
				tabIndex: disabled || disabledControl ? -1 : undefined,
				...controlProps,
				...renderItemProps,
				className: classNames.prev({
					className: [controlProps?.className, renderItemProps?.className],
				}),
				onClick: (ev) => {
					controlProps?.onClick?.(ev)
					renderItemProps?.onClick?.(ev)
					setCurrentPage(page)
				},
				children: (
					<MdChevronLeft/>
				),
			}
		}

		if (itemValue === "next") {
			const disabledControl = !loop && currentPage === total

			return {
				"aria-label": "next page",
				"aria-disabled": disabledControl || undefined,
				tabIndex: disabled || disabledControl ? -1 : undefined,
				...controlProps,
				...renderItemProps,
				className: classNames.next({
					className: [controlProps?.className, renderItemProps?.className],
				}),
				onClick: (ev) => {
					controlProps?.onClick?.(ev)
					renderItemProps?.onClick?.(ev)
					setCurrentPage(page)
				},
				children: (
					<MdChevronRight/>
				),
			}
		}

		if (itemValue === "prevDots") {
			return {
				"aria-label": "jump prev page",
				tabIndex: disabled ? -1 : undefined,
				...dotsProps,
				...renderItemProps,
				className: classNames.dots({
					className: [dotsProps?.className, renderItemProps?.className],
				}),
				onClick: (ev) => {
					dotsProps?.onClick?.(ev)
					renderItemProps?.onClick?.(ev)
					setCurrentPage(page)
				},
				children: (
					<>
						<MdMoreHoriz className={classNames.ellipsis()}/>
						<MdKeyboardDoubleArrowLeft className={classNames.forwardIcon()}/>
					</>
				),
			}
		}

		if (itemValue === "nextDots") {
			return {
				"aria-label": "jump next page",
				tabIndex: disabled ? -1 : undefined,
				...dotsProps,
				...renderItemProps,
				className: classNames.dots({
					className: [dotsProps?.className, renderItemProps?.className],
				}),
				onClick: (ev) => {
					dotsProps?.onClick?.(ev)
					renderItemProps?.onClick?.(ev)
					setCurrentPage(page)
				},
				children: (
					<>
						<MdMoreHoriz className={classNames.ellipsis()}/>
						<MdKeyboardDoubleArrowRight className={classNames.forwardIcon()}/>
					</>
				),
			}
		}

		const current = page === currentPage

		return {
			"aria-label": `page ${page}`,
			"aria-current": current ? "page" : undefined,
			tabIndex: disabled || current ? -1 : undefined,
			...pageProps,
			...renderItemProps,
			className: classNames.page({
				className: [pageProps?.className, renderItemProps?.className],
			}),
			onClick: (ev) => {
				pageProps?.onClick?.(ev)
				renderItemProps?.onClick?.(ev)
				setCurrentPage(page)
			},
			children: page,
		}
	}

	return (
		<nav
			className={classNames.base({ className })}
			{...restProps}
		>
			<ul
				{...listProps}
				className={classNames.list({ className: listProps?.className })}
			>
				{range.map((itemValue) => (
					<li
						key={itemValue}
						{...itemProps}
						className={classNames.item({ className: itemProps?.className })}
					>
						<PaginationItem {...getItemProps(itemValue)}/>
					</li>
				))}
			</ul>
		</nav>
	)
}