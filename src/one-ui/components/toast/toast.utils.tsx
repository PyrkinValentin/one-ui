import type { ReactNode } from "react"
import type { ToastData } from "./toast.types"

import { INDICATORS } from "./toast.constants"

import { Spinner } from "../spinner"

export const getDefaultColor = (type?: string) => {
	if (!type || type === "loading") return "default"

	return type === "success"
		? "success"
		: "danger"
}

export const getIndicator = (
	variant: NonNullable<ToastData["color"]>,
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
			: (indicator ?? INDICATORS[variant])
	}

	switch (type) {
		case "loading":
			return <Spinner/>
		case "success":
			return INDICATORS.success
		case "error":
			return INDICATORS.danger
	}
}