import type { Avatar } from "@base-ui/react"

export type AvatarProps = Avatar.Root.Props & {
	variant?: "solid" | "flat" | "soft"
	size?: "sm" | "md" | "lg"
	color?: "default" | "primary" | "success" | "warning" | "danger"
}

export type AvatarImageProps = Avatar.Image.Props
export type AvatarFallbackProps = Avatar.Fallback.Props