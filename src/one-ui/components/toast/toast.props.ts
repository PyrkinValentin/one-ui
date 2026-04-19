import type { ToastManagerAddOptions, ToastManagerUpdateOptions } from "@base-ui/react"
import type { ToastData } from "./toast.types"

type Data = Record<string, unknown>
type InternalProps = "data" | "positionerProps" | "transitionStatus"

export type ToastOptions = Omit<ToastManagerAddOptions<Data>, InternalProps> & ToastData
export type ToastUpdateOptions = Omit<ToastManagerUpdateOptions<Data>, InternalProps>

export type ToastPromiseOptions<V = unknown> = {
	loading: string | ToastUpdateOptions
	success:
		| string
		| ToastUpdateOptions
		| ((result: V) => string | ToastUpdateOptions)
	error:
		| string
		| ToastUpdateOptions
		| ((error: unknown) => string | ToastUpdateOptions)
}