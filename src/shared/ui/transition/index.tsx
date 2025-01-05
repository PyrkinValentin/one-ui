"use client"

import type { CSSProperties } from "react"
import type { CollapseProps } from "./types"

import { useRef, useEffect, useState } from "react"
import { useFirstMountState } from "@/shared/hooks/use-first-mount-state"
import { useDelayedMount } from "@/shared/hooks/use-delayed-mount"

import { cn } from "@/core/theme"

export const Collapse = (props: CollapseProps) => {
	const {
		keepMounted,
		open,
		duration = 300,
		className,
		style,
		children,
		...restProps
	} = props

	const ref = useRef<HTMLDivElement>(null)

	const firstMountState = useFirstMountState()
	const mounted = useDelayedMount(open, duration)

	const [styles, setStyles] = useState<CSSProperties>({
		transitionDuration: `${duration}ms`,
		height: mounted ? "auto" : 0,
	})

	useEffect(() => {
		const element = ref.current

		if (!element || !mounted || firstMountState) return

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
	}, [open, duration, firstMountState, mounted])

	if (!mounted && !keepMounted) {
		return <></>
	}

	return (
		<div
			className={cn("transition-[height] overflow-hidden", className)}
			style={{ ...styles, ...style }}
			{...restProps}
		>
			<div ref={ref}>
				{children}
			</div>
		</div>
	)
}