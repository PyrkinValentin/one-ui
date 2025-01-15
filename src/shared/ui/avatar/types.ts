import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { ImageProps } from "@/shared/ui/image/types"
import type { AvatarVariantsClassNames, AvatarVariantsProps } from "./variants"

export type AvatarProps = ComponentProps<
	"img",
	Omit<ImageProps, "src" | "alt" | "classNames"> &
	AvatarVariantsProps &
	AvatarOwnProps
>

type AvatarOwnProps = {
	showFallback?: boolean
	icon?: ReactNode
	src?: string
	alt?: string
	name?: string
	classNames?: AvatarVariantsClassNames
}