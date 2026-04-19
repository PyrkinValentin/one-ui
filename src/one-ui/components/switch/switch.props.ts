import type { Switch } from "@base-ui/react"

export type SwitchProps = Switch.Root.Props & {
	size?: "sm" | "md" | "lg"
	color?: "default" | "primary" | "success" | "warning" | "danger"
}

export type SwitchThumbProps = Switch.Thumb.Props