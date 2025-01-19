"use client"

import type { SyntheticEvent } from "react"
import type { AvatarProps } from "./types"

import { useEffect, useMemo, useRef, useState } from "react"

import { mergeRefs } from "@/shared/utils/ref"
import { getInitials } from "@/shared/utils/word"

import { MdPerson } from "react-icons/md"

import { useAvatarGroupContext } from "./avatar-group"
import { avatarVariants } from "./variants"

export const Avatar = (props: AvatarProps) => {
	const {
		inGroup,
		inGridGroup,
		...avatarGroupContext
	} = useAvatarGroupContext()

	const {
		showFallback,
		fallback,
		icon = <MdPerson/>,
		name,
		src,
		alt,
		slotProps = {},
		className,
		size,
		color,
		rounded,
		bordered,
		focusable,
		disabled,
		disableAnimation,
		...restProps
	} = {
		...avatarGroupContext,
		...props,
	}

	const {
		imgProps,
		fallbackProps,
		nameProps,
		iconProps,
	} = slotProps

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

	const handleLoad = (ev: SyntheticEvent<HTMLImageElement>) => {
		imgProps?.onLoad?.(ev)
		setLoaded(true)
	}

	const handleError = (ev: SyntheticEvent<HTMLImageElement>) => {
		imgProps?.onError?.(ev)
		setLoaded(false)
	}

	const slots = useMemo(() => {
		return avatarVariants({
			size,
			color,
			rounded,
			bordered,
			focusable,
			disabled,
			inGroup,
			inGridGroup,
			disableAnimation,
		})
	}, [
		size,
		color,
		rounded,
		bordered,
		focusable,
		disabled,
		inGroup,
		inGridGroup,
		disableAnimation,
	])

	return (
		<span
			tabIndex={focusable && !disabled ? 0 : undefined}
			className={slots.base({ className })}
			{...restProps}
		>
			{src ? (
				// eslint-disable-next-line @next/next/no-img-element
				<img
					data-loaded={loaded}
					loading="lazy"
					src={src}
					alt={alt}
					{...imgProps}
					ref={mergeRefs(imgProps?.ref, imageRef)}
					className={slots.img({ className: imgProps?.className })}
					onLoad={handleLoad}
					onError={handleError}
				/>
			) : null}

			{!src || (!loaded && showFallback) ? (
				<>
					{fallback ? (
						<div
							role="img"
							aria-label={alt}
							{...fallbackProps}
							className={slots.fallback({ className: fallbackProps?.className })}
						>
							{fallback}
						</div>
					) : (
						<>
							{name ? (
								<span
									role="img"
									aria-label={alt}
									{...nameProps}
									className={slots.name({ className: nameProps?.className })}
								>
        					{getInitials(name)}
      					</span>
							) : (
								<span
									role="img"
									aria-label={alt}
									{...iconProps}
									className={slots.icon({ className: iconProps?.className })}
								>
        					{icon}
      					</span>
							)}
						</>
					)}
				</>
			) : null}
		</span>
	)
}