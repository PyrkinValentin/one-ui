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
	MenuGroup,
	MenuGroupLabel,
	MenuCreateHandle,
} from "./menu"

type MenuSlots = {
	Trigger: typeof MenuTrigger
	Portal: typeof MenuPortal
	Backdrop: typeof MenuBackdrop
	Positioner: typeof MenuPositioner
	Popup: typeof MenuPopup
	Arrow: typeof MenuArrow
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
	Group: typeof MenuGroup
	GroupLabel: typeof MenuGroupLabel
	createHandle: typeof MenuCreateHandle
}

export const Menu = composeComponent<typeof MenuRoot, MenuSlots>(MenuRoot, {
	Trigger: MenuTrigger,
	Portal: MenuPortal,
	Backdrop: MenuBackdrop,
	Positioner: MenuPositioner,
	Popup: MenuPopup,
	Arrow: MenuArrow,
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
	Group: MenuGroup,
	GroupLabel: MenuGroupLabel,
	createHandle: MenuCreateHandle,
})