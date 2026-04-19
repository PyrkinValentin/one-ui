import type { Radio } from "@base-ui/react"

export type RadioProps<Value = unknown> = Radio.Root.Props<Value> & {
	size?: "sm" | "md" | "lg"
	color?: "default" | "primary" | "success" | "warning" | "danger"
}

export type RadioIndicatorProps = Radio.Indicator.Props