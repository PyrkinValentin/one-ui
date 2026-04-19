import type { ToastListItemProps } from "./toast.types"

import { useSwipeDirection } from "./toast.hooks"

import { getDataAttributes } from "../../utils"
import { getDefaultColor, getIndicator } from "./toast.utils"

import { Toast as ToastPrimitive } from "@base-ui/react"
import { X } from "lucide-react"

export const ToastList = () => {
	const swipeDirection = useSwipeDirection()

	const { toasts } = ToastPrimitive.useToastManager()

	if (toasts.length === 0) return null

	return (
		<ToastPrimitive.Portal data-slot="toast-portal">
			<ToastPrimitive.Viewport
				data-slot="toast-viewport"
				className="toast__viewport"
			>
				{toasts.map((toast) => (
					<ToastListItem
						key={toast.id}
						swipeDirection={swipeDirection}
						toast={toast}
					/>
				))}
			</ToastPrimitive.Viewport>
		</ToastPrimitive.Portal>
	)
}

export const ToastListItem = (props: ToastListItemProps) => {
	const {
		toast,
		...restProps
	} = props

	const {
		loading,
		color = getDefaultColor(toast.type),
		indicator,
	} = toast

	const renderIndicator = getIndicator(
		color,
		indicator,
		loading,
		toast.type,
	)

	return (
		<ToastPrimitive.Root
			{...restProps}
			{...getDataAttributes({ color })}
			data-slot="toast-item"
			className="toast__item"
			toast={toast}
		>
			<ToastPrimitive.Content
				data-slot="toast-content"
				className="toast__content"
			>
				{!!renderIndicator && (
					<span
						data-slot="toast-indicator"
						className="toast__indicator"
					>
					{renderIndicator}
				</span>
				)}

				<div
					data-slot="toast-wrapper"
					className="toast__wrapper"
				>
					<ToastPrimitive.Title
						data-slot="toast-title"
						className="toast__title"
					/>

					<ToastPrimitive.Description
						data-slot="toast-description"
						className="toast__description"
					/>
				</div>

				<ToastPrimitive.Action
					data-slot="toast-action"
					className="toast__action"
				/>

				<ToastPrimitive.Close
					data-slot="toast-close"
					className="toast__close"
				>
					<X/>
				</ToastPrimitive.Close>
			</ToastPrimitive.Content>
		</ToastPrimitive.Root>
	)
}