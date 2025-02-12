"use client"

import type { ElementType, MouseEvent } from "react"
import type { BreadcrumbItemProps } from "./types"

import { useMemo, useId } from "react"

import { MdChevronRight } from "react-icons/md"

import { useBreadcrumbsContext } from "./breadcrumbs"
import { breadcrumbItemVariants } from "./variants"

export const BreadcrumbItem = <As extends ElementType = "button">(props: BreadcrumbItemProps<As>) => {
	const {
		hideSeparator: hideSeparatorContext,
		separator: separatorContext,
		size: sizeContext,
		color: colorContext,
		underline: underlineContext,
		disabled: disabledContext,
		disableAnimation: disableAnimationContext,
		slotProps: slotPropsContext,
		onAction,
	} = useBreadcrumbsContext()

	const {
		as = "button",
		last,
		hideSeparator = hideSeparatorContext,
		value,
		startContent,
		endContent,
		separator = separatorContext,
		onClick,
		className,
		size = sizeContext,
		color = colorContext,
		underline = underlineContext,
		current = last,
		disabled = disabledContext,
		disableAnimation = disableAnimationContext,
		children,
		slotProps = {},
		...restProps
	} = props as BreadcrumbItemProps

	const {
		baseProps,
		separatorProps,
	} = {
		...slotPropsContext,
		...slotProps,
	}

	const valueId = useId()

	const handleClick = (ev: MouseEvent<HTMLButtonElement>) => {
		onClick?.(ev)
		onAction?.(value ?? valueId)
	}

	const classNames = useMemo(() => {
		return breadcrumbItemVariants({
			size,
			color,
			underline,
			current,
			disabled,
			disableAnimation,
		})
	}, [
		size,
		color,
		underline,
		current,
		disabled,
		disableAnimation,
	])

	const Component = as

	return (
		<li
			{...baseProps}
			className={classNames.base({ className: baseProps?.className })}
		>
			<Component
				aria-current={current ? "page" : undefined}
				tabIndex={disabled || current ? -1 : undefined}
				className={classNames.item({ className })}
				onClick={handleClick}
				{...restProps}
			>
				{startContent}
				{children}
				{endContent}
			</Component>

			{!last && !hideSeparator ? (
				<span
					{...separatorProps}
					className={classNames.separator({ className: separatorProps?.className })}
				>
					{separator ?? <MdChevronRight/>}
				</span>
			) : null}
		</li>
	)
}