import type {
	SelectProps,
	SelectLabelProps,
	SelectTriggerProps,
	SelectValueProps,
	SelectIconProps,
	SelectPortalProps,
	SelectBackdropProps,
	SelectPositionerProps,
	SelectPopupProps,
	SelectArrowProps,
	SelectListProps,
	SelectItemProps,
	SelectItemTextProps,
	SelectItemIndicatorProps,
	SelectSeparatorProps,
	SelectGroupProps,
	SelectGroupLabelProps,
} from "./select.props"

import { getDataAttributes, resolveClassNames } from "../../utils"

import { Select } from "@base-ui/react"
import { Check, ChevronDown } from "lucide-react"

export const SelectRoot = <Value, Multiple extends boolean | undefined = false>(props: SelectProps<Value, Multiple>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Select.Root {...restProps}>
			{children}
		</Select.Root>
	)
}

export const SelectLabel = (props: SelectLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Select.Label
			{...restProps}
			data-slot="select-label"
			className={resolveClassNames(className, "select__label")}
		>
			{children}
		</Select.Label>
	)
}

export const SelectTrigger = (props: SelectTriggerProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Select.Trigger
			{...restProps}
			data-slot="select-trigger"
			className={resolveClassNames(className, "select__trigger")}
		>
			{children}
		</Select.Trigger>
	)
}

export const SelectValue = (props: SelectValueProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Select.Value
			{...restProps}
			data-slot="select-value"
			className={resolveClassNames(className, "select__value")}
		>
			{children}
		</Select.Value>
	)
}

export const SelectIcon = (props: SelectIconProps) => {
	const {
		className,
		children = <ChevronDown/>,
		...restProps
	} = props

	return (
		<Select.Icon
			{...restProps}
			data-slot="select-icon"
			className={resolveClassNames(className, "select__icon")}
		>
			{children}
		</Select.Icon>
	)
}

export const SelectPortal = (props: SelectPortalProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Select.Portal
			{...restProps}
			data-slot="select-portal"
			className={resolveClassNames(className, "select__portal")}
		>
			{children}
		</Select.Portal>
	)
}

export const SelectBackdrop = (props: SelectBackdropProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Select.Backdrop
			{...restProps}
			data-slot="select-backdrop"
			className={resolveClassNames(className, "select__backdrop")}
		>
			{children}
		</Select.Backdrop>
	)
}

export const SelectPositioner = (props: SelectPositionerProps) => {
	const {
		alignItemWithTrigger = false,
		sideOffset = 7,
		className,
		children,
		...restProps
	} = props

	return (
		<Select.Positioner
			{...restProps}
			alignItemWithTrigger={alignItemWithTrigger}
			sideOffset={sideOffset}
			data-slot="select-positioner"
			className={resolveClassNames(className, "select__positioner")}
		>
			{children}
		</Select.Positioner>
	)
}

export const SelectPopup = (props: SelectPopupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Select.Popup
			{...restProps}
			data-slot="select-popup"
			className={resolveClassNames(className, "select__popup")}
		>
			{children}
		</Select.Popup>
	)
}

export const SelectArrow = (props: SelectArrowProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Select.Arrow
			{...restProps}
			data-slot="select-arrow"
			className={resolveClassNames(className, "select__arrow")}
		>
			{children}
		</Select.Arrow>
	)
}

export const SelectList = (props: SelectListProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Select.List
			{...restProps}
			data-slot="select-list"
			className={resolveClassNames(className, "select__list")}
		>
			{children}
		</Select.List>
	)
}

export const SelectItem = (props: SelectItemProps) => {
	const {
		color = "default",
		className,
		children,
		...restProps
	} = props

	return (
		<Select.Item
			{...restProps}
			{...getDataAttributes({ color })}
			data-slot="select-item"
			className={resolveClassNames(className, "select__item")}
		>
			{children}
		</Select.Item>
	)
}

export const SelectItemText = (props: SelectItemTextProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Select.ItemText
			{...restProps}
			data-slot="select-item-text"
			className={resolveClassNames(className, "select__item-text")}
		>
			{children}
		</Select.ItemText>
	)
}

export const SelectItemIndicator = (props: SelectItemIndicatorProps) => {
	const {
		keepMounted = true,
		className,
		children = <Check/>,
		...restProps
	} = props

	return (
		<Select.ItemIndicator
			{...restProps}
			keepMounted={keepMounted}
			data-slot="select-item-indicator"
			className={resolveClassNames(className, "select__item-indicator")}
		>
			{children}
		</Select.ItemIndicator>
	)
}

export const SelectSeparator = (props: SelectSeparatorProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Select.Separator
			{...restProps}
			data-slot="select-separator"
			className={resolveClassNames(className, "select__separator")}
		>
			{children}
		</Select.Separator>
	)
}

export const SelectGroup = (props: SelectGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Select.Group
			{...restProps}
			data-slot="select-group"
			className={resolveClassNames(className, "select__group")}
		>
			{children}
		</Select.Group>
	)
}

export const SelectGroupLabel = (props: SelectGroupLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Select.GroupLabel
			{...restProps}
			data-slot="select-group-label"
			className={resolveClassNames(className, "select__group-label")}
		>
			{children}
		</Select.GroupLabel>
	)
}