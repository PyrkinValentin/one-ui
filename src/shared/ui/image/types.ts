import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { ImageVariantsProps } from "./variants"

export type ImageProps = ComponentProps<
	"img",
	ImageVariantsProps &
	ImageOwnProps
>

type ImageOwnProps = {
	fallback?: ReactNode
	slotProps?: ImageSlotProps
}

type ImageSlotProps = {
	baseProps?: ComponentProps<"span">
	fallbackProps?: ComponentProps<"span">
}