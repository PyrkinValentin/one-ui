import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { AvatarGroupVariantsProps, AvatarVariantsProps } from "./variants"

export type AvatarGroupContextValue =
	AvatarGroupContextOwnValue &
	Pick<AvatarGroupProps, "size" | "color" | "rounded" | "bordered" | "disabled" | "disableAnimation"> &
	Pick<AvatarVariantsProps, "inGroup" | "inGridGroup">

type AvatarGroupContextOwnValue = {
	slotProps?: Pick<AvatarGroupSlotProps, "avatarSlotProps">
}

export type AvatarGroupProps = ComponentProps<
	"div",
	AvatarGroupVariantsProps &
	AvatarGroupOwnProps &
	Pick<AvatarProps, "size" | "color" | "rounded" | "bordered" | "disabled" | "disableAnimation">
>

type AvatarGroupOwnProps = {
	maxCount?: number
	renderCount?: (count: number) => ReactNode
	slotProps?: AvatarGroupSlotProps
}

type AvatarGroupSlotProps = {
	countProps?: AvatarProps
	avatarSlotProps?: AvatarSlotProps
}

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
	baseProps?: ComponentProps<"span">
	imgProps?: ComponentProps<"img">
	fallbackProps?: ComponentProps
	nameProps?: ComponentProps<"span">
	iconProps?: ComponentProps<"span">
}