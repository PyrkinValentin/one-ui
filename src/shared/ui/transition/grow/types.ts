import type { CSSProperties, ReactNode } from "react"
import type { Duration } from "@/shared/hooks/use-transition"

export type GrowProps = {
	keepMounted?: boolean
	open?: boolean
	duration?: Duration
	children?: ReactNode | ((styles: CSSProperties) => ReactNode)
}