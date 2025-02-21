import type { CSSProperties } from "react"
import type { Side } from "@floating-ui/utils"

import type {
	ArrowOptions,
	AutoUpdateOptions,
	FlipOptions,
	ShiftOptions,
	UseFloatingOptions as UseFloatingOptionsReact,
} from "@floating-ui/react"

import { useRef } from "react"
import { useFloating as useFloatingReact } from "@floating-ui/react"

import { arrow, autoUpdate, flip, offset, shift } from "@floating-ui/react"

export type UseFloatingOptions =
	Pick<
		UseFloatingOptionsReact,
		"elements" | "nodeId" | "platform" | "rootContext" | "strategy" | "transform" | "placement" | "open" | "onOpenChange"
	> &
	UseFloatingOwnOptions

type UseFloatingOwnOptions = {
	autoUpdateOptions?: AutoUpdateOptions & { enabled?: boolean }
	offsetOptions?: OffsetOptions & { enabled?: boolean }
	shiftOptions?: ShiftOptions & { enabled?: boolean }
	flipOptions?: FlipOptions & { enabled?: boolean }
	arrowOptions?: Partial<ArrowOptions> & { enabled?: boolean }
}

type OffsetOptions = {
	mainAxis?: number
	crossAxis?: number
	alignmentAxis?: number | null
}

export type UseFloatingReturn = ReturnType<typeof useFloating>

const sidePlacement: Record<Side, Side> = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left",
}

const sideTransform: Record<Side, string> = {
	top: "translateY(40%)",
	bottom: "translateY(-40%)",
	left: "translateX(40%)",
	right: "translateX(-40%)",
}

export const useFloating = (options: UseFloatingOptions) => {
	const {
		transform,
		placement,
		open,
		onOpenChange,
		autoUpdateOptions = {},
		offsetOptions = {},
		shiftOptions = {},
		flipOptions = {},
		arrowOptions = {},
		...restOptions
	} = options

	const arrowRef = useRef<HTMLElement>(null)

	const enableMiddleware =
		offsetOptions.enabled ||
		shiftOptions.enabled ||
		flipOptions.enabled ||
		arrowOptions.enabled

	const {
		context,
		refs,
		...restFloatingReturn
	} = useFloatingReact({
		placement,
		open,
		onOpenChange,
		whileElementsMounted: autoUpdateOptions.enabled
			? (referenceEl, floatingEl, update) => (
				autoUpdate(referenceEl, floatingEl, update, {
					layoutShift: false,
					...autoUpdateOptions,
				})
			) : undefined,
		transform,
		...(enableMiddleware ? {
			middleware: [
				offsetOptions.enabled
					? offset(offsetOptions)
					: undefined,
				shiftOptions.enabled
					? shift(shiftOptions)
					: undefined,
				flipOptions.enabled
					? flip(flipOptions)
					: undefined,
				arrowOptions.enabled
					? arrow({ ...arrowOptions, element: arrowRef })
					: undefined,
			],
		} : undefined),
		...restOptions,
	})

	const setArrow = (node: HTMLElement | null) => {
		arrowRef.current = node
	}

	const getArrowStyles = (): CSSProperties => {
		const [placement] = context.placement.split("-") as [Side]

		return {
			position: "absolute",
			top: context.middlewareData.arrow?.y,
			left: context.middlewareData.arrow?.x,
			[sidePlacement[placement]]: 0,
			transform: `${sideTransform[placement]} rotate(45deg)`,
		}
	}

	const arrowStyles = arrowOptions.enabled
		? getArrowStyles()
		: undefined

	return {
		...restFloatingReturn,
		context: {
			...context,
			arrowStyles,
			refs: {
				...context.refs,
				setArrow,
			},
		},
		arrowStyles,
		refs: {
			...refs,
			setArrow,
		},
	}
}