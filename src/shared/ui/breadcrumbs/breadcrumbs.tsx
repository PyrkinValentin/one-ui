import type { BreadcrumbProps, BreadcrumbsProps } from "./types"

import { useMemo } from "react"

import { Children, isValidElement } from "react"
import { isUndefined } from "@/shared/helpers/is-undefined"

import { Fragment } from "react"
import { MdChevronRight } from "react-icons/md"
import { Slot } from "@/shared/ui/system"

import { breadcrumbsVariants } from "./variants"
import { Breadcrumb } from "./breadcrumb"

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

	const collection = Children.map(children, (child) => {
		return isValidElement<BreadcrumbProps>(child)
			? child
			: null
	})

	const breadcrumbs = collection ?? []
	const latestBreadcrumbIndex = breadcrumbs.length - 1

	const controlledCurrent = breadcrumbs.some((breadcrumb) => {
		return !isUndefined(breadcrumb.props.current)
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
				{breadcrumbs.map((breadcrumb, i) => {
					const {
						current,
						className,
						children,
						...restBreadcrumbProps
					} = breadcrumb.props

					const latest = latestBreadcrumbIndex === i

					const currentOrLatest = controlledCurrent
						? current
						: latest

					return (
						<Fragment key={i}>
							<li>
								<Breadcrumb
									tabIndex={disabled ? -1 : undefined}
									current={currentOrLatest}
									{...restBreadcrumbProps}
									className={classNames.item({ current: currentOrLatest, className })}
								>
									{children}
								</Breadcrumb>
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