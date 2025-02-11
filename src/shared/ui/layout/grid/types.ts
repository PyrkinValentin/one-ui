import type { ElementType } from "react"
import type { ComponentPropsWithAs } from "@/shared/types/props"
import type { GridVariantsProps } from "./variants"

export type GridProps<As extends ElementType = "div"> = ComponentPropsWithAs<As, GridVariantsProps>