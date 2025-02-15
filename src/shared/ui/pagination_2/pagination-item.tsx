"use client"

import type { ElementType, MouseEvent } from "react"
import type { PaginationItemProps } from "./types"

import { useMemo } from "react"

import {
	MdChevronLeft,
	MdChevronRight,
	MdKeyboardDoubleArrowLeft,
	MdKeyboardDoubleArrowRight,
	MdMoreHoriz
} from "react-icons/md"

import { usePaginationContext } from "./pagination"
import { paginationItemVariants } from "./variants"

export const PaginationItem = <As extends ElementType = "button">(props: PaginationItemProps<As>) => {
	const {
		getItemState,
	} = usePaginationContext()

	const {
		as = "button",
		itemValue,
		onClick,
		className,
		variant,
		size,
		color,
		rounded,
		compact,
		...restProps
	} = props as PaginationItemProps

	const itemState = getItemState?.(itemValue)

	const handleClick = (ev: MouseEvent<HTMLButtonElement>) => {
		onClick?.(ev)
		itemState?.pageChange?.()
	}

	const classNames = useMemo(() => {
		return paginationItemVariants({
			variant,
			size,
			color,
			rounded,
			compact,
		})
	}, [
		variant,
		size,
		color,
		rounded,
		compact,
	])

	const Component = as

	return (
		<li
			role="button"
			aria-label={`page ${itemValue}`}
			aria-disabled={itemState?.disabled || undefined}
			aria-current={itemState?.current || undefined}
			className={classNames.base()}
		>
			{itemValue === "prev" ? (
				<Component
					tabIndex={itemState?.disabled ? -1 : undefined}
					className={classNames.prev()}
					onClick={handleClick}
					{...restProps}
				>
					<MdChevronLeft/>
				</Component>
			) : itemValue === "next" ? (
				<Component
					tabIndex={itemState?.disabled ? -1 : undefined}
					className={classNames.next()}
					onClick={handleClick}
					{...restProps}
				>
					<MdChevronRight/>
				</Component>
			) : itemValue === "prevDots" ? (
				<Component
					tabIndex={itemState?.disabled ? -1 : undefined}
					className={classNames.dots()}
					onClick={handleClick}
					{...restProps}
				>
					<MdMoreHoriz className={classNames.ellipsis()}/>
					<MdKeyboardDoubleArrowLeft className={classNames.forwardIcon()}/>
				</Component>
			) : itemValue === "nextDots" ? (
				<Component
					tabIndex={itemState?.disabled ? -1 : undefined}
					className={classNames.dots()}
					onClick={handleClick}
					{...restProps}
				>
					<MdMoreHoriz className={classNames.ellipsis()}/>
					<MdKeyboardDoubleArrowRight className={classNames.forwardIcon()}/>
				</Component>
			) : (
				<Component
					tabIndex={itemState?.disabled || itemState?.current ? -1 : undefined}
					className={classNames.item()}
					onClick={handleClick}
					{...restProps}
				>
					{itemValue}
				</Component>
			)}
		</li>
	)
}