"use client"

import type { ElementType, MouseEvent } from "react"
import type { ListBoxItemProps } from "./types"

import { useId, useMemo } from "react"

import { isFunction } from "@/shared/helpers/is-function"

import { useListBoxContext } from "./list-box"
import { listBoxItemVariants } from "./variants"

export const ListBoxItem = <As extends ElementType = "button">(props: ListBoxItemProps<As>) => {
	const {
		selectionMode,
		hideSelectedIcon: hideSelectedIconContext,
		selectedIcon: selectedIconContext,
		disabledItem,
		selectedItem,
		onValueChange,
		slotProps: slotPropsContext = {},
	} = useListBoxContext()

	const {
		as = "button",
		hideSelectedIcon = hideSelectedIconContext,
		value,
		title,
		description,
		selectedIcon = selectedIconContext,
		startContent,
		endContent,
		onClick,
		slotProps = {},
		className,
		children,
		...restProps
	} = props as ListBoxItemProps

	const {
		wrapperProps: wrapperPropsContext,
		titleProps: titlePropsContext,
		descriptionProps: descriptionPropsContext,
	} = slotPropsContext

	const {
		wrapperProps,
		titleProps,
		descriptionProps,
	} = slotProps

	const titleId = useId()
	const descriptionId = useId()

	const disabled = disabledItem?.(value ?? titleId)
	const selected = selectedItem?.(value ?? titleId)

	const handleClick = (ev: MouseEvent<HTMLButtonElement>) => {
		onClick?.(ev)
		onValueChange?.(value ?? titleId, !selected)
	}

	const classNames = useMemo(() => {
		return listBoxItemVariants()
	}, [])

	const Component = as

	return (
		<li
			role="option"
			aria-labelledby={titleId}
			aria-describedby={descriptionId}
			aria-selected={selected}
			className={classNames.base()}
		>
			<Component
				tabIndex={disabled || selected ? -1 : undefined}
				className={classNames.wrapper({ className })}
				onClick={handleClick}
				{...restProps}
			>
				{startContent}

				{description ? (
					<div
						{...wrapperPropsContext}
						{...wrapperProps}
					>
						<span
							id={titleId}
							{...titlePropsContext}
							{...titleProps}
						>
							{title ?? children}
						</span>

						<span
							id={descriptionId}
							{...descriptionPropsContext}
							{...descriptionProps}
						>
							{description}
						</span>
					</div>
				) : (
					<span
						id={titleId}
						{...titlePropsContext}
						{...titleProps}
					>
						{title ?? children}
					</span>
				)}

				{selectionMode !== "none" && !hideSelectedIcon ? (
					<span>
						{!selectedIcon ? (
							<svg
								aria-hidden="true"
								role="presentation"
								viewBox="0 0 17 18"
							>
								<polyline
									fill="none"
									points="1 9 7 14 15 4"
									stroke="currentColor"
									strokeDasharray="22"
									strokeDashoffset={selected ? 44 : 66}
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									style={{
										...(true // && !disableAnimation
												? { transition: "stroke-dashoffset 0.15s linear 0.2s" }
												: undefined
										),
									}}
								/>
							</svg>
						) : (
							<>
								{isFunction(selectedIcon)
									? selectedIcon(!!selected)
									: selectedIcon
								}
							</>
						)}
					</span>
				) : null}

				{endContent}
			</Component>
		</li>
	)
}