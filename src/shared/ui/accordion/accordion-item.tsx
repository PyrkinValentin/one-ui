"use client"

import type { MouseEvent } from "react"
import type { AccordionItemProps } from "./types"

import { useId, useMemo } from "react"

import { isFunction } from "@/shared/helpers/is-function"

import { MdKeyboardArrowDown } from "react-icons/md"

import { useAccordionContext } from "./accordion"
import { accordionItemVariants } from "./variants"
import { AccordionItemCollapse } from "./accordion-item-collapse"

export const AccordionItem = (props: AccordionItemProps) => {
	const {
		hideIndicator: hideIndicatorContext,
		keepMounted: keepMountedContext,
		variant,
		rounded,
		compact: compactContext,
		slotProps: slotPropsContext,
		isDisabled,
		isExpanded,
		onExpand,
	} = useAccordionContext()

	const valueId = useId()

	const {
		hideIndicator = hideIndicatorContext,
		keepMounted = keepMountedContext,
		value = valueId,
		title,
		description,
		startContent,
		indicator,
		className,
		compact = compactContext,
		disabled = isDisabled?.(value),
		disableIndicatorAnimation,
		disableAnimation,
		children,
		slotProps,
		...restProps
	} = props

	const {
		headingProps,
		triggerProps,
		startContentProps,
		titleWrapperProps,
		titleProps,
		descriptionProps,
		indicatorProps,
		contentWrapperProps,
		contentInnerWrapperProps,
		contentProps,
	} = {
		...slotPropsContext,
		...slotProps,
	}

	const buttonId = useId()
	const contentId = useId()

	const expanded = !!isExpanded?.(value)

	const handleClick = (ev: MouseEvent<HTMLButtonElement>) => {
		triggerProps?.onClick?.(ev)
		onExpand?.(value, expanded)
	}

	const classNames = useMemo(() => {
		return accordionItemVariants({
			variant,
			rounded,
			compact,
			disabled,
			disableIndicatorAnimation,
			disableAnimation,
		})
	}, [
		variant,
		rounded,
		compact,
		disabled,
		disableIndicatorAnimation,
		disableAnimation,
	])

	return (
		<div
			className={classNames.base({ className })}
			{...restProps}
		>
			<h2
				{...headingProps}
				className={classNames.heading({ className: headingProps?.className })}
			>
				<button
					aria-expanded={expanded || undefined}
					aria-controls={contentId}
					id={buttonId}
					tabIndex={disabled ? -1 : undefined}
					{...triggerProps}
					className={classNames.trigger({ className: triggerProps?.className })}
					onClick={handleClick}
				>
					{startContent ? (
						<div
							{...startContentProps}
							className={classNames.startContent({ className: startContentProps?.className })}
						>
							{startContent}
						</div>
					) : null}

					<div
						{...titleWrapperProps}
						className={classNames.titleWrapper({ className: titleWrapperProps?.className })}
					>
						<span
							{...titleProps}
							className={classNames.title({ className: titleProps?.className })}
						>
							{title}
						</span>

						{description ? (
							<span
								{...descriptionProps}
								className={classNames.description({ className: descriptionProps?.className })}
							>
								{description}
							</span>
						) : null}
					</div>

					{!hideIndicator ? (
						<span
							aria-hidden="true"
							{...indicatorProps}
							className={classNames.indicator({ className: indicatorProps?.className })}
						>
							{indicator
								? isFunction(indicator)
									? indicator(expanded)
									: indicator
								: <MdKeyboardArrowDown/>
							}
						</span>
					) : null}
				</button>
			</h2>

			<AccordionItemCollapse
				keepMounted={keepMounted}
				disableAnimation={disableAnimation}
				expanded={expanded}
				{...contentWrapperProps}
				className={classNames.contentWrapper({ className: contentWrapperProps?.className })}
			>
				<div
					{...contentInnerWrapperProps}
					className={classNames.contentInnerWrapper({ className: contentInnerWrapperProps?.className })}
				>
					<div
						role="region"
						aria-labelledby={buttonId}
						id={contentId}
						{...contentProps}
						className={classNames.content({ className: contentProps?.className })}
					>
						{children}
					</div>
				</div>
			</AccordionItemCollapse>
		</div>
	)
}