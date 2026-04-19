import type { OTPFieldPreview } from "@base-ui/react"

export type OTPFieldProps = OTPFieldPreview.Root.Props & {
	size?: "sm" | "md" | "lg"
}

export type OTPFieldInputProps = OTPFieldPreview.Input.Props
export type OTPFieldSeparatorProps = OTPFieldPreview.Separator.Props