import type { ToastListItemProps } from "./toast.types"

import { useSwipeDirection } from "./toast.hooks"

import { getDataAttributes } from "../../utils"
import { getDefaultColor, getIndicator } from "./toast.utils"

import { Toast } from "@base-ui/react"
import { X } from "lucide-react"

export const ToastList = () => {
	const swipeDirection = useSwipeDirection()

	const { toasts } = Toast.useToastManager()

	if (toasts.length === 0) return null

	return (
		<Toast.Portal data-slot="toast-portal">
			<Toast.Viewport
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
			</Toast.Viewport>
		</Toast.Portal>
	)
}

export const ToastListItem = (props: ToastListItemProps) => {
	const {
		toast,
		...restProps
	} = props

	const {
		loading,
		status = getDefaultColor(toast.type),
		indicator,
	} = toast

	const renderIndicator = getIndicator(
		status,
		indicator,
		loading,
		toast.type,
	)

	return (
		<Toast.Root
			{...restProps}
			{...getDataAttributes({ status })}
			data-slot="toast-item"
			className="toast__item"
			toast={toast}
		>
			<Toast.Content
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
					<Toast.Title
						data-slot="toast-title"
						className="toast__title"
					/>

					<Toast.Description
						data-slot="toast-description"
						className="toast__description"
					/>
				</div>

				<Toast.Action
					data-slot="toast-action"
					className="toast__action"
				/>

				<Toast.Close
					data-slot="toast-dismiss"
					className="toast__dismiss"
				>
					<X/>
				</Toast.Close>
			</Toast.Content>
		</Toast.Root>
	)
}