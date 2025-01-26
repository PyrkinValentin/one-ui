import type { Ref, RefCallback } from "react"

import { cn } from "@/core/theme"

import { isFunction } from "@/shared/helpers/is-function"
import { isRefCallback } from "@/shared/helpers/is-ref-callback"
import { isRef } from "@/shared/helpers/is-ref"
import { isString } from "@/shared/helpers/is-string"
import { isObject } from "@/shared/helpers/is-object"
import { isUndefined } from "@/shared/helpers/is-undefined"

type PropsArgs =
// eslint-disable-next-line
	| Record<string, any>
	| null
	| undefined

type TupleTypes<T> = { [P in keyof T]: T[P] } extends { [key: number]: infer V }
	? NullToObject<V>
	: never

type NullToObject<T> = T extends (null | undefined)
	? never
	: T

type UnionToIntersection<U> = (U extends unknown ? (k: U) => void : never) extends ((k: infer I) => void)
	? I
	: never

export const mergeFunctions = <
	T extends (...args: Parameters<T>) => unknown
>(...callbacks: (T | undefined)[]) => {
	return (...args: Parameters<T>) => {
		callbacks.forEach((callback) => {
			if (isFunction(callback)) {
				callback(...args)
			}
		})
	}
}

export const mergeRefs = <
	T extends HTMLElement
>(...refs: (Ref<T> | undefined)[]): RefCallback<T> => {
	const merge = (instance: T | null) => {
		refs.forEach((ref) => {
			if (!ref) return

			if (isRefCallback(ref)) {
				ref(instance)
			} else {
				ref.current = instance
			}
		})
	}
	
	return (instance: T | null) => {
		merge(instance)

		return () => merge(null)
	}
}

export const mergeProps = <
	P extends [PropsArgs, PropsArgs]
>(...props: P) => {
	const [target, source] = props

	const mergedProps = { ...target }

	for (const key in source) {
		const a = mergedProps[key]
		const b = source[key]

		if (
			key === "ref" &&
			isRef<HTMLElement>(a) &&
			isRef<HTMLElement>(b)
		) {
			mergedProps[key] = mergeRefs(a, b)
		} else if (
			key === "className" &&
			isString(a) &&
			isString(b)
		) {
			mergedProps[key] = cn(a, b)
		} else if (
			key === "style" &&
			isObject(a) &&
			isObject(b)
		) {
			mergedProps[key] = { ...a, ...b }
		} else if (
			isFunction(a) &&
			isFunction(b)
		) {
			mergedProps[key] = mergeFunctions(a, b)
		} else if (!isUndefined(b)) {
			mergedProps[key] = b
		}
	}

	return mergedProps as UnionToIntersection<TupleTypes<P>>
}