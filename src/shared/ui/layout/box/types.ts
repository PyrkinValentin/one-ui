import type { ElementType } from "react"
import type { ComponentPropsWithAs } from "@/shared/types/props"
import type { BoxVariantsProps } from "./variants"

export type BoxProps<
	As extends ElementType = "div"
> = ComponentPropsWithAs<As, BoxVariantsProps>