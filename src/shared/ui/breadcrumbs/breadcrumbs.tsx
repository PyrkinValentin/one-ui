"use client"

import type { BreadcrumbsContextValue, BreadcrumbsItemProps, BreadcrumbsProps } from "./types"

import { Fragment, isValidElement, use, useMemo } from "react"

import { Children, createContext } from "react"
import { isUndefined } from "@/shared/helpers/is-undefined"

import { MdChevronRight } from "react-icons/md"
import { Slot } from "@/shared/ui/system"

import { breadcrumbsVariants } from "./variants"

const BreadcrumbsContext = createContext<BreadcrumbsContextValue>({})
export const useBreadcrumbsContext = () => use(BreadcrumbsContext)

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

	const { listProps, ...restSlotProps } = slotProps

	const items = Children.toArray(children)
	const lastItemIndex = items.length - 1

	const controlledItem = items.some((item) => {
		return isValidElement<BreadcrumbsItemProps>(item)
			? !isUndefined(item.props.current)
			: false
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

	const contextValue: BreadcrumbsContextValue = {
		separator,
		disabled,
		controlledItem,
		classNames,
		slotProps: restSlotProps,
	}

	return (
		<BreadcrumbsContext value={contextValue}>
			<nav className={classNames.base({ className })} {...restProps}>
				<ol
					{...listProps}
					className={classNames.list({ className: listProps?.className })}
				>
					{items.map((item, i) => (
						<Fragment key={i}>
							<li>
								<Slot className={classNames.item()}>
									{item}
								</Slot>
							</li>

							<li
								aria-hidden="true"
								className={classNames.separator()}
							>
								<MdChevronRight/>
							</li>
						</Fragment>
					))}
				</ol>
			</nav>
		</BreadcrumbsContext>
	)
}