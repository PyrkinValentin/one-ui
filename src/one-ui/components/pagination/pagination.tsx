"use client"

import type {
	PaginationProps,
	PaginationListProps,
	PaginationItemProps,
	PaginationPrevProps,
	PaginationNextProps,
	PaginationRangeProps,
	PaginationPageProps,
	PaginationEllipsisProps,
} from "./pagination.props"

import type { MouseEvent } from "react"
import type { BaseUIEvent } from "@base-ui/react"
import type { PaginationContextValue } from "./pagination.context"

import { useMemo } from "react"
import { useStableCallback } from "../../hooks"
import { usePaginationContext } from "./pagination.context"
import { usePaginationRange, usePaginationSync } from "./pagination.hooks"

import { clamp, getDataAttributes, resolveClassNames } from "../../utils"

import { Button } from "@base-ui/react"
import { ChevronLeft, ChevronRight, Ellipsis as EllipsisIcon } from "lucide-react"
import { PaginationContext } from "./pagination.context"

export const PaginationRoot = (props: PaginationProps) => {
	const {
		total = 0,
		page = 1,
		siblings = 1,
		boundaries = 1,
		size = "md",
		color = "default",
		className,
		onPageChange,
		onPageSync,
		children,
		...restProps
	} = props

	const onStablePageChange = useStableCallback(onPageChange)
	const onStablePageSync = useStableCallback(onPageSync)

	usePaginationSync({
		page,
		total,
		onPageSync: onStablePageSync,
	})

	const contextValue = useMemo<PaginationContextValue>(() => ({
		total,
		page: clamp(page, 1, total),
		siblings,
		boundaries,
		onPageChange: onStablePageChange,
	}), [
		total,
		page,
		siblings,
		boundaries,
		onStablePageChange,
	])

	if (total <= 0) return <></>

	return (
		<PaginationContext value={contextValue}>
			<nav
				{...restProps}
				{...getDataAttributes({ size, color })}
				data-slot="pagination"
				role="navigation"
				aria-label={props["aria-label"] ?? "Pagination navigation"}
				className={resolveClassNames(className, "pagination")}
			>
				{children}
			</nav>
		</PaginationContext>
	)
}

export const PaginationList = (props: PaginationListProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ul
			{...restProps}
			data-slot="pagination-list"
			className={resolveClassNames(className, "pagination__list")}
		>
			{children}
		</ul>
	)
}

export const PaginationItem = (props: PaginationItemProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<li
			{...restProps}
			data-slot="pagination-item"
			className={resolveClassNames(className, "pagination__item")}
		>
			{children}
		</li>
	)
}

export const PaginationPrev = (props: PaginationPrevProps) => {
	const {
		className,
		onClick,
		children = <ChevronLeft/>,
		...restProps
	} = props

	const { page, onPageChange } = usePaginationContext()

	const disabled = page <= 1

	const handleClick = (ev: BaseUIEvent<MouseEvent<HTMLButtonElement>>) => {
		onClick?.(ev)

		if (!disabled && !ev.baseUIHandlerPrevented) {
			const nextPage = page - 1

			onPageChange?.(nextPage, ev)
		}
	}

	return (
		<Button
			{...restProps}
			data-slot="pagination-prev"
			disabled={disabled}
			aria-label={props["aria-label"] ?? "Go to previous page"}
			className={resolveClassNames(className, "pagination__prev")}
			onClick={handleClick}
		>
			{children}
		</Button>
	)
}

export const PaginationNext = (props: PaginationNextProps) => {
	const {
		className,
		onClick,
		children = <ChevronRight/>,
		...restProps
	} = props

	const { page, total, onPageChange } = usePaginationContext()

	const disabled = page >= total

	const handleClick = (ev: BaseUIEvent<MouseEvent<HTMLButtonElement>>) => {
		onClick?.(ev)

		if (!disabled && !ev.baseUIHandlerPrevented) {
			const nextPage = page + 1

			onPageChange?.(nextPage, ev)
		}
	}

	return (
		<Button
			{...restProps}
			data-slot="pagination-next"
			disabled={disabled}
			aria-label={props["aria-label"] ?? "Go to next page"}
			className={resolveClassNames(className, "pagination__next")}
			onClick={handleClick}
		>
			{children}
		</Button>
	)
}

export const PaginationRange = (props: PaginationRangeProps) => {
	const { children } = props
	const { page, total, siblings, boundaries } = usePaginationContext()

	const pages = usePaginationRange({
		total,
		page,
		siblings,
		boundaries,
	})

	return (
		<>
			{pages.map((p, i) => {
				if (children) return children(p, i)

				return (
					<PaginationItem key={p}>
						{typeof p === "number"
							? <PaginationPage page={p}/>
							: <PaginationEllipsis/>
						}
					</PaginationItem>
				)
			})}
		</>
	)
}

export const PaginationPage = (props: PaginationPageProps) => {
	const {
		page,
		className,
		onClick,
		...restProps
	} = props

	const { page: currentPage, onPageChange } = usePaginationContext()

	const current = page === currentPage

	const handleClick = (ev: BaseUIEvent<MouseEvent<HTMLButtonElement>>) => {
		onClick?.(ev)

		if (!current && !ev.baseUIHandlerPrevented) {
			onPageChange?.(page, ev)
		}
	}

	return (
		<Button
			{...restProps}
			{...getDataAttributes({ current })}
			data-slot="pagination-page"
			aria-label={props["aria-label"] || `Go to page ${page}`}
			aria-current={current ? "page" : undefined}
			className={resolveClassNames(className, "pagination__page")}
			onClick={handleClick}
		>
			{page}
		</Button>
	)
}

export const PaginationEllipsis = (props: PaginationEllipsisProps) => {
	const {
		className,
		children = <EllipsisIcon/>,
		...restProps
	} = props

	return (
		<span
			{...restProps}
			data-slot="pagination-ellipsis"
			className={resolveClassNames(className, "pagination__ellipsis")}
		>
			{children}
		</span>
	)
}