"use client"

import type { MouseEvent } from "react"
import type { AccordionItemProps } from "./types"

import { useId } from "react"
import { useTransition } from "@/shared/hooks/use-transition"

import { isFunction } from "@/shared/helpers/is-function"

import { MdKeyboardArrowDown } from "react-icons/md"

import { useAccordionContext } from "./accordion"

export const AccordionItem = (props: AccordionItemProps) => {
	const {
		keepMounted,
		showIndicator,
		disableAnimation,
		classNames,
		slotProps = {},
		disabledItem,
		expandedItem,
		onExpandedChange,
	} = useAccordionContext()

	const {
		value: valueProp,
		title,
		description,
		startContent,
		indicator,
		className,
		children,
		...restProps
	} = props

	const {
		headingProps,
		triggerProps,
		startContentProps,
		wrapperProps,
		titleProps,
		descriptionProps,
		indicatorProps,
		contentProps,
	} = slotProps

	const buttonId = useId()
	const contentId = useId()

	const value = valueProp ?? buttonId

	const disabled = disabledItem?.(value)
	const expanded = expandedItem?.(value)

	const [mounted, styles] = useTransition(expanded, {
		enabled: !disableAnimation,
		initial: { opacity: 0, gridTemplateRows: "0fr" },
		enter: { opacity: 1, gridTemplateRows: "1fr" },
	})

	const handleClick = (ev: MouseEvent<HTMLButtonElement>) => {
		triggerProps?.onClick?.(ev)
		onExpandedChange?.(value, !expanded)
	}

	return (
		<div
			className={classNames?.item({ disabled, className })}
			{...restProps}
		>
			<h2
				{...headingProps}
				className={classNames?.heading({ className: headingProps?.className })}
			>
				<button
					aria-expanded={expanded || undefined}
					aria-controls={contentId}
					id={buttonId}
					disabled={disabled}
					{...triggerProps}
					className={classNames?.trigger({ className: triggerProps?.className })}
					onClick={handleClick}
				>
					{startContent ? (
						<div
							{...startContentProps}
							className={classNames?.startContent({ className: startContentProps?.className })}
						>
							{startContent}
						</div>
					) : null}

					{title || description ? (
						<div
							{...wrapperProps}
							className={classNames?.wrapper({ className: wrapperProps?.className })}
						>
							{title ? (
								<span
									{...titleProps}
									className={classNames?.title({ className: titleProps?.className })}
								>
									{title}
								</span>
							) : null}

							{description ? (
								<span
									{...descriptionProps}
									className={classNames?.description({ className: descriptionProps?.className })}
								>
									{description}
								</span>
							) : null}
						</div>
					) : null}

					{showIndicator ? (
						<span
							aria-hidden="true"
							{...indicatorProps}
							className={classNames?.indicator({ className: indicatorProps?.className })}
						>
							{indicator
								? isFunction(indicator)
									? indicator(!!expanded)
									: indicator
								: <MdKeyboardArrowDown/>
							}
						</span>
					) : null}
				</button>
			</h2>

			{mounted || keepMounted ? (
				<section className="grid" style={styles}>
					<div className="overflow-hidden">
						<div
							role="region"
							aria-labelledby={buttonId}
							id={contentId}
							{...contentProps}
							className={classNames?.content({ className: contentProps?.className })}
						>
							{children}
						</div>
					</div>
				</section>
			) : null}
		</div>
	)
}