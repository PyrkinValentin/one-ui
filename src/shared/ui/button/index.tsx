import type { ButtonProps } from "./types"

import { useMemo } from "react"

import { Spinner } from "@/shared/ui/spinner"

import { buttonVariants } from "./variants"

export const Button = (props: ButtonProps) => {
	const {
		startContent,
		endContent,
		spinnerProps,
		className,
		classNames,
		loading,
		children,
		...restProps
	} = props

	const slots = useMemo(() => {
		return buttonVariants({
			loading,
		})
	}, [loading])

	const wrapperContent = loading ? (
		<div className={slots.wrapper({ className: classNames?.wrapper })}>
			{startContent}
			{children}
			{endContent}
		</div>
	) : (
		<>
			{startContent}
			{children}
			{endContent}
		</>
	)

	return (
		<button
			className={slots.base({ className: [className, classNames?.base] })}
			{...restProps}
		>
			{wrapperContent}
			{loading && <Spinner {...spinnerProps}/>}
		</button>
	)
}