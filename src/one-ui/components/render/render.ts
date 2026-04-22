import type { JSX } from "react"
import type { RenderProps } from "./render.props"

import { useRender } from "@base-ui/react"

export const RenderRoot = <
	RenderedElementType extends Element,
	Tag extends keyof JSX.IntrinsicElements,
	State extends Record<string, unknown> = Record<string, unknown>,
	Enabled extends boolean | undefined = undefined
>(props: RenderProps<RenderedElementType, Tag, State, Enabled>) => {
	const {
		ref,
		defaultTagName,
		enabled,
		render,
		state,
		stateAttributesMapping,
		...restProps
	} = props

	return useRender({
		ref,
		defaultTagName,
		enabled,
		render,
		state,
		stateAttributesMapping,
		props: restProps,
	})
}