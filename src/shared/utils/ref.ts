import type { Ref } from "react"

import { isNullOrUndefined } from "@/shared/helpers/is-null-or-undefined"
import { isRefObject } from "@/shared/helpers/is-ref-object"
import { isRefCallback } from "@/shared/helpers/is-ref-callback"

export const mergeRefs = <
	T extends HTMLElement
>(...refs: (Ref<T> | undefined)[]): Ref<T> => {
	const merge = (instance: T | null) => {
		refs.forEach((ref) => {
			if (isNullOrUndefined(ref)) {
				return
			}

			if (isRefObject(ref)) {
				ref.current = instance
			}

			if (isRefCallback(ref)) {
				ref(instance)
			}
		})
	}

	return (instance) => {
		merge(instance)

		return () => merge(null)
	}
}