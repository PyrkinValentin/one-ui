import type { ReactNode } from "react"
import type { ToastData } from "./toast.types"

import { TOAST_INDICATORS } from "./toast.vars"

import { Spinner } from "../spinner"

export const getDefaultColor = (type?: string) => {
	if (!type || type === "loading") return "default"

	return type === "success"
		? "success"
		: "danger"
}

export const getIndicator = (
	status: NonNullable<ToastData["status"]>,
	indicator?: ReactNode,
	loading?: boolean,
	type?: string,
): ReactNode => {
	if (
		loading ||
		indicator ||
		!type
	) {
		return loading
			? <Spinner/>
			: (indicator ?? TOAST_INDICATORS[status])
	}

	switch (type) {
		case "loading":
			return <Spinner/>
		case "success":
			return TOAST_INDICATORS.success
		case "error":
			return TOAST_INDICATORS.danger
	}
}