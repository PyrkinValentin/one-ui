"use client"

import type { AvatarProps } from "./types"

import { useMemo, useRef } from "react"
import { useImageLoader } from "@/shared/hooks/use-image-loader"

import { mergeRefs } from "@/shared/utils/merge"
import { getInitials } from "@/shared/utils/word"

import { MdPerson } from "react-icons/md"

import { useAvatarGroupContext } from "./avatar-group"
import { avatarVariants } from "./variants"

export const Avatar = (props: AvatarProps) => {
	const {
		inGroup,
		inGridGroup,
		size: sizeContext,
		color: colorContext,
		rounded: roundedContext,
		bordered: borderedContext,
		disabled: disabledContext,
		disableAnimation: disableAnimationContext,
		slotProps: slotPropsContext,
	} = useAvatarGroupContext()

	const {
		showFallback,
		fallback,
		icon = <MdPerson/>,
		name,
		src,
		alt,
		className,
		size = sizeContext,
		color = colorContext,
		rounded = roundedContext,
		bordered = borderedContext,
		focusable,
		disabled = disabledContext,
		disableAnimation = disableAnimationContext,
		slotProps = {},
		...restProps
	} = props

	const {
		imgProps,
		fallbackProps,
		nameProps,
		iconProps,
	} = {
		...slotPropsContext,
		...slotProps,
	}

	const imageRef = useRef<HTMLImageElement>(null)

	const loaded = useImageLoader({
		loading: "lazy",
		ref: imageRef,
	})

	const classNames = useMemo(() => {
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
			className={classNames.base({ className })}
			{...restProps}
		>
			{src ? (
				// eslint-disable-next-line @next/next/no-img-element
				<img
					data-loaded={loaded}
					ref={mergeRefs(imgProps?.ref, imageRef)}
					loading="lazy"
					src={src}
					alt={alt}
					{...imgProps}
					className={classNames.img({ className: imgProps?.className })}
				/>
			) : null}

			{!src || (!loaded && showFallback) ? (
				<>
					{fallback ? (
						<div
							role="img"
							aria-label={alt}
							{...fallbackProps}
							className={classNames.fallback({ className: fallbackProps?.className })}
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
									className={classNames.name({ className: nameProps?.className })}
								>
        					{getInitials(name)}
      					</span>
							) : (
								<span
									role="img"
									aria-label={alt}
									{...iconProps}
									className={classNames.icon({ className: iconProps?.className })}
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