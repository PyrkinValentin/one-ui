export type * from "./tabs.props"

import { composeComponent } from "../../utils"

import { TabsRoot, TabsList, TabsTab, TabsIndicator, TabsPanel } from "./tabs"

type TabsSlots = {
	List: typeof TabsList
	Tab: typeof TabsTab
	Indicator: typeof TabsIndicator
	Panel: typeof TabsPanel
}

export const Tabs = composeComponent<typeof TabsRoot, TabsSlots>(TabsRoot, {
	List: TabsList,
	Tab: TabsTab,
	Indicator: TabsIndicator,
	Panel: TabsPanel,
})