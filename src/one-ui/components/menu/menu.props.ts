import type { Menu } from "@base-ui/react"
import type { SafetyPick } from "../../types"

export type MenuProps<P = unknown> = Menu.Root.Props<P>
export type MenuTriggerProps<P = unknown> = Menu.Trigger.Props<P>

export type MenuPopupProps = Menu.Popup.Props & SafetyPick<Menu.Portal.Props,
	| "keepMounted"
> & SafetyPick<Menu.Positioner.Props,
	| "disableAnchorTracking"
	| "side"
	| "sideOffset"
	| "align"
	| "alignOffset"
> & {
	arrow?: boolean
}

export type MenuGroupProps = Menu.Group.Props
export type MenuGroupLabelProps = Menu.GroupLabel.Props
export type MenuItemProps = Menu.Item.Props & { color?: "default" | "danger" }
export type MenuLinkItemProps = Menu.LinkItem.Props & { color?: "default" | "danger" }
export type MenuCheckboxItemProps = Menu.CheckboxItem.Props & { color?: "default" | "danger" }
export type MenuCheckboxItemIndicatorProps = Menu.CheckboxItemIndicator.Props
export type MenuRadioGroupProps = Menu.RadioGroup.Props
export type MenuRadioItemProps = Menu.RadioItem.Props & { color?: "default" | "danger" }
export type MenuRadioItemIndicatorProps = Menu.RadioItemIndicator.Props
export type MenuSeparatorProps = Menu.Separator.Props
export type MenuSubProps = Menu.SubmenuRoot.Props
export type MenuSubTriggerProps = Menu.SubmenuTrigger.Props & { color?: "default" | "danger" }