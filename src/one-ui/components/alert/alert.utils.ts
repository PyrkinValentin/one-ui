import type { ReactNode } from "react"
import type { AlertProps } from "./alert.props"

import { ALERT_INDICATORS } from "./alert.vars"

export const getIndicator = (
	status: NonNullable<AlertProps["status"]>,
	indicator?: ReactNode,
): ReactNode => indicator ?? ALERT_INDICATORS[status]