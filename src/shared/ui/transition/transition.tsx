import { CSSProperties, ReactNode, useEffect, useState } from "react"

import { useLatestRef } from "@/shared/hooks/use-latest-ref"
import { useDelayedMount } from "@/shared/hooks/use-delayed-mount";
import { camelCaseToKebabCase } from "@/shared/utils/case";
import { Slot } from "@/shared/ui/system";

type TransitionProps = {
	open?: boolean
	initial: CSSProperties
	enter: CSSProperties
	exit?: CSSProperties
	children?: ReactNode
}

type Status = "initial" | "enter" | "exit"

export const Transition = (props: TransitionProps) => {
	const {
		open = false,
		initial,
		enter,
		exit = initial,
		children,
	} = props

	const enterStyles = useLatestRef(enter)
	const exitStyles = useLatestRef(exit)

	const [mounted, setMounted] = useState(open)
	const [status, setStatus] = useState<Status>("initial")
	const [styles, setStyles] = useState(initial)

	useEffect(() => {
		if (open && !mounted) {
			setMounted(true)
		}

		if (!open && mounted) {
			const timeoutId = setTimeout(() => setMounted(false), 300)

			return () => clearTimeout(timeoutId)
		}
	}, [
		mounted,
		open,
	])

	useEffect(() => {
		if (!mounted) return

		if (open) {
			const frameId = requestAnimationFrame(() => {
				setStatus("enter")
			})

			return () => cancelAnimationFrame(frameId)
		}

		const frameId = requestAnimationFrame(() => {
			setStatus("exit")
		})

		return () => cancelAnimationFrame(frameId)
	}, [mounted, open])

	useEffect(() => {
		if (status === "enter") {
			setStyles({
				...enterStyles.current,
				transitionDuration: `${300}ms`,
				transitionProperty: Object
					.keys(enterStyles.current)
					.map(camelCaseToKebabCase)
					.join(','),
			})
		}

		if (status === "exit") {
			setStyles({
				...exitStyles.current,
				transitionDuration: `${300}ms`,
				transitionProperty: Object
					.keys(exitStyles.current)
					.map(camelCaseToKebabCase)
					.join(','),
			})
		}
	}, [enterStyles, exitStyles, status])

	if (!mounted) {
		return <></>
	}

	return (
		<Slot style={styles}>
			{children}
		</Slot>
	)
}