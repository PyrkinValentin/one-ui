import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { AccordionVariantsProps } from "./variants"

export type AccordionContextValue =
	Pick<AccordionOwnProps, "keepMounted"> &
	AccordionContextOwnValue

type AccordionContextOwnValue = {
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
	disabledValue?: string[]
	defaultValue?: string[]
	value?: string[]
	onValueChange?: (value: string[]) => void
}

export type AccordionItemProps = ComponentProps<"div", AccordionItemOwnProps>

type AccordionItemOwnProps = {
	value?: string
	title?: ReactNode
	description?: ReactNode
	startContent?: ReactNode
	indicator?: ReactNode | ((expanded: boolean) => ReactNode)
}

export type CollapseProps = ComponentProps<"section", CollapseOwnProps>

type CollapseOwnProps = {
	keepMounted?: boolean
	open?: boolean
	duration?: number
}