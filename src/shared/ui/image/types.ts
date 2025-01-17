import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { ImageVariantsProps, ImageVariantsSlots } from "./variants"

export type ImageProps = ComponentProps<
	"img",
	ImageVariantsProps &
	ImageOwnProps
>

type ImageOwnProps = {
	fallback?: ReactNode
	classNames?: ImageVariantsSlots
}