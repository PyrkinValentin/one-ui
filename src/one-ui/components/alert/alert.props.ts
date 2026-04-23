import type { ComponentProps } from "react"

export type AlertProps = ComponentProps<"div"> & {
	status?: "default" | "primary" | "success" | "warning" | "danger"
}

export type AlertIndicatorProps = ComponentProps<"span">
export type AlertContentProps = ComponentProps<"div">
export type AlertTitleProps = ComponentProps<"div">
export type AlertDescriptionProps = ComponentProps<"p">
export type AlertDismissProps = ComponentProps<"button">