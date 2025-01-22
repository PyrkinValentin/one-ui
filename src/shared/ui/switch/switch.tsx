import type { SwitchProps } from "./types"

import { useId, useMemo } from "react"

import { Slot, VisuallyHidden } from "@/shared/ui/system"

import { switchVariants } from "./variants"

export const Switch = (props: SwitchProps) => {
	const {
		startContent,
		endContent,
		thumbIcon,
		className,
		size,
		color,
		readOnly,
		disabled,
		disableAnimation,
		children,
		...restProps
	} = props

	const labelId = useId()

	const slots = useMemo(() => {
		return switchVariants({
			size,
			color,
			readOnly,
			disabled,
			disableAnimation,
		})
	}, [
		size,
		color,
		readOnly,
		disabled,
		disableAnimation,
	])

	return (
		<label className={slots.base({ className })}>
			<span
				aria-hidden="true"
				className={slots.wrapper()}
			>
				<VisuallyHidden>
					<input
						role="switch"
						aria-labelledby={labelId}
						type="checkbox"
						readOnly={readOnly}
						disabled={disabled}
						className={slots.input()}
						{...restProps}
					/>
				</VisuallyHidden>

				{startContent ? (
					<Slot className={slots.startContent()}>
						{startContent}
					</Slot>
				) : null}

				<span className={slots.thumb()}>
					{thumbIcon ? (
						<Slot className={slots.thumbIcon()}>
							{thumbIcon}
						</Slot>
					) : null}
				</span>

				{endContent ? (
					<Slot className={slots.endContent()}>
						{endContent}
					</Slot>
				) : null}
			</span>

			{children ? (
				<span id={labelId} className={slots.label()}>
					{children}
				</span>
			) : null}
		</label>
	)
}