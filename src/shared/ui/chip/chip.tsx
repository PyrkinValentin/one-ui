import type { ChipProps } from "./types"

import { useMemo } from "react"

import { isString } from "@/shared/helpers/is-string"

import { MdCancel } from "react-icons/md"

import { chipVariants } from "./variants"

export const Chip = (props: ChipProps) => {
	const {
		startContent,
		endContent,
		onClose,
		className,
		variant,
		size,
		color,
		rounded,
		disabled,
		disableAnimation,
		children,
		slotProps = {},
		...restProps
	} = props

	const {
		contentProps,
		dotProps,
		closeButtonProps,
	} = slotProps

	const oneChar = isString(children) && children.length === 1
	const closeable = !!onClose
	const hasStartContent = !!startContent
	const hasEndContent = !!endContent

	const classNames = useMemo(() => {
		return chipVariants({
			className,
			variant,
			size,
			color,
			rounded,
			oneChar,
			closeable,
			hasStartContent,
			hasEndContent,
			disabled,
			disableAnimation,
		})
	}, [
		className,
		variant,
		size,
		color,
		rounded,
		oneChar,
		closeable,
		hasStartContent,
		hasEndContent,
		disabled,
		disableAnimation,
	])

	return (
		<div
			className={classNames.base({ className })}
			{...restProps}
		>
			{variant === "dot" && !startContent ? (
				<span
					{...dotProps}
					className={classNames.dot({ className: dotProps?.className })}
				/>
			) : startContent}

			<span
				{...contentProps}
				className={classNames.content({ className: contentProps?.className })}
			>
				{children}
			</span>

			{onClose ? (
				<button
					aria-labelledby="close ship"
					disabled={disabled}
					onClick={onClose}
					{...closeButtonProps}
					className={classNames.closeButton({ className: closeButtonProps?.className })}
				>
					{endContent ?? <MdCancel/>}
				</button>
			) : endContent}
		</div>
	)
}