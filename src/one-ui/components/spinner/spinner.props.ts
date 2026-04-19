import type { ComponentProps } from "react"

export type SpinnerProps = ComponentProps<"span"> & {
	size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
	color?: "current" | "default" | "primary" | "success" | "warning" | "danger"
}