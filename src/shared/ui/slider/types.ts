import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { TooltipProps } from "@/shared/ui/tooltip"
import type { SliderVariantsProps } from "./variants"

export type SliderProps = ComponentProps<
	"div",
	Omit<SliderVariantsProps, "singleThumb"> &
	SliderOwnProps &
	SliderStateProps
>

type SliderOwnProps = {
	label?: ReactNode
	showValueLabel?: boolean
	showTooltip?: boolean
	showSteps?: boolean
	marks?: Mark[]
	startContent?: ReactNode
	endContent?: ReactNode
	formatOptions?: Intl.NumberFormatOptions
	fillOffset?: number
	step?: number
	minValue?: number
	maxValue?: number
	renderValue?: (props: RenderValueProps) => ReactNode
	slotProps?: SliderSlotProps
}

type SliderSlotProps = {
	labelWrapperProps?: ComponentProps
	labelProps?: ComponentProps<"label">
	valueProps?: ComponentProps<"output">
	stepProps?: ComponentProps
	markProps?: ComponentProps
	trackWrapperProps?: ComponentProps
	trackProps?: ComponentProps
	fillerProps?: ComponentProps
	thumbProps?: ComponentProps
	inputProps?: ComponentProps<"input">
	tooltipProps?: TooltipProps
}

type SliderStateProps = {
	defaultValue?: number[]
	value?: number[]
	onValueChange?: (value: number[]) => void
	onValueChangeComplete?: (value: number[]) => void
}

type Mark = {
	label: string
	value: number
}

type RenderValueProps = {
	value: number[]
	textValue: string[]
}