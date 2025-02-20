"use client"

import type { ElementType, MouseEvent } from "react"
import type { ListBoxItemProps } from "./types"

import { useMemo, useId } from "react"

import { isFunction } from "@/shared/helpers/is-function"

import { useListBoxContext } from "./list-box"
import { listBoxItemVariants } from "./variants"

export const ListBoxItem = <As extends ElementType = "button">(props: ListBoxItemProps<As>) => {
	const {
		hideSelectedIcon: hideSelectedIconContext,
		selectedIcon: selectedIconContext,
		selectionMode,
		variant: variantContext,
		color: colorContext,
		disableAnimation: disableAnimationContext,
		slotProps: slotPropsContext = {},
		isDisabled,
		isSelected,
		onSelected,
	} = useListBoxContext()

	const valueId = useId()

	const {
		as = "button",
		hideSelectedIcon = hideSelectedIconContext,
		title,
		description,
		startContent,
		endContent,
		selectedIcon = selectedIconContext,
		value,
		onClick,
		className,
		variant = variantContext,
		color = colorContext,
		showDivider,
		readOnly,
		disabled = isDisabled?.(value ?? valueId),
		disableAnimation = disableAnimationContext,
		children,
		slotProps = {},
		...restProps
	} = props as ListBoxItemProps

	const { itemSlotProps } = slotPropsContext

	const {
		baseProps,
		wrapperProps,
		titleProps,
		descriptionProps,
		selectedIconProps,
	} = {
		...itemSlotProps,
		...slotProps,
	}

	const titleId = useId()
	const descriptionId = useId()

	const selected = !!isSelected?.(value ?? valueId)

	const handleClick = (ev: MouseEvent<HTMLButtonElement>) => {
		onClick?.(ev)
		onSelected?.(value ?? valueId, selected)
	}

	const classNames = useMemo(() => {
		return listBoxItemVariants({
			variant,
			color,
			showDivider,
			readOnly,
			disabled,
			disableAnimation,
		})
	}, [
		variant,
		color,
		showDivider,
		readOnly,
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
				role="option"
				aria-labelledby={titleId}
				aria-describedby={descriptionId}
				aria-selected={selected}
				tabIndex={disabled || readOnly ? -1 : undefined}
				className={classNames.item({ className })}
				onClick={handleClick}
				{...restProps}
			>
				{startContent}

				{description ? (
					<div
						{...wrapperProps}
						className={classNames.wrapper({ className: wrapperProps?.className })}
					>
						<span
							id={titleId}
							{...titleProps}
							className={classNames.title({ className: titleProps?.className })}
						>
							{title ?? children}
						</span>

						<span
							id={descriptionId}
							{...descriptionProps}
							className={classNames.description({ className: descriptionProps?.className })}
						>
							{description}
						</span>
					</div>
				) : (
					<span
						id={titleId}
						{...titleProps}
						className={classNames.title({ className: titleProps?.className })}
					>
						{title ?? children}
					</span>
				)}

				{selectionMode !== "none" && !hideSelectedIcon ? (
					<span
						{...selectedIconProps}
						className={classNames.selectedIcon({ className: selectedIconProps?.className })}
					>
						{selectedIcon ? (
							<>
								{isFunction(selectedIcon)
									? selectedIcon(selected)
									: selectedIcon
								}
							</>
						) : (
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
										...(!disableAnimation
												? { transition: "stroke-dashoffset 0.15s" }
												: undefined
										),
									}}
								/>
							</svg>
						)}
					</span>
				) : null}

				{endContent}
			</Component>
		</li>
	)
}