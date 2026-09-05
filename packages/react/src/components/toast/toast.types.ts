import type { ReactNode } from "react"

import type {
	ToastObject,
	ToastManagerEvent,
	ToastManagerAddOptions as BaseToastManagerAddOptions,
	ToastManagerUpdateOptions as BaseToastManagerUpdateOptions,
} from "@base-ui/react/toast"

export type ToastRootContextValue = Required<Pick<ToastOptions, "status">> & {
	type?: string
	indicator?: ReactNode
}

export type ToastOptions = {
	/**
	 * An icon or element displayed next to the toast content to indicate its status.
	 */
	indicator?: ReactNode
	/**
	 * The visual status of the component.
	 * @default "neutral"
	 */
	status?: "neutral" | "info" | "success" | "warning" | "error"
}

export type ToastData = Record<string, unknown>
export type ToastManagerAddOptions<Data extends ToastData> = BaseToastManagerAddOptions<Data> & ToastOptions
export type ToastManagerUpdateOptions<Data extends ToastData> = BaseToastManagerUpdateOptions<Data> & ToastOptions

export type ToastManagerPromiseOptions<Value, Data extends ToastData> = {
	loading: string | ToastManagerUpdateOptions<Data>
	success: string | ToastManagerUpdateOptions<Data> | ((result: Value) => string | ToastManagerUpdateOptions<Data>)
	error: string | ToastManagerUpdateOptions<Data> | ((error: unknown) => string | ToastManagerUpdateOptions<Data>)
}

export type ToastManager<Data extends ToastData = ToastData> = {
	" subscribe": (listener: (data: ToastManagerEvent) => void) => () => void
	add: <T extends Data = Data>(options: ToastManagerAddOptions<T>) => string
	update: <T extends Data = Data>(id: string, options: ToastManagerUpdateOptions<T> | ((prevToast: ToastObject<T>) => ToastManagerUpdateOptions<T>)) => void
	promise: <Value, T extends Data = Data>(
		promise: Promise<Value>,
		options: ToastManagerPromiseOptions<Value, T>
	) => Promise<Value>
	close: (id?: string) => void
}

export type UseToastManagerReturn<Data extends ToastData = ToastData> = Omit<ToastManager<Data>, " subscribe"> & {
	toasts: ToastObject<Data>[]
}