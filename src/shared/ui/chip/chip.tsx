import type { ChipProps } from "./types"

import { useMemo } from "react"

import { MdCancel } from "react-icons/md"

import { chipVariants } from "./variants"

export const Chip = (props: ChipProps) => {
	const {
		startContent,
		endContent,
		slotProps = {},
		onClose,
		className,
		variant,
		size,
		color,
		rounded,
		disabled,
		children,
		...restProps
	} = props

	const {
		contentProps,
		dotProps,
		closeButtonProps,
	} = slotProps

	const slots = useMemo(() => {
		return chipVariants({
			className,
			variant,
			size,
			color,
			rounded,
			disabled,
		})
	}, [
		className,
		variant,
		size,
		color,
		rounded,
		disabled,
	])

	return (
		<div className={slots.base({ className })} {...restProps}>
			{variant === "dot" && !startContent ? (
				<span
					{...dotProps}
					className={slots.dot({ className: dotProps?.className })}
				/>
			) : startContent}

			<span
				{...contentProps}
				className={slots.content({ className: contentProps?.className })}
			>
				{children}
			</span>

			{onClose ? (
				<button
					aria-labelledby="close"
					disabled={disabled}
					onClick={onClose}
					{...closeButtonProps}
					className={slots.closeButton({ className: closeButtonProps?.className })}
				>
					{endContent ?? <MdCancel/>}
				</button>
			) : endContent}
		</div>
	)
}