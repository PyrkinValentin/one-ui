import type { CSSProperties, ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { Duration } from "@/shared/hooks/use-animate"

export type CollapseProps = ComponentProps<"div", CollapseOwnProps>

type CollapseOwnProps = {
	keepMounted?: boolean
	open?: boolean
	duration?: number
}

export type GrowProps = {
	keepMounted?: boolean
	open?: boolean
	duration?: Duration
	children?: ReactNode | ((styles: CSSProperties) => ReactNode)
}