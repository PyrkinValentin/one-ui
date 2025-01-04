"use client"

import type { ElementType } from "react"
import type { ContainerProps, FlexProps } from "./types"

import { useMemo } from "react"

import { containerVariants, flexVariants } from "./variants"

export const Container = <As extends ElementType = "section">(props: ContainerProps<As>) => {
	const {
		as = "section",
		className,
		size,
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

export const Flex = <As extends ElementType = "div">(props: FlexProps<As>) => {
	const {
		as = "div",
		className,
		display,
		direction,
		align,
		justify,
		wrap,
		gap,
		gapX,
		gapY,
		children,
		...restProps
	} = props as FlexProps

	const classNames = useMemo(() => {
		return flexVariants({
			className,
			display,
			direction,
			align,
			justify,
			wrap,
			gap,
			gapX,
			gapY,
		})
	}, [
		className,
		display,
		direction,
		align,
		justify,
		wrap,
		gap,
		gapX,
		gapY,
	])

	const Component = as

	return (
		<Component className={classNames} {...restProps}>
			{children}
		</Component>
	)
}