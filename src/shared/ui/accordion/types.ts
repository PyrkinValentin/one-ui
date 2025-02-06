import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { AccordionVariantsProps, AccordionVariantsReturn } from "./variants"

export type AccordionContextValue =
	Pick<
		AccordionProps,
		| "keepMounted"
		| "hideIndicator"
		| "disableAnimation"
	> &
	AccordionContextOwnValue

type AccordionContextOwnValue = {
	classNames?: Pick<AccordionVariantsReturn,
		| "item"
		| "heading"
		| "trigger"
		| "startContent"
		| "indicator"
		| "wrapper"
		| "title"
		| "description"
		| "content"
	>
	slotProps?: AccordionSlotProps
	disabledItem?: (value: string) => boolean
	expandedItem?: (value: string) => boolean
	onExpandedChange?: (value: string, expanded: boolean) => void
}

export type AccordionProps = ComponentProps<
	"div",
	AccordionVariantsProps &
	AccordionOwnProps
>

type AccordionOwnProps = {
	keepMounted?: boolean
	multiple?: boolean
	hideIndicator?: boolean
	disabledValue?: string[]
	defaultValue?: string[]
	value?: string[]
	onValueChange?: (value: string[]) => void
	slotProps?: AccordionSlotProps
}

type AccordionSlotProps = {
	headingProps?: ComponentProps<"h2">
	triggerProps?: ComponentProps<"button">
	startContentProps?: ComponentProps
	wrapperProps?: ComponentProps
	titleProps?: ComponentProps<"span">
	descriptionProps?: ComponentProps<"span">
	indicatorProps?: ComponentProps<"span">
	contentProps?: ComponentProps
}

export type AccordionItemProps = ComponentProps<"div", AccordionItemOwnProps>

type AccordionItemOwnProps = {
	value?: string
	title?: ReactNode
	description?: ReactNode
	startContent?: ReactNode
	indicator?: ReactNode | ((expanded: boolean) => ReactNode)
}

export type CollapseProps = {
	keepMounted?: boolean
	enabled?: boolean
	open?: boolean
	children?: ReactNode
}