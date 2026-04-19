import type { Button } from "@base-ui/react"

export type ButtonProps = Button.Props & {
	fullWidth?: boolean
	iconOnly?: boolean
	variant?: "solid" | "flat" | "soft" | "outline" | "ghost"
	size?: "sm" | "md" | "lg"
	color?: "default" | "primary" | "success" | "warning" | "danger"
}