"use client"

import type { ElementType } from "react"
import type { PaginationItemProps } from "./types"

import {
	MdChevronLeft,
	MdChevronRight,
	MdKeyboardDoubleArrowLeft,
	MdKeyboardDoubleArrowRight,
	MdMoreHoriz
} from "react-icons/md"

import { usePaginationContext } from "./pagination"

export const PaginationItem = <
	As extends ElementType = "button"
>(props: PaginationItemProps<As>) => {
	const {
		disabled,
		classNames,
		getPage,
		isDisabledControl,
		isCurrentPage,
		onPageChange,
	} = usePaginationContext()

	const {
		as = "button",
		item,
		className,
		...restProps
	} = props as PaginationItemProps

	const page = getPage?.(item) ?? 1

	const handleClickPage = () => {
		onPageChange?.(page)
	}

	const Component = as

	if (item === "prev") {
		const disabledControl = disabled || isDisabledControl?.(item)

		return (
			<Component
				aria-label="prev page"
				aria-disabled={disabledControl || undefined}
				tabIndex={disabledControl ? -1 : 0}
				className={classNames?.prev({ className })}
				onClick={handleClickPage}
				{...restProps}
			>
				<MdChevronLeft/>
			</Component>
		)
	}

	if (item === "next") {
		const disabledControl = disabled || isDisabledControl?.(item)

		return (
			<Component
				aria-label="next page"
				aria-disabled={disabledControl || undefined}
				tabIndex={disabledControl ? -1 : 0}
				className={classNames?.next({ className })}
				onClick={handleClickPage}
				{...restProps}
			>
				<MdChevronRight/>
			</Component>
		)
	}

	if (item === "prevDots") {
		return (
			<Component
				aria-label="prev jump"
				tabIndex={disabled ? -1 : 0}
				className={classNames?.item({ className: ["group"] })}
				onClick={handleClickPage}
				{...restProps}
			>
				<MdMoreHoriz className={classNames?.ellipsis()}/>
				<MdKeyboardDoubleArrowLeft className={classNames?.forwardIcon()}/>
			</Component>
		)
	}

	if (item === "nextDots") {
		return (
			<Component
				aria-label="next jump"
				tabIndex={disabled ? -1 : 0}
				className={classNames?.item({ className: ["group"] })}
				onClick={handleClickPage}
				{...restProps}
			>
				<MdMoreHoriz className={classNames?.ellipsis()}/>
				<MdKeyboardDoubleArrowRight className={classNames?.forwardIcon()}/>
			</Component>
		)
	}

	const currentPage = isCurrentPage?.(page)

	return (
		<Component
			aria-current={currentPage || undefined}
			aria-label={`page ${page}`}
			tabIndex={disabled || currentPage ? -1 : 0}
			className={classNames?.item()}
			onClick={handleClickPage}
			{...restProps}
		>
			{page}
		</Component>
	)
}