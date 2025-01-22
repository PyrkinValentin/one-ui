import type { ElementType } from "react"
import type { ComponentPropsWithAs } from "@/shared/types/props"
import type { FlexVariantsProps } from "./variants"

export type FlexProps<
	As extends ElementType = "div"
> = ComponentPropsWithAs<As, FlexVariantsProps>