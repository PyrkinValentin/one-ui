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
		slotProps: slotPropsContext = {},
		getItemState,
	} = useAccordionContext()

	const {
		hideIndicator = hideIndicatorContext,
		keepMounted = keepMountedContext,
		value,
		title,
		description,
		startContent,
		indicator,
		slotProps = {},
		className,
		compact = compactContext,
		disabled,
		disableIndicatorAnimation,
		disableAnimation,
		children,
		...restProps
	} = props

	const {
		headingProps: headingPropsContext,
		triggerProps: triggerPropsContext,
		startContentProps: startContentPropsContext,
		titleWrapperProps: titleWrapperPropsContext,
		titleProps: titlePropsContext,
		descriptionProps: descriptionPropsContext,
		indicatorProps: indicatorPropsContext,
		contentWrapperProps: contentWrapperPropsContext,
		contentInnerWrapperProps: contentInnerWrapperPropsContext,
		contentProps: contentPropsContext,
	} = slotPropsContext

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
	} = slotProps

	const valueId = useId()
	const buttonId = useId()
	const contentId = useId()

	const itemState = getItemState?.(value, {
		valueId,
		disabled,
	})

	const handleClick = (ev: MouseEvent<HTMLButtonElement>) => {
		triggerProps?.onClick?.(ev)
		itemState?.toggleExpanded()
	}

	const classNames = useMemo(() => {
		return accordionItemVariants({
			variant,
			rounded,
			compact,
			disabled: itemState?.disabled,
			disableIndicatorAnimation,
			disableAnimation,
		})
	}, [
		variant,
		rounded,
		compact,
		itemState?.disabled,
		disableIndicatorAnimation,
		disableAnimation,
	])

	return (
		<div
			className={classNames.base({ className })}
			{...restProps}
		>
			<h2
				{...headingPropsContext}
				{...headingProps}
				className={classNames.heading({
					className: [
						headingPropsContext?.className,
						headingProps?.className,
					],
				})}
			>
				<button
					aria-expanded={itemState?.expanded || undefined}
					aria-controls={contentId}
					id={buttonId}
					tabIndex={itemState?.disabled ? -1 : undefined}
					{...triggerPropsContext}
					{...triggerProps}
					className={classNames.trigger({
						className: [
							triggerPropsContext?.className,
							triggerProps?.className,
						],
					})}
					onClick={handleClick}
				>
					{startContent ? (
						<div
							{...startContentPropsContext}
							{...startContentProps}
							className={classNames.startContent({
								className: [
									startContentPropsContext?.className,
									startContentProps?.className,
								],
							})}
						>
							{startContent}
						</div>
					) : null}

					<div
						{...titleWrapperPropsContext}
						{...titleWrapperProps}
						className={classNames.titleWrapper({
							className: [
								titleWrapperPropsContext?.className,
								titleWrapperProps?.className,
							],
						})}
					>
						<span
							{...titlePropsContext}
							{...titleProps}
							className={classNames.title({
								className: [
									titlePropsContext?.className,
									titleProps?.className,
								],
							})}
						>
							{title}
						</span>

						{description ? (
							<span
								{...descriptionPropsContext}
								{...descriptionProps}
								className={classNames.description({
									className: [
										descriptionPropsContext?.className,
										descriptionProps?.className,
									],
								})}
							>
								{description}
							</span>
						) : null}
					</div>

					{!hideIndicator ? (
						<span
							aria-hidden="true"
							{...indicatorPropsContext}
							{...indicatorProps}
							className={classNames.indicator({
								className: [
									indicatorPropsContext?.className,
									indicatorProps?.className,
								],
							})}
						>
							{indicator
								? isFunction(indicator)
									? indicator(itemState?.expanded)
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
				expanded={itemState?.expanded}
				{...contentWrapperPropsContext}
				{...contentWrapperProps}
				className={classNames.contentWrapper({
					className: [
						contentWrapperPropsContext?.className,
						contentWrapperProps?.className,
					],
				})}
			>
				<div
					{...contentInnerWrapperPropsContext}
					{...contentInnerWrapperProps}
					className={classNames.contentInnerWrapper({
						className: [
							contentInnerWrapperPropsContext?.className,
							contentInnerWrapperProps?.className,
						],
					})}
				>
					<div
						role="region"
						aria-labelledby={buttonId}
						id={contentId}
						{...contentPropsContext}
						{...contentProps}
						className={classNames.content({
							className: [
								contentPropsContext?.className,
								contentProps?.className,
							],
						})}
					>
						{children}
					</div>
				</div>
			</AccordionItemCollapse>
		</div>
	)
}