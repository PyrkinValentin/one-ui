import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { AvatarGroupVariantsProps, AvatarVariantsProps } from "./variants"

export type AvatarProps = ComponentProps<
	"span",
	Omit<AvatarVariantsProps, "inGroup" | "inGridGroup"> &
	AvatarOwnProps
>

type AvatarOwnProps = {
	showFallback?: boolean
	fallback?: ReactNode
	icon?: ReactNode
	name?: string
	src?: string
	alt?: string
	slotProps?: AvatarSlotProps
}

type AvatarSlotProps = {
	imgProps?: ComponentProps<"img">
	fallbackProps?: ComponentProps
	nameProps?: ComponentProps<"span">
	iconProps?: ComponentProps<"span">
}

export type AvatarGroupContextValue = Pick<
	AvatarGroupProps,
	| "size"
	| "color"
	| "rounded"
	| "bordered"
	| "disabled"
	| "disableAnimation"
> & AvatarGroupContextOwnValue

type AvatarGroupContextOwnValue = {
	inGroup?: boolean
	inGridGroup?: boolean
}

export type AvatarGroupProps = ComponentProps<
	"div",
	AvatarGroupVariantsProps &
	AvatarGroupOwnProps &
	Pick<
		AvatarProps,
		| "size"
		| "color"
		| "rounded"
		| "bordered"
		| "disabled"
		| "disableAnimation"
	>
>

type AvatarGroupOwnProps = {
	maxCount?: number
	renderCount?: (count: number) => ReactNode
	slotProps?: AvatarGroupSlotProps
}

type AvatarGroupSlotProps = {
	countProps?: AvatarProps
}