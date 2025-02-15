"use client"

import type { ReactElement } from "react"
import type { BreadcrumbsProps, BreadcrumbItemProps, BreadcrumbsContextValue } from "./types"

import { use, useMemo } from "react"

import { Children, cloneElement, createContext, isValidElement } from "react"

import { MdMoreHoriz } from "react-icons/md"
import { Slot } from "@/shared/ui/system"

import { breadcrumbsVariants } from "./variants"
import { BreadcrumbItem } from "./breadcrumb-item"

const BreadcrumbsContext = createContext<BreadcrumbsContextValue>({})
export const useBreadcrumbsContext = () => use(BreadcrumbsContext)

export const Breadcrumbs = (props: BreadcrumbsProps) => {
	const {
		hideSeparator,
		maxItems = 8,
		beforeCollapse = 1,
		afterCollapse = 2,
		separator,
		color,
		underline,
		disabled,
		disableAnimation,
		onAction,
		className,
		variant,
		size,
		rounded,
		children,
		slotProps = {},
		...restProps
	} = props

	const {
		listProps,
		ellipsisProps,
		itemSlotProps,
	} = slotProps

	const items = Children
		.toArray(children)
		.filter<ReactElement<BreadcrumbItemProps>>(isValidElement)

	const getBreadcrumbs = () => {
		if (items.length < maxItems) {
			return items
		}

		const itemsInEllipsis = items.slice(beforeCollapse, items.length - afterCollapse)

		if (itemsInEllipsis.length < 1) {
			return items
		}

		const ellipsisIcon = (
			<MdMoreHoriz {...ellipsisProps}/>
		)

		const collapsedItem = cloneElement(itemsInEllipsis[0], {
			key: "ellipsis",
			children: ellipsisIcon,
		})

		return [
			...items.slice(0, beforeCollapse),
			collapsedItem,
			...items.slice(items.length - afterCollapse, items.length),
		]
	}

	const breadcrumbs = getBreadcrumbs()

	const classNames = useMemo(() => {
		return breadcrumbsVariants({
			variant,
			size,
			rounded,
		})
	}, [
		variant,
		size,
		rounded,
	])

	const contextValue: BreadcrumbsContextValue = {
		hideSeparator,
		separator,
		size,
		color,
		underline,
		disabled,
		disableAnimation,
		onAction,
		slotProps: itemSlotProps,
	}

	return (
		<BreadcrumbsContext value={contextValue}>
			<nav
				className={classNames.base({ className })}
				{...restProps}
			>
				<ol
					{...listProps}
					className={classNames.list({ className: listProps?.className })}
				>
					{breadcrumbs.map((item, i) => (
						<Slot
							key={item.key}
							as={BreadcrumbItem}
							last={(breadcrumbs.length - 1) === i}
						>
							{item}
						</Slot>
					))}
				</ol>
			</nav>
		</BreadcrumbsContext>
	)
}