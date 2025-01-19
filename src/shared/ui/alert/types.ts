import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { AlertVariantsProps } from "./variants"

export type AlertProps = ComponentProps<
	"div",
	AlertVariantsProps &
	AlertOwnProps
>

type AlertOwnProps = {
	icon?: ReactNode
	startContent?: ReactNode
	endContent?: ReactNode
	title?: ReactNode
	description?: ReactNode
	slotProps?: AlertSlotProps
}

type AlertSlotProps = {
	iconWrapperProps?: ComponentProps
	alertIconProps?: ComponentProps<"svg">
	mainWrapperProps?: ComponentProps
	titleProps?: ComponentProps
	descriptionProps?: ComponentProps
}