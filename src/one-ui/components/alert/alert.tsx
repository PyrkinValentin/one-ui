"use client"

import type {
	AlertProps,
	AlertIndicatorProps,
	AlertContentProps,
	AlertTitleProps,
	AlertDescriptionProps
} from "./alert.props"

import type { AlertContextValue } from "./alert.context"

import { useMemo } from "react"
import { useAlertContext } from "./alert.context"

import { getDataAttributes, resolveClassNames } from "../../utils"
import { getIndicator } from "./alert.utils"

import { AlertContext } from "./alert.context"

export const AlertRoot = (props: AlertProps) => {
	const {
		status = "default",
		className,
		children,
		...restProps
	} = props

	const contextValue = useMemo<AlertContextValue>(() => ({
		status,
	}), [status])

	return (
		<AlertContext value={contextValue}>
			<div
				{...restProps}
				{...getDataAttributes({ status })}
				role="alert"
				data-slot="alert"
				className={resolveClassNames(className, "alert")}
			>
				{children}
			</div>
		</AlertContext>
	)
}

export const AlertIndicator = (props: AlertIndicatorProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	const { status } = useAlertContext()

	return (
		<span
			{...restProps}
			data-slot="alert-indicator"
			className={resolveClassNames(className, "alert__indicator")}
		>
			{getIndicator(status, children)}
		</span>
	)
}

export const AlertContent = (props: AlertContentProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div
			{...restProps}
			data-slot="alert-content"
			className={resolveClassNames(className, "alert__content")}
		>
			{children}
		</div>
	)
}

export const AlertTitle = (props: AlertTitleProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div
			{...restProps}
			data-slot="alert-title"
			className={resolveClassNames(className, "alert__title")}
		>
			{children}
		</div>
	)
}

export const AlertDescription = (props: AlertDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<p
			{...restProps}
			data-slot="alert-description"
			className={resolveClassNames(className, "alert__description")}
		>
			{children}
		</p>
	)
}