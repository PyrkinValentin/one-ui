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

export type UseFloatingOptions = Pick<
	UseFloatingOptionsReact,
	| "placement"
	| "open"
	| "onOpenChange"
> & UseFloatingOwnOptions

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
		placement,
		open,
		onOpenChange,
		autoUpdateOptions = {},
		offsetOptions = {},
		shiftOptions = {},
		flipOptions = {},
		arrowOptions = {},
	} = options

	const { enabled: autoUpdateEnabled = true, ...restAutoUpdateOptions } = autoUpdateOptions
	const { enabled: offsetEnabled = true, ...restOffsetOptions } = offsetOptions
	const { enabled: shiftEnabled = true, ...restShiftOptions } = shiftOptions
	const { enabled: flipEnabled = true, ...restFlipOptions } = flipOptions
	const { enabled: arrowEnabled, ...restArrowOptions } = arrowOptions

	const arrowRef = useRef<HTMLElement>(null)

	const {
		context,
		refs,
		...restFloatingReturn
	} = useFloatingReact({
		placement,
		open,
		onOpenChange,
		whileElementsMounted: autoUpdateEnabled ? (referenceEl, floatingEl, update) => (
			autoUpdate(referenceEl, floatingEl, update, {
				layoutShift: false,
				...restAutoUpdateOptions,
			})
		) : undefined,
		transform: false,
		middleware: [
			offsetEnabled
				? offset(restOffsetOptions)
				: undefined,
			shiftEnabled
				? shift(restShiftOptions)
				: undefined,
			flipEnabled
				? flip(restFlipOptions)
				: undefined,
			arrowEnabled
				? arrow({ ...restArrowOptions, element: arrowRef })
				: undefined,
		],
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

	const arrowStyles = arrowEnabled
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