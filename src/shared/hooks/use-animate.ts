import type { CSSProperties } from "react"

import { useState, useEffect } from "react"
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
	duration?: number | {
		enter?: number
		exit?: number
	}
}

type UseAnimateReturn = [boolean, CSSProperties]

export const useAnimate = (animate: boolean = false, options: UseAnimateOptions): UseAnimateReturn => {
	const {
		initial,
		enter,
		exit = initial,
		duration: durationOpt,
	} = options

	const duration = isNumber(durationOpt)
		? durationOpt
		: (animate ? durationOpt?.enter : durationOpt?.exit) ?? 300

	const enterStyles = useLatestRef(enter)
	const exitStyles = useLatestRef(exit)

	const firstMount = useFirstMount()
	const mounted = useDelayedMount(animate, duration)

	const [styles, setStyles] = useState<CSSProperties>(
		animate
			? enter
			: initial
	)

	useEffect(() => {
		if (!mounted || firstMount) return

		const frameId = requestAnimationFrame(() => {
			const styles = animate
				? enterStyles.current
				: exitStyles.current

			setStyles({
				...styles,
				transitionDuration: `${duration}ms`,
				transitionProperty: Object
					.keys(styles)
					.map(camelCaseToKebabCase)
					.join(','),
			})
		})

		return () => cancelAnimationFrame(frameId)
	}, [
		mounted,
		firstMount,
		animate,
		duration,
		enterStyles,
		exitStyles,
	])

	return [mounted, styles]
}