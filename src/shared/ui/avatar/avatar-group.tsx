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

	const items = Children.toArray(children)
	const childrenWithinMax = items.slice(0, maxCount)
	const remainingCount = items.length - childrenWithinMax.length

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
								size={size}
								color={color}
								rounded={rounded}
								bordered={bordered}
								disabled={disabled}
								disableAnimation={disableAnimation}
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