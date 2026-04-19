import { useCallback, useLayoutEffect, useRef } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunction = (...args: any[]) => any

export function useStableCallback<T extends AnyFunction>(callback: T): T
export function useStableCallback<T extends AnyFunction>(callback: T | undefined): T | undefined

export function useStableCallback<T extends AnyFunction>(callback: T | undefined): T | undefined {
	const callbackRef = useRef(callback)

	useLayoutEffect(() => {
		callbackRef.current = callback
	})

	const stableCallback = useCallback((...args: Parameters<T>): ReturnType<T> | undefined => {
		return callbackRef.current?.(...args)
	}, []) as T

	return callback ? stableCallback : undefined
}