import type { ChangeEvent, ReactNode } from "react"
import type { OTPInputProps } from "input-otp"
import type { ComponentProps } from "@/shared/types/props"
import type { InputOtpVariantsProps } from "./variants"

export type InputOtpProps = ComponentProps<
	"div",
	Partial<Pick<
		OTPInputProps,
		| "type"
		| "name"
		| "pattern"
		| "minLength"
		| "maxLength"
		| "onClick"
		| "onFocus"
		| "onBlur"
	>> &
	InputOtpVariantsProps &
	InputOtpOwnProps
>

type InputOtpOwnProps = {
	length?: number
	invalidMessage?: ReactNode
	description?: ReactNode
	defaultValue?: string
	value?: string
	onChange?: (ev: ChangeEvent<HTMLInputElement>) => void
	onValueChange?: (value: string) => void
	onComplete?: (value: string) => void
	slotProps?: InputOtpSlotProps
}

type InputOtpSlotProps = {
	inputProps?: Partial<Omit<OTPInputProps, "children">>
	segmentWrapperProps?: ComponentProps
	segmentProps?: ComponentProps
	caretProps?: ComponentProps
	charProps?: ComponentProps
	placeholderCharProps?: ComponentProps
	invalidMessageProps?: ComponentProps<"span">
	descriptionProps?: ComponentProps<"span">
}