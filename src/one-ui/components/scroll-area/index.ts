export type * from "./scroll-area.props"

import { composeComponent } from "../../utils"

import {
	ScrollAreaRoot,
	ScrollAreaViewport,
	ScrollAreaContent,
	ScrollAreaScrollbar,
	ScrollAreaThumb,
	ScrollAreaCorner,
} from "./scroll-area"

type ScrollAreaSlots = {
	Viewport: typeof ScrollAreaViewport
	Content: typeof ScrollAreaContent
	Scrollbar: typeof ScrollAreaScrollbar
	Thumb: typeof ScrollAreaThumb
	Corner: typeof ScrollAreaCorner
}

export const ScrollArea = composeComponent<typeof ScrollAreaRoot, ScrollAreaSlots>(ScrollAreaRoot, {
	Viewport: ScrollAreaViewport,
	Content: ScrollAreaContent,
	Scrollbar: ScrollAreaScrollbar,
	Thumb: ScrollAreaThumb,
	Corner: ScrollAreaCorner,
})