"use client"

import type { CSSProperties } from "react"
import type { CollapseProps } from "./types"

import { useRef, useEffect, useState } from "react"
import { useFirstMount } from "@/shared/hooks/use-first-mount"
import { useDelayedMount } from "@/shared/hooks/use-delayed-mount"

export const Collapse = (props: CollapseProps) => {
	const {
		keepMounted,
		open,
		duration = 300,
		style,
		children,
		...restProps
	} = props

	const ref = useRef<HTMLDivElement>(null)

	const firstMount = useFirstMount()
	const mounted = useDelayedMount(open, duration)

	const [styles, setStyles] = useState<CSSProperties>({
		transitionDuration: `${duration}ms`,
		transitionProperty: "height",
		overflowY: "hidden",
		height: open ? "auto" : 0,
	})

	useEffect(() => {
		const element = ref.current

		if (!element || !mounted || firstMount) return

		queueMicrotask(() => {
			const { height } = element.getBoundingClientRect()

			setStyles((prevStyles) => ({
				...prevStyles,
				height,
			}))
		})

		const timeoutId = setTimeout(() => {
			setStyles((prevStyles) => ({
				...prevStyles,
				height: open ? "auto" : 0,
			}))
		}, open ? duration : undefined)

		return () => clearTimeout(timeoutId)
	}, [
		mounted,
		firstMount,
		open,
		duration,
	])

	if (!mounted && !keepMounted) {
		return <></>
	}

	return (
		<div style={{ ...styles, ...style }} {...restProps}>
			<div ref={ref}>
				{children}
			</div>
		</div>
	)
}