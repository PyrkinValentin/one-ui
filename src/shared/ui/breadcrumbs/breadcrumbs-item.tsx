"use client"

import type { BreadcrumbsItemProps } from "./types"

import { MdChevronRight } from "react-icons/md"

import { useBreadcrumbsContext } from "./breadcrumbs"
import { Link } from "@/shared/ui/link";

export const BreadcrumbsItem = (props: BreadcrumbsItemProps) => {
	const {
		separator,
		disabled,
		controlledItem,
		classNames,
		slotProps = {},
	} = useBreadcrumbsContext()

	const {
		current: currentProp,
		last,
		startContent,
		endContent,
		href,
		children,
		...restProps
	} = props

	const { separatorProps } = slotProps

	const current = controlledItem
		? currentProp
		: last

	return (
		<>
			{!current && href ? (
				<Link
					href={href}
					tabIndex={current || disabled ? -1 : undefined}
					{...restProps}
				>
					{startContent}
					{children}
					{endContent}
				</Link>
			) : (
				<span {...restProps}>
					{startContent}
					{children}
					{endContent}
				</span>
			)}

			{/*{!last ? (*/}
			{/*	<li*/}
			{/*		aria-hidden="true"*/}
			{/*		{...separatorProps}*/}
			{/*		className={classNames?.separator({ className: separatorProps?.className })}*/}
			{/*	>*/}
			{/*		{separator*/}
			{/*			? separator*/}
			{/*			: <MdChevronRight/>*/}
			{/*		}*/}
			{/*	</li>*/}
			{/*) : null}*/}
		</>
	)
}