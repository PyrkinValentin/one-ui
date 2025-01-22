import type { Ref, RefCallback } from "react"

import { isRefCallback } from "@/shared/helpers/is-ref-callback"

export const mergeRefs = <
	T extends HTMLElement
>(...refs: (Ref<T> | undefined)[]): RefCallback<T> => {
	return (instance: T | null) => {
		refs.forEach((ref) => {
			if (!ref) return

			if (isRefCallback(ref)) {
				ref(instance)
			} else {
				ref.current = instance
			}
		})
	}
}