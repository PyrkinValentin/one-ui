"use client"

import type { ElementType } from "react"
import type { ListBoxItemProps } from "./types"

import { useId, useMemo } from "react"

import { MdSunny } from "react-icons/md"

import { useListBoxContext } from "./list-box"
import { listBoxItemVariants } from "./variants"

export const ListBoxItem = <As extends ElementType = "button">(props: ListBoxItemProps<As>) => {
	const {
		showSelectedIcon,
		selectionMode,
		slotProps = {},
		...restListBoxContext
	} = useListBoxContext()

	const {
		as = "button",
		title,
		description,
		startContent,
		endContent,
		className,
		variant,
		color,
		showDivider,
		disabled,
		disableAnimation,
		children,
		...restProps
	} = {
		...restListBoxContext,
		...props as ListBoxItemProps,
	}

	const titleId = useId()
	const descriptionId = useId()

	const classNames = useMemo(() => {
		return listBoxItemVariants({
			variant,
			color,
			showDivider,
			disabled,
			disableAnimation,
		})
	}, [
		variant,
		color,
		showDivider,
		disabled,
		disableAnimation,
	])

	const Component = as

	return (
		<li
			role="option"
			aria-labelledby={titleId}
			aria-describedby={descriptionId}
			aria-selected="false"
		>
			<Component
				tabIndex={disabled ? -1 : undefined}
				{...slotProps.buttonProps}
				className={classNames.button({ className })}
				{...restProps}
			>
				{startContent}

				{description ? (
					<div className={classNames.wrapper()}>
						<span
							id={titleId}
							className={classNames.title()}
						>
							{title ?? children}
						</span>

						<span
							id={descriptionId}
							className={classNames.description()}
						>
							{description}
						</span>
					</div>
				) : (
					<span
						id={titleId}
						className={classNames.title()}
					>
						{title ?? children}
					</span>
				)}

				{selectionMode !== "none" && showSelectedIcon ? (
					<MdSunny
						aria-hidden="true"
						className={classNames.selectedIcon()}
					/>
				) : null}

				{endContent}
			</Component>
		</li>
	)
}