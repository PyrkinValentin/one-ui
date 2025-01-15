import type { AvatarProps } from "./types"

import { useMemo } from "react"

import { getInitials } from "@/shared/utils/word"

import { avatarVariants } from "./variants"

export const Avatar = (props: AvatarProps) => {
	const {
		showFallback,
		fallback,
		icon,
		src,
		alt,
		name,
		classNames,
		...restProps
	} = props

	const slots = useMemo(() => {
		return avatarVariants({})
	}, [])

	return (
		<></>
	)
}