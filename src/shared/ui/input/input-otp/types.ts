import type { ChangeEvent, ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { InputOtpVariantsProps } from "./variants"

export type InputOtpProps = Omit<ComponentProps<
	"input",
	InputOtpVariantsProps &
	InputOtpOwnProps
>, "children">

type InputOtpOwnProps = {
	length?: number
	invalidMessage?: ReactNode
	description?: ReactNode
	defaultValue?: string
	value?: string
	onValueChange?: (value: string) => void
	onComplete?: (value: string) => void
	onChange?: (ev: ChangeEvent<HTMLInputElement>) => void
	slotProps?: InputOtpSlotProps
}

type InputOtpSlotProps = {
	baseProps?: ComponentProps
	segmentWrapperProps?: ComponentProps
	segmentProps?: ComponentProps
	caretProps?: ComponentProps
	charProps?: ComponentProps
	placeholderCharProps?: ComponentProps
	invalidMessageProps?: ComponentProps<"span">
	descriptionProps?: ComponentProps<"span">
}