import type { BreadcrumbProps, BreadcrumbsProps } from "./types"

import { useMemo } from "react"

import { Children, isValidElement } from "react"
import { isArray } from "@/shared/helpers/is-array"

import { MdChevronRight, MdMoreHoriz } from "react-icons/md"

import { breadcrumbsVariants } from "./variants"
import { Breadcrumb } from "./breadcrumb"

export const Breadcrumbs = (props: BreadcrumbsProps) => {
	const {
		showSeparator = true,
		maxItems = 8,
		beforeCollapse = 1,
		afterCollapse = 2,
		separator,
		renderEllipsis,
		className,
		variant,
		size,
		color,
		rounded,
		underline,
		disabled,
		disableAnimation,
		children,
		slotProps = {},
		...restProps
	} = props

	const {
		listProps,
		itemProps,
		ellipsisProps,
		separatorProps,
	} = slotProps

	const collection = Children.map(children, (child) => {
		return isValidElement<BreadcrumbProps>(child)
			? child.props
			: null
	})

	const getBreadcrumbs = () => {
		const items = collection ?? []

		if (items.length < maxItems) {
			return items
		}

		const itemsInEllipsis = items.slice(beforeCollapse, items.length - afterCollapse)

		if (itemsInEllipsis.length < 1) {
			return items
		}

		return [
			...items.slice(0, beforeCollapse),
			itemsInEllipsis,
			...items.slice(items.length - afterCollapse, items.length),
		]
	}

	const breadcrumbs = getBreadcrumbs()

	const lastBreadcrumb = (i: number) => {
		return (breadcrumbs.length - 1) === i
	}

	const classNames = useMemo(() => {
		return breadcrumbsVariants({
			variant,
			size,
			color,
			rounded,
			underline,
			disabled,
			disableAnimation,
		})
	}, [
		variant,
		size,
		color,
		rounded,
		underline,
		disabled,
		disableAnimation,
	])

	const ellipsisIcon = (
		<MdMoreHoriz
			{...ellipsisProps}
			className={classNames.ellipsis({ className: ellipsisProps?.className })}
		/>
	)

	return (
		<nav
			className={classNames.base({ className })}
			{...restProps}
		>
			<ol
				{...listProps}
				className={classNames.list({ className: listProps?.className })}
			>
				{breadcrumbs.map((breadcrumb, i) => (
					<li
						key={i}
						{...itemProps}
						className={classNames.item({ className: itemProps?.className })}
					>
						{isArray(breadcrumb) ? (
							<>
								{renderEllipsis
									? renderEllipsis({ items: breadcrumb, icon: ellipsisIcon })
									: ellipsisIcon
								}
							</>
						) : (
							<Breadcrumb
								aria-current={lastBreadcrumb(i) ? "page" : undefined}
								tabIndex={disabled || lastBreadcrumb(i) ? -1 : undefined}
								{...breadcrumb}
								className={classNames.link({ className: breadcrumb.className })}
							/>
						)}

						{showSeparator && !lastBreadcrumb(i) ? (
							<span
								{...separatorProps}
								className={classNames.separator({ className: separatorProps?.className })}
							>
								{separator ?? <MdChevronRight/>}
							</span>
						) : null}
					</li>
				))}
			</ol>
		</nav>
	)
}