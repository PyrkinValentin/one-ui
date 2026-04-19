export type * from "./menu.props"

import { composeComponent } from "../../utils"

import {
	MenuRoot,
	MenuTrigger,
	MenuPortal,
	MenuBackdrop,
	MenuPositioner,
	MenuPopup,
	MenuArrow,
	MenuGroup,
	MenuGroupLabel,
	MenuItem,
	MenuLinkItem,
	MenuCheckboxItem,
	MenuCheckboxItemIndicator,
	MenuRadioGroup,
	MenuRadioItem,
	MenuRadioItemIndicator,
	MenuSeparator,
	MenuSub,
	MenuSubTrigger,
	MenuCreateHandle,
} from "./menu"

type MenuSlots = {
	Trigger: typeof MenuTrigger
	Portal: typeof MenuPortal
	Backdrop: typeof MenuBackdrop
	Positioner: typeof MenuPositioner
	Popup: typeof MenuPopup
	Arrow: typeof MenuArrow
	Group: typeof MenuGroup
	GroupLabel: typeof MenuGroupLabel
	Item: typeof MenuItem
	LinkItem: typeof MenuLinkItem
	CheckboxItem: typeof MenuCheckboxItem
	CheckboxItemIndicator: typeof MenuCheckboxItemIndicator
	RadioGroup: typeof MenuRadioGroup
	RadioItem: typeof MenuRadioItem
	RadioItemIndicator: typeof MenuRadioItemIndicator
	Separator: typeof MenuSeparator
	Sub: typeof MenuSub
	SubTrigger: typeof MenuSubTrigger
	createHandle: typeof MenuCreateHandle
}

export const Menu = composeComponent<typeof MenuRoot, MenuSlots>(MenuRoot, {
	Trigger: MenuTrigger,
	Portal: MenuPortal,
	Backdrop: MenuBackdrop,
	Positioner: MenuPositioner,
	Popup: MenuPopup,
	Arrow: MenuArrow,
	Group: MenuGroup,
	GroupLabel: MenuGroupLabel,
	Item: MenuItem,
	LinkItem: MenuLinkItem,
	CheckboxItem: MenuCheckboxItem,
	CheckboxItemIndicator: MenuCheckboxItemIndicator,
	RadioGroup: MenuRadioGroup,
	RadioItem: MenuRadioItem,
	RadioItemIndicator: MenuRadioItemIndicator,
	Separator: MenuSeparator,
	Sub: MenuSub,
	SubTrigger: MenuSubTrigger,
	createHandle: MenuCreateHandle,
})