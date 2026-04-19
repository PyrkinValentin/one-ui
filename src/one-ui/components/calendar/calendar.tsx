"use client"

import type { CalendarProps } from "./calendar.props"

import { resolveClassNames } from "../../utils"
import { ru } from "react-day-picker/locale"

import { DayPicker } from "react-day-picker"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

export const CalendarRoot = (props: CalendarProps) => {
	const {
		showOutsideDays = true,
		captionLayout = "label",
		className,
		classNames = {},
		locale = ru,
		...restProps
	} = props

	const {
		root,
		months,
		nav,
		button_previous,
		button_next,
		month,
		month_caption,
		caption_label,
		month_grid,
		weekdays,
		weekday,
		weeks,
		week,
		day,
		day_button,
		today,
		outside,
		disabled,
		selected,
		range_start,
		range_middle,
		range_end,
	} = classNames

	return (
		<DayPicker
			{...restProps}
			data-slot="calendar"
			showOutsideDays={showOutsideDays}
			captionLayout={captionLayout}
			locale={locale}
			classNames={{
				root: resolveClassNames(className, [root, "calendar"]),
				months: resolveClassNames(months, "calendar__months"),
				nav: resolveClassNames(nav, "calendar__nav"),
				button_previous: resolveClassNames(button_previous, "calendar__button-previous"),
				button_next: resolveClassNames(button_next, "calendar__button-next"),
				month: resolveClassNames(month, "calendar__month"),
				month_caption: resolveClassNames(month_caption, "calendar__month-caption"),
				caption_label: resolveClassNames(caption_label, "calendar__caption-label"),
				month_grid: resolveClassNames(month_grid, "calendar__month-grid"),
				weekdays: resolveClassNames(weekdays, "calendar__weekdays"),
				weekday: resolveClassNames(weekday, "calendar__weekday"),
				weeks: resolveClassNames(weeks, "calendar__weeks"),
				week: resolveClassNames(week, "calendar__week"),
				day: resolveClassNames(day, "calendar__day"),
				day_button: resolveClassNames(day_button, "calendar__day-button"),
				today: resolveClassNames(today, "calendar__today"),
				outside: resolveClassNames(outside, "calendar__outside"),
				disabled: resolveClassNames(disabled, "calendar__disabled"),
				selected: resolveClassNames(selected, "calendar__selected"),
				range_start: resolveClassNames(range_start, "calendar__range-start"),
				range_middle: resolveClassNames(range_middle, "calendar__range-middle"),
				range_end: resolveClassNames(range_end, "calendar__range-end"),
			}}
			components={{
				Chevron: (props) => {
					const {
						orientation,
						...restProps
					} = props

					const Icon = orientation === "left"
						? ChevronLeft
						: orientation === "right"
							? ChevronRight
							: ChevronDown

					return <Icon {...restProps}/>
				},
			}}
		/>
	)
}