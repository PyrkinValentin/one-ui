import type { ComponentProps } from "@/shared/types/props"
import type { SpinnerVariantsProps } from "./variants"

export type SpinnerProps = ComponentProps<
	"div",
	SpinnerVariantsProps &
	SpinnerOwnProps
>

type SpinnerOwnProps = {
	slotProps?: SpinnerSlotProps
}

type SpinnerSlotProps = {
	spinnerProps?: ComponentProps
	labelProps?: ComponentProps<"span">
}