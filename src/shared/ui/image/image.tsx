"use client"

import type { SyntheticEvent } from "react"
import type { ImageProps } from "./types"

import { useEffect, useMemo, useRef, useState } from "react"

import { mergeRefs } from "@/shared/utils/merge"

import { imageVariants } from "./variants"

export const Image = (props: ImageProps) => {
	const {
		ref,
		fallback,
		loading = "lazy",
		src,
		alt,
		slotProps = {},
		onLoad,
		onError,
		className,
		rounded,
		shadow,
		zoomed,
		showPlaceholder,
		disableAnimation,
		...restProps
	} = props

	const {
		baseProps,
		fallbackProps,
	} = slotProps

	const imageRef = useRef<HTMLImageElement>(null)

	const [loaded, setLoaded] = useState(loading === "eager")

	useEffect(() => {
		const element = imageRef.current

		if (!element || loading === "eager") return

		if (element.complete && element.naturalWidth) {
			queueMicrotask(() => {
				setLoaded(true)
			})
		}
	}, [loading])

	const handleLoad = (ev: SyntheticEvent<HTMLImageElement>) => {
		onLoad?.(ev)
		setLoaded(true)
	}

	const handleError = (ev: SyntheticEvent<HTMLImageElement>) => {
		onError?.(ev)
		setLoaded(false)
	}

	const classNames = useMemo(() => {
		return imageVariants({
			rounded,
			shadow,
			zoomed,
			showPlaceholder,
			disableAnimation,
		})
	}, [
		rounded,
		shadow,
		zoomed,
		showPlaceholder,
		disableAnimation,
	])

	return (
		<span
			{...baseProps}
			className={classNames.base({ className: baseProps?.className })}
		>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				ref={mergeRefs(ref, imageRef)}
				data-loaded={loaded}
				loading={loading}
				src={src}
				alt={alt}
				className={classNames.img({ className })}
				onLoad={handleLoad}
				onError={handleError}
				{...restProps}
			/>

			{!loaded && fallback ? (
				<span
					{...fallbackProps}
					className={classNames.fallback({ className: fallbackProps?.className })}
				>
					{fallback}
				</span>
			) : null}
		</span>
	)
}