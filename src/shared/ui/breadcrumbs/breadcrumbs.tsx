import type { BreadcrumbsItemProps, BreadcrumbsProps } from "./types"

import { useMemo } from "react"

import { Children, isValidElement } from "react"
import { isUndefined } from "@/shared/helpers/is-undefined"

import { Fragment } from "react"
import { MdChevronRight } from "react-icons/md"
import { Slot } from "@/shared/ui/system"

import { breadcrumbsVariants } from "./variants"

export const Breadcrumbs = (props: BreadcrumbsProps) => {
	const {
		separator,
		slotProps = {},
		className,
		variant,
		size,
		color,
		rounded,
		underline,
		disabled,
		disableAnimation,
		children,
		...restProps
	} = props

	const {
		listProps,
		separatorProps,
	} = slotProps

	const mappedChildren = Children.map(children, (item) => {
		return isValidElement<BreadcrumbsItemProps>(item)
			? item
			: null
	})

	const items = mappedChildren ?? []
	const latestItemIndex = items.length - 1

	const controlledItem = items.some((item) => {
		return !isUndefined(item.props.current)
	})

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

	return (
		<nav className={classNames.base({ className })} {...restProps}>
			<ol
				{...listProps}
				className={classNames.list({ className: listProps?.className })}
			>
				{items.map((item, i) => {
					const latest = latestItemIndex === i

					const current = controlledItem
						? item.props.current
						: latest

					return (
						<Fragment key={i}>
							<li>
								<Slot
									current={current}
									tabIndex={current || disabled ? -1 : undefined}
									className={classNames.item({ current, className: item.props.className })}
								>
									{item}
								</Slot>
							</li>

							{!latest ? (
								<li aria-hidden="true">
									{separator ? (
										<Slot
											as="svg"
											{...separatorProps}
											className={classNames.separator({ className: separatorProps?.className })}
										>
											{separator}
										</Slot>
									) : (
										<MdChevronRight
											{...separatorProps}
											className={classNames.separator({ className: separatorProps?.className })}
										/>
									)}
								</li>
							) : null}
						</Fragment>
					)
				})}
			</ol>
		</nav>
	)
}