import type { ImageProps as NextImageProps } from "next/image"
import type { ComponentProps } from "@/shared/types/props"
import type { ImageVariantsClassNames, ImageVariantsProps } from "./variants"

export type ImageProps = ComponentProps<
	"img",
	NextImageProps &
	Omit<ImageVariantsProps, "loaded"> &
	ImageOwnProps
>

type ImageOwnProps = {
	classNames?: ImageVariantsClassNames
}