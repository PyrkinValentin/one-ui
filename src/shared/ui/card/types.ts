import type { ComponentProps } from "@/shared/types/props"
import type { CardVariantsProps, CardVariantsReturn } from "./variants"

export type CardContextValue = {
	classNames?: CardVariantsReturn
}

export type CardProps = ComponentProps<"div", CardVariantsProps>
export type CardHeaderProps = ComponentProps
export type CardBodyProps = ComponentProps
export type CardFooterProps = ComponentProps