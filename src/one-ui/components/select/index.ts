export type * from "./select.props"

import { composeComponent } from "../../utils"

import {
	SelectRoot,
	SelectLabel,
	SelectTrigger,
	SelectValue,
	SelectIcon,
	SelectPortal,
	SelectBackdrop,
	SelectPositioner,
	SelectPopup,
	SelectArrow,
	SelectList,
	SelectItem,
	SelectItemText,
	SelectItemIndicator,
	SelectSeparator,
	SelectGroup,
	SelectGroupLabel,
} from "./select"

type SelectSlots = {
	Label: typeof SelectLabel
	Trigger: typeof SelectTrigger
	Value: typeof SelectValue
	Icon: typeof SelectIcon
	Portal: typeof SelectPortal
	Backdrop: typeof SelectBackdrop
	Positioner: typeof SelectPositioner
	Popup: typeof SelectPopup
	Arrow: typeof SelectArrow
	List: typeof SelectList
	Item: typeof SelectItem
	ItemText: typeof SelectItemText
	ItemIndicator: typeof SelectItemIndicator
	Separator: typeof SelectSeparator
	Group: typeof SelectGroup
	GroupLabel: typeof SelectGroupLabel
}

export const Select = composeComponent<typeof SelectRoot, SelectSlots>(SelectRoot, {
	Label: SelectLabel,
	Trigger: SelectTrigger,
	Value: SelectValue,
	Icon: SelectIcon,
	Portal: SelectPortal,
	Backdrop: SelectBackdrop,
	Positioner: SelectPositioner,
	Popup: SelectPopup,
	Arrow: SelectArrow,
	List: SelectList,
	Item: SelectItem,
	ItemText: SelectItemText,
	ItemIndicator: SelectItemIndicator,
	Separator: SelectSeparator,
	Group: SelectGroup,
	GroupLabel: SelectGroupLabel,
})