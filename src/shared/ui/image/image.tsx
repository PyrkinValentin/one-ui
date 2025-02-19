"use client"

import type { ImageProps } from "./types"

import { useMemo, useRef } from "react"
import { useImageLoader } from "@/shared/hooks/use-image-loader"

import { mergeRefs } from "@/shared/utils/merge"

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

	const loaded = useImageLoader({
		loading,
		ref: imageRef,
	})

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
				data-loaded={loaded}
				ref={mergeRefs(ref, imageRef)}
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