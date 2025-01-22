import type { ElementType } from "react"
import type { ComponentPropsWithAs } from "@/shared/types/props"
import type { ContainerVariantsProps } from "./variants"

export type ContainerProps<
	As extends ElementType = "section"
> = ComponentPropsWithAs<As, ContainerVariantsProps>