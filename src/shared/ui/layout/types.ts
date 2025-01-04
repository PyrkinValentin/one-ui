import type { ElementType } from "react"
import type { ComponentPropsWithAs } from "@/shared/types/props"
import type { ContainerVariantsProps, FlexVariantsProps } from "./variants"

export type ContainerProps<As extends ElementType = "section"> = ComponentPropsWithAs<As, ContainerVariantsProps>
export type FlexProps<As extends ElementType = "div"> = ComponentPropsWithAs<As, FlexVariantsProps>