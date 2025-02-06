import type { CSSProperties } from "react"

import { useCallback, useState, useEffect } from "react"
import { useLatestRef } from "@/shared/hooks/use-latest-ref"
import { useFirstMount } from "@/shared/hooks/use-first-mount"
import { useDelayedMount } from "@/shared/hooks/use-delayed-mount"

import { camelCaseToKebabCase } from "@/shared/utils/case"
import { isNumber } from "@/shared/helpers/is-number"

type UseTransitionCSSProperties = Omit<
	CSSProperties,
	| "transitionProperty"
	| "transitionDuration"
>

type UseTransitionOptions = {
	enabled?: boolean
	initial: UseTransitionCSSProperties
	enter: UseTransitionCSSProperties
	exit?: UseTransitionCSSProperties
	duration?: Duration
}

export type Duration = number | {
	enter: number
	exit: number
}

type Status = "initial" | "enter" | "exit"
type UseTransitionReturn = [boolean, CSSProperties]

export const useTransition = (transition: boolean = false, options: UseTransitionOptions): UseTransitionReturn => {
	const {
		enabled = true,
		initial,
		enter,
		exit = initial,
		duration: durationOpt = 300,
	} = options

	const enterStylesRef = useLatestRef(enter)
	const exitStylesRef = useLatestRef(exit)
	const durationRef = useLatestRef(durationOpt)

	const firstMount = useFirstMount()

	const [status, setStatus] = useState<Status>(
		transition
			? "enter"
			: "initial"
	)

	const [styles, setStyles] = useState<CSSProperties>(
		transition
			? enter
			: initial
	)

	const getDuration = useCallback((status: Status) => {
		if (!enabled) {
			return 0
		}

		return isNumber(durationRef.current)
			? durationRef.current
			: status === "enter"
				? durationRef.current.enter
				: durationRef.current.exit
	}, [durationRef, enabled])

	const mounted = useDelayedMount(transition, getDuration(status))

	useEffect(() => {
		if (enabled) return

		setStyles(
			transition
				? enterStylesRef.current
				: exitStylesRef.current
		)
	}, [
		enabled,
		enterStylesRef,
		exitStylesRef,
		transition,
	])

	useEffect(() => {
		if (!enabled || !mounted || firstMount) return

		const frameId = requestAnimationFrame(() => {
			setStatus(transition ? "enter" : "exit")
		})

		return () => cancelAnimationFrame(frameId)
	}, [
		enabled,
		firstMount,
		mounted,
		transition,
	])

	useEffect(() => {
		if (!enabled || status === "initial" || firstMount) return

		const motionReduce = matchMedia("(prefers-reduced-motion: reduce)").matches

		const styles = status === "enter"
			? enterStylesRef.current
			: exitStylesRef.current

		const transitionStyles = !motionReduce ? {
			transitionProperty: Object
				.keys(styles)
				.map(camelCaseToKebabCase)
				.join(','),
			transitionDuration: `${getDuration(status)}ms`,
		} : undefined

		const frameId = requestAnimationFrame(() => {
			setStyles({
				...styles,
				...transitionStyles,
			})
		})

		return () => cancelAnimationFrame(frameId)
	}, [
		enabled,
		enterStylesRef,
		exitStylesRef,
		firstMount,
		getDuration,
		status,
	])

	return [mounted, styles]
}