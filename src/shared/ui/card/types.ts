import type { ComponentProps } from "@/shared/types/props"
import type { CardVariantsClassNames, CardVariantsProps, CardVariantsReturn } from "./variants"

export type CardContextValue = {
	slots?: CardVariantsReturn
	classNames?: CardVariantsClassNames,
}

export type CardProps = ComponentProps<
	"div",
	CardVariantsProps &
	CardOwnProps
>

type CardOwnProps = {
	classNames?: CardVariantsClassNames,
}

export type CardHeaderProps = ComponentProps
export type CardBodyProps = ComponentProps
export type CardFooterProps = ComponentProps