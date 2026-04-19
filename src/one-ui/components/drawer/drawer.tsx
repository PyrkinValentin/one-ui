import type { DrawerProps, DrawerTriggerProps, DrawerSwipeAreaProps } from "./drawer.props"

import { composeComponent, resolveClassNames } from "../../utils"

import { Drawer as DrawerPrimitive } from "@base-ui/react"

const Root = <P = unknown>(props: DrawerProps<P>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<DrawerPrimitive.Root {...restProps}>
			{children}
		</DrawerPrimitive.Root>
	)
}

const Trigger = <P = unknown>(props: DrawerTriggerProps<P>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<DrawerPrimitive.Trigger
			{...restProps}
			data-slot="drawer-trigger"
			className={resolveClassNames(className, "drawer__trigger")}
		>
			{children}
		</DrawerPrimitive.Trigger>
	)
}

const SwipeArea = (props: DrawerSwipeAreaProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<DrawerPrimitive.SwipeArea
			{...restProps}
			data-slot="drawer-swipe-area"
			className={resolveClassNames(className, "drawer__swipe-area")}
		>
			{children}
		</DrawerPrimitive.SwipeArea>
	)
}

const Popup = (props) => {
	return (
		<></>
	)
}

const Title = (props) => {
	return (
		<></>
	)
}

const Description = (props) => {
	return (
		<></>
	)
}

const Close = (props) => {
	return (
		<></>
	)
}

type DrawerSlots = {
	Trigger: typeof Trigger
	SwipeArea: typeof SwipeArea
	Popup: typeof Popup
	Title: typeof Title
	Description: typeof Description
	Close: typeof Close
	createHandle: typeof DrawerPrimitive.createHandle,
}

export const Drawer = composeComponent<typeof Root, DrawerSlots>(Root, {
	Trigger,
	SwipeArea,
	Popup,
	Title,
	Description,
	Close,
	createHandle: DrawerPrimitive.createHandle,
})