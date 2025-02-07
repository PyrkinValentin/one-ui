import type { ElementType, ReactNode } from "react"
import type { ComponentProps, ComponentPropsWithAs } from "@/shared/types/props"
import type { TabsVariantsProps } from "./variants"

export type TabsContextValue = {
	disabledTab?: (value?: string) => boolean
	selectedTab?: (value?: string) => boolean
	onValueChange?: (value: string) => void
}

export type TabsProps = ComponentProps<
	"div",
	TabsVariantsProps &
	TabsOwnProps
>

type TabsOwnProps = {
	disabledValue?: string[]
	defaultValue?: string
	value?: string
	onValueChange?: (value: string) => void
	slotProps?: TabsSlotProps
}

type TabsSlotProps = {
	tabListProps?: ComponentProps
	tabPanelProps?: ComponentProps
}

export type TabProps<
	As extends ElementType = "button"
> = ComponentPropsWithAs<As, TabOwnProps>

type TabOwnProps = {
	disabled?: boolean
	value?: string
	title?: ReactNode
}