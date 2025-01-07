import type { RefObject } from "react"

import { useEffect, useRef } from "react"

export const useLatestRef = <T>(value: T): RefObject<T> => {
	const ref = useRef(value)

	useEffect(() => {
		ref.current = value
	})

	return ref
}