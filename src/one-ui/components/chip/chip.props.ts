import type { ComponentProps } from "react"

export type ChipProps = ComponentProps<"span"> & {
	variant?: "solid" | "flat" | "soft" | "outline"
	size?: "sm" | "md" | "lg"
	color?: "default" | "primary" | "success" | "warning" | "danger"
}