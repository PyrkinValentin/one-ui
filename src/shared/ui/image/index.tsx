"use client"

import type { SyntheticEvent } from "react"
import type { ImageProps } from "./types"

import { useMemo, useState } from "react"

import NextImage from "next/image"

import { imageVariants } from "./variants"

export const Image = (props: ImageProps) => {
	const {
		width,
		height,
		onLoad,
		className,
		classNames,
		rounded,
		shadow,
		zoomed,
		blurred,
		showPlaceholder,
		disableAnimation,
		...restProps
	} = props

	const [loaded, setLoaded] = useState(false)

	const handleLoad = (ev: SyntheticEvent<HTMLImageElement>) => {
		setLoaded(true)
		onLoad?.(ev)
	}

	const slots = useMemo(() => {
		return imageVariants({
			rounded,
			shadow,
			zoomed,
			blurred,
			showPlaceholder,
			disableAnimation,
		})
	}, [
		rounded,
		shadow,
		zoomed,
		blurred,
		showPlaceholder,
		disableAnimation,
	])

	const img = (
		<NextImage
			unoptimized
			fill
			className={slots.img({ className: classNames?.img })}
			onLoad={handleLoad}
			{...restProps}
		/>
	)

	const zoomedImg = zoomed ? (
		<div className={slots.zoomedWrapper({ className: classNames?.zoomedWrapper })}>
			{img}
		</div>
	) : null

	const blurredImg = blurred ? (
		<>
			<NextImage
				aria-hidden={true}
				unoptimized
				fill
				className={slots.blurredImg({ className: classNames?.blurredImg })}
				{...restProps}
			/>

			{zoomed ? zoomedImg : img}
		</>
	) : null

	return (
		<div
			data-loaded={loaded || undefined}
			className={slots.base({ className: [className, classNames?.base] })}
			style={{ width, height }}
		>
			{blurredImg ?? zoomedImg ?? img}
		</div>
	)
}