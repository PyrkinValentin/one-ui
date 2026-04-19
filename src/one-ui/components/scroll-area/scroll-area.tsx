import type {
	ScrollAreaProps,
	ScrollAreaViewportProps,
	ScrollAreaContentProps,
	ScrollAreaScrollbarProps,
	ScrollAreaThumbProps,
	ScrollAreaCornerProps,
} from "./scroll-area.props"

import { resolveClassNames } from "../../utils"

import { ScrollArea } from "@base-ui/react"

export const ScrollAreaRoot = (props: ScrollAreaProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ScrollArea.Root
			{...restProps}
			data-slot="scroll-area"
			className={resolveClassNames(className, "scroll-area")}
		>
			{children}
		</ScrollArea.Root>
	)
}

export const ScrollAreaViewport = (props: ScrollAreaViewportProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ScrollArea.Viewport
			{...restProps}
			data-slot="scroll-area-viewport"
			className={resolveClassNames(className, "scroll-area__viewport")}
		>
			{children}
		</ScrollArea.Viewport>
	)
}

export const ScrollAreaContent = (props: ScrollAreaContentProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ScrollArea.Content
			{...restProps}
			data-slot="scroll-area-content"
			className={resolveClassNames(className, "scroll-area__content")}
		>
			{children}
		</ScrollArea.Content>
	)
}

export const ScrollAreaScrollbar = (props: ScrollAreaScrollbarProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ScrollArea.Scrollbar
			{...restProps}
			data-slot="scroll-area-scrollbar"
			className={resolveClassNames(className, "scroll-area__scrollbar")}
		>
			{children}
		</ScrollArea.Scrollbar>
	)
}

export const ScrollAreaThumb = (props: ScrollAreaThumbProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ScrollArea.Thumb
			{...restProps}
			data-slot="scroll-area-thumb"
			className={resolveClassNames(className, "scroll-area__thumb")}
		>
			{children}
		</ScrollArea.Thumb>
	)
}

export const ScrollAreaCorner = (props: ScrollAreaCornerProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ScrollArea.Corner
			{...restProps}
			data-slot="scroll-area-corner"
			className={resolveClassNames(className, "scroll-area__corner")}
		>
			{children}
		</ScrollArea.Corner>
	)
}