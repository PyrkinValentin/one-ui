"use client"

import type { ElementType, MouseEvent } from "react"
import type { PaginationItemProps } from "./types"

import { isNumber } from "@/shared/helpers/is-number"

import {
	MdChevronLeft,
	MdChevronRight,
	MdKeyboardDoubleArrowLeft,
	MdKeyboardDoubleArrowRight,
	MdMoreHoriz,
} from "react-icons/md"

export const PaginationItem = <
	As extends ElementType = "button"
>(props: PaginationItemProps<As>) => {
	const {
		as = "button",
		disabled,
		current,
		rangeValue,
		classNames,
		page,
		onPageChange,
		className,
		onClick,
		...restProps
	} = props as PaginationItemProps

	const handleClick = (ev: MouseEvent<HTMLButtonElement>) => {
		onClick?.(ev)
		onPageChange(page)
	}

	const commonProps: Partial<PaginationItemProps> = {
		"aria-label": isNumber(rangeValue)
			? `page ${rangeValue}`
			: rangeValue,
		tabIndex: current || disabled
			? -1
			: undefined,
		onClick: handleClick,
	}

	const Component = as

	return (
		<>
			{rangeValue === "prev" || rangeValue === "next" ? (
				<Component
					aria-disabled={disabled || undefined}
					className={classNames.control({ className })}
					{...commonProps}
					{...restProps}
				>
					{rangeValue === "prev"
						? <MdChevronLeft/>
						: <MdChevronRight/>
					}
				</Component>
			) : rangeValue === "prevDots" || rangeValue === "nextDots" ? (
				<Component
					className={classNames.dots({ className })}
					{...commonProps}
					{...restProps}
				>
					<MdMoreHoriz className={classNames.ellipsis()}/>

					{rangeValue === "prevDots"
						? <MdKeyboardDoubleArrowLeft className={classNames.forwardIcon()}/>
						: <MdKeyboardDoubleArrowRight className={classNames.forwardIcon()}/>
					}
				</Component>
			) : (
				<Component
					aria-current={current || undefined}
					className={classNames.item({ className })}
					{...commonProps}
					{...restProps}
				>
					{page}
				</Component>
			)}
		</>
	)
}