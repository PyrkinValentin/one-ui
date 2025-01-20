"use client"

import type { GrowProps } from "./types"

import { useAnimate } from "@/shared/hooks/use-animate"

import { isFunction } from "@/shared/helpers/is-function"

import { Slot } from "@/shared/ui/system"

export const Grow = (props: GrowProps) => {
	const {
		keepMounted,
		open,
		duration = 300,
		children,
	} = props

	const [mounted, styles] = useAnimate(open, {
		initial: { opacity: 0, transform: "scale(0.97)" },
		enter: { opacity: 1, transform: "scale(1)" },
		duration,
	})

	if (!mounted && !keepMounted) {
		return <></>
	}

	return (
		<>
			{isFunction(children)
				? children(styles)
				: <Slot style={styles}>{children}</Slot>
			}
		</>
	)
}