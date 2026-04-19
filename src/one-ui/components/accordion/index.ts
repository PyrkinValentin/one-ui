export type * from "./accordion.props"

import { composeComponent } from "../../utils"

import {
	AccordionRoot,
	AccordionItem,
	AccordionHeader,
	AccordionTrigger,
	AccordionIndicator,
	AccordionPanel,
} from "./accordion"

type AccordionSlots = {
	Item: typeof AccordionItem
	Header: typeof AccordionHeader
	Trigger: typeof AccordionTrigger
	Indicator: typeof AccordionIndicator
	Panel: typeof AccordionPanel
}

export const Accordion = composeComponent<typeof AccordionRoot, AccordionSlots>(AccordionRoot, {
	Item: AccordionItem,
	Header: AccordionHeader,
	Trigger: AccordionTrigger,
	Indicator: AccordionIndicator,
	Panel: AccordionPanel,
})