"use client"

import type { ListBoxSectionProps } from "./types"

import { useId, useMemo } from "react"

import { useListBoxContext } from "./list-box"
import { listBoxSectionVariants } from "./variants"

export const ListBoxSection = (props: ListBoxSectionProps) => {
	const {
		slotProps: slotPropsContext = {},
	} = useListBoxContext()

	const {
		title,
		className,
		showDivider,
		children,
		slotProps = {},
		...restProps
	} = props

	const {
		headingProps: headingPropsContext,
		groupProps: groupPropsContext,
	} = slotPropsContext

	const {
		headingProps,
		groupProps,
	} = slotProps

	const titleId = useId()

	const classNames = useMemo(() => {
		return listBoxSectionVariants({
			showDivider,
		})
	}, [showDivider])

	return (
		<li
			role="presentation"
			className={classNames.base({ className })}
			{...restProps}
		>
			{title ? (
				<span
					id={titleId}
					{...headingPropsContext}
					{...headingProps}
					className={classNames.heading({
						className: [
							headingPropsContext?.className,
							headingProps?.className,
						],
					})}
				>
					{title}
				</span>
			) : null}

			<ul
				role="group"
				aria-labelledby={titleId}
				{...groupPropsContext}
				{...groupProps}
				className={classNames.group({
					className: [
						groupPropsContext?.className,
						groupProps?.className,
					],
				})}
			>
				{children}
			</ul>
		</li>
	)
}