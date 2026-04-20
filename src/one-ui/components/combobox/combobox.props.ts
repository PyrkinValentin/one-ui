import type { Combobox } from "@base-ui/react"

type Color = {
	color?: "default" | "danger"
}

export type ComboboxProps<Value, Multiple extends boolean | undefined = false> = Combobox.Root.Props<Value, Multiple>
export type ComboboxLabelProps = Combobox.Label.Props
export type ComboboxInputGroupProps = Combobox.InputGroup.Props
export type ComboboxInputProps = Combobox.Input.Props
export type ComboboxTriggerProps = Combobox.Trigger.Props
export type ComboboxIconProps = Combobox.Icon.Props
export type ComboboxClearProps = Combobox.Clear.Props
export type ComboboxValueProps = Combobox.Value.Props
export type ComboboxChipsProps = Combobox.Chips.Props
export type ComboboxChipProps = Combobox.Chip.Props
export type ComboboxChipRemoveProps = Combobox.ChipRemove.Props
export type ComboboxPortalProps = Combobox.Portal.Props
export type ComboboxBackdropProps = Combobox.Backdrop.Props
export type ComboboxPositionerProps = Combobox.Positioner.Props
export type ComboboxPopupProps = Combobox.Popup.Props
export type ComboboxArrowProps = Combobox.Arrow.Props
export type ComboboxStatusProps = Combobox.Status.Props
export type ComboboxEmptyProps = Combobox.Empty.Props
export type ComboboxListProps = Combobox.List.Props
export type ComboboxRowProps = Combobox.Row.Props
export type ComboboxItemProps = Combobox.Item.Props & Color
export type ComboboxItemIndicatorProps = Combobox.ItemIndicator.Props
export type ComboboxSeparatorProps = Combobox.Separator.Props
export type ComboboxGroupProps = Combobox.Group.Props
export type ComboboxGroupLabelProps = Combobox.GroupLabel.Props
export type ComboboxCollectionProps = Combobox.Collection.Props