import type { AddToastProps } from "./types"

import { toast } from "sonner"

import { MdCheckCircle, MdError, MdGppMaybe, MdInfo } from "react-icons/md"
import { Spinner } from "@/shared/ui/spinner"

import { toastVariants } from "./variants"

const iconMap = {
	default: MdInfo,
	primary: MdInfo,
	secondary: MdInfo,
	success: MdCheckCircle,
	warning: MdGppMaybe,
	danger: MdError,
} as const

export const addToast = (props: AddToastProps) => {
	const {
		hideIcon,
		hideCloseButton,
		timeout = 6000,
		placement,
		icon,
		endContent,
		title,
		description,
		promise,
		onClose,
		classNames: classNamesProp,
		variant,
		color = "default",
		rounded,
		shadow,
		disableAnimation,
	} = props

	const handleAutoClose = () => {
		onClose?.("timeout")
	}

	const handleDismiss = () => {
		onClose?.("dismiss")
	}

	const classNames = toastVariants({
		variant,
		color,
		rounded,
		shadow,
		disableAnimation,
	})

	const Icon = iconMap[color]

	const toastOptions = {
		closeButton: !hideCloseButton,
		duration: timeout,
		position: placement,
		icon: !hideIcon ? (icon ?? <Icon/>) : undefined,
		action: endContent,
		description,
		onAutoClose: handleAutoClose,
		onDismiss: handleDismiss,
		classNames: {
			toast: classNames.base({ className: classNamesProp?.base }),
			content: classNames.wrapper({ className: classNamesProp?.wrapper }),
			icon: classNames.icon({ className: classNamesProp?.icon }),
			title: classNames.title({ className: classNamesProp?.title }),
			description: classNames.description({ className: classNamesProp?.description }),
			closeButton: classNames.closeButton({ className: classNamesProp?.closeButton }),
		},
	}

	if (!promise) {
		toast.message(title, toastOptions)
		return
	}

	toast.promise(promise, {
		...toastOptions,
		loading: title,
		icon: <Spinner size="sm" color="current"/>,
		success: async (data) => ({
			message: data?.title ?? title,
			description: data?.title ? data?.description : description,
			icon: <Icon className="absolute"/>,
		}),
		error: (err) => ({
			message: err?.title ?? err?.message,
			description: err?.title ? err?.description : undefined,
			icon: <MdError className="absolute"/>,
		}),
	})
}