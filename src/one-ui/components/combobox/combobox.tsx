import type {
	ComboboxProps,
	ComboboxLabelProps,
	ComboboxInputGroupProps,
	ComboboxInputProps,
	ComboboxTriggerProps,
	ComboboxIconProps,
	ComboboxClearProps,
	ComboboxValueProps,
	ComboboxChipsProps,
	ComboboxChipProps,
	ComboboxChipRemoveProps,
	ComboboxPortalProps,
	ComboboxBackdropProps,
	ComboboxPositionerProps,
	ComboboxPopupProps,
	ComboboxArrowProps,
	ComboboxStatusProps,
	ComboboxEmptyProps,
	ComboboxListProps,
	ComboboxRowProps,
	ComboboxItemProps,
	ComboboxItemIndicatorProps,
	ComboboxSeparatorProps,
	ComboboxGroupProps,
	ComboboxGroupLabelProps,
	ComboboxCollectionProps,
} from "./combobox.props"

import { getDataAttributes, resolveClassNames } from "../../utils"

import { Combobox } from "@base-ui/react"
import { Check, ChevronDown, X } from "lucide-react"

export const ComboboxRoot = <Value, Multiple extends boolean | undefined = false>(props: ComboboxProps<Value, Multiple>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Combobox.Root {...restProps}>
			{children}
		</Combobox.Root>
	)
}

export const ComboboxLabel = (props: ComboboxLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Label
			{...restProps}
			data-slot="combobox-label"
			className={resolveClassNames(className, "combobox__label")}
		>
			{children}
		</Combobox.Label>
	)
}

export const ComboboxInputGroup = (props: ComboboxInputGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.InputGroup
			{...restProps}
			data-slot="combobox-input-group"
			className={resolveClassNames(className, "combobox__input-group")}
		>
			{children}
		</Combobox.InputGroup>
	)
}

export const ComboboxInput = (props: ComboboxInputProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Input
			{...restProps}
			data-slot="combobox-input"
			className={resolveClassNames(className, "combobox__input")}
		>
			{children}
		</Combobox.Input>
	)
}

export const ComboboxTrigger = (props: ComboboxTriggerProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Trigger
			{...restProps}
			data-slot="combobox-trigger"
			className={resolveClassNames(className, "combobox__trigger")}
		>
			{children}
		</Combobox.Trigger>
	)
}

export const ComboboxIcon = (props: ComboboxIconProps) => {
	const {
		className,
		children = <ChevronDown/>,
		...restProps
	} = props

	return (
		<Combobox.Icon
			{...restProps}
			data-slot="combobox-icon"
			className={resolveClassNames(className, "combobox__icon")}
		>
			{children}
		</Combobox.Icon>
	)
}

export const ComboboxClear = (props: ComboboxClearProps) => {
	const {
		className,
		children = <X/>,
		...restProps
	} = props

	return (
		<Combobox.Clear
			{...restProps}
			data-slot="combobox-clear"
			className={resolveClassNames(className, "combobox__clear")}
		>
			{children}
		</Combobox.Clear>
	)
}

export const ComboboxValue = (props: ComboboxValueProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Combobox.Value {...restProps}>
			{children}
		</Combobox.Value>
	)
}

export const ComboboxChips = (props: ComboboxChipsProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Chips
			{...restProps}
			data-slot="combobox-chips"
			className={resolveClassNames(className, "combobox__chips")}
		>
			{children}
		</Combobox.Chips>
	)
}

export const ComboboxChip = (props: ComboboxChipProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Chip
			{...restProps}
			data-slot="combobox-chip"
			className={resolveClassNames(className, "combobox__chip")}
		>
			{children}
		</Combobox.Chip>
	)
}

export const ComboboxChipRemove = (props: ComboboxChipRemoveProps) => {
	const {
		className,
		children = <X/>,
		...restProps
	} = props

	return (
		<Combobox.ChipRemove
			{...restProps}
			data-slot="combobox-chip-remove"
			className={resolveClassNames(className, "combobox__chip-remove")}
		>
			{children}
		</Combobox.ChipRemove>
	)
}

