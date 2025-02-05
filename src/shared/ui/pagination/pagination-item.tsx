"use client"

import type { ElementType, MouseEvent } from "react"
import type { PaginationItemProps } from "./types"

import {
	MdChevronLeft,
	MdChevronRight,
	MdKeyboardDoubleArrowLeft,
	MdKeyboardDoubleArrowRight,
	MdMoreHoriz,
} from "react-icons/md"

import { usePaginationContext } from "./pagination"

export const PaginationItem = <As extends ElementType = "button">(props: PaginationItemProps<As>) => {
	const {
		classNames,
		slotProps = {},
		disabledItem,
		currentItem,
		onPageChange,
	} = usePaginationContext()

	const {
		as = "button",
		rangeValue,
		className,
		onClick,
		...restProps
	} = props as PaginationItemProps

	const {
		controlProps,
		dotsProps,
		buttonProps,
	} = slotProps

	const handleClickControl = (ev: MouseEvent<HTMLButtonElement>) => {
		onClick?.(ev)
		controlProps?.onClick?.(ev)
		onPageChange?.(rangeValue)
	}

	const handleClickDots = (ev: MouseEvent<HTMLButtonElement>) => {
		onClick?.(ev)
		dotsProps?.onClick?.(ev)
		onPageChange?.(rangeValue)
	}

	const handleClickPage = (ev: MouseEvent<HTMLButtonElement>) => {
		onClick?.(ev)
		buttonProps?.onClick?.(ev)
		onPageChange?.(rangeValue)
	}

	const disabled = disabledItem?.(rangeValue)
	const current = currentItem?.(rangeValue)

	const Component = as

	return (
		<>
			{rangeValue === "prev" || rangeValue === "next" ? (
				<Component
					aria-label={rangeValue}
					aria-disabled={disabled || undefined}
					tabIndex={disabled ? -1 : undefined}
					{...controlProps}
					className={classNames?.control({ className: [controlProps?.className, className] })}
					onClick={handleClickControl}
					{...restProps}
				>
					{rangeValue === "prev"
						? <MdChevronLeft/>
						: <MdChevronRight/>
					}
				</Component>
			) : rangeValue === "prevDots" || rangeValue === "nextDots" ? (
				<Component
					aria-label={rangeValue}
					aria-disabled={disabled || undefined}
					tabIndex={disabled ? -1 : undefined}
					{...dotsProps}
					className={classNames?.dots({ className: [dotsProps?.className, className] })}
					onClick={handleClickDots}
					{...restProps}
				>
					<MdMoreHoriz className={classNames?.ellipsis()}/>

					{rangeValue === "prevDots"
						? <MdKeyboardDoubleArrowLeft className={classNames?.forwardIcon()}/>
						: <MdKeyboardDoubleArrowRight className={classNames?.forwardIcon()}/>
					}
				</Component>
			) : (
				<Component
					aria-label={`page ${rangeValue}`}
					aria-disabled={disabled || undefined}
					aria-current={current || undefined}
					tabIndex={disabled || current ? -1 : undefined}
					{...buttonProps}
					className={classNames?.button({ className: [buttonProps?.className, className] })}
					onClick={handleClickPage}
					{...restProps}
				>
					{rangeValue}
				</Component>
			)}
		</>
	)
}