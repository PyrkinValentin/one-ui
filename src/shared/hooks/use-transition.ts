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
		return isNumber(durationRef.current)
			? durationRef.current
			: status === "enter"
				? durationRef.current.enter
				: durationRef.current.exit
	}, [durationRef])

	const mounted = useDelayedMount(transition, getDuration(status))

	useEffect(() => {
		if (!mounted || firstMount) return

		if (transition) {
			const frameId = requestAnimationFrame(() => {
				setStatus("enter")
			})

			return () => cancelAnimationFrame(frameId)
		}

		setStatus("exit")
	}, [
		transition,
		firstMount,
		mounted,
	])

	useEffect(() => {
		if (status === "initial" || firstMount) return

		const styles = status === "enter"
			? enterStylesRef.current
			: exitStylesRef.current

		const frameId = requestAnimationFrame(() => {
			setStyles({
				...styles,
				transitionProperty: Object
					.keys(styles)
					.map(camelCaseToKebabCase)
					.join(','),
				transitionDuration: `${getDuration(status)}ms`,
			})
		})

		return () => cancelAnimationFrame(frameId)
	}, [
		enterStylesRef,
		exitStylesRef,
		firstMount,
		getDuration,
		status,
	])

	return [mounted, styles]
}