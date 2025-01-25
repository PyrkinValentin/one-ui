import type { ElementType, ReactNode } from "react"
import type { ComponentProps, ComponentPropsWithAs } from "@/shared/types/props"
import type { TabsVariantsProps } from "./variants"

export type TabsProps = ComponentProps<
	"div",
	TabsVariantsProps &
	TabsOwnProps
>

type TabsOwnProps = {
	disabledValues?: string[]
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
	label?: ReactNode
	value?: string
}