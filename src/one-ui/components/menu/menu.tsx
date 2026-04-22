import type {
	MenuProps,
	MenuTriggerProps,
	MenuPortalProps,
	MenuBackdropProps,
	MenuPositionerProps,
	MenuPopupProps,
	MenuArrowProps,
	MenuGroupProps,
	MenuGroupLabelProps,
	MenuItemProps,
	MenuLinkItemProps,
	MenuCheckboxItemProps,
	MenuCheckboxItemIndicatorProps,
	MenuRadioGroupProps,
	MenuRadioItemProps,
	MenuRadioItemIndicatorProps,
	MenuSeparatorProps,
	MenuSubProps,
	MenuSubTriggerProps,
} from "./menu.props"

import { getDataAttributes, resolveClassNames } from "../../utils"

import { Menu } from "@base-ui/react"
import { Check } from "lucide-react"

export const MenuRoot = <Payload = unknown>(props: MenuProps<Payload>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Menu.Root {...restProps}>
			{children}
		</Menu.Root>
	)
}

export const MenuTrigger = <Payload = unknown>(props: MenuTriggerProps<Payload>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.Trigger
			{...restProps}
			data-slot="menu-trigger"
			className={resolveClassNames(className, "menu__trigger")}
		>
			{children}
		</Menu.Trigger>
	)
}

export const MenuPortal = (props: MenuPortalProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.Portal
			{...restProps}
			data-slot="menu-portal"
			className={resolveClassNames(className, "menu__portal")}
		>
			{children}
		</Menu.Portal>
	)
}

export const MenuBackdrop = (props: MenuBackdropProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.Backdrop
			{...restProps}
			data-slot="menu-backdrop"
			className={resolveClassNames(className, "menu__backdrop")}
		>
			{children}
		</Menu.Backdrop>
	)
}

export const MenuPositioner = (props: MenuPositionerProps) => {
	const {
		sideOffset = 7,
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.Positioner
			{...restProps}
			sideOffset={sideOffset}
			data-slot="menu-positioner"
			className={resolveClassNames(className, "menu__positioner")}
		>
			{children}
		</Menu.Positioner>
	)
}

export const MenuPopup = (props: MenuPopupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.Popup
			{...restProps}
			data-slot="menu-popup"
			className={resolveClassNames(className, "menu__popup")}
		>
			{children}
		</Menu.Popup>
	)
}

export const MenuArrow = (props: MenuArrowProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.Arrow
			{...restProps}
			data-slot="menu-arrow"
			className={resolveClassNames(className, "menu__arrow")}
		>
			{children}
		</Menu.Arrow>
	)
}

export const MenuItem = (props: MenuItemProps) => {
	const {
		color = "default",
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.Item
			{...restProps}
			{...getDataAttributes({ color })}
			data-slot="menu-item"
			className={resolveClassNames(className, "menu__item")}
		>
			{children}
		</Menu.Item>
	)
}

export const MenuLinkItem = (props: MenuLinkItemProps) => {
	const {
		color = "default",
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.LinkItem
			{...restProps}
			{...getDataAttributes({ color })}
			data-slot="menu-link-item"
			className={resolveClassNames(className, "menu__link-item")}
		>
			{children}
		</Menu.LinkItem>
	)
}

export const MenuCheckboxItem = (props: MenuCheckboxItemProps) => {
	const {
		color = "default",
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.CheckboxItem
			{...restProps}
			{...getDataAttributes({ color })}
			data-slot="menu-checkbox-item"
			className={resolveClassNames(className, "menu__checkbox-item")}
		>
			{children}
		</Menu.CheckboxItem>
	)
}

export const MenuCheckboxItemIndicator = (props: MenuCheckboxItemIndicatorProps) => {
	const {
		keepMounted = true,
		className,
		children = <Check/>,
		...restProps
	} = props

	return (
		<Menu.CheckboxItemIndicator
			{...restProps}
			keepMounted={keepMounted}
			data-slot="menu-checkbox-item-indicator"
			className={resolveClassNames(className, "menu__checkbox-item-indicator")}
		>
			{children}
		</Menu.CheckboxItemIndicator>
	)
}

export const MenuRadioGroup = (props: MenuRadioGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.RadioGroup
			{...restProps}
			data-slot="menu-radio-group"
			className={resolveClassNames(className, "menu__radio-group")}
		>
			{children}
		</Menu.RadioGroup>
	)
}

export const MenuRadioItem = (props: MenuRadioItemProps) => {
	const {
		color = "default",
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.RadioItem
			{...restProps}
			{...getDataAttributes({ color })}
			data-slot="menu-radio-item"
			className={resolveClassNames(className, "menu__radio-item")}
		>
			{children}
		</Menu.RadioItem>
	)
}

export const MenuRadioItemIndicator = (props: MenuRadioItemIndicatorProps) => {
	const {
		keepMounted = true,
		className,
		children = <div data-slot="menu-radio-item-indicator-dot" className="menu__radio-item-indicator-dot"/>,
		...restProps
	} = props

	return (
		<Menu.RadioItemIndicator
			{...restProps}
			data-slot="menu-radio-item-indicator"
			keepMounted={keepMounted}
			className={resolveClassNames(className, "menu__radio-item-indicator")}
		>
			{children}
		</Menu.RadioItemIndicator>
	)
}

export const MenuSeparator = (props: MenuSeparatorProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Menu.Separator
			{...restProps}
			data-slot="menu-separator"
			className={resolveClassNames(className, "menu__separator")}
		/>
	)
}

export const MenuSub = (props: MenuSubProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Menu.SubmenuRoot {...restProps}>
			{children}
		</Menu.SubmenuRoot>
	)
}

export const MenuSubTrigger = (props: MenuSubTriggerProps) => {
	const {
		color = "default",
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.SubmenuTrigger
			{...restProps}
			{...getDataAttributes({ color })}
			data-slot="menu-sub-trigger"
			className={resolveClassNames(className, "menu__sub-trigger")}
		>
			{children}
		</Menu.SubmenuTrigger>
	)
}

export const MenuGroup = (props: MenuGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.Group
			{...restProps}
			data-slot="menu-group"
			className={resolveClassNames(className, "menu__group")}
		>
			{children}
		</Menu.Group>
	)
}

export const MenuGroupLabel = (props: MenuGroupLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.GroupLabel
			{...restProps}
			data-slot="menu-group-label"
			className={resolveClassNames(className, "menu__group-label")}
		>
			{children}
		</Menu.GroupLabel>
	)
}

export const MenuCreateHandle = Menu.createHandle