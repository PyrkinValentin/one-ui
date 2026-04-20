export type * from "./autocomplete.props"

import { composeComponent } from "../../utils"

import {
	AutocompleteRoot,
	AutocompleteInputGroup,
	AutocompleteInput,
	AutocompleteTrigger,
	AutocompleteIcon,
	AutocompleteClear,
	AutocompleteValue,
	AutocompletePortal,
	AutocompleteBackdrop,
	AutocompletePositioner,
	AutocompletePopup,
	AutocompleteArrow,
	AutocompleteStatus,
	AutocompleteEmpty,
	AutocompleteList,
	AutocompleteRow,
	AutocompleteItem,
	AutocompleteSeparator,
	AutocompleteGroup,
	AutocompleteGroupLabel,
	AutocompleteCollection,
	AutocompleteUseFilter,
	AutocompleteUseFilteredItems,
} from "./autocomplete"

type AutocompleteSlots = {
	InputGroup: typeof AutocompleteInputGroup
	Input: typeof AutocompleteInput
	Trigger: typeof AutocompleteTrigger
	Icon: typeof AutocompleteIcon
	Clear: typeof AutocompleteClear
	Value: typeof AutocompleteValue
	Portal: typeof AutocompletePortal
	Backdrop: typeof AutocompleteBackdrop
	Positioner: typeof AutocompletePositioner
	Popup: typeof AutocompletePopup
	Arrow: typeof AutocompleteArrow
	Status: typeof AutocompleteStatus
	Empty: typeof AutocompleteEmpty
	List: typeof AutocompleteList
	Row: typeof AutocompleteRow
	Item: typeof AutocompleteItem
	Separator: typeof AutocompleteSeparator
	Group: typeof AutocompleteGroup
	GroupLabel: typeof AutocompleteGroupLabel
	Collection: typeof AutocompleteCollection
	useFilter: typeof AutocompleteUseFilter
	useFilteredItems: typeof AutocompleteUseFilteredItems
}

export const Autocomplete = composeComponent<typeof AutocompleteRoot, AutocompleteSlots>(AutocompleteRoot, {
	InputGroup: AutocompleteInputGroup,
	Input: AutocompleteInput,
	Trigger: AutocompleteTrigger,
	Icon: AutocompleteIcon,
	Clear: AutocompleteClear,
	Value: AutocompleteValue,
	Portal: AutocompletePortal,
	Backdrop: AutocompleteBackdrop,
	Positioner: AutocompletePositioner,
	Popup: AutocompletePopup,
	Arrow: AutocompleteArrow,
	Status: AutocompleteStatus,
	Empty: AutocompleteEmpty,
	List: AutocompleteList,
	Row: AutocompleteRow,
	Item: AutocompleteItem,
	Separator: AutocompleteSeparator,
	Group: AutocompleteGroup,
	GroupLabel: AutocompleteGroupLabel,
	Collection: AutocompleteCollection,
	useFilter: AutocompleteUseFilter,
	useFilteredItems: AutocompleteUseFilteredItems,
})