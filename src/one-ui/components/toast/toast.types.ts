import type { ReactNode } from "react"
import type { Toast, ToastObject } from "@base-ui/react"

type Data = Record<string, unknown>

export type ToastData = {
	color?: "default" | "primary" | "success" | "warning" | "danger"
	indicator?: ReactNode
	loading?: boolean
}

export type ToastListItemProps = Omit<Toast.Root.Props, "toast"> & {
	toast: ToastObject<Data> & ToastData
}