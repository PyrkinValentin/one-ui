import type { ComponentProps as ReactComponentProps, ElementType } from "react"

type OmitProps<
	Element extends ElementType = "div",
	Props = unknown
> = Omit<ReactComponentProps<Element>, keyof Props>

export type ComponentProps<
	Element extends ElementType = "div",
	Props = unknown
> = OmitProps<Element, Props> & Props

export type ComponentPropsWithAs<
	Element extends ElementType = "div",
	Props = unknown
> = ComponentProps<Element, Props> & {
	as?: Element
}