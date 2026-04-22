export type * from "./collapsible.props"

import { composeComponent } from "../../utils"

import { CollapsibleRoot, CollapsibleTrigger, CollapsibleIndicator, CollapsiblePanel } from "./collapsible"

type CollapsibleSlots = {
	Trigger: typeof CollapsibleTrigger
	Indicator: typeof CollapsibleIndicator
	Panel: typeof CollapsiblePanel
}

export const Collapsible = composeComponent<typeof CollapsibleRoot, CollapsibleSlots>(CollapsibleRoot, {
	Trigger: CollapsibleTrigger,
	Indicator: CollapsibleIndicator,
	Panel: CollapsiblePanel,
})