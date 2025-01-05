import { useCallback, useEffect, useRef } from "react"

type CallbackEvent = (...args: never[]) => unknown

export const useCallbackEvent = <F extends CallbackEvent>(callback?: F) => {
	const callbackRef = useRef<F>(callback)

	useEffect(() => {
		callbackRef.current = callback
	})

	return useCallback<CallbackEvent>((...args) => {
		return callbackRef.current?.(...args)
	}, []) as F
}