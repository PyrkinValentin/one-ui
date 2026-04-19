import type { Checkbox } from "@base-ui/react"

export type CheckboxProps = Checkbox.Root.Props & {
	size?: "sm" | "md" | "lg"
	color?: "default" | "primary" | "success" | "warning" | "danger"
}

export type CheckboxIndicatorProps = Checkbox.Indicator.Props