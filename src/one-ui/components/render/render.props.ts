import type { ComponentProps, JSX, Ref } from "react"
import type { UseRenderRenderProp } from "@base-ui/react"
import type { StateAttributesMapping } from "@base-ui/react/internals/getStateAttributesProps"

export type RenderProp<State extends Record<string, unknown> = Record<string, unknown>> = UseRenderRenderProp<State>

export type RenderProps<
	RenderedElementType extends Element,
	Tag extends keyof JSX.IntrinsicElements,
	State extends Record<string, unknown> = Record<string, unknown>,
	Enabled extends boolean | undefined = undefined,
> = ComponentProps<Tag> & {
	ref?: Ref<RenderedElementType> | Ref<RenderedElementType>[] | undefined
	defaultTagName: Tag
	enabled?: Enabled
	render?: RenderProp<State>
	state?: State
	stateAttributesMapping?: StateAttributesMapping<State> | undefined
}