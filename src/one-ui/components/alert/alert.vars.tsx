import { CircleAlert, CircleCheck, Info, TriangleAlert } from "lucide-react"

export const ALERT_INDICATORS = {
	default: <Info/>,
	primary: <Info/>,
	success: <CircleCheck/>,
	warning: <TriangleAlert/>,
	danger: <CircleAlert/>,
} as const