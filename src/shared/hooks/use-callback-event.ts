import { useCallback } from "react"
import { useLatestRef } from "@/shared/hooks/use-latest-ref"

type CallbackEvent = (...args: never[]) => unknown

export const useCallbackEvent = <F extends CallbackEvent>(callback?: F) => {
	const callbackRef = useLatestRef(callback)

	return useCallback<CallbackEvent>((...args) => {
		return callbackRef.current?.(...args)
	}, [callbackRef]) as F
}