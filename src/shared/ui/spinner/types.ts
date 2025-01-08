import type { ComponentProps } from "@/shared/types/props"
import type { SpinnerVariantsClassNames, SpinnerVariantsProps } from "./variants"

export type SpinnerProps = ComponentProps<
	"div",
	SpinnerVariantsProps &
	SpinnerOwnProps
>

type SpinnerOwnProps = {
	classNames?: SpinnerVariantsClassNames
}