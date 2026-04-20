import type { Menu } from "@base-ui/react"

type Color = {
	color?: "default" | "danger"
}

export type MenuProps<Payload = unknown> = Menu.Root.Props<Payload>
export type MenuTriggerProps<Payload = unknown> = Menu.Trigger.Props<Payload>
export type MenuPortalProps = Menu.Portal.Props
export type MenuBackdropProps = Menu.Backdrop.Props
export type MenuPositionerProps = Menu.Positioner.Props
export type MenuPopupProps = Menu.Popup.Props
export type MenuArrowProps = Menu.Arrow.Props
export type MenuItemProps = Menu.Item.Props & Color
export type MenuLinkItemProps = Menu.LinkItem.Props & Color
export type MenuCheckboxItemProps = Menu.CheckboxItem.Props & Color
export type MenuCheckboxItemIndicatorProps = Menu.CheckboxItemIndicator.Props
export type MenuRadioGroupProps = Menu.RadioGroup.Props
export type MenuRadioItemProps = Menu.RadioItem.Props & Color
export type MenuRadioItemIndicatorProps = Menu.RadioItemIndicator.Props
export type MenuSeparatorProps = Menu.Separator.Props
export type MenuSubProps = Menu.SubmenuRoot.Props
export type MenuGroupProps = Menu.Group.Props
export type MenuGroupLabelProps = Menu.GroupLabel.Props
export type MenuSubTriggerProps = Menu.SubmenuTrigger.Props & Color