import type { Autocomplete } from "@base-ui/react"

type Color = {
	color?: "default" | "danger"
}

export type AutocompleteProps<Value> = Autocomplete.Root.Props<Value>
export type AutocompleteInputGroupProps = Autocomplete.InputGroup.Props
export type AutocompleteInputProps = Autocomplete.Input.Props
export type AutocompleteTriggerProps = Autocomplete.Trigger.Props
export type AutocompleteIconProps = Autocomplete.Icon.Props
export type AutocompleteClearProps = Autocomplete.Clear.Props
export type AutocompleteValueProps = Autocomplete.Value.Props
export type AutocompletePortalProps = Autocomplete.Portal.Props
export type AutocompleteBackdropProps = Autocomplete.Backdrop.Props
export type AutocompletePositionerProps = Autocomplete.Positioner.Props
export type AutocompletePopupProps = Autocomplete.Popup.Props
export type AutocompleteArrowProps = Autocomplete.Arrow.Props
export type AutocompleteStatusProps = Autocomplete.Status.Props
export type AutocompleteEmptyProps = Autocomplete.Empty.Props
export type AutocompleteListProps = Autocomplete.List.Props
export type AutocompleteRowProps = Autocomplete.Row.Props
export type AutocompleteItemProps = Autocomplete.Item.Props & Color
export type AutocompleteSeparatorProps = Autocomplete.Separator.Props
export type AutocompleteGroupProps = Autocomplete.Group.Props
export type AutocompleteGroupLabelProps = Autocomplete.GroupLabel.Props
export type AutocompleteCollectionProps = Autocomplete.Collection.Props