import type { ReactNode } from "react"
import type { ExternalToast } from "sonner"
import type { ClassValue } from "tailwind-variants"
import type { ToastVariantsProps, ToastVariantsSlots } from "./variants"

type Reason = "timeout" | "dismiss"

export type AddToastProps =
	ToastVariantsProps &
	AddToastOwnProps

type AddToastOwnProps = {
	hideIcon?: boolean
	hideCloseButton?: boolean
	timeout?: number
	placement?: ExternalToast["position"]
	icon?: ReactNode
	endContent?: ReactNode
	title?: ReactNode
	description?: ReactNode
	promise?: Promise<PromiseResult | void>
	onClose?: (reason: Reason) => void
	classNames?: Partial<Record<ToastVariantsSlots, ClassValue>>
}

type PromiseResult = {
	title?: string
	description?: string
}