"use client"

import type { AvatarProps } from "./types"

import { useEffect, useMemo, useRef, useState } from "react"

import { MdPerson } from "react-icons/md"

import { getInitials } from "@/shared/utils/word"

import { avatarVariants } from "./variants"

export const Avatar = (props: AvatarProps) => {
	const {
		icon = <MdPerson/>,
		src,
		alt,
		showFallback,
		fallback,
		name,
		className,
		classNames,
		...restProps
	} = props

	const imageRef = useRef<HTMLImageElement>(null)

	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		const element = imageRef.current

		if (!element) return

		if (element.complete && element.naturalWidth) {
			queueMicrotask(() => {
				setLoaded(true)
			})
		}
	}, [])

	const handleLoad = () => {
		setLoaded(true)
	}

	const handleError = () => {
		setLoaded(false)
	}

	const slots = useMemo(() => {
		return avatarVariants({})
	}, [])

	return (
		<span
			className={slots.base({ className: [className, classNames?.base] })}
			{...restProps}
		>
			{src ? (
				// eslint-disable-next-line @next/next/no-img-element
				<img
					ref={imageRef}
					data-loaded={loaded}
					loading="lazy"
					src={src}
					alt={alt}
					className={slots.img({ className: classNames?.img })}
					onLoad={handleLoad}
					onError={handleError}
				/>
			) : null}

			{/*{fallback ? (*/}
			{/*	<span className={slots.fallback({ className: classNames?.fallback })}>*/}
			{/*		{fallback}*/}
			{/*	</span>*/}
			{/*) : null}*/}
		</span>
	)
}