import type { ToastOptions, ToastUpdateOptions, ToastPromiseOptions } from "./toast.props"

import { Toast } from "@base-ui/react"

export const toastManager = Toast.createToastManager()

export const toast = (options: ToastOptions) => {
	return toastManager.add(options)
}

toast.update = (id: string, options: ToastUpdateOptions) => {
	toastManager.update(id, options)
}

toast.promise = <V>(promiseValue: Promise<V>, options: ToastPromiseOptions<V>) => {
	const { loading, success, error } = options

	return toastManager.promise(promiseValue, {
		loading: typeof loading === "string"
			? { title: loading }
			: loading,
		success: typeof success === "string"
			? { title: success }
			: success,
		error: typeof error === "string"
			? { title: error }
			: error,
	})
}

toast.close = (id: string) => toastManager.close(id)