import type { ScrollAreaProps } from "./scroll-area.props"

import { resolveClassNames } from "../../utils"

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react"

export const ScrollArea = (props: ScrollAreaProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ScrollAreaPrimitive.Root
			{...restProps}
			data-slot="scroll-area"
			className={resolveClassNames(className, "scroll-area")}
		>
			<ScrollAreaPrimitive.Viewport
				data-slot="scroll-area-viewport"
				className="scroll-area__viewport"
			>
				{children}
			</ScrollAreaPrimitive.Viewport>

			<ScrollAreaPrimitive.Scrollbar
				data-slot="scroll-area-scrollbar"
				orientation="horizontal"
				className="scroll-area__scrollbar"
			>
				<ScrollAreaPrimitive.Thumb
					data-slot="scroll-area-thumb"
					className="scroll-area__thumb"
				/>
			</ScrollAreaPrimitive.Scrollbar>

			<ScrollAreaPrimitive.Scrollbar
				data-slot="scroll-area-scrollbar"
				className="scroll-area__scrollbar"
			>
				<ScrollAreaPrimitive.Thumb
					data-slot="scroll-area-thumb"
					className="scroll-area__thumb"
				/>
			</ScrollAreaPrimitive.Scrollbar>

			<ScrollAreaPrimitive.Corner data-slot="scroll-area-corner"/>
		</ScrollAreaPrimitive.Root>
	)
}