export const ComboboxPortal = (props: ComboboxPortalProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Portal
			{...restProps}
			data-slot="combobox-portal"
			className={resolveClassNames(className, "combobox__portal")}
		>
			{children}
		</Combobox.Portal>
	)
}

export const ComboboxBackdrop = (props: ComboboxBackdropProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Backdrop
			{...restProps}
			data-slot="combobox-backdrop"
			className={resolveClassNames(className, "combobox__backdrop")}
		>
			{children}
		</Combobox.Backdrop>
	)
}

export const ComboboxPositioner = (props: ComboboxPositionerProps) => {
	const {
		sideOffset = 7,
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Positioner
			{...restProps}
			sideOffset={sideOffset}
			data-slot="combobox-positioner"
			className={resolveClassNames(className, "combobox__positioner")}
		>
			{children}
		</Combobox.Positioner>
	)
}

export const ComboboxPopup = (props: ComboboxPopupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Popup
			{...restProps}
			data-slot="combobox-popup"
			className={resolveClassNames(className, "combobox__popup")}
		>
			{children}
		</Combobox.Popup>
	)
}

export const ComboboxArrow = (props: ComboboxArrowProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Arrow
			{...restProps}
			data-slot="combobox-arrow"
			className={resolveClassNames(className, "combobox__arrow")}
		>
			{children}
		</Combobox.Arrow>
	)
}

export const ComboboxStatus = (props: ComboboxStatusProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Status
			{...restProps}
			data-slot="combobox-status"
			className={resolveClassNames(className, "combobox__status")}
		>
			{children}
		</Combobox.Status>
	)
}

export const ComboboxEmpty = (props: ComboboxEmptyProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Empty
			{...restProps}
			data-slot="combobox-empty"
			className={resolveClassNames(className, "combobox__empty")}
		>
			{children}
		</Combobox.Empty>
	)
}

export const ComboboxList = (props: ComboboxListProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.List
			{...restProps}
			data-slot="combobox-list"
			className={resolveClassNames(className, "combobox__list")}
		>
			{children}
		</Combobox.List>
	)
}

export const ComboboxRow = (props: ComboboxRowProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Row
			{...restProps}
			data-slot="combobox-row"
			className={resolveClassNames(className, "combobox__row")}
		>
			{children}
		</Combobox.Row>
	)
}

export const ComboboxItem = (props: ComboboxItemProps) => {
	const {
		color = "default",
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Item
			{...restProps}
			{...getDataAttributes({ color })}
			data-slot="combobox-item"
			className={resolveClassNames(className, "combobox__item")}
		>
			{children}
		</Combobox.Item>
	)
}

export const ComboboxItemIndicator = (props: ComboboxItemIndicatorProps) => {
	const {
		keepMounted = true,
		className,
		children = <Check/>,
		...restProps
	} = props

	return (
		<Combobox.ItemIndicator
			{...restProps}
			keepMounted={keepMounted}
			data-slot="combobox-item-indicator"
			className={resolveClassNames(className, "combobox__item-indicator")}
		>
			{children}
		</Combobox.ItemIndicator>
	)
}

export const ComboboxSeparator = (props: ComboboxSeparatorProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Separator
			{...restProps}
			data-slot="combobox-separator"
			className={resolveClassNames(className, "combobox__separator")}
		>
			{children}
		</Combobox.Separator>
	)
}

export const ComboboxGroup = (props: ComboboxGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.Group
			{...restProps}
			data-slot="combobox-group"
			className={resolveClassNames(className, "combobox__group")}
		>
			{children}
		</Combobox.Group>
	)
}

export const ComboboxGroupLabel = (props: ComboboxGroupLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Combobox.GroupLabel
			{...restProps}
			data-slot="combobox-group-label"
			className={resolveClassNames(className, "combobox__group-label")}
		>
			{children}
		</Combobox.GroupLabel>
	)
}

export const ComboboxCollection = (props: ComboboxCollectionProps) => {
	const { children } = props

	return (
		<Combobox.Collection>
			{children}
		</Combobox.Collection>
	)
}

export const ComboboxUseFilter = Combobox.useFilter
export const ComboboxUseFilteredItems = Combobox.useFilteredItems