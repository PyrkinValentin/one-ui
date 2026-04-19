import type { Radio } from "@base-ui/react"

export type RadioProps<V = unknown> = Radio.Root.Props<V> & {
	size?: "sm" | "md" | "lg"
	color?: "default" | "primary" | "success" | "warning" | "danger"
}

export type RadioIndicatorProps = Radio.Indicator.Props