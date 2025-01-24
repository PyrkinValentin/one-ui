import type { ComponentProps as ReactComponentProps, ElementType } from "react"

export type ComponentProps<
	Element extends ElementType = "div",
	Props = unknown,
> = Omit<ReactComponentProps<Element>, "color" | "slot" | "size" | keyof Props> & Props

export type ComponentPropsWithAs<
	Element extends ElementType = "div",
	Props = unknown,
> = ComponentProps<Element, Props> & AsProp<Element>

type AsProp<Element extends ElementType = "div"> = {
	as?: Element
}