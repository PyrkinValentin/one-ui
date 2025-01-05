import type { ClassValue, CnReturn, VariantProps } from "tailwind-variants"

import { useCallback, useEffect, useState } from "react"
import { useFirstMountState } from "@/shared/hooks/use-first-mount-state"
import { useDelayedMount } from "@/shared/hooks/use-delayed-mount"

import { cn, tv } from "@/core/theme"

type UseAnimationOptions = VariantProps<typeof triggerAnimate> & {
	base?: string
	initial: string
	enter: string
}

type GetClassName = (mergeClassValue?: ClassValue) => CnReturn

const triggerAnimate = tv({
	base: "transition",
	variants: {
		duration: {
			0: "duration-0",
			75: "duration-75",
			100: "duration-100",
			150: "duration-150",
			200: "duration-200",
			300: "duration-300",
			500: "duration-500",
			1000: "duration-1000",
		},
	},
})

export const useAnimate = (animate: boolean = false, options?: UseAnimationOptions) => {
	const {
		base,
		initial,
		enter,
		duration = 300,
	} = options ?? {}

	const firstMountState = useFirstMountState()
	const mounted = useDelayedMount(animate, duration)

	const toggleAnimate = useCallback(() => {
		return triggerAnimate({
			className: [base, animate ? enter : initial],
			duration,
		})
	}, [base, animate, enter, initial, duration])

	const [className, setClassName] = useState(toggleAnimate)

	useEffect(() => {
		if (firstMountState || !mounted) return

		const frameId = requestAnimationFrame(() => {
			setClassName(toggleAnimate())
		})

		return () => cancelAnimationFrame(frameId)
	}, [firstMountState, mounted, toggleAnimate])

	const getClassName: GetClassName = (mergeClassValue) => {
		return mergeClassValue
			? cn(className, mergeClassValue)
			: className
	}

	return [mounted, getClassName] as const
}