import type { ElementType, ReactNode } from "react"
import type { ComponentProps, ComponentPropsWithAs } from "@/shared/types/props"
import type { TabsVariantsProps } from "./variants"

export type TabsContextValue = {
	isDisabled?: (value?: string) => boolean
	isSelected?: (value?: string) => boolean
	onSelect?: (value: string, selected: boolean) => void
}

export type TabsProps = ComponentProps<
	"div",
	TabsVariantsProps &
	TabsOwnProps &
	TabsStateProps
>

type TabsOwnProps = {
	slotProps?: TabsSlotProps
}

type TabsSlotProps = {
	tabListProps?: ComponentProps
	tabPanelProps?: ComponentProps
}

type TabsStateProps = {
	disabledValue?: string[]
	defaultValue?: string
	value?: string
	onValueChange?: (value: string) => void
}

export type TabProps<As extends ElementType = "button"> = ComponentPropsWithAs<
	As,
	TabOwnProps
>

type TabOwnProps = {
	disabled?: boolean
	value?: string
	title: ReactNode
}

export type TabPanelProps = ComponentProps<"div", Pick<TabProps, "value">>