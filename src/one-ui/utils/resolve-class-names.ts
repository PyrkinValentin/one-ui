import type { ClassValue } from "clsx"

import { clsx } from "clsx"

type ResolveClassNamesReturn<S> = S extends string
	? string
	: string | ((state: S) => string | undefined)

export const resolveClassNames = <S = string>(
	className?: ClassValue | ((state: S) => string | undefined),
	...styles: ClassValue[]
): ResolveClassNamesReturn<S> => {
	if (!className) return clsx(styles) as ResolveClassNamesReturn<S>

	if (typeof className === "function") {
		return ((state: S) => clsx(styles, className(state))) as ResolveClassNamesReturn<S>
	}

	return clsx(styles, className) as ResolveClassNamesReturn<S>
}