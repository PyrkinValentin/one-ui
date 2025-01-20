import type { CSSProperties } from "react"

import { useCallback, useState, useEffect } from "react"
import { useLatestRef } from "@/shared/hooks/use-latest-ref"
import { useFirstMount } from "@/shared/hooks/use-first-mount"
import { useDelayedMount } from "@/shared/hooks/use-delayed-mount"

import { camelCaseToKebabCase } from "@/shared/utils/case"
import { isNumber } from "@/shared/helpers/is-number"

type UseAnimateCSSProperties = Omit<
	CSSProperties,
	| "transitionProperty"
	| "transitionDuration"
>

type UseAnimateOptions = {
	initial: UseAnimateCSSProperties
	enter: UseAnimateCSSProperties
	exit?: UseAnimateCSSProperties
	duration?: Duration
}

export type Duration = number | {
	enter: number
	exit: number
}

type Status = "initial" | "enter" | "exit"
type UseAnimateReturn = [boolean, CSSProperties]

export const useAnimate = (animate: boolean = false, options: UseAnimateOptions): UseAnimateReturn => {
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
		animate
			? "enter"
			: "initial"
	)

	const [styles, setStyles] = useState<CSSProperties>(
		animate
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

	const mounted = useDelayedMount(animate, getDuration(status))

	useEffect(() => {
		if (!mounted || firstMount) return

		if (animate) {
			const frameId = requestAnimationFrame(() => {
				setStatus("enter")
			})

			return () => cancelAnimationFrame(frameId)
		}

		setStatus("exit")
	}, [
		animate,
		firstMount,
		mounted,
	])

	useEffect(() => {
		if (status === "initial" || firstMount) return

		const styles = status === "enter"
			? enterStylesRef.current
			: exitStylesRef.current

		setStyles({
			...styles,
			transitionProperty: Object
				.keys(styles)
				.map(camelCaseToKebabCase)
				.join(','),
			transitionDuration: `${getDuration(status)}ms`,
		})
	}, [
		durationRef,
		enterStylesRef,
		exitStylesRef,
		firstMount,
		getDuration,
		status,
	])

	return [mounted, styles]
}