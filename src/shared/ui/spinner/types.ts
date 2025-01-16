import type { ComponentProps } from "@/shared/types/props"
import type { SpinnerVariantsSlots, SpinnerVariantsProps } from "./variants"

export type SpinnerProps = ComponentProps<
	"div",
	SpinnerVariantsProps &
	SpinnerOwnProps
>

type SpinnerOwnProps = {
	classNames?: SpinnerVariantsSlots
}