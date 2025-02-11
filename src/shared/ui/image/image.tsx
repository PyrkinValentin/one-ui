"use client"

import type { ImageProps } from "./types"

import { useMemo, useRef } from "react"

import { mergeRefs } from "@/shared/utils/merge"

import { useImageLoader } from "./use-image-loader"
import { imageVariants } from "./variants"

export const Image = (props: ImageProps) => {
	const {
		ref,
		fallback,
		loading = "lazy",
		src,
		alt,
		className,
		rounded,
		shadow,
		zoomed,
		showPlaceholder,
		disableAnimation,
		slotProps = {},
		...restProps
	} = props

	const {
		baseProps,
		fallbackProps,
	} = slotProps

	const imageRef = useRef<HTMLImageElement>(null)

	const loaded = useImageLoader({ ref: imageRef, loading })

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