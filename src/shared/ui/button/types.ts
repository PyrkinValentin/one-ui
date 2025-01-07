import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { SpinnerProps } from "@/shared/ui/spinner/types"
import type { ButtonVariantsProps } from "./variants"

export type ButtonProps = ComponentProps<
	"button",
	ButtonVariantsProps &
	ButtonOwnProps
>

type ButtonOwnProps = {
	startContent?: ReactNode
	endContent?: ReactNode
	spinnerProps?: SpinnerProps
}