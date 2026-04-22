import type { ComponentProps } from "react"
import type { RenderProp } from "../render"

export type BreadcrumbsProps = ComponentProps<"nav">
export type BreadcrumbsListProps = ComponentProps<"ol">
export type BreadcrumbsItemProps = ComponentProps<"li">

export type BreadcrumbsLinkProps = ComponentProps<"a"> & {
	render?: RenderProp
}

export type BreadcrumbsPageProps = ComponentProps<"span">
export type BreadcrumbsSeparatorProps = ComponentProps<"li">
