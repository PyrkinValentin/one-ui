import type { ComponentProps } from "@/shared/types/props"
import type { CardVariantsProps, CardVariantsReturn, CardVariantsSlots } from "./variants"

export type CardContextValue = {
	slots?: CardVariantsReturn
	classNames?: CardVariantsSlots,
}

export type CardProps = ComponentProps<
	"div",
	CardVariantsProps &
	CardOwnProps
>

type CardOwnProps = {
	classNames?: CardVariantsSlots
}

export type CardHeaderProps = ComponentProps
export type CardBodyProps = ComponentProps
export type CardFooterProps = ComponentProps