import type { ChipProps } from "./types"

import { useMemo } from "react"

import { MdCancel } from "react-icons/md"

import { chipVariants } from "./variants"

export const Chip = (props: ChipProps) => {
	const {
		startContent,
		endContent,
		onClose,
		className,
		classNames,
		variant,
		size,
		color,
		rounded,
		disabled,
		children,
		...restProps
	} = props

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

	const start = variant === "dot" && !startContent ? (
		<span className={slots.dot({ className: classNames?.dot })}/>
	) : startContent

	const end = Boolean(onClose) ? (
		<button
			aria-labelledby="close"
			disabled={disabled}
			className={slots.closeButton({ className: classNames?.closeButton })}
			onClick={onClose}
		>
			{endContent ?? <MdCancel/>}
		</button>
	) : endContent

	return (
		<div className={slots.base({ className: [className, classNames?.base] })} {...restProps}>
			{start}

			<span className={slots.content({ className: classNames?.content })}>
				{children}
			</span>

			{end}
		</div>
	)
}