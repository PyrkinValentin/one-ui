"use client"

import type { ElementType } from "react"
import type { ContainerProps } from "./types"

import { useMemo } from "react"

import { containerVariants } from "./variants"

export const Container = <As extends ElementType = "section">(props: ContainerProps<As>) => {
	const {
		as = "section",
		size,
		className,
		children,
		...restProps
	} = props as ContainerProps

	const classNames = useMemo(() => {
		return containerVariants({
			className,
			size,
		})
	}, [className, size])

	const Component = as

	return (
		<Component className={classNames} {...restProps}>
			{children}
		</Component>
	)
}