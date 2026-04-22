import { CircleAlert, CircleCheck, Info, TriangleAlert } from "lucide-react"

type ToastSwipeDirection = ("up" | "down" | "left" | "right")[]

export const TOAST_SWIPE_DIRECTION: ToastSwipeDirection = ["left", "up", "right"]

export const TOAST_INDICATORS = {
	default: undefined,
	primary: <Info/>,
	success: <CircleCheck/>,
	warning: <TriangleAlert/>,
	danger: <CircleAlert/>,
} as const