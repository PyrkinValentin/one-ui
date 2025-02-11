import type { ComponentProps } from "@/shared/types/props"
import type { CardVariantsProps } from "./variants"

export type CardContextValue = Pick<CardProps, "rounded" | "footerBlurred">

export type CardProps = ComponentProps<
	"div",
	CardVariantsProps &
	CardOwnProps
>

type CardOwnProps = {
	footerBlurred?: boolean
}

export type CardHeaderProps = ComponentProps
export type CardBodyProps = ComponentProps
export type CardFooterProps = ComponentProps