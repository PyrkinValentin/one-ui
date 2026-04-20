import type {
	AutocompleteProps,
	AutocompleteInputGroupProps,
	AutocompleteInputProps,
	AutocompleteTriggerProps,
	AutocompleteIconProps,
	AutocompleteClearProps,
	AutocompleteValueProps,
	AutocompletePortalProps,
	AutocompleteBackdropProps,
	AutocompletePositionerProps,
	AutocompletePopupProps,
	AutocompleteArrowProps,
	AutocompleteStatusProps,
	AutocompleteEmptyProps,
	AutocompleteListProps,
	AutocompleteRowProps,
	AutocompleteItemProps,
	AutocompleteSeparatorProps,
	AutocompleteGroupProps,
	AutocompleteGroupLabelProps,
	AutocompleteCollectionProps,
} from "./autocomplete.props"

import { getDataAttributes, resolveClassNames } from "../../utils"

import { Autocomplete } from "@base-ui/react"
import { ChevronDown, X } from "lucide-react"

export const AutocompleteRoot = <Value, >(props: AutocompleteProps<Value>) => {
	const {
		items = [],
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Root
			{...restProps}
			items={items}
		>
			{children}
		</Autocomplete.Root>
	)
}

export const AutocompleteInputGroup = (props: AutocompleteInputGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.InputGroup
			{...restProps}
			data-slot="autocomplete-input-group"
			className={resolveClassNames(className, "autocomplete__input-group")}
		>
			{children}
		</Autocomplete.InputGroup>
	)
}

export const AutocompleteInput = (props: AutocompleteInputProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Input
			{...restProps}
			data-slot="autocomplete-input"
			className={resolveClassNames(className, "autocomplete__input")}
		>
			{children}
		</Autocomplete.Input>
	)
}

export const AutocompleteTrigger = (props: AutocompleteTriggerProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Trigger
			{...restProps}
			data-slot="autocomplete-trigger"
			className={resolveClassNames(className, "autocomplete__trigger")}
		>
			{children}
		</Autocomplete.Trigger>
	)
}

export const AutocompleteIcon = (props: AutocompleteIconProps) => {
	const {
		className,
		children = <ChevronDown/>,
		...restProps
	} = props

	return (
		<Autocomplete.Icon
			{...restProps}
			data-slot="autocomplete-icon"
			className={resolveClassNames(className, "autocomplete__icon")}
		>
			{children}
		</Autocomplete.Icon>
	)
}

export const AutocompleteClear = (props: AutocompleteClearProps) => {
	const {
		className,
		children = <X/>,
		...restProps
	} = props

	return (
		<Autocomplete.Clear
			{...restProps}
			data-slot="autocomplete-clear"
			className={resolveClassNames(className, "autocomplete__clear")}
		>
			{children}
		</Autocomplete.Clear>
	)
}

export const AutocompleteValue = (props: AutocompleteValueProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Value {...restProps}>
			{children}
		</Autocomplete.Value>
	)
}

export const AutocompletePortal = (props: AutocompletePortalProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Portal
			{...restProps}
			data-slot="autocomplete-portal"
			className={resolveClassNames(className, "autocomplete__portal")}
		>
			{children}
		</Autocomplete.Portal>
	)
}

export const AutocompleteBackdrop = (props: AutocompleteBackdropProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Backdrop
			{...restProps}
			data-slot="autocomplete-backdrop"
			className={resolveClassNames(className, "autocomplete__backdrop")}
		>
			{children}
		</Autocomplete.Backdrop>
	)
}

export const AutocompletePositioner = (props: AutocompletePositionerProps) => {
	const {
		sideOffset = 7,
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Positioner
			{...restProps}
			sideOffset={sideOffset}
			data-slot="autocomplete-positioner"
			className={resolveClassNames(className, "autocomplete__positioner")}
		>
			{children}
		</Autocomplete.Positioner>
	)
}

export const AutocompletePopup = (props: AutocompletePopupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Popup
			{...restProps}
			data-slot="autocomplete-popup"
			className={resolveClassNames(className, "autocomplete__popup")}
		>
			{children}
		</Autocomplete.Popup>
	)
}

export const AutocompleteArrow = (props: AutocompleteArrowProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Arrow
			{...restProps}
			data-slot="autocomplete-arrow"
			className={resolveClassNames(className, "autocomplete__arrow")}
		>
			{children}
		</Autocomplete.Arrow>
	)
}

export const AutocompleteStatus = (props: AutocompleteStatusProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Status
			{...restProps}
			data-slot="autocomplete-status"
			className={resolveClassNames(className, "autocomplete__status")}
		>
			{children}
		</Autocomplete.Status>
	)
}

export const AutocompleteEmpty = (props: AutocompleteEmptyProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Empty
			{...restProps}
			data-slot="autocomplete-empty"
			className={resolveClassNames(className, "autocomplete__empty")}
		>
			{children}
		</Autocomplete.Empty>
	)
}

export const AutocompleteList = (props: AutocompleteListProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.List
			{...restProps}
			data-slot="autocomplete-list"
			className={resolveClassNames(className, "autocomplete__list")}
		>
			{children}
		</Autocomplete.List>
	)
}

export const AutocompleteRow = (props: AutocompleteRowProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Row
			{...restProps}
			data-slot="autocomplete-row"
			className={resolveClassNames(className, "autocomplete__row")}
		>
			{children}
		</Autocomplete.Row>
	)
}

export const AutocompleteItem = (props: AutocompleteItemProps) => {
	const {
		color = "default",
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Item
			{...restProps}
			{...getDataAttributes({ color })}
			data-slot="autocomplete-item"
			className={resolveClassNames(className, "autocomplete__item")}
		>
			{children}
		</Autocomplete.Item>
	)
}

export const AutocompleteSeparator = (props: AutocompleteSeparatorProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Separator
			{...restProps}
			data-slot="autocomplete-separator"
			className={resolveClassNames(className, "autocomplete__separator")}
		>
			{children}
		</Autocomplete.Separator>
	)
}

export const AutocompleteGroup = (props: AutocompleteGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Group
			{...restProps}
			data-slot="autocomplete-group"
			className={resolveClassNames(className, "autocomplete__group")}
		>
			{children}
		</Autocomplete.Group>
	)
}

export const AutocompleteGroupLabel = (props: AutocompleteGroupLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.GroupLabel
			{...restProps}
			data-slot="autocomplete-group-label"
			className={resolveClassNames(className, "autocomplete__group-label")}
		>
			{children}
		</Autocomplete.GroupLabel>
	)
}

export const AutocompleteCollection = (props: AutocompleteCollectionProps) => {
	const { children } = props

	return (
		<Autocomplete.Collection>
			{children}
		</Autocomplete.Collection>
	)
}

export const AutocompleteUseFilter = Autocomplete.useFilter
export const AutocompleteUseFilteredItems = Autocomplete.useFilteredItems