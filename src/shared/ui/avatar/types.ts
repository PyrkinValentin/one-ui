import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { AvatarVariantsProps, AvatarVariantsSlots } from "./variants"

export type AvatarProps = ComponentProps<
	"span",
	AvatarVariantsProps &
	AvatarOwnProps
>

type AvatarOwnProps = {
	icon?: ReactNode
	name?: string
	src?: string
	alt?: string
	showFallback?: boolean
	fallback?: ReactNode
	classNames?: AvatarVariantsSlots
}