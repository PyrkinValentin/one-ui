import type {
	MenuProps,
	MenuTriggerProps,
	MenuPopupProps,
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

import { composeComponent, getDataAttributes, resolveClassNames } from "../../utils"

import Link from "next/link"
import { Menu as MenuPrimitive } from "@base-ui/react"
import { Check } from "lucide-react"

const Root = <P = unknown>(props: MenuProps<P>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<MenuPrimitive.Root {...restProps}>
			{children}
		</MenuPrimitive.Root>
	)
}

const Trigger = <P = unknown>(props: MenuTriggerProps<P>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<MenuPrimitive.Trigger
			{...restProps}
			data-slot="menu-trigger"
			className={resolveClassNames(className, "menu__trigger")}
		>
			{children}
		</MenuPrimitive.Trigger>
	)
}

const Popup = (props: MenuPopupProps) => {
	const {
		arrow,
		keepMounted,
		disableAnchorTracking,
		side,
		sideOffset = arrow ? 7 : 3,
		align,
		alignOffset,
		className,
		children,
		...restProps
	} = props

	return (
		<MenuPrimitive.Portal
			data-slot="menu-portal"
			keepMounted={keepMounted}
		>
			<MenuPrimitive.Positioner
				data-slot="menu-positioner"
				disableAnchorTracking={disableAnchorTracking}
				side={side}
				sideOffset={sideOffset}
				align={align}
				alignOffset={alignOffset}
			>
				<MenuPrimitive.Popup
					{...restProps}
					data-slot="menu-popup"
					className={resolveClassNames(className, "menu__popup")}
				>
					{arrow && (
						<MenuPrimitive.Arrow
							data-slot="menu-arrow"
							className="menu__arrow"
						/>
					)}

					{children}
				</MenuPrimitive.Popup>
			</MenuPrimitive.Positioner>
		</MenuPrimitive.Portal>
	)
}

const Group = (props: MenuGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<MenuPrimitive.Group
			{...restProps}
			data-slot="menu-group"
			className={resolveClassNames(className, "menu__group")}
		>
			{children}
		</MenuPrimitive.Group>
	)
}

const GroupLabel = (props: MenuGroupLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<MenuPrimitive.GroupLabel
			{...restProps}
			data-slot="menu-group-label"
			className={resolveClassNames(className, "menu__group-label")}
		>
			{children}
		</MenuPrimitive.GroupLabel>
	)
}

const Item = (props: MenuItemProps) => {
	const {
		color = "default",
		className,
		children,
		...restProps
	} = props

	return (
		<MenuPrimitive.Item
			{...restProps}
			{...getDataAttributes({ color })}
			data-slot="menu-item"
			className={resolveClassNames(className, "menu__item")}
		>
			{children}
		</MenuPrimitive.Item>
	)
}

const LinkItem = (props: MenuLinkItemProps) => {
	const {
		color = "default",
		href,
		className,
		render = href ? <Link href={href}/> : undefined,
		children,
		...restProps
	} = props

	return (
		<MenuPrimitive.LinkItem
			{...restProps}
			{...getDataAttributes({ color })}
			data-slot="menu-link-item"
			href={href}
			className={resolveClassNames(className, "menu__link-item")}
			render={render}
		>
			{children}
		</MenuPrimitive.LinkItem>
	)
}

const CheckboxItem = (props: MenuCheckboxItemProps) => {
	const {
		color = "default",
		className,
		children,
		...restProps
	} = props

	return (
		<MenuPrimitive.CheckboxItem
			{...restProps}
			{...getDataAttributes({ color })}
			data-slot="menu-checkbox-item"
			className={resolveClassNames(className, "menu__checkbox-item")}
		>
			{children}
		</MenuPrimitive.CheckboxItem>
	)
}

const CheckboxItemIndicator = (props: MenuCheckboxItemIndicatorProps) => {
	const {
		keepMounted = true,
		className,
		children = <Check/>,
		...restProps
	} = props

	return (
		<MenuPrimitive.CheckboxItemIndicator
			{...restProps}
			data-slot="menu-checkbox-item-indicator"
			keepMounted={keepMounted}
			className={resolveClassNames(className, "menu__checkbox-item-indicator")}
		>
			{children}
		</MenuPrimitive.CheckboxItemIndicator>
	)
}

const RadioGroup = (props: MenuRadioGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<MenuPrimitive.RadioGroup
			{...restProps}
			data-slot="menu-radio-group"
			className={resolveClassNames(className, "menu__radio-group")}
		>
			{children}
		</MenuPrimitive.RadioGroup>
	)
}

const RadioItem = (props: MenuRadioItemProps) => {
	const {
		color = "default",
		className,
		children,
		...restProps
	} = props

	return (
		<MenuPrimitive.RadioItem
			{...restProps}
			{...getDataAttributes({ color })}
			data-slot="menu-radio-item"
			className={resolveClassNames(className, "menu__radio-item")}
		>
			{children}
		</MenuPrimitive.RadioItem>
	)
}

const RadioItemIndicator = (props: MenuRadioItemIndicatorProps) => {
	const {
		keepMounted = true,
		className,
		children = <div data-slot="menu-radio-item-indicator-dot" className="menu__radio-item-indicator-dot"/>,
		...restProps
	} = props

	return (
		<MenuPrimitive.RadioItemIndicator
			{...restProps}
			data-slot="menu-radio-item-indicator"
			keepMounted={keepMounted}
			className={resolveClassNames(className, "menu__radio-item-indicator")}
		>
			{children}
		</MenuPrimitive.RadioItemIndicator>
	)
}

const Separator = (props: MenuSeparatorProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<MenuPrimitive.Separator
			{...restProps}
			data-slot="menu-separator"
			className={resolveClassNames(className, "menu__separator")}
		/>
	)
}

const Sub = (props: MenuSubProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<MenuPrimitive.SubmenuRoot {...restProps}>
			{children}
		</MenuPrimitive.SubmenuRoot>
	)
}

const SubTrigger = (props: MenuSubTriggerProps) => {
	const {
		color = "default",
		className,
		children,
		...restProps
	} = props

	return (
		<MenuPrimitive.SubmenuTrigger
			{...restProps}
			{...getDataAttributes({ color })}
			data-slot="menu-sub-trigger"
			className={resolveClassNames(className, "menu__sub-trigger")}
		>
			{children}
		</MenuPrimitive.SubmenuTrigger>
	)
}

type MenuSlots = {
	Trigger: typeof Trigger
	Popup: typeof Popup
	Group: typeof Group
	GroupLabel: typeof GroupLabel
	Item: typeof Item
	LinkItem: typeof LinkItem
	CheckboxItem: typeof CheckboxItem
	CheckboxItemIndicator: typeof CheckboxItemIndicator
	RadioGroup: typeof RadioGroup
	RadioItem: typeof RadioItem
	RadioItemIndicator: typeof RadioItemIndicator
	Separator: typeof Separator
	Sub: typeof Sub
	SubTrigger: typeof SubTrigger
	createHandle: typeof MenuPrimitive.createHandle
}

export const Menu = composeComponent<typeof Root, MenuSlots>(Root, {
	Trigger,
	Popup,
	Group,
	GroupLabel,
	Item,
	LinkItem,
	CheckboxItem,
	CheckboxItemIndicator,
	RadioGroup,
	RadioItem,
	RadioItemIndicator,
	Separator,
	Sub,
	SubTrigger,
	createHandle: MenuPrimitive.createHandle,
})