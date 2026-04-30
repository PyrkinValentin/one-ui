import type { ComponentProps } from "react"
import type { RenderProp } from "../render"

export type CardProps = ComponentProps<"section"> & {
	render?: RenderProp
}

export type CardContentProps = ComponentProps<"div">
export type CardTitleProps = ComponentProps<"h2">
export type CardDescriptionProps = ComponentProps<"p">