"use client"

import type { CSSProperties } from "react"
import type { CollapseProps } from "./types"

import { useRef, useEffect, useState } from "react"
import { useFirstMount } from "@/shared/hooks/use-first-mount"
import { useDelayedMount } from "@/shared/hooks/use-delayed-mount"

import { Slot } from "@/shared/ui/system"

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
		height: open ? "auto" : 0,
	})

	useEffect(() => {
		const element = ref.current

		if (!element || !mounted || firstMount) return

		const defaultStyles = {
			transitionDuration: `${duration}ms`,
			transitionProperty: "height",
		}

		queueMicrotask(() => {
			const { height } = element.getBoundingClientRect()

			setStyles({
				...defaultStyles,
				overflowY: "hidden",
				height,
			})
		})

		const timeoutId = setTimeout(() => {
			setStyles({
				...defaultStyles,
				...(open ? {
					height: "auto",
				} : {
					overflowY: "hidden",
					height: 0,
				}),
			})
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
			<Slot ref={ref}>
				{children}
			</Slot>
		</div>
	)
}