import { useCallback, useInsertionEffect, useRef } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunction = (...args: never[]) => any

export function useStableCallback<T extends AnyFunction>(callback: T): T
export function useStableCallback<T extends AnyFunction>(callback: T | undefined): T | undefined

export function useStableCallback<T extends AnyFunction>(callback: T | undefined): T | undefined {
	const callbackRef = useRef(callback)

	useInsertionEffect(() => {
		callbackRef.current = callback
	})

	return useCallback((...args: Parameters<T>): ReturnType<T> | undefined => {
		return callbackRef.current?.(...args)
	}, []) as T
}