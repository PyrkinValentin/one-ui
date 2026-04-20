export type * from "./combobox.props"

import { composeComponent } from "../../utils"

import {
	ComboboxRoot,
	ComboboxLabel,
	ComboboxInputGroup,
	ComboboxInput,
	ComboboxTrigger,
	ComboboxIcon,
	ComboboxClear,
	ComboboxValue,
	ComboboxChips,
	ComboboxChip,
	ComboboxChipRemove,
	ComboboxPortal,
	ComboboxBackdrop,
	ComboboxPositioner,
	ComboboxPopup,
	ComboboxArrow,
	ComboboxStatus,
	ComboboxEmpty,
	ComboboxList,
	ComboboxRow,
	ComboboxItem,
	ComboboxItemIndicator,
	ComboboxSeparator,
	ComboboxGroup,
	ComboboxGroupLabel,
	ComboboxCollection,
	ComboboxUseFilter,
	ComboboxUseFilteredItems,
} from "./combobox"

type ComboboxSlots = {
	Label: typeof ComboboxLabel
	InputGroup: typeof ComboboxInputGroup
	Input: typeof ComboboxInput
	Trigger: typeof ComboboxTrigger
	Icon: typeof ComboboxIcon
	Clear: typeof ComboboxClear
	Value: typeof ComboboxValue
	Chips: typeof ComboboxChips
	Chip: typeof ComboboxChip
	ChipRemove: typeof ComboboxChipRemove
	Portal: typeof ComboboxPortal
	Backdrop: typeof ComboboxBackdrop
	Positioner: typeof ComboboxPositioner
	Popup: typeof ComboboxPopup
	Arrow: typeof ComboboxArrow
	Status: typeof ComboboxStatus
	Empty: typeof ComboboxEmpty
	List: typeof ComboboxList
	Row: typeof ComboboxRow
	Item: typeof ComboboxItem
	ItemIndicator: typeof ComboboxItemIndicator
	Separator: typeof ComboboxSeparator
	Group: typeof ComboboxGroup
	GroupLabel: typeof ComboboxGroupLabel
	Collection: typeof ComboboxCollection
	useFilter: typeof ComboboxUseFilter
	useFilteredItems: typeof ComboboxUseFilteredItems
}

export const Combobox = composeComponent<typeof ComboboxRoot, ComboboxSlots>(ComboboxRoot, {
	Label: ComboboxLabel,
	InputGroup: ComboboxInputGroup,
	Input: ComboboxInput,
	Trigger: ComboboxTrigger,
	Icon: ComboboxIcon,
	Clear: ComboboxClear,
	Value: ComboboxValue,
	Chips: ComboboxChips,
	Chip: ComboboxChip,
	ChipRemove: ComboboxChipRemove,
	Portal: ComboboxPortal,
	Backdrop: ComboboxBackdrop,
	Positioner: ComboboxPositioner,
	Popup: ComboboxPopup,
	Arrow: ComboboxArrow,
	Status: ComboboxStatus,
	Empty: ComboboxEmpty,
	List: ComboboxList,
	Row: ComboboxRow,
	Item: ComboboxItem,
	ItemIndicator: ComboboxItemIndicator,
	Separator: ComboboxSeparator,
	Group: ComboboxGroup,
	GroupLabel: ComboboxGroupLabel,
	Collection: ComboboxCollection,
	useFilter: ComboboxUseFilter,
	useFilteredItems: ComboboxUseFilteredItems,
})