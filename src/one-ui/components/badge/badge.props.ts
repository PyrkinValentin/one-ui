import type { ComponentProps } from "react"

export type BadgeProps = ComponentProps<"span"> & {
	variant?: "solid" | "flat" | "soft"
	size?: "sm" | "md" | "lg"
	color?: "default" | "primary" | "success" | "warning" | "danger"
	position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
}

export type BadgeIndicatorProps = ComponentProps<"span">