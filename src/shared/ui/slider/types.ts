import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { TooltipProps } from "@/shared/ui/tooltip"
import type { SliderVariantsProps } from "./variants"

export type SliderProps = ComponentProps<
	"div",
	Omit<SliderVariantsProps, "singleThumb"> &
	SliderOwnProps
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
	value?: number[]
	defaultValue?: number[]
	onValueChange?: (value: number[]) => void
	onValueChangeComplete?: (value: number[]) => void
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
	tooltipProps?: TooltipProps
}

type Mark = {
	label: string
	value: number
}

type RenderValueProps = {
	value: number[]
	textValue: string[]
}