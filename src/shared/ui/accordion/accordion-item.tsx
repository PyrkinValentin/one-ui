"use client"

import type { AccordionItemProps } from "./types"

import { useId } from "react"

import { isFunction } from "@/shared/helpers/is-function"

import { MdKeyboardArrowDown } from "react-icons/md"

import { useAccordionContext } from "./accordion"
import { Collapse } from "./collapse"

export const AccordionItem = (props: AccordionItemProps) => {
	const {
		keepMounted,
		disabledItem,
		expandedItem,
		onExpandedChange,
	} = useAccordionContext()

	const buttonId = useId()
	const contentId = useId()

	const {
		value = buttonId,
		title,
		description,
		startContent,
		indicator,
		children,
		...restProps
	} = props

	const disabled = !!disabledItem?.(value)
	const expanded = !!expandedItem?.(value)

	const handleClick = () => {
		onExpandedChange?.(value, !expanded)
	}

	return (
		<div {...restProps}>
			<h2>
				<button
					aria-expanded={expanded || undefined}
					aria-controls={contentId}
					id={buttonId}
					disabled={disabled}
					onClick={handleClick}
				>
					{startContent ? (
						<div>
							{startContent}
						</div>
					) : null}

					{title || description ? (
						<div>
							{title ? (
								<span>
									{title}
								</span>
							) : null}

							{description ? (
								<span>
									{description}
								</span>
							) : null}
						</div>
					) : null}

					<span aria-hidden="true">
						{indicator
							? isFunction(indicator)
								? indicator(expanded)
								: indicator
							: <MdKeyboardArrowDown/>
						}
					</span>
				</button>
			</h2>

			<Collapse
				keepMounted={keepMounted}
				open={expanded}
			>
				<div
					role="region"
					aria-labelledby={buttonId}
					id={contentId}
				>
					{children}
				</div>
			</Collapse>
		</div>
	)
}