"use client"

import type { AvatarGroupContextValue, AvatarGroupProps } from "./types"

import { use, useMemo } from "react"

import { createContext, Children } from "react"

import { avatarGroupVariants } from "./variants"
import { Avatar } from "./avatar"

const AvatarGroupContext = createContext<AvatarGroupContextValue>({})
export const useAvatarGroupContext = () => use(AvatarGroupContext)

export const AvatarGroup = (props: AvatarGroupProps) => {
	const {
		maxCount = 5,
		renderCount,
		slotProps = {},
		className,
		grid,
		size,
		color,
		rounded,
		bordered,
		disabled,
		children,
		...restProps
	} = props

	const { countProps } = slotProps

	const collectionAvatars = Children.toArray(children)
	const childrenWithinMax = collectionAvatars.slice(0, maxCount)
	const remainingCount = collectionAvatars.length - childrenWithinMax.length

	const slots = useMemo(() => {
		return avatarGroupVariants({ grid })
	}, [grid])

	const contextValue: AvatarGroupContextValue = {
		inGroup: true,
		inGridGroup: grid,
		size,
		color,
		rounded,
		bordered,
		disabled,
	}

	return (
		<AvatarGroupContext value={contextValue}>
			<div
				role="group"
				className={slots.base({ className })}
				{...restProps}
			>
				{childrenWithinMax}

				{remainingCount ? (
					<>
						{!renderCount ? (
							<Avatar
								{...countProps}
								className={slots.count({ className: countProps?.className })}
								name={`+${remainingCount}`}
							/>
						) : renderCount(remainingCount)}
					</>
				) : null}
			</div>
		</AvatarGroupContext>
	)
}