import type { ComponentProps } from "@/shared/types/props"
import type { TabsVariantsProps } from "./variants"

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

export type TabCollection = TabProps & { value: string }

export type TabProps = ComponentProps<"button", TabOwnProps>

type TabOwnProps = {
	label?: string
}