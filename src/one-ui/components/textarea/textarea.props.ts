import type { TextareaHTMLAttributes } from "react"
import type { Input } from "@base-ui/react"

export type TextareaProps =
	Omit<Input.Props, "type">
	& Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className">
	& {
	size?: "sm" | "md" | "lg"
}