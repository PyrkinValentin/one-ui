import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { AccordionVariantsProps, AccordionItemVariantsProps } from "./variants"

export type AccordionContextValue =
	Pick<AccordionProps, "hideIndicator" | "keepMounted" | "variant" | "rounded" | "compact"> &
	AccordionContextOwnValue

type AccordionContextOwnValue = {
	isDisabled?: (value: string) => boolean
	isExpanded?: (value: string) => boolean
	onExpand?: (value: string, expanded: boolean) => void
	slotProps?: Pick<AccordionSlotProps, "itemSlotProps">
}

export type AccordionProps = ComponentProps<
	"div",
	AccordionVariantsProps &
	AccordionOwnProps &
	AccordionStateProps &
	Pick<AccordionItemProps, "hideIndicator" | "keepMounted" | "compact">
>

type AccordionOwnProps = {
	slotProps?: AccordionSlotProps
}

type AccordionSlotProps = {
	itemSlotProps?: AccordionItemSlotProps
}

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
	indicator?: ReactNode | ((expanded: boolean) => ReactNode)
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