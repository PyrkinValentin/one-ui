import type { Select } from "@base-ui/react"

type Color = {
	color?: "default" | "danger"
}

export type SelectProps<Value, Multiple extends boolean | undefined = false> = Select.Root.Props<Value, Multiple> & {
	size?: "sm" | "md" | "lg"
}

export type SelectLabelProps = Select.Label.Props
export type SelectTriggerProps = Select.Trigger.Props
export type SelectValueProps = Select.Value.Props
export type SelectIconProps = Select.Icon.Props
export type SelectPortalProps = Select.Portal.Props
export type SelectBackdropProps = Select.Backdrop.Props
export type SelectPositionerProps = Select.Positioner.Props
export type SelectPopupProps = Select.Popup.Props
export type SelectArrowProps = Select.Arrow.Props
export type SelectListProps = Select.List.Props
export type SelectItemProps = Select.Item.Props & Color
export type SelectItemTextProps = Select.ItemText.Props
export type SelectItemIndicatorProps = Select.ItemIndicator.Props
export type SelectSeparatorProps = Select.Separator.Props
export type SelectGroupProps = Select.Group.Props
export type SelectGroupLabelProps = Select.GroupLabel.Props