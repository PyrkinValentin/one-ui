import type { ComponentProps } from "@/shared/types/props"
import type { CardVariantsSlots, CardVariantsProps, CardVariantsReturn } from "./variants"

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
	classNames?: CardVariantsSlots,
}

export type CardHeaderProps = ComponentProps
export type CardBodyProps = ComponentProps
export type CardFooterProps = ComponentProps