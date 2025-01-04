"use client"

import type { ElementType } from "react"
import type { BoxProps, ContainerProps, FlexProps, GridProps } from "./types"

import { useMemo } from "react"

import { boxVariants, containerVariants, flexVariants, gridVariants } from "./variants"

export const Box = <As extends ElementType = "div">(props: BoxProps<As>) => {
	const {
		as = "div",
		className,
		display,
		children,
		...restProps
	} = props as BoxProps

	const classNames = useMemo(() => {
		return boxVariants({
			className,
			display,
		})
	}, [className, display])

	const Component = as

	return (
		<Component className={classNames} {...restProps}>
			{children}
		</Component>
	)
}

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

export const Grid = <As extends ElementType = "div">(props: GridProps<As>) => {
	const {
		as = "div",
		className,
		container,
		display,
		size,
		gap,
		gapX,
		gapY,
		children,
		...restProps
	} = props as GridProps

	const classNames = useMemo(() => {
		return gridVariants({
			className,
			container,
			display,
			size,
			gap,
			gapX,
			gapY,
		})
	}, [
		className,
		container,
		display,
		size,
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