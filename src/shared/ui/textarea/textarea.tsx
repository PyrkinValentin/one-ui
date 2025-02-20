"use client"

import type { ChangeEvent } from "react"
import type { TextareaProps } from "./types"

import { useId, useMemo } from "react"
import { useControlledState } from "@/shared/hooks/use-controlled-state"

import { MdCancel } from "react-icons/md"

import { mergeRefs } from "@/shared/utils/merge"

import { useTextareaAutosize } from "./use-textarea-autosize"
import { textareaVariants } from "./variants"

export const Textarea = (props: TextareaProps) => {
	const {
		defaultValue = "",
		value: valueProp,
		onValueChange,
		onClear,
		onChange,
		label,
		startContent,
		endContent,
		invalidMessage,
		description,
		className,
		variant,
		size,
		color,
		rounded,
		autosize,
		fullWidth,
		clearable,
		required,
		readOnly,
		invalid,
		disabled,
		disableAnimation,
		slotProps = {},
		...restProps
	} = props

	const {
		baseProps,
		wrapperProps,
		labelProps,
		textareaWrapperProps,
		clearButtonProps,
		invalidMessageProps,
		descriptionProps,
	} = slotProps

	const textareaId = useId()

	const [value, setValue] = useControlledState({
		defaultValue,
		value: valueProp,
		onValueChange,
	})

	const textareaRef = useTextareaAutosize(value, autosize)

	const handleChange = (ev: ChangeEvent<HTMLTextAreaElement>) => {
		onChange?.(ev)
		setValue?.(ev.target.value)
	}

	const handleClickClear = () => {
		onClear?.()
		setValue?.("")
	}

	const classNames = useMemo(() => {
		return textareaVariants({
			variant,
			size,
			color,
			rounded,
			autosize,
			fullWidth,
			clearable,
			required,
			readOnly,
			invalid,
			disabled,
			disableAnimation,
		})
	}, [
		variant,
		size,
		color,
		rounded,
		autosize,
		fullWidth,
		clearable,
		required,
		readOnly,
		invalid,
		disabled,
		disableAnimation,
	])

	return (
		<div
			{...baseProps}
			className={classNames.base({ className: baseProps?.className })}
		>
			{label ? (
				<label
					htmlFor={textareaId}
					{...labelProps}
					className={classNames.label({ className: labelProps?.className })}
				>
					{label}
				</label>
			) : null}

				<div
					{...wrapperProps}
					className={classNames.wrapper({ className: wrapperProps?.className })}
				>
					<label
						{...textareaWrapperProps}
						className={classNames.textareaWrapper({ className: textareaWrapperProps?.className })}
					>
						{startContent}

						<textarea
							id={textareaId}
							required={required}
							readOnly={readOnly}
							disabled={disabled}
							className={classNames.textarea({ className })}
							value={value}
							onChange={handleChange}
							{...restProps}
							{...(autosize
									? { ref: mergeRefs(restProps?.ref, textareaRef) }
									: undefined
							)}
						/>

						{clearable ? (
							<>
								{value ? (
									<button
										disabled={readOnly || disabled}
										onClick={handleClickClear}
										{...clearButtonProps}
										className={classNames.clearButton({ className: clearButtonProps?.className })}
									>
										{endContent ?? <MdCancel/>}
									</button>
								) : null}
							</>
						) : endContent}
					</label>

					{invalid && invalidMessage ? (
						<p
							{...invalidMessageProps}
							className={classNames.invalidMessage({ className: invalidMessageProps?.className })}
						>
							{invalidMessage}
						</p>
					) : description ? (
						<p
							{...descriptionProps}
							className={classNames.description({ className: descriptionProps?.className })}
						>
							{description}
						</p>
					) : null}
				</div>
		</div>
	)
}