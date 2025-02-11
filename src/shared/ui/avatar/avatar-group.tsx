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
		size,
		color,
		rounded,
		bordered,
		disabled,
		disableAnimation,
		renderCount,
		className,
		grid,
		children,
		slotProps = {},
		...restProps
	} = props

	const {
		countProps,
		avatarSlotProps,
	} = slotProps

	const collection = Children.toArray(children)
	const childrenWithinMax = collection.slice(0, maxCount)
	const remainingCount = collection.length - childrenWithinMax.length

	const classNames = useMemo(() => {
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
		disableAnimation,
		slotProps: avatarSlotProps,
	}

	return (
		<AvatarGroupContext value={contextValue}>
			<div
				role="group"
				className={classNames.base({ className })}
				{...restProps}
			>
				{childrenWithinMax}

				{remainingCount ? (
					<>
						{renderCount ? renderCount(remainingCount) : (
							<Avatar
								{...countProps}
								className={classNames.count({ className: countProps?.className })}
								name={`+${remainingCount}`}
							/>
						)}
					</>
				) : null}
			</div>
		</AvatarGroupContext>
	)
}