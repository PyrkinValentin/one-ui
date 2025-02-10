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
		variant: variantContext,
		color: colorContext,
		disabled: disabledContext,
		disableAnimation: disableAnimationContext,
		disabledItem,
		selectedItem,
		onValueChange,
		slotProps: slotPropsContext = {},
	} = useListBoxContext()

	const {
		as = "button",
		hideSelectedIcon = hideSelectedIconContext,
		value: valueProp,
		title,
		description,
		selectedIcon = selectedIconContext,
		startContent,
		endContent,
		onClick,
		slotProps = {},
		className,
		variant = variantContext,
		color = colorContext,
		showDivider,
		readOnly,
		disabled: disabledProp = disabledContext,
		disableAnimation = disableAnimationContext,
		children,
		...restProps
	} = props as ListBoxItemProps

	const {
		itemProps: itemPropsContext,
		wrapperProps: wrapperPropsContext,
		titleProps: titlePropsContext,
		descriptionProps: descriptionPropsContext,
		selectedIconProps: selectedIconPropsContext,
	} = slotPropsContext

	const {
		itemProps,
		wrapperProps,
		titleProps,
		descriptionProps,
		selectedIconProps,
	} = slotProps

	const titleId = useId()
	const descriptionId = useId()

	const value = valueProp ?? titleId

	const disabled = disabledProp || disabledItem?.(value)
	const selected = selectedItem?.(value)

	const handleClick = (ev: MouseEvent<HTMLButtonElement>) => {
		onClick?.(ev)
		onValueChange?.(value, !selected)
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
			role="option"
			aria-labelledby={titleId}
			aria-describedby={descriptionId}
			aria-selected={selected}
			{...itemPropsContext}
			{...itemProps}
			className={classNames.base({
				className: [
					itemPropsContext?.className,
					itemProps?.className,
				],
			})}
		>
			<Component
				tabIndex={disabled || readOnly ? -1 : undefined}
				className={classNames.button({ className })}
				onClick={handleClick}
				{...restProps}
			>
				{startContent}

				{description ? (
					<div
						{...wrapperPropsContext}
						{...wrapperProps}
						className={classNames.wrapper({
							className: [
								wrapperPropsContext?.className,
								wrapperProps?.className,
							],
						})}
					>
						<span
							id={titleId}
							{...titlePropsContext}
							{...titleProps}
							className={classNames.title({
								className: [
									titlePropsContext?.className,
									titleProps?.className,
								],
							})}
						>
							{title ?? children}
						</span>

						<span
							id={descriptionId}
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
					</div>
				) : (
					<span
						id={titleId}
						{...titlePropsContext}
						{...titleProps}
						className={classNames.title({
							className: [
								titlePropsContext?.className,
								titleProps?.className,
							],
						})}
					>
						{title ?? children}
					</span>
				)}

				{selectionMode !== "none" && !hideSelectedIcon ? (
					<span
						{...selectedIconPropsContext}
						{...selectedIconProps}
						className={classNames.selectedIcon({
							className: [
								selectedIconPropsContext?.className,
								selectedIconProps?.className,
							],
						})}
					>
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
										...(!disableAnimation
												? { transition: "stroke-dashoffset 0.15s" }
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