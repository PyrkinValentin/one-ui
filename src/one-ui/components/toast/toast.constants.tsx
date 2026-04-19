import type { ReactNode } from "react"
import type { ToastData } from "./toast.types"

import { CircleAlert, CircleCheck, CircleX, Info } from "lucide-react"

type SwipeDirection = ("up" | "down" | "left" | "right")[]

export const SWIPE_DIRECTION: SwipeDirection = ["left", "up", "right"]

type Indicators = Record<NonNullable<ToastData["color"]>, ReactNode>

export const INDICATORS: Indicators = {
	default: undefined,
	primary: <Info/>,
	success: <CircleCheck/>,
	warning: <CircleAlert/>,
	danger: <CircleX/>,
}