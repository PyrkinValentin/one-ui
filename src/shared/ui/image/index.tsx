"use client"

import type { SyntheticEvent } from "react"
import type { ImageProps } from "./types"

import { useEffect, useMemo, useRef, useState } from "react"

import { mergeRefs } from "@/shared/utils/ref"

import { imageVariants } from "./variants"

export const Image = (props: ImageProps) => {
	const {
		ref,
		fallback,
		loading = "lazy",
		src,
		alt,
		width,
		height,
		onLoad,
		onError,
		className,
		classNames,
		rounded,
		shadow,
		zoomed,
		showPlaceholder,
		disableAnimation,
		...restProps
	} = props

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

	const slots = useMemo(() => {
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
		<div
			className={slots.base({ className: [className, classNames?.base] })}
			style={{ maxWidth: width, maxHeight: height }}
		>
			{src ? (
				// eslint-disable-next-line @next/next/no-img-element
				<img
					ref={mergeRefs(ref, imageRef)}
					data-loaded={loaded}
					loading={loading}
					src={src}
					alt={alt}
					className={slots.img({ className: classNames?.img })}
					onLoad={handleLoad}
					onError={handleError}
					width={width}
					height={height}
					{...restProps}
				/>
			) : null}

			{fallback ? (
				<span className={slots.fallback({ className: classNames?.fallback })}>
					{fallback}
				</span>
			) : null}
		</div>
	)
}