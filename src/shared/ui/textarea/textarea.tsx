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
		inputMode,
		name,
		placeholder,
		autoFocus,
		autoComplete,
		cols,
		rows,
		minLength,
		maxLength,
		defaultValue = "",
		value,
		onChange,
		onValueChange,
		onClear,
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
		wrapperProps,
		labelProps,
		textareaWrapperProps,
		textareaProps,
		clearButtonProps,
		invalidMessageProps,
		descriptionProps,
	} = slotProps

	const textareaId = useId()

	const [controlledValue, setControlledValue] = useControlledState({
		defaultValue,
		value,
		onValueChange,
	})

	const textareaRef = useTextareaAutosize(controlledValue, autosize)

	const handleChange = (ev: ChangeEvent<HTMLTextAreaElement>) => {
		onChange?.(ev)
		setControlledValue?.(ev.target.value)
	}

	const handleClickClear = () => {
		onClear?.()
		setControlledValue?.("")
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
			className={classNames.base({ className })}
			{...restProps}
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
						inputMode={inputMode}
						name={name}
						required={required}
						readOnly={readOnly}
						disabled={disabled}
						placeholder={placeholder}
						autoFocus={autoFocus}
						autoComplete={autoComplete}
						cols={cols}
						rows={rows}
						minLength={minLength}
						maxLength={maxLength}
						value={controlledValue}
						onChange={handleChange}
						{...textareaProps}
						{...(autosize
								? { ref: mergeRefs(textareaProps?.ref, textareaRef) }
								: undefined
						)}
						className={classNames.textarea({ className: textareaProps?.className })}
					/>

					{clearable ? (
						<>
							{controlledValue ? (
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