import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { AccordionVariantsProps, AccordionItemVariantsProps } from "./variants"

export type AccordionContextValue =
	Pick<AccordionProps, "hideIndicator" | "keepMounted" | "variant" | "rounded" | "compact" | "slotProps"> &
	AccordionContextOwnValue

type AccordionContextOwnValue = {
	getItemState?: GetItemState
}

export type GetItemState = (
	value: string | undefined,
	options: GetItemStateOptions
) => GetItemStateReturn

type GetItemStateReturn = {
	disabled?: boolean
	expanded: boolean
	toggleExpanded: () => void
}

type GetItemStateOptions = {
	disabled?: boolean
	valueId: string
}

export type AccordionProps = ComponentProps<
	"div",
	AccordionVariantsProps &
	Pick<AccordionItemProps, "hideIndicator" | "keepMounted" | "compact" | "slotProps"> &
	AccordionStateProps
>

type AccordionStateProps = {
	disabledValue?: string[]
} & ({
	selectionMode?: "single"
	defaultValue?: string
	value?: string
	onValueChange?: (value: string) => void
} | {
	selectionMode: "multiple"
	defaultValue?: string[]
	value?: string[]
	onValueChange?: (value: string[]) => void
})

export type AccordionItemProps = ComponentProps<
	"div",
	Omit<AccordionItemVariantsProps, "variant" | "rounded"> &
	AccordionItemOwnProps
>

type AccordionItemOwnProps = {
	keepMounted?: boolean
	hideIndicator?: boolean
	value?: string
	title: ReactNode
	description?: ReactNode
	startContent?: ReactNode
	indicator?: ReactNode | ((expanded?: boolean) => ReactNode)
	slotProps?: AccordionItemSlotProps
}

type AccordionItemSlotProps = {
	headingProps?: ComponentProps<"h2">
	triggerProps?: ComponentProps<"button">
	startContentProps?: ComponentProps
	titleWrapperProps?: ComponentProps
	titleProps?: ComponentProps<"span">
	descriptionProps?: ComponentProps<"span">
	indicatorProps?: ComponentProps<"span">
	contentWrapperProps?: ComponentProps<"section">
	contentInnerWrapperProps?: ComponentProps
	contentProps?: ComponentProps
}

export type AccordionItemCollapseProps = ComponentProps<
	"section",
	Pick<AccordionItemProps, "keepMounted" | "disableAnimation"> &
	AccordionItemCollapseOwnProps
>

type AccordionItemCollapseOwnProps = {
	expanded?: boolean
